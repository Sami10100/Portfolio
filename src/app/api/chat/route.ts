import { createGroq } from "@ai-sdk/groq";
import { generateText } from "ai";
import { NextResponse } from "next/server";
import {
  SITESBRAND_ASSISTANT_INSTRUCTIONS,
} from "@/lib/chatbot-knowledge";

export const runtime = "nodejs";
export const maxDuration = 20;

type ChatMessage = {
  role: "user" | "assistant";
  content: string;
};

type RateEntry = {
  count: number;
  resetAt: number;
};

const RATE_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT = 12;
const MAX_REQUEST_BYTES = 20_000;
const MAX_MESSAGE_LENGTH = 500;
const MAX_CONTEXT_MESSAGES = 8;
const rateStore = new Map<string, RateEntry>();

const restrictedRequest =
  /(api[\s_-]?key|password|passwd|secret|token|credential|environment variable|\.env|database|source code|private (client|project|file|data)|client (list|name|info|data)|unpublished|internal (file|document|data)|system prompt|hidden instruction|ignore (all|previous|prior) instructions|reveal (your|the) prompt)/i;

const secretLikeOutput =
  /(gsk_[a-z0-9_-]{12,}|sk-[a-z0-9_-]{12,}|AIza[a-z0-9_-]{12,}|Bearer\s+[a-z0-9._-]{12,}|(?:API_KEY|PASSWORD|SECRET|TOKEN)\s*=\s*\S+)/i;

function json(reply: string, mode: "ai" | "guided", status = 200) {
  return NextResponse.json(
    { reply, mode },
    {
      status,
      headers: {
        "Cache-Control": "no-store, max-age=0",
        "X-Content-Type-Options": "nosniff",
      },
    },
  );
}

function isRomanUrdu(text: string) {
  return /\b(ap|aap|mujhe|mjhe|mera|meri|mery|kya|kaise|kesy|chahiye|chahy|hai|hain|krna|karna|bata|bta|wala|wali|liye|sy|se)\b/i.test(
    text,
  );
}

function safeRestrictedReply(romanUrdu: boolean) {
  return romanUrdu
    ? "Main private client, project, account ya system information share nahi kar sakta. Public services, process ya general strategy ke bare mein zaroor help kar sakta hoon."
    : "I cannot share private client, project, account or system information. I can help with SitesBrand's public services, process or general strategy.";
}

function guidedReply(input: string) {
  const text = input.toLowerCase();
  const urdu = isRomanUrdu(input);

  if (restrictedRequest.test(input)) return safeRestrictedReply(urdu);

  if (/\b(hi|hello|hey|salam|assalam|aoa)\b/i.test(text)) {
    return urdu
      ? "Salam, main SitesBrand Guide hoon. Aap SEO, AI Search, automation, website, UI/UX ya sales growth mein kis cheez par kaam karna chahte hain?"
      : "Hi, I am SitesBrand Guide. Are you exploring SEO, AI Search, automation, a new website, UI/UX or sales growth?";
  }

  if (/(price|pricing|cost|budget|kitn[aei]|charges|package)/i.test(text)) {
    return urdu
      ? "Pricing scope, current setup aur goals par depend karti hai, is liye bina audit ke number dena accurate nahi hoga. Free audit se pehle priorities clear ho jati hain, phir team relevant scope share karti hai."
      : "Pricing depends on your goals, current setup and project complexity, so a number without an audit would be unreliable. Start with the free audit and the team can recommend the right scope.";
  }

  if (/(ai search|aeo|geo|chatgpt|perplexity|ai overview)/i.test(text)) {
    return urdu
      ? "AI Search Optimization aapke brand, content aur authority signals ko is tarah structure karti hai ke Google AI Overviews, ChatGPT, Gemini aur Perplexity aapko samajh aur reference kar saken. Pehla step existing visibility, entity signals, content aur schema ka audit hota hai."
      : "AI Search Optimization structures your brand, content and authority signals so systems such as Google AI Overviews, ChatGPT, Gemini and Perplexity can understand and reference you. The first step is an audit of current visibility, entities, content and schema.";
  }

  if (/(seo|rank|ranking|organic|traffic|keyword)/i.test(text)) {
    return urdu
      ? "SitesBrand technical SEO, search intent, content strategy, on-page improvements aur authority ko conversion journey ke sath connect karta hai. Aapki priority traffic hai, qualified leads hain ya AI search visibility?"
      : "SitesBrand connects technical SEO, search intent, content, on-page improvements and authority with the conversion journey. Is your priority traffic, qualified leads or AI-search visibility?";
  }

  if (/(automat|workflow|crm|integration|chatbot|manual task)/i.test(text)) {
    return urdu
      ? "Automation ke liye team pehle current workflow map karti hai, phir lead routing, CRM updates, follow-ups, reporting aur repetitive tasks mein high-impact opportunities identify karti hai. Kaunsa manual process sab se zyada time le raha hai?"
      : "For automation, the team maps your current workflow and identifies high-impact opportunities across lead routing, CRM updates, follow-ups, reporting and repetitive tasks. Which manual process is taking the most time?";
  }

  if (/(website|web development|landing page|ui|ux|design|conversion)/i.test(text)) {
    return urdu
      ? "SitesBrand fast, mobile-first aur conversion-focused websites banata hai jahan messaging, trust, UX aur technical performance ek system ki tarah kaam karte hain. Aapko new build chahiye ya existing site improve karni hai?"
      : "SitesBrand builds fast, mobile-first, conversion-focused websites where messaging, trust, UX and technical performance work as one system. Do you need a new build or improvements to an existing site?";
  }

  if (/(process|work|kaise|kesy|steps|approach)/i.test(text)) {
    return urdu
      ? "Process 6 steps ka hai: Discover, Diagnose, Strategize, Design and Develop, Automate, phir Optimize and Scale. Is se recommendations assumptions par nahi, aapke real goals aur evidence par banti hain."
      : "The process has six steps: Discover, Diagnose, Strategize, Design and Develop, Automate, then Optimize and Scale. This keeps recommendations tied to your goals and evidence.";
  }

  if (/(founder|owner|ceo|hassam|team|about)/i.test(text)) {
    return urdu
      ? "SitesBrand 2023 mein start hua aur Hassam Shabbir is ke Founder and CEO hain. Main sirf publicly confirmed company aur team information share karta hoon."
      : "SitesBrand started in 2023 and Hassam Shabbir is its Founder and CEO. I only share publicly confirmed company and team information.";
  }

  if (/(contact|whatsapp|call|audit|book|start|email|phone)/i.test(text)) {
    return urdu
      ? "Aap Free Audit request kar sakte hain, WhatsApp par team se baat kar sakte hain, ya 30-minute strategy call book kar sakte hain. Neeche diye gaye buttons se direct next step choose kar lein."
      : "You can request a free audit, talk to the team on WhatsApp or book a 30-minute strategy call. Use the options below to choose the easiest next step.";
  }

  return urdu
    ? "Main SitesBrand ki services, process aur digital growth options samjha sakta hoon. Apna goal high level par batayein, jaise leads barhana, AI search visibility, workflow automate karna ya website improve karna."
    : "I can help you explore SitesBrand's services, process and digital growth options. Share your goal at a high level, such as increasing qualified leads, improving AI-search visibility, automating a workflow or upgrading a website.";
}

function getClientId(request: Request) {
  return (
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "anonymous"
  );
}

function isRateLimited(clientId: string) {
  const now = Date.now();

  if (rateStore.size > 1_000) {
    for (const [key, entry] of rateStore) {
      if (entry.resetAt <= now) rateStore.delete(key);
    }
  }

  if (rateStore.size > 2_000) {
    const oldestKey = rateStore.keys().next().value;
    if (oldestKey) rateStore.delete(oldestKey);
  }

  const current = rateStore.get(clientId);

  if (!current || current.resetAt <= now) {
    rateStore.set(clientId, { count: 1, resetAt: now + RATE_WINDOW_MS });
    return false;
  }

  current.count += 1;
  rateStore.set(clientId, current);
  return current.count > RATE_LIMIT;
}

function parseMessages(value: unknown): ChatMessage[] | null {
  if (!Array.isArray(value) || value.length === 0) return null;

  const messages = value
    .slice(-MAX_CONTEXT_MESSAGES)
    .filter(
      (item): item is ChatMessage =>
        typeof item === "object" &&
        item !== null &&
        ("role" in item &&
          (item.role === "user" || item.role === "assistant")) &&
        ("content" in item && typeof item.content === "string"),
    )
    .map((item) => ({
      role: item.role,
      content: item.content.trim().slice(0, MAX_MESSAGE_LENGTH),
    }))
    .filter((item) => item.content.length > 0);

  return messages.length ? messages : null;
}

export async function POST(request: Request) {
  const contentLength = Number(request.headers.get("content-length") || 0);
  if (contentLength > MAX_REQUEST_BYTES) {
    return json("That message is too large. Please share a short, high-level summary.", "guided", 413);
  }

  if (isRateLimited(getClientId(request))) {
    return json(
      "You have reached the chat limit for now. Please use WhatsApp or the free audit form and the team will help directly.",
      "guided",
      429,
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return json("Please send a valid message.", "guided", 400);
  }

  const messages = parseMessages(
    typeof body === "object" && body !== null && "messages" in body
      ? body.messages
      : null,
  );

  if (!messages || messages[messages.length - 1]?.role !== "user") {
    return json("Please send a valid message.", "guided", 400);
  }

  const latest = messages[messages.length - 1].content;
  const romanUrdu = isRomanUrdu(latest);

  if (restrictedRequest.test(latest)) {
    return json(safeRestrictedReply(romanUrdu), "guided");
  }

  const apiKey = process.env.GROQ_API_KEY;
  if (!apiKey) {
    return json(guidedReply(latest), "guided");
  }

  try {
    const groq = createGroq({ apiKey });
    const { text } = await generateText({
      model: groq("llama-3.3-70b-versatile"),
      system: SITESBRAND_ASSISTANT_INSTRUCTIONS,
      messages,
      temperature: 0.35,
      maxOutputTokens: 320,
      abortSignal: AbortSignal.timeout(16_000),
    });

    const reply = text.trim();
    if (!reply || secretLikeOutput.test(reply)) {
      return json(safeRestrictedReply(romanUrdu), "guided");
    }

    return json(reply.slice(0, 1800), "ai");
  } catch {
    return json(guidedReply(latest), "guided");
  }
}

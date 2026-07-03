import { NextRequest, NextResponse } from "next/server";
import React from "react";
import { renderToBuffer } from "@react-pdf/renderer";
import AuditPdfDocument from "@/components/AuditPdfDocument";
import type { AuditResult } from "@/types/audit";

export const maxDuration = 30;

export async function POST(req: NextRequest) {
  try {
    const data = (await req.json()) as AuditResult;

    if (!data?.url || !data?.seo) {
      return NextResponse.json({ error: "Invalid audit data" }, { status: 400 });
    }

    // Cast needed: @react-pdf/renderer types conflict with React 19 peer dep
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const buffer: Buffer = await (renderToBuffer as any)(
      React.createElement(AuditPdfDocument, { data })
    );

    const domain = (() => {
      try { return new URL(data.url).hostname.replace(/^www\./, ""); }
      catch { return "audit"; }
    })();
    const filename = `sitesbrand-audit-${domain}-${new Date().toISOString().split("T")[0]}.pdf`;

    return new NextResponse(new Uint8Array(buffer), {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename="${filename}"`,
        "Cache-Control": "no-store",
      },
    });
  } catch (err) {
    console.error("[audit/pdf] error:", err);
    return NextResponse.json({ error: "PDF generation failed" }, { status: 500 });
  }
}

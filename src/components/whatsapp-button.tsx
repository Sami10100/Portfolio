import Image from "next/image";
import { siteConfig } from "@/config/site";

export function WhatsAppButton() {
  return (
    <a
      className="site-whatsapp-button"
      href={siteConfig.whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
    >
      <Image
        src="/assets/whatsapp-logo-official.svg"
        alt=""
        aria-hidden="true"
        width="62"
        height="62"
        unoptimized
      />
    </a>
  );
}

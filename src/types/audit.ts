export interface AuditFormData {
  url: string;
  name: string;
  email: string;
  phone: string;
}

export interface AuditCheckItem {
  label: string;
  status: "Present" | "Missing" | "Not Verified" | "Pass" | "Fail" | "Warning";
  detail?: string;
}

export interface SeoReport {
  title: { value: string | null; length: number; status: "Pass" | "Fail" | "Warning" };
  metaDescription: { value: string | null; length: number; status: "Pass" | "Fail" | "Warning" };
  h1Tags: { count: number; values: string[]; status: "Pass" | "Fail" | "Warning" };
  canonical: { present: boolean; value: string | null };
  metaRobots: { present: boolean; value: string | null; isNoIndex: boolean };
  schemaTypes: string[];
  imageAltCoverage: { total: number; withAlt: number; percentage: number };
  links: { internal: number; external: number };
}

export interface SpeedReport {
  mobileScore: number | null;
  desktopScore: number | null;
  lcp: { value: number | null; unit: string; status: "Pass" | "Fail" | "Warning" | null };
  cls: { value: number | null; status: "Pass" | "Fail" | "Warning" | null };
  inp: { value: number | null; unit: string; status: "Pass" | "Fail" | "Warning" | null };
  fcp: { value: number | null; unit: string; status: "Pass" | "Fail" | "Warning" | null };
}

export interface DesignReport {
  viewportMeta: boolean;
  hasResponsiveClasses: boolean;
  notes: string[];
}

export interface AeoReport {
  checks: AuditCheckItem[];
  qaHeadingsFound: number;
  schemaTypes: string[];
  napPresent: boolean;
}

export interface AuditResult {
  url: string;
  name: string;
  email: string;
  phone: string;
  timestamp: string;
  seo: SeoReport;
  speed: SpeedReport;
  design: DesignReport;
  aeo: AeoReport;
  pdfUrl?: string;
  error?: string;
}

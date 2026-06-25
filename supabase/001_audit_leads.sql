-- Run this in your Supabase SQL Editor (supabase.com/dashboard → SQL Editor)
-- Creates the table that stores every audit lead

CREATE TABLE IF NOT EXISTS audit_leads (
  id            uuid        DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at    timestamptz DEFAULT now() NOT NULL,
  url           text        NOT NULL,
  name          text,
  email         text        NOT NULL,
  phone         text,

  -- Quick-access columns for filtering in the dashboard
  mobile_score  int,
  desktop_score int,
  seo_title_status text,
  has_schema    boolean DEFAULT false,
  aeo_faq       boolean DEFAULT false,
  is_noindex    boolean DEFAULT false,

  -- Full raw result for deep analysis
  raw_result    jsonb       NOT NULL
);

-- Index for looking up leads by email or URL
CREATE INDEX IF NOT EXISTS audit_leads_email_idx ON audit_leads (email);
CREATE INDEX IF NOT EXISTS audit_leads_url_idx   ON audit_leads (url);
CREATE INDEX IF NOT EXISTS audit_leads_created_idx ON audit_leads (created_at DESC);

-- Row-level security: service role can insert, anon cannot read
ALTER TABLE audit_leads ENABLE ROW LEVEL SECURITY;

-- Only server-side (service_role key) can insert or read
CREATE POLICY "service_role_all" ON audit_leads
  USING (auth.role() = 'service_role')
  WITH CHECK (auth.role() = 'service_role');

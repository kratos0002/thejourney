-- Audio Verification Status Table
-- Run this in Supabase SQL Editor

CREATE TABLE audio_verifications (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  word_slug TEXT NOT NULL,
  sound_index INTEGER NOT NULL,
  sound_label TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'verified', 'incorrect', 'needs_review')),
  audio_url TEXT,
  notes TEXT,
  verified_by TEXT,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now(),
  UNIQUE(word_slug, sound_index)
);

-- Index for quick lookups
CREATE INDEX idx_audio_verifications_slug ON audio_verifications(word_slug);
CREATE INDEX idx_audio_verifications_status ON audio_verifications(status);

-- Enable RLS
ALTER TABLE audio_verifications ENABLE ROW LEVEL SECURITY;

-- Admin can do everything (via service role)
-- Public can read verification status
CREATE POLICY "Public can read audio verifications"
  ON audio_verifications FOR SELECT USING (true);

-- Add updated_at trigger
CREATE OR REPLACE FUNCTION update_audio_verifications_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER audio_verifications_updated_at
  BEFORE UPDATE ON audio_verifications
  FOR EACH ROW
  EXECUTE FUNCTION update_audio_verifications_updated_at();

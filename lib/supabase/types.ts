export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[];

export interface Database {
  public: {
    Tables: {
      explored_words: {
        Row: {
          id: string;
          user_id: string;
          slug: string;
          explored_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          slug: string;
          explored_at?: string;
        };
        Update: {
          id?: string;
          user_id?: string;
          slug?: string;
          explored_at?: string;
        };
        Relationships: [];
      };
      words: {
        Row: {
          id: string;
          slug: string;
          word: string;
          romanization: string;
          language: string;
          hook: string;
          story: Json;
          journey: Json;
          sounds: Json;
          relatives: Json;
          meaning_now: string;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          slug: string;
          word: string;
          romanization: string;
          language: string;
          hook: string;
          story?: Json;
          journey?: Json;
          sounds?: Json;
          relatives?: Json;
          meaning_now: string;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          slug?: string;
          word?: string;
          romanization?: string;
          language?: string;
          hook?: string;
          story?: Json;
          journey?: Json;
          sounds?: Json;
          relatives?: Json;
          meaning_now?: string;
          created_at?: string;
          updated_at?: string;
        };
        Relationships: [];
      };
    };
    Views: Record<string, never>;
    Functions: Record<string, never>;
    Enums: Record<string, never>;
    CompositeTypes: Record<string, never>;
  };
}

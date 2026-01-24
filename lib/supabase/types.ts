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
      feedback_submissions: {
        Row: {
          id: string;
          user_id: string;
          feedback_type: "word_suggestion" | "word_improvement" | "general";
          feedback_text: string;
          word_slug: string | null;
          user_context: Json;
          status: "new" | "reviewing" | "planned" | "completed" | "closed";
          admin_response: string | null;
          internal_notes: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          feedback_type: "word_suggestion" | "word_improvement" | "general";
          feedback_text: string;
          word_slug?: string | null;
          user_context?: Json;
          status?: string;
          admin_response?: string | null;
          internal_notes?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          user_id?: string;
          feedback_type?: string;
          feedback_text?: string;
          word_slug?: string | null;
          user_context?: Json;
          status?: string;
          admin_response?: string | null;
          internal_notes?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Relationships: [];
      };
      notifications: {
        Row: {
          id: string;
          title: string;
          message: string;
          notification_type: "feature" | "update" | "tip" | "bug_fix" | "feedback_response";
          target_user_id: string | null;
          feedback_id: string | null;
          is_active: boolean;
          created_at: string;
          expires_at: string | null;
        };
        Insert: {
          id?: string;
          title: string;
          message: string;
          notification_type: "feature" | "update" | "tip" | "bug_fix" | "feedback_response";
          target_user_id?: string | null;
          feedback_id?: string | null;
          is_active?: boolean;
          created_at?: string;
          expires_at?: string | null;
        };
        Update: {
          id?: string;
          title?: string;
          message?: string;
          notification_type?: string;
          target_user_id?: string | null;
          feedback_id?: string | null;
          is_active?: boolean;
          created_at?: string;
          expires_at?: string | null;
        };
        Relationships: [];
      };
      user_notification_dismissals: {
        Row: {
          id: string;
          user_id: string;
          notification_id: string;
          dismissed_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          notification_id: string;
          dismissed_at?: string;
        };
        Update: {
          id?: string;
          user_id?: string;
          notification_id?: string;
          dismissed_at?: string;
        };
        Relationships: [];
      };
      feature_flags: {
        Row: {
          id: string;
          flag_key: string;
          is_enabled: boolean;
          description: string | null;
          updated_at: string;
        };
        Insert: {
          id?: string;
          flag_key: string;
          is_enabled?: boolean;
          description?: string | null;
          updated_at?: string;
        };
        Update: {
          id?: string;
          flag_key?: string;
          is_enabled?: boolean;
          description?: string | null;
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

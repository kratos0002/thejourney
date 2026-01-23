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
    };
    Views: Record<string, never>;
    Functions: Record<string, never>;
    Enums: Record<string, never>;
    CompositeTypes: Record<string, never>;
  };
}

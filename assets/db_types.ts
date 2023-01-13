export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      yourname: { // Replace this with your first name
        Row: {
          id: number
          name: string
          organization: string
          specifications: Json
        }
        Insert: {
          id?: number
          name: string
          organization?: string
          specifications?: Json
        }
        Update: {
          id?: number
          name?: string
          organization?: string
          specifications?: Json
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
}

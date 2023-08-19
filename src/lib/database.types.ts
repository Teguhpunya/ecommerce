export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      accounts: {
        Row: {
          avatar_url: string
          id: string
          name: string
          username: string
        }
        Insert: {
          avatar_url: string
          id: string
          name?: string
          username: string
        }
        Update: {
          avatar_url?: string
          id?: string
          name?: string
          username?: string
        }
        Relationships: [
          {
            foreignKeyName: "accounts_id_fkey"
            columns: ["id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      cart_items: {
        Row: {
          cart_id: string
          created_at: string
          id: string
          product_id: number
          quantity: number
          updated_at: string
        }
        Insert: {
          cart_id: string
          created_at?: string
          id?: string
          product_id: number
          quantity?: number
          updated_at?: string
        }
        Update: {
          cart_id?: string
          created_at?: string
          id?: string
          product_id?: number
          quantity?: number
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "cart_items_cart_id_fkey"
            columns: ["cart_id"]
            referencedRelation: "carts"
            referencedColumns: ["id"]
          }
        ]
      }
      carts: {
        Row: {
          id: string
          user_id: string
        }
        Insert: {
          id?: string
          user_id: string
        }
        Update: {
          id?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "carts_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "accounts"
            referencedColumns: ["id"]
          }
        ]
      }
      transactions: {
        Row: {
          created_at: string
          id: string
          total_amount: number
          transaction_date: string
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          total_amount?: number
          transaction_date?: string
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          total_amount?: number
          transaction_date?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "transactions_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "accounts"
            referencedColumns: ["id"]
          }
        ]
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
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

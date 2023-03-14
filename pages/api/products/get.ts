// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { createClient } from '@supabase/supabase-js'
import type { NextApiRequest, NextApiResponse } from 'next'
import type { Database } from '../../../assets/db_types'

type product = Database['public']['Tables']['yourname']['Row']

type Data = {
  message: string
  products: product[]
}

export default async function getProducts(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  // Check that only GET requests are allowed
  if (req.method !== 'GET') {
    res.status(405).json({ message: "Method not allowed", products: [] })
    return
  }

  // Creating a supabase client using the environment variables
  const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!)
  
  // Getting the table name from the environment variables. This is simply your first name
  const table = process.env.FIRST_NAME!

  // Get relevant data from the database
  const { data, error } = await supabase.from(table).select('*')

  res.status(200).json({ message: "OK", products: data as product[] })
}

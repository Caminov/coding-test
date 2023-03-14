// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { createClient } from '@supabase/supabase-js'
import type { NextApiRequest, NextApiResponse } from 'next'
import type { Database } from '../../../assets/db_types'

type product = Database['public']['Tables']['yourname']['Row']

type Data = {
  message: string
}

export default async function getProducts(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  // Check that only POST requests are allowed
  if (req.method !== 'POST') {
    res.status(405).json({ message: "Method not allowed" })
    return
  }

  // Create a dummy product
  const dummyProduct: product = {
    id: 42,
    name: "Product 1",
    organization: "Organization 1",
    specifications: {
      "key1": "value1",
      "key2": "value2"
    }
  }


  // Creating a supabase client using the environment variables
  const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!)
  
  // Getting the table name from the environment variables. This is simply your first name
  const table = process.env.FIRST_NAME!
  
  // Insert the dummy product into the database
  const { data, error } = await supabase.from(table).insert([dummyProduct])

  res.status(201).json({ message: "OK" })
}

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import Stripe from 'stripe';


interface Data {
  test: string;
}

// const stripe = Stripe(process.env.STRIPE_ACCESS_KEY);

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ test: 'John Doe' })
}

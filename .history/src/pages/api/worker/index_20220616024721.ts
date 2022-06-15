import type { NextApiRequest, NextApiResponse } from 'next'
import webAppAxios from '../../../httpClient/index'
import { WORKER_ID } from '../../../constants/constant'

export async function fetchAllProduct() {
  const url = `products/`
  const allProducts = await webAppAxios.get(url)
  return allProducts.data
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET'])
    res.status(405).json({ message: `Method ${req.method} is not allowed` })
  } else {
    const products = fetchAllProduct()
    res.status(200).json(products)
  }
}

export async function getWorkerProfile() {
  const allProducts = await webAppAxios.get(productUrl)
  return allProducts.data
}

export async function getAllFilterProductWithToken(
  productUrl: string,
  token: Object
) {
  const allProducts = await webAppAxios.get(productUrl, token)
  return allProducts.data
}

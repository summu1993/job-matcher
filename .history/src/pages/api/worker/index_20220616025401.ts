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
  const profile = await webAppAxios.get(`/worker/${WORKER_ID}/profile`)
  return profile.data
}

export async function getWorkerMatchingJobs() {
  const matchingJobs = await webAppAxios.get(`/worker/${WORKER_ID}/matches`)
  return matchingJobs.data
}

export async function workerJobAccepted(jobId: string) {
  const response = await webAppAxios.get(
    `/worker/${WORKER_ID}/job/${jobId}/accept`
  )
  return response.data
}

export async function workerJobRejected(jobId: string) {
  const response = await webAppAxios.get(
    `/worker/${WORKER_ID}/job/${jobId}/reject`
  )
  return response.data
}

export async function getWorkerProfile() {
  const profile = await webAppAxios.get(`/worker/${WORKER_ID}/profile`)
  return profile.data
}

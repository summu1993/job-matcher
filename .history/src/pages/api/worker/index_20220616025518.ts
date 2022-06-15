import type { NextApiRequest, NextApiResponse } from 'next'
import webAppAxios from '../../../httpClient/index'
import { WORKER_ID } from '../../../constants/constant'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.setHeader('Allow', ['GET'])
  res.status(405).json({ message: `Method ${req.method} is not allowed` })
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

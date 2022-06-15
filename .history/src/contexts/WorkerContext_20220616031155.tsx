import React, { createContext, useReducer, useState, FC } from 'react'
import { JobDetail, WorkerProfile } from '../utils/interfaces'
import {
  getWorkerProfile,
  getWorkerMatchingJobs,
} from '../pages/api/worker/index'

const WorkerContext = createContext({})
type ComponentProps = React.PropsWithChildren<{}>

const WorkerProvider: FC<ComponentProps> = ({ children }) => {
  const [jobDetail, setJobDetail] = useState<JobDetail[]>([])
  const [workerProfile, setWorkerProfile] = useState<WorkerProfile>()

  const getWorker = async () => {
    const data = await getWorkerProfile()
  }
}

export { WorkerProvider, WorkerContext }

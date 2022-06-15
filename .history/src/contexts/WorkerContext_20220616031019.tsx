import React, { createContext, useReducer, useState, FC } from 'react'
import { JobDetail, WorkerProfile } from '../utils/interfaces'
import { getAllFilterProduct } from '../pages/';

const WorkerContext = createContext({})
type ComponentProps = React.PropsWithChildren<{}>

const WorkerProvider: FC<ComponentProps> = ({ children }) => {
  const [jobDetail, setJobDetail] = useState<JobDetail[]>([])
  const [workerProfile, setWorkerProfile] = useState<WorkerProfile>()

  const getWorkerProfile = async () => {



  }

}

export { WorkerProvider, WorkerContext }

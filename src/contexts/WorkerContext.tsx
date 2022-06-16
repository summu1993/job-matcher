import React, { createContext, useReducer, useState, FC } from 'react'
import { JobDetail, WorkerProfile } from '../utils/interfaces'
import toast from "../components/Toast/toast";
import {
  getWorkerProfile,
  getWorkerMatchingJobs,
} from '../pages/api/worker/index'

const WorkerContext = createContext({})
type ComponentProps = React.PropsWithChildren<{}>

const WorkerProvider: FC<ComponentProps> = ({ children }) => {
  
  const [showJobDetails, setShowJobDetails] = useState<boolean>(false)
  const [jobDetail, setJobDetail] = useState<JobDetail[]>([])
  const [workerProfile, setWorkerProfile] = useState<WorkerProfile>()


  const notifyToast = React.useCallback((type: any, message: any) => {
    toast({ type, message });
  }, []);

  const dismissToast = React.useCallback(() => {
    toast.dismiss();
  }, []);

  const getWorker = async () => {
    try {
      const data = await getWorkerProfile()
      setWorkerProfile(data)
    } catch (err) {
      console.error(err)
    }
  }

  const getMatchingJobs = async () => {
    try {
      const data = await getWorkerMatchingJobs()
      setJobDetail(data)
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <WorkerContext.Provider
      value={{
        jobDetail,
        workerProfile,
        showJobDetails,
        notifyToast,
        dismissToast,
        setShowJobDetails,
        setJobDetail,
        setWorkerProfile,
        getWorker,
        getMatchingJobs,
      }}
    >
      {children}
    </WorkerContext.Provider>
  )
}

export { WorkerProvider, WorkerContext }

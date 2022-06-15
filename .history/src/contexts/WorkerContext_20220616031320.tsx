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
    try {
      const data = await getWorkerProfile()
      setWorkerProfile(data)
    } catch (err) {
      console.error(err)
    }
  }
  return (
    <WorkerContext.Provider
      value={{
        wishlists,
        state,
        dispatch,
        setWishlists,
        wishlistsCount,
        setWishlistsCount,
        refreshWishlists,
        fetchWishlist,
        deleteWishlist,
        addWishlist,
      }}
    >
      {children}
    </WorkerContext.Provider>
  )
}

export { WorkerProvider, WorkerContext }

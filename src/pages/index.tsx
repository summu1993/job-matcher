import React, { useContext, useEffect, FC } from 'react'
import type { NextPage } from 'next'
import JobListingWrapper from '../components/jobListingCard/JobListingWrapper'
import WorkerProfileCard from '../components/WorkerProfileCard'
import { WorkerContext } from '../contexts/WorkerContext'
import { AuthContextType } from '../utils/interfaces'

const SwipeJobs: NextPage = () => {
  const { getWorker, getMatchingJobs, jobDetail, showJobDetails } = useContext(
    WorkerContext
  ) as AuthContextType

  useEffect(() => {
    getWorker()
    getMatchingJobs()
  },[])

  return (
    <div className="mx-auto  max-w-7xl py-8 lg:py-24">
      <div className="w-100 mb-16 px-4 md:mb-0 md:w-1/2">
        <WorkerProfileCard />
      </div>
      {showJobDetails && <JobListingWrapper jobDetail={jobDetail} /> }  
    </div>
  )
}

export default SwipeJobs

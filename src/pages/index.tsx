import React, { useState, useContext, useEffect, FC } from 'react'
import type { NextPage } from 'next'
import CardSkeleton from '../components/Skeleton'
import JobListingCard from '../components/jobListingCard/JobListingWrapper'
import WorkerProfileCard from '../components/WorkerProfileCard'
import { WorkerContext } from '../contexts/WorkerContext'
import { AuthContextType } from '../utils/interfaces'

type ComponentProps = React.PropsWithChildren<{}>

const SwipeJobs: NextPage = () => {
  const { getWorker, getMatchingJobs, jobDetail, workerProfile } = useContext(
    WorkerContext
  ) as AuthContextType

  useEffect(() => {
    getWorker()
    getMatchingJobs()
  }, [])

  useEffect(() => {
    console.log('workerProfile: ')
    console.log(workerProfile)

    console.log('jobDetail: ')
    console.log(jobDetail)
  }, [jobDetail, workerProfile])

  return (
    <div className="mx-auto  max-w-7xl py-8 lg:py-24">
      <div className="w-100 mb-16 px-4 md:mb-0 md:w-1/2">
        <WorkerProfileCard />
      </div>
      <div
        className="container mx-auto flex items-center flex-wrap pt-16 pb-12 productListWrapper"
        data-test-py="productListing"
      >
        <JobListingCard jobDetail={jobDetail} />
      </div>
    </div>
  )
}

export default SwipeJobs

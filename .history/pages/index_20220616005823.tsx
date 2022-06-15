import type { NextPage } from 'next'
import { useEffect } from 'react'

const SwipeJobs: NextPage = () => {
  return (
    <div className=" mx-auto  max-w-7xl py-8 lg:py-24">
    <div className="w-100 md:flex md:flex-row ">
      <div className="w-100 mb-16 px-4 md:mb-0 md:w-1/2">
        <ProfileContainer profile={workerProfile} />
      </div>
      <div className="w-100  px-4 md:w-1/2">
        <PageSectionHeading heading="All available Jobs" />
        <JobCardCollection jobsData={jobsData} />
      </div>
    </div>
  </div>
  )
}

export default SwipeJobs

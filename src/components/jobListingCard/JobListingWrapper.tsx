import React from 'react'
import type { JobDetail } from '../../utils/interfaces'
import JobListingCard from './JobListingCard'

const JobListingWrapper = ({ jobDetail }: { jobDetail: JobDetail[] }) => (
  <div className="container mx-auto flex items-center flex-wrap pt-16 pb-12">
    {Array.isArray(jobDetail) && (
        jobDetail.map((job: JobDetail) => (
          <JobListingCard key={job.jobId} jobDetails={job} />
        ))
    )}
  </div>
)

export default JobListingWrapper

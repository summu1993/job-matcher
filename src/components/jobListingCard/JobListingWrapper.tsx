import React, { useContext, useState, useEffect } from 'react'
import Button from '../actionableButtons/Button'
import type { JobDetail } from '../../utils/interfaces'
import JobListingCard from './JobListingCard'

const JobListingWrapper = ({ jobDetail }: { jobDetail: JobDetail[] }) => {
  if (Array.isArray(jobDetail)) {
    return (
      <div>
        {jobDetail.map((job: JobDetail) => (
          <JobListingCard key={job.jobId} jobDetails={job} />
        ))}
      </div>
    )
  }
}

export default JobListingWrapper

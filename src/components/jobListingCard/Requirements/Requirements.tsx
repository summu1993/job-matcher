import React from 'react'
import type { JobDetail } from '../../../utils/interfaces'

const Requirements = ({ jobDetails }: { jobDetails: JobDetail }) => {
  return (
    <div className="px-5">
      <div className="flex flex-row border-b border-solid border-gray-200 py-5">
        <i className="fas fa-tools" />

        <div className="w-5/6 pl-3">
          <div className="text-sm font-extrabold">Requirements</div>
          {Array.isArray(jobDetails.requirements) && (
            <div className="text-md w-100 font-light">
              {jobDetails.requirements.map((requirement: string, index) => (
                <div key={index}>- {requirement}</div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Requirements

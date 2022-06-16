import React from 'react'
import type { JobDetail } from '../../../utils/interfaces'

const Location = ({ jobDetails }: { jobDetails: JobDetail }) => {
  return (
    <div className="px-5">
      <div className="flex flex-row border-b border-solid border-gray-200 py-5">
        <i className="fas fa-map-marker-alt" />

        <div className="w-5/6 pl-3">
          <div className="text-sm font-extrabold">Shift Dates</div>

          <div className="text-md w-100 relative flex flex-row font-light">
            {jobDetails.company?.address?.formattedAddress}
            <i className="fa fa-angle-right" aria-hidden="true"></i>
          </div>

          <div className="text-xs">
            {jobDetails.milesToTravel} miles from your job search location
          </div>
        </div>
      </div>
    </div>
  )
}

export default Location

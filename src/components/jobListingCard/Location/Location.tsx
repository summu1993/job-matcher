import React from 'react'
import type { JobDetail } from '../../../utils/interfaces'

const Location = ({ address,miles }) => {
  return (
    <div className="locationWrapper px-5">
      <div className="flex flex-row border-b border-solid border-gray-200 py-5">
        <i className="fas fa-map-marker-alt" />

        <div className="w-5/6 pl-3">
          <div className="text-sm font-extrabold">Location</div>

          <div className="address text-md w-100 relative flex flex-row font-light">
            {address}
            <i className="fa fa-angle-right" aria-hidden="true"></i>
          </div>

          <div className="miles text-xs">
            {miles} miles from your job search location
          </div>
        </div>
      </div>
    </div>
  )
}

export default Location

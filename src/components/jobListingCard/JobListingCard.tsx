import React, { useContext, useState, useEffect } from 'react'
import Image from 'next/image'
import Button from '../actionableButtons/Button'
import ShiftDates from './ShiftDates/ShiftDates'
import Location from './Location/Location'
import ReportTo from './ReportTo/ReportTo'
import Requirements from './Requirements/Requirements'
import type { JobDetail } from '../../utils/interfaces'

const JobListingCard = ({ jobDetails }: { jobDetails: JobDetail }) => {
  return (
    <div
      key={jobDetails?.jobId}
      // className="w-full md:w-1/3 xl:w-1/3 p-6 flex flex-col product-information"
    >
      <img
        data-test-py="categoryProducts"
        className="hover:grow hover:shadow-lg"
        src={jobDetails?.jobTitle?.imageUrl}
        alt="Job Image"
      />

      <div className="p-5 text-gray-700">
        <h3 className="text-2xl font-bold ">{jobDetails?.jobTitle?.name}</h3>
        <span className="text-lg font-semibold">
          {jobDetails?.company?.name}
        </span>
      </div>

      <div className="flex justify-between bg-teal-400 px-5 py-3">
        <div>
          <div className="text-md font-extrabold text-gray-700">Distance</div>
          <div className="text-3xl font-bold text-white">
            {jobDetails.milesToTravel} miles
          </div>
        </div>
        <div>
          <div className="text-md text-right font-extrabold text-gray-700">
            Hourly Rate
          </div>
          <div className="text-right text-3xl font-bold text-white">
            <sup className="text-xl">$</sup>{' '}
            {jobDetails.wagePerHourInCents / 100}
          </div>
        </div>
      </div>

      <ShiftDates jobShifts={jobDetails?.shifts} />
      <Location jobDetails={jobDetails} />
      <Requirements jobDetails={jobDetails} />
      <ReportTo jobDetails={jobDetails} />
    </div>
  )
}

export default JobListingCard

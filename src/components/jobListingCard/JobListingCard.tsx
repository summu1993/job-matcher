import React , {useContext} from 'react'
import ShiftDates from './ShiftDates/ShiftDates'
import Location from './Location/Location'
import ReportTo from './ReportTo/ReportTo'
import Requirements from './Requirements/Requirements'
import Button from '../actionableButtons/Button'
import type { JobDetail } from '../../utils/interfaces'
import { WorkerContext } from '../../contexts/WorkerContext'
import { AuthContextType } from '../../utils/interfaces'
import {
  workerJobAccepted,
  workerJobRejected,
} from '../../pages/api/worker'


const JobListingCard = ({ jobDetails }: { jobDetails: JobDetail }) => {

  const { notifyToast} = useContext(
    WorkerContext
  ) as AuthContextType


  const handleJobReject = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, jobId: string) => {
    const data = await workerJobRejected(jobId)
    if (data && data.success){ 
      notifyToast("error", "You have rejected this Job")
    }
  }

  const handleJobAccept = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, jobId: string) => {
    const data = await workerJobAccepted(jobId)
    if (data && data.success){
      notifyToast("success", "You have acceped this Job")
    }
  }

  return (
    <div
      key={jobDetails?.jobId}
      className="w-full md:w-1/3 xl:w-1/3 p-6 flex flex-col"
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

      <div className="flex justify-between p-5">
        <Button
          submitFunction={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => handleJobReject(e, jobDetails.jobId)}
          buttonText="No Thanks"
          buttonClass="w-2/5 rounded-md text-lg duration-200 ease-in hover:shadow-xl border border-solid border-black bg-white py-4 text-black"
        />
        <Button
          submitFunction={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => handleJobAccept(e, jobDetails.jobId)}
          buttonText="Ill Take it"
          buttonClass="w-2/5 rounded-md text-lg duration-200 ease-in hover:shadow-xl bg-black py-4 text-white"
        />
      </div>

    </div>
  )
}

export default JobListingCard

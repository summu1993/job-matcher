import React from 'react'

const ReportTo = ({ reportToName,reportToPhone }) => {
  return (
    <div className="px-5">
      <div className="flex flex-row border-b border-solid border-gray-200 py-5">
        <i className="fas fa-user" />

        <div className="w-5/6 pl-3">
          <div className="text-sm font-extrabold">Report To</div>

          <div className="text-md w-100 font-light">
            {reportToName}{' '}
            {reportToPhone}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ReportTo

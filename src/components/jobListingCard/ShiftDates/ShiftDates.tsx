import React from 'react'
import Moment from 'moment'

const ShiftDates = ({ shifts }) => {
  return (
    <div className="px-5">
      <div className="flex flex-row border-b border-solid border-gray-200 py-5">
        <i className="fas fa-calendar-alt" />
        <div className="w-5/6 pl-3">
          <div className="text-sm font-extrabold">Shift Dates</div>

          <div className="text-md max-h-12  overflow-auto font-light uppercase">
            {Array.isArray(shifts) &&
              shifts.map(({ startDate, endDate }, index) => (
                <div key={`${startDate}-${index}`}>
                  {Moment(startDate).format('MMM Do YYYY HH:mm:ss')} -{' '}
                  {Moment(endDate).format('HH:mm:ss z')}
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ShiftDates

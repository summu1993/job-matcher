import React from 'react'

const Requirements = ({ requirements }) => {
  return (
    <div className="px-5">
      <div className="flex flex-row border-b border-solid border-gray-200 py-5">
        <i className="fas fa-tools" />

        <div className="w-5/6 pl-3">
          <div className="text-sm font-extrabold">Requirements</div>
          <div className="text-md h-12 overflow-auto font-light uppercase">
          {Array.isArray(requirements) && (
            <div className="text-md w-100 font-light">
              {requirements.map((requirement: string, index) => (
                <div key={index}>- {requirement}</div>
              ))}
            </div>
          )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Requirements

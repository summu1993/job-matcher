import React from 'react'
import Skeleton from 'react-loading-skeleton'

const CardSkeleton = () => (
  <>
    {Array(9)
      .fill('')
      .map((_, index) => (
        <div className="w-full md:w-1/3 xl:w-1/4 p-6 flex flex-col" key={index}>
          <Skeleton height={256} />
          <div className="pt-3 flex items-center justify-between">
            <Skeleton height={36} />
          </div>
          <p className="pt-1 text-gray-900">
            <Skeleton height={28} />
          </p>
          <div className="py-4 space-x-2">
            <Skeleton height={60} />
          </div>
          <div>
            <Skeleton height={50} />
          </div>
        </div>
      ))}
  </>
)

export default CardSkeleton

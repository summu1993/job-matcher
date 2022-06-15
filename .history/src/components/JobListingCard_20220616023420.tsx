import React, { useContext, useState, useEffect } from 'react'
import Image from 'next/image'
import Button from './actionableButtons/Button'

const JobListingCard = ({}: {}) => {
  return (
    <>
      <div className="w-full md:w-1/3 xl:w-1/3 p-6 flex flex-col product-information">
        <Image
          data-test-py="categoryProducts"
          className="hover:grow hover:shadow-lg"
          src={'https://imgs.swipejobs.com/js/job-category/construction-1.jpg'}
          height={300}
          width={300}
          alt="Product images"
        />

        <div className="p-5 text-gray-700">
          <h3 className="text-2xl font-bold ">Construction General Helper</h3>
          <span className="text-lg font-semibold">
            Steve Smith Construction
          </span>
        </div>

        <div className="flex justify-between bg-teal-400 px-5 py-3">
          <div>
            <div className="text-md font-extrabold text-gray-700">Distance</div>
            <div className="text-3xl font-bold text-white">5.6 miles</div>
          </div>
          <div>
            <div className="text-md text-right font-extrabold text-gray-700">
              Hourly Rate
            </div>
            <div className="text-right text-3xl font-bold text-white">
              <sup className="text-xl">$</sup> 13.50
            </div>
          </div>
        </div>

        <p className="pt-1 text-gray-900">$100</p>
        <div className="py-4 space-x-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-800">
            Nike
          </span>
        </div>
        <label className="custom-control">
          <input
            name={`compare-`}
            type="checkbox"
            value={11}
            className="custom-control-input"
          />
          <div className="custom-control-label"> Add to Compare </div>
        </label>

        <Button
          buttonClass="bg-white-500 w-full hover:bg-gray-800 hover:text-white py-3 text-black font-bold py-2 px-4 border border-black-900 rounded"
          buttonText="Add to Cart"
          datatest="addToCart"
        />
      </div>
    </>
  )
}

export default JobListingCard

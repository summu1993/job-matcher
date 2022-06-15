import type { NextPage } from 'next'
import CardSkeleton from '../components/Skeleton'
import JobListingCard from '../components/JobListingCard'

const SwipeJobs: NextPage = () => {
  return (
    <div className="mx-auto  max-w-7xl py-8 lg:py-24">
      <div className="w-100 mb-16 px-4 md:mb-0 md:w-1/2">
        <div className="">
          <div className="max-w-sm h-auto mx-auto my-20 rounded-md overflow-hidden shadow-lg">
            <div className="px-6 py-4">
              <div className="flex flex-col">
                <div className="font-bold text-xl text-center text-gray-800 hover:text-pink-500 hover:cursor-pointer">
                  Jim Rose
                </div>
                <p className="text-gray-600 text-sm text-center">
                  Product Designer
                </p>
              </div>
              <div className="flex flex-row justify-center font-semibold mx-auto my-4">
                <div className="my-auto text-white bg-pink-500 hover:bg-pink-600 hover:cursor-pointer rounded-3xl py-2 px-4 mx-2">
                  See Matching Jobs
                </div>
              </div>
            </div>

            <div className="flex flex-row justify-center"></div>

            <div>
              <h4 className="text-sm text-center my-2 font-semibold text-gray-700">
                Address
              </h4>
              <p className="text-xs mx-6 text-center">
                1 Downing St, Chicago, IL 60654, USA
              </p>
            </div>
            <div className="bg-pink-500 text-white mt-5 px-6 pt-4 pb-2 flex flex-row justify-center">
              <div className="flex flex-row mx-1 hover:cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="mx-2 bi bi-linkedin"
                  width="32"
                  height="32"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                </svg>
                <h5 className="my-auto text-sm">jim.rose@gmail.com</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="container mx-auto flex items-center flex-wrap pt-16 pb-12 productListWrapper"
        data-test-py="productListing"
      >
        <JobCardCollection />
      </div>
    </div>
  )
}

export default SwipeJobs

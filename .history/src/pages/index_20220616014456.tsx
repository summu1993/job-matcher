import type { NextPage } from 'next'
import { useEffect } from 'react'

const SwipeJobs: NextPage = () => {
  return (
    <div className="mx-auto  max-w-7xl py-8 lg:py-24">
      <div className="w-100 md:flex md:flex-row ">
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

              <div className="flex flex-row justify-center">
                <div className="object-cover hover:cursor-pointer rounded-full h-12 w-12 m-3 p-0.5 border-2 border-pink-600">
                  Worker Id
                </div>
                <span>7f90df6e-b832-44e2-b624-3143d428001f</span>

                <div className="object-cover hover:cursor-pointer rounded-full h-12 w-12 m-3 p-0.5 border-2 border-pink-600">
                  Email
                </div>
                <span>jim.rose@gmail.com</span>
              </div>

              <div>
                <h4 className="text-sm text-center my-2 font-semibold text-gray-700">
                  Address
                </h4>
                <p className="text-xs mx-6 text-justify">
                  1 Downing St, Chicago, IL 60654, USA
                </p>
              </div>
              <div className="bg-pink-500 text-white mt-5 px-6 pt-4 pb-2 flex flex-row justify-center">
                <div className="flex flex-row mx-1 hover:cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="mx-2 bi bi-facebook"
                    width="32"
                    height="32"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                  </svg>
                  <h5 className="my-auto text-sm">Facebook</h5>
                </div>
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
                  <h5 className="my-auto text-sm">LinkedIn</h5>
                </div>
                <div className="flex flex-row mx-1 hover:cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="mx-2 bi bi-email"
                    width="32"
                    height="32"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M 75.546 78.738 H 14.455 C 6.484 78.738 0 72.254 0 64.283 V 25.716 c 0 -7.97 6.485 -14.455 14.455 -14.455 h 61.091 c 7.97 0 14.454 6.485 14.454 14.455 v 38.567 C 90 72.254 83.516 78.738 75.546 78.738 z M 14.455 15.488 c -5.64 0 -10.228 4.588 -10.228 10.228 v 38.567 c 0 5.64 4.588 10.229 10.228 10.229 h 61.091 c 5.64 0 10.228 -4.589 10.228 -10.229 V 25.716 c 0 -5.64 -4.588 -10.228 -10.228 -10.228 H 14.455 z"
                    
                      transform=" matrix(1 0 0 1 0 0) "
                      stroke-linecap="round"
                    />
                  </svg>
                  <h5 className="my-auto text-sm">Facebook</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SwipeJobs

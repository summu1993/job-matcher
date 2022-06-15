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
                    Helena Wang
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
                <div></div>
                <img
                  className="object-cover hover:cursor-pointer rounded-full h-12 w-12 m-3 p-0.5 border-2 border-pink-600"
                  src="https://images.pexels.com/photos/2709388/pexels-photo-2709388.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  alt="Human Picture by Ike louie Natividad"
                />
                <img
                  className="object-cover hover:cursor-pointer rounded-full h-12 w-12 m-3 p-0.5 border-2 border-pink-600"
                  src="https://images.pexels.com/photos/2709386/pexels-photo-2709386.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  alt="Human Picture by Ike louie Natividad"
                />
                <img
                  className="object-cover hover:cursor-pointer rounded-full h-12 w-12 m-3 p-0.5 border-2 border-pink-600"
                  src="https://images.pexels.com/photos/2709385/pexels-photo-2709385.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  alt="Human Picture by Ike louie Natividad"
                />
                <img
                  className="object-cover hover:cursor-pointer rounded-full h-12 w-12 m-3 p-0.5 border-2 border-pink-600"
                  src="https://images.pexels.com/photos/3310692/pexels-photo-3310692.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  alt="Human Picture by Ike louie Natividad"
                />
              </div>

              <div>
                <h4 className="text-sm text-center my-2 font-semibold text-gray-700">
                  About me
                </h4>
                <p className="text-xs mx-6 text-justify">
                  I specialize in designing and developing user interfaces and
                  digital products. I don’t restrict myself to design.
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
                    className="mx-2 bi bi-twitter"
                    width="32"
                    height="32"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
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

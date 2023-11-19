export default function ReviewsTab() {
  return (
    <div className="bg-white">
      <div className="max-w-screen-xl mx-auto p-4 md:p-7">
        <div className="flex">
          <div className="flex flex-col justify-center items-center rounded-md w-[190px] h-[130px] bg-[#1F2937] text-white">
            <span className="text-5xl font-semibold tracking-[2px]">4.2</span>
            <span className="text-xs mt-2">Based on 4 reviews</span>
          </div>
          <div className="pl-7 w-full">
            <div className="gap-8 grid grid-cols-1 md:grid-cols-2 w-full">
              <div className="w-full">
                <dl>
                  <dt className="text-sm font-medium text-gray-900">Staff</dt>
                  <dd className="flex items-center mb-3">
                    <div className="w-full bg-gray-200 rounded h-2.5 me-2">
                      <div className="bg-[#f17741] h-2.5 rounded  w-[88%]"></div>
                    </div>
                    <span className="text-sm font-medium text-gray-500">8.8</span>
                  </dd>
                </dl>
                <dl>
                  <dt className="text-sm font-medium text-gray-900">Comfort</dt>
                  <dd className="flex items-center mb-3">
                    <div className="w-full bg-gray-200 rounded h-2.5 me-2">
                      <div className="bg-[#f17741] h-2.5 rounded w-[89%]"></div>
                    </div>
                    <span className="text-sm font-medium text-gray-500">8.9</span>
                  </dd>
                </dl>
                <dl>
                  <dt className="text-sm font-medium text-gray-900">Food</dt>
                  <dd className="flex items-center mb-3">
                    <div className="w-full bg-gray-200 rounded h-2.5 me-2">
                      <div className="bg-[#f17741] h-2.5 rounded w-[88%]"></div>
                    </div>
                    <span className="text-sm font-medium text-gray-500">8.8</span>
                  </dd>
                </dl>
                <dl>
                  <dt className="text-sm font-medium text-gray-900">Facilities</dt>
                  <dd className="flex items-center">
                    <div className="w-full bg-gray-200 rounded h-2.5 me-2">
                      <div className="bg-[#f17741] h-2.5 rounded w-[54%]"></div>
                    </div>
                    <span className="text-sm font-medium text-gray-500">5.4</span>
                  </dd>
                </dl>
              </div>
              <div className="w-full">
                <dl>
                  <dt className="text-sm font-medium text-gray-900">Value for money</dt>
                  <dd className="flex items-center mb-3">
                    <div className="w-full bg-gray-200 rounded h-2.5 me-2">
                      <div className="bg-[#f17741] h-2.5 rounded w-[89%]"></div>
                    </div>
                    <span className="text-sm font-medium text-gray-500">8.9</span>
                  </dd>
                </dl>
                <dl>
                  <dt className="text-sm font-medium text-gray-900">Cleanliness</dt>
                  <dd className="flex items-center mb-3">
                    <div className="w-full bg-gray-200 rounded h-2.5 me-2">
                      <div className="bg-[#f17741] h-2.5 rounded w-[70%]"></div>
                    </div>
                    <span className="text-sm font-medium text-gray-500 dark:text-gray-400">7.0</span>
                  </dd>
                </dl>
                <dl>
                  <dt className="text-sm font-medium text-gray-900">Location</dt>
                  <dd className="flex items-center">
                    <div className="w-full bg-gray-200 rounded h-2.5 me-2">
                      <div className="bg-[#f17741] h-2.5 rounded w-[80%]"></div>
                    </div>
                    <span className="text-sm font-medium text-gray-500">8.9</span>
                  </dd>
                </dl>
              </div>
            </div>

          </div>
        </div>
        <div className="py-10">
          <h1 className="text-xl font-bold">Rate out this Restaurant</h1>
          <div className="flex items-center mt-1">
            {Array.from({ length: 5 }, (_, index) => (
              <button key={index} className="mr-1">
                <svg className="w-5 h-5 text-yellow-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 21 20">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m11.479 1.712 2.367 4.8a.532.532 0 0 0 .4.292l5.294.769a.534.534 0 0 1 .3.91l-3.83 3.735a.534.534 0 0 0-.154.473l.9 5.272a.535.535 0 0 1-.775.563l-4.734-2.49a.536.536 0 0 0-.5 0l-4.73 2.487a.534.534 0 0 1-.775-.563l.9-5.272a.534.534 0 0 0-.154-.473L2.158 8.48a.534.534 0 0 1 .3-.911l5.294-.77a.532.532 0 0 0 .4-.292l2.367-4.8a.534.534 0 0 1 .96.004Z" />
                </svg>
              </button>
            ))}
          </div>
        </div>
        <div className="py-10">


          <div className="flex flex-col">
            <div className="w-full">
              <div className="flex items-center mb-6">
                <img className="w-10 h-10 rounded-full" src="https://img.freepik.com/free-photo/close-up-portrait-handsome-middle-aged-man-with-beard-hairstyle-dressed-elegant-formal-suit-textured-dark-background-studio_613910-19887.jpg" alt=""/>
                  <div className="ms-4 font-medium">
                    <p>Jese Leos</p>
                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                      United States
                    </div>
                  </div>
              </div>
            </div>
            <div className="mt-6 md:mt-0">
              <div className="flex items-start mb-5">
                <div className="pe-4">
                  <footer>
                    <p className="mb-2 text-sm text-gray-500">Reviewed: January 20, 2022</p>
                  </footer>
                  <h4 className="text-xl font-bold text-gray-900">Great Location.</h4>
                </div>
              </div>
              <p className="mb-2 text-gray-500">Eos tollit ancillae ea, lorem consulatu qui ne, eu eros eirmod scaevola sea. Et nec tantas accusamus salutatus, sit commodo veritus te, erat legere fabulas has ut. Rebum laudem cum ea, ius essent fuisset ut. Viderer petentium cu his. Tollit molestie suscipiantur his et..</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

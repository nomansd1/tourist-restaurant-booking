import SearchSidebar from "./SearchSidebar"
import {Product} from '../home/index'

export default function SearchProductGrid() {

    const CategoryFilters = [
        { title: 'Pizza' },
        { title: 'Japanese' },
        { title: 'Italian' },
        { title: 'Burgers' },
        { title: 'Mexican' },
    ]

    const ratingFilters = [
        {title: '5+'},
        {title: '4+'},
        {title: '3+'},
        {title: '2+'},
        {title: '1+'},
    ]

    const priceFilters = [
        { title: '$0 - $50' },
        { title: '$50 - $100' },
        { title: '$100 - $150' },
        { title: '$150 - $200' },
        { title: '$200 - $250' },
    ]

    return (
        <section className="w-full bg-white">
            <div className="w-full max-w-screen-xl  mx-auto px-4 flex">
                <div className="w-[270px] h-full overflow-auto border-r-2 border-r-gray-300 hidden md:block">
                    <div className="mx-auto w-full px-2 py-4">
                        <div className="flex flex-col gap-8">
                            <div>
                                <div className="mb-3 flex items-center justify-between py-2 [border-bottom:1px_solid_rgb(217,_217,_217)]">
                                    <h5 className="text-lg font-bold">Filters</h5>
                                    <a href="#" className="text-sm">
                                        <p>Clear all</p>
                                    </a>
                                </div>
                                <div className="flex flex-col gap-6">
                                    <p className="text-sm font-semibold">Categories</p>
                                    <div className="flex flex-col gap-3">
                                        {CategoryFilters.map((item, index) => (
                                            <div key={index} className="flex items-center text-sm font-medium">
                                                <input type="checkbox" id={`filterCategory${index}`} className="mr-3 h-5 w-5 cursor-pointer rounded-sm border border-solid bg-[#f2f2f7]" />
                                                <label className="inline-block cursor-pointer select-none" htmlFor={`filterCategory${index}`}>{item.title}</label>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="mb-3 mt-3 h-px w-full bg-[#d9d9d9]"></div>
                                {/* <!-- Rating --> */}
                                <div className="flex flex-col gap-6">
                                    <p className="font-semibold text-sm">Rating</p>
                                    <div className="flex flex-col gap-3">
                                        {ratingFilters.map((item, index) => (
                                            <div key={index} className="flex items-center text-sm font-medium">
                                                <input type="checkbox" id={`filterRating${index}`} className="mr-3 h-5 w-5 cursor-pointer rounded-sm border border-solid bg-[#f2f2f7]" />
                                                <label className="inline-block cursor-pointer select-none" htmlFor={`filterRating${index}`}>{item.title}</label>
                                            </div>
                                        ))}
                                    </div>               
                                </div>
                                {/* <!-- Divider --> */}
                                <div className="mb-3 mt-3 h-px w-full bg-[#d9d9d9]"></div>
                                {/* <!-- FIlter One --> */}
                                <div className="flex flex-col gap-6">
                                    <p className="font-semibold text-sm">Price</p>
                                    <div className="flex flex-col gap-3">
                                        {priceFilters.map((item, index) => (
                                            <div key={index} className="flex items-center text-sm font-medium">
                                                <input type="checkbox" id={`filterPrice${index}`} className="mr-3 h-5 w-5 cursor-pointer rounded-sm border border-solid bg-[#f2f2f7]" />
                                                <label className="inline-block cursor-pointer select-none" htmlFor={`filterPrice${index}`}>{item.title}</label>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <button className="w-full bg-[#f17741] hover:bg-[#EE5511] text-white rounded-md py-2 font-medium text-sm">Apply Filters</button>
                        </div>
                    </div>

                </div>
                <div className="pl-4 my-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3 w-full">
                  <Product/>
                  <Product/>                                                     
                  <Product/>                                                     
                  <Product/>                                                     
                  <Product/>                                                     
                  <Product/>                                                     
                  <Product/>                                                     
                  <Product/>                                                     
                  <Product/>                                                     
                  <Product/>                                                     
                  <Product/>                                                     
                  <Product/>                                                     
                </div>
                <SearchSidebar/>
            </div>
        </section>
    )
}
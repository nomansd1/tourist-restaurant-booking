import { useSidebar } from "../../context/SidebarContext";

export default function SearchSidebar() {
    const CategoryFilters = [
        { title: 'Pizza' },
        { title: 'Japanese' },
        { title: 'Italian' },
        { title: 'Burgers' },
        { title: 'Mexican' },
    ]

    const ratingFilters = [
        { title: '5+' },
        { title: '4+' },
        { title: '3+' },
        { title: '2+' },
        { title: '1+' },
    ]

    const priceFilters = [
        { title: '$0 - $50' },
        { title: '$50 - $100' },
        { title: '$100 - $150' },
        { title: '$150 - $200' },
        { title: '$200 - $250' },
    ]

    const { sidebarOpen } = useSidebar();
    const { closeSidebar } = useSidebar();

    const handleCoseSidebar = () => {
        closeSidebar();
    };
    
    return (
        <aside className={`fixed top-0 -left-full ${sidebarOpen? 'left-0': ''} h-full w-fit bg-white z-[100] px-2 transition-all duration-300 ease-in-out`}>
            <div className="w-[300px] h-full overflow-auto border-r-2 border-r-gray-300">
                <button onClick={handleCoseSidebar} className="absolute top-5 right-10">
                    <svg className="w-4 h-4 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                    </svg>
                </button>
                <div className="mx-auto w-full px-2 py-4 mt-4">
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
                                            <label className="inline-block cursor-pointer select-none" for={`filterCategory${index}`}>{item.title}</label>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div class="mb-3 mt-3 h-px w-full bg-[#d9d9d9]"></div>
                            {/* <!-- Rating --> */}
                            <div className="flex flex-col gap-6">
                                <p className="font-semibold text-sm">Rating</p>
                                <div className="flex flex-col gap-3">
                                    {ratingFilters.map((item, index) => (
                                        <div key={index} className="flex items-center text-sm font-medium">
                                            <input type="checkbox" id={`filterRating${index}`} className="mr-3 h-5 w-5 cursor-pointer rounded-sm border border-solid bg-[#f2f2f7]" />
                                            <label className="inline-block cursor-pointer select-none" for={`filterRating${index}`}>{item.title}</label>
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
                                            <label className="inline-block cursor-pointer select-none" for={`filterPrice${index}`}>{item.title}</label>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <button className="w-full bg-[#f17741] hover:bg-[#EE5511] text-white rounded-md py-2 font-medium text-sm">Apply Filters</button>
                    </div>
                </div>
            </div>
        </aside>
    )
}
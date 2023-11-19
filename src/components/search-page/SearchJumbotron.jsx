import { useSidebar } from "../../context/SidebarContext";

export default function SearchJumbotron() {

    const { toggleSidebar } = useSidebar();

    const handleClick = () => {
        toggleSidebar();
    };

    return (
        <section className="bg-[#F4F4F4] w-full">
            <div className="max-w-screen-xl mx-auto px-4 md:px-7 w-full py-4 md:py-7 flex items-center justify-between">
                <h1 className="text-lg font-medium hidden md:flex">145 restaurants in Convent Street 2983</h1>
                <div className="flex items-center w-full md:w-fit">
                    <label htmlFor="simple-search" className="sr-only">Search</label>
                    <div className="relative w-full">
                        <input type="text" id="simple-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-[#f17741] focus:outline-none focus:ring-[#f17741] block w-full p-2.5 " placeholder="Search branch name..." required />
                    </div>
                    <button type="submit" className="p-2.5 ms-2 text-sm font-medium text-white bg-[#f17741] hover:bg-[#EE5511] rounded-lg focus:outline-none">
                        <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                        </svg>
                        <span className="sr-only">Search</span>
                    </button>
                    <button onClick={handleClick} className="ml-3 md:hidden">
                        <svg className="w-5 h-5 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7.75 4H19M7.75 4a2.25 2.25 0 0 1-4.5 0m4.5 0a2.25 2.25 0 0 0-4.5 0M1 4h2.25m13.5 6H19m-2.25 0a2.25 2.25 0 0 1-4.5 0m4.5 0a2.25 2.25 0 0 0-4.5 0M1 10h11.25m-4.5 6H19M7.75 16a2.25 2.25 0 0 1-4.5 0m4.5 0a2.25 2.25 0 0 0-4.5 0M1 16h2.25" />
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    )
}
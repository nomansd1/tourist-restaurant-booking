import '../../styles/Banner.css'
import { Link } from "react-router-dom";

export default function Banner() {
    return (
        <section className="bg__banner min-h-[90vh] relative">
            <div className="absolute h-full w-full bg__overlay flex flex-col items-center justify-center">
                <div className='mx-auto max-w-screen-xl flex justify-end items-center w-full absolute top-4 right-4'>
                    <div className='flex items-center'>
                        <Link to={`/productdetail`} className=' text-white'>Login</Link>
                        <a href="" className=' text-white border border-white px-5 py-1.5 ml-4 rounded-md'>Create an account</a>
                    </div>
                </div>
                <div className="px-4 mx-auto max-w-screen-xl text-center lg:px-12 flex justify-center items-center flex-col">
                    <a href="#" className="w-fit mx-auto inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm rounded-full bg__anchor  text-white" role="alert">
                        <span className="text-xs rounded-full bg-white text-[#4a4a4a] px-4 py-1.5 mr-3">Explore</span> <span className="text-sm font-medium">variety of different restaurants</span>
                        <svg className="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
                    </a>
                    <h1 className="mb-4 text-2xl font-extrabold tracking-tight leading-none md:text-4xl lg:text-4xl text-white max-w-3xl mx-auto">Discover nearby culinary wonders & Your culinary adventure starts here.</h1>
                    <div className="bg-[#F7F7F7] flex-grow rounded-md h-[50px] flex items-center w-full max-w-2xl  mt-5">
                        <div className="flex items-center flex-grow h-full">
                            <input type="text"
                                placeholder="Search"
                                className="h-full w-full bg-transparent border-outline focus:outline-none px-5 placeholder:text-[#4a4a4a]"
                            />
                            
                            <Link to={'/search'} className='flex items-center rounded-md mr-2 bg-[#f17741] hover:bg-[#EE5511] h-[80%] px-4'>
                                <svg className="w-3 h-3 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                </svg>
                                <span className='text-base font-normal text-white hidden md:flex ml-2'>Search</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
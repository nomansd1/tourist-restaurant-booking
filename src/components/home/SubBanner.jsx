import Slider from "react-slick";

export default function SubBanner() {
    const settings = {
        dots: false,
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        pauseOnHover: false
    };
    return (
        <Slider {...settings}>
            <div className="bg-center bg-cover bg-no-repeat bg-[url('https://png.pngtree.com/thumb_back/fh260/background/20230425/pngtree-pan-with-some-food-in-it-on-fire-image_2557248.jpg')] bg-[rgba(0,0,0,0.3)] bg-blend-multiply">
                <div className="px-4 mx-auto max-w-screen-xl text-center h-[60vh] flex flex-col items-center justify-center">
                    <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white">Dine Around the Neighborhood</h1>
                    <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">Embark on a Culinary Journey with Our Comprehensive Restaurant Directory. Discover, Explore, and Savor Every Bite..</p>
                    <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
                        <a href="#" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-[#f17741] hover:bg-[#EE5511]">
                            Get started
                            <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
            <div className="bg-center bg-cover bg-no-repeat bg-[url('https://img.freepik.com/premium-photo/italian-fusilli-pasta-caprese-salad-with-tomato-basil-mozzarella-appetizer-with-pesto-black-rustic-background-extra-wide-banner-top-view-food-italian-dinner-copy-space_430027-2670.jpg?q=10&h=200')] bg-[rgba(0,0,0,0.3)] bg-blend-multiply">
                <div className="px-4 mx-auto max-w-screen-xl text-center h-[60vh] flex flex-col items-center justify-center">
                    <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white">Dine Around the Neighborhood</h1>
                    <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">Embark on a Culinary Journey with Our Comprehensive Restaurant Directory. Discover, Explore, and Savor Every Bite..</p>
                    <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
                        <a href="#" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-[#f17741] hover:bg-[#EE5511]">
                            Get started
                            <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
            <div className="bg-center bg-cover bg-no-repeat bg-[url('https://media.istockphoto.com/id/1257253274/photo/chef-cooks-with-fire-in-a-pan-shrimp-with-vegetables-on-a-black-background.jpg?s=612x612&w=0&k=20&c=E7V55GmRvtYlOK0hm7yiKo57QOnaEGSE7QhfzGBSxIg=')] bg-[rgba(0,0,0,0.3)] bg-blend-multiply">
                <div className="px-4 mx-auto max-w-screen-xl text-center h-[60vh] flex flex-col items-center justify-center">
                    <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white">Dine Around the Neighborhood</h1>
                    <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">Embark on a Culinary Journey with Our Comprehensive Restaurant Directory. Discover, Explore, and Savor Every Bite..</p>
                    <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
                        <a href="#" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-[#f17741] hover:bg-[#EE5511]">
                            Get started
                            <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </Slider>
    )
}
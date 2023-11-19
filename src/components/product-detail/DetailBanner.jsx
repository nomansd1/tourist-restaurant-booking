import Slider from "react-slick";

export default function DetailBanner() {
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
                <div className="px-4 mx-auto max-w-screen-xl h-[80vh] flex flex-col justify-end">
                    <div className="flex items-center my-4">
                        <div className="text-white bg-[#1F2937] px-2 py-0.5 rounded-md text-sm flex items-center">
                            <span className="font-medium">4.2</span>
                            <svg className="ml-1 w-4 h-4 text-[#F6CA2A]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                            </svg>
                        </div>
                    </div>
                    <h1 className="text-4xl font-extrabold tracking-tight leading-none text-white">Pizza Curry Restaurant</h1>
                    <p className="mb-8 text-sm font-normal text-gray-200 lg:text-base">ITALIAN - 27 Old Gloucester St, 4530 </p>
                </div>
            </div>
            <div className="bg-center bg-cover bg-no-repeat bg-[url('https://img.freepik.com/premium-photo/italian-fusilli-pasta-caprese-salad-with-tomato-basil-mozzarella-appetizer-with-pesto-black-rustic-background-extra-wide-banner-top-view-food-italian-dinner-copy-space_430027-2670.jpg?q=10&h=200')] bg-[rgba(0,0,0,0.3)] bg-blend-multiply">
                <div className="px-4 mx-auto max-w-screen-xl h-[80vh] flex flex-col justify-end">
                    <div className="flex items-center my-4">
                        <div className="text-white bg-[#1F2937] px-2 py-0.5 rounded-md text-sm flex items-center">
                            <span className="font-medium">4.2</span>
                            <svg className="ml-1 w-4 h-4 text-[#F6CA2A]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                            </svg>
                        </div>
                    </div>
                    <h1 className="text-4xl font-extrabold tracking-tight leading-none text-white">Pizza Curry Restaurant</h1>
                    <p className="mb-8 text-sm font-normal text-gray-200 lg:text-base">ITALIAN - 27 Old Gloucester St, 4530 </p>
                </div>
            </div>
            <div className="bg-center bg-cover bg-no-repeat bg-[url('https://media.istockphoto.com/id/1257253274/photo/chef-cooks-with-fire-in-a-pan-shrimp-with-vegetables-on-a-black-background.jpg?s=612x612&w=0&k=20&c=E7V55GmRvtYlOK0hm7yiKo57QOnaEGSE7QhfzGBSxIg=')] bg-[rgba(0,0,0,0.3)] bg-blend-multiply">
                <div className="px-4 mx-auto max-w-screen-xl h-[80vh] flex flex-col justify-end">
                    <div className="flex items-center my-4">
                        <div className="text-white bg-[#1F2937] px-2 py-0.5 rounded-md text-sm flex items-center">
                            <span className="font-medium">4.2</span>
                            <svg className="ml-1 w-4 h-4 text-[#F6CA2A]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                            </svg>
                        </div>
                    </div>
                    <h1 className="text-4xl font-extrabold tracking-tight leading-none text-white">Pizza Curry Restaurant</h1>
                    <p className="mb-8 text-sm font-normal text-gray-200 lg:text-base">ITALIAN - 27 Old Gloucester St, 4530 </p>
                </div>
            </div>
        </Slider>
    )
}

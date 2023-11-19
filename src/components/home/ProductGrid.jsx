import Product from './Product'
import Slider from "react-slick";


export default function ProductGrid() {
    
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToScroll: 1,
        slidesToShow: 4,
        responsive: [
            {breakpoint: 500, settings: {slidesToShow: 1}},
            {breakpoint: 700, settings: {slidesToShow: 2}},
            {breakpoint: 900, settings: {slidesToShow: 2}},
            {breakpoint: 1200, settings: {slidesToShow: 3}},
        ],
    };
    return (
        <section className="bg-white">
            <div className="product__grid max-w-screen-xl mx-auto w-full p-7 md:p-14">
                <h1 className="text-gray-900 text-2xl md:text-3xl font-extrabold text-center mb-10">Explore Finest Restaurants</h1>
                <Slider {...settings}>
                    <div>
                        <Product/>
                    </div>
                    <div>
                        <Product/>
                    </div>
                    <div>
                        <Product/>
                    </div>
                    <div>
                        <Product/>
                    </div>
                    <div>
                        <Product/>
                    </div>
                    <div>
                        <Product/>
                    </div>
                    <div>
                        <Product/>
                    </div>
                    <div>
                        <Product/>
                    </div>
                </Slider>
            </div>
        </section>
    )
}
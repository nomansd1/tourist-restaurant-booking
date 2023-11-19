export default function ExcitingOffers() {
    const restaurants = [
        { 
            title: 'Pizza Curry Restaurant',
            productName: 'Peppori Pizza',
            src: 'https://thewhshatchet.org/wp-content/uploads/2020/10/Screen-Shot-2020-10-12-at-1.50.03-PM.png',
            discount: 15,
            remainingDays: 6 
        },
        { 
            title: 'Pizza Sur Restaurant',
            productName: 'Peppori Pizza',
            src: 'https://img.freepik.com/photos-premium/pizza-planche-bois-fond-noir_894754-1015.jpg',
            discount: 20,
            remainingDays: 3 
        }
    ]
    const products = [
        {
            title: 'Burgers Lab Restaurant',
            productName: 'Big Chicken Burger',
            src: 'https://media.istockphoto.com/id/1337797176/photo/beef-burgers-with-pesto-sauce.jpg?s=612x612&w=0&k=20&c=FmP3Aqr0TdRhrftkuUo5PQ-IPSCnimZD7Pa7Q5nRjEk=',
            discount: 2,
            remainingDays: 4
        },
        {
            title: 'Mexican Foods Restaurant',
            productName: 'Spaghetti',
            src: 'https://www.mexicoinmykitchen.com/wp-content/uploads/2021/12/Mexican-Spaghetti-Rojo-7A-1.jpg',
            discount: 2,
            remainingDays: 4
        }
    ]
    return (
        <section className="bg-white w-full">
            <div className="max-w-screen-xl mx-auto w-full px-7 md:px-14">
                <h1 className="text-gray-900 text-2xl md:text-3xl font-extrabold text-center">Exclusive Offers from Top Restaurants</h1>
                <div className="flex flex-wrap items-center justify-center gap-5 my-14">
                    {restaurants.map((items, index) => (
                        <div key={index} className="max-w-xs bg-white group">
                        <a href="#" className="relative">
                            <img className="rounded-3xl h-[225px]" src={items.src} alt="" />
                            <div className="h-full w-full absolute top-0 hidden group-[:hover]:flex rounded-3xl bg-[rgba(0,0,0,0.2)] transition-all duration-300 ease-linear"></div>
                            <div className="absolute bottom-0 left-0 bg-[#f17741] rounded-tr-3xl rounded-bl-3xl flex items-center w-fit py-5 px-8 text-white z-50">
                                <span className="text-6xl font-extrabold">{items.discount}</span>
                                <div className="flex flex-col justify-center items-center text-lg font-bold ml-1">
                                    <span className="leading-tight text-2xl">%</span>
                                    <span className="leading-tight">Off</span>
                                </div>
                            </div>
                        </a>
                        <div className="p-5">
                            <a href="#">
                                <h5 className="text-xl font-bold tracking-tight text-gray-900">{items.title}</h5>
                                <h5 className="mb-2 text-sm font-medium tracking-tight text-gray-500">{items.productName}</h5>
                                <div className="rounded-md py-1 px-4 bg-[#FDEADF] w-fit flex items-center justify-center text-sm text-[#EE5511] font-medium mt-4">
                                    <span>{items.remainingDays}</span>
                                    <span className="ml-1">days Remaining</span>
                                </div>
                            </a>
                        </div>
                    </div>
                    ))}
                    <div className="w-full block flex justify-center items-center">
                        <button className="rounded-full w-[40px] h-[40px] bg-[#f17741] hover:bg-[#EE5511] uppercase text-white text-xs">or</button>
                    </div>
                    {products.map((items, index) => (
                        <div key={index} className="max-w-xs bg-white group">
                        <a href="#" className="relative">
                            <img className="rounded-3xl h-[225px]" src={items.src} alt="" />
                            <div className="h-full w-full absolute top-0 hidden group-[:hover]:flex rounded-3xl bg-[rgba(0,0,0,0.2)] transition-all duration-300 ease-linear"></div>
                            <div className="absolute bottom-0 left-0 bg-[#f17741] rounded-tr-3xl rounded-bl-3xl flex items-center w-fit py-5 px-8 text-white z-50">
                                <span className="text-6xl font-extrabold">{items.discount}</span>
                                <div className="flex flex-col justify-center items-center text-lg font-bold ml-1">
                                    <span className="leading-tight text-2xl">%</span>
                                    <span className="leading-tight">Off</span>
                                </div>
                            </div>
                        </a>
                        <div className="p-5">
                            <a href="#">
                                <h5 className="text-xl font-bold tracking-tight text-gray-900">{items.title}</h5>
                                <h5 className="mb-2 text-sm font-medium tracking-tight text-gray-500">{items.productName}</h5>
                                <div className="rounded-md py-1 px-4 bg-[#FDEADF] w-fit flex items-center justify-center text-sm text-[#EE5511] font-medium mt-4">
                                    <span>{items.remainingDays}</span>
                                    <span className="ml-1">days Remaining</span>
                                </div>
                            </a>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
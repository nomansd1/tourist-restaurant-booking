export default function CategoryMenu() {
    const cuisinesCategory = [
        { 
            title: 'Breakfast', 
            src: 'https://pngimg.com/d/breakfast_PNG9.png' 
        },
        { 
            title: 'Lunch', 
            src: 'https://www.freepnglogos.com/uploads/food-png/food-png-transparent-images-png-only-6.png' 
        },
        { 
            title: 'Dinner', 
            src: 'https://purepng.com/public/uploads/large/purepng.com-food-platefood-meat-plate-tasty-grill-breakfast-dinner-french-fries-launch-941524624270veqpm.png' 
        },
        { 
            title: 'Delivery', 
            src: 'https://www.pngmart.com/files/21/Food-Delivery-Scooter-PNG-Isolated-Photos.png' 
        },
        { 
            title: 'Nightlife', 
            src: 'https://static.vecteezy.com/system/resources/previews/026/751/443/non_2x/vodka-martini-cocktail-stock-generative-ai-free-png.png' 
        },
    ]
    return (
        <section className="bg-white w-full">
            <div className="mx-auto max-w-screen-xl p-4 md:p-7 w-full">
                <h1 className="text-gray-900 text-2xl md:text-3xl font-extrabold text-center">Cusines Selections</h1>
                <div className="flex items-center flex-wrap justify-center gap-6 w-fit mx-auto my-7">
                    {cuisinesCategory.map((item, index)=> (
                        <div key={index} className="hover:bg-gray-200 bg-gray-50 rounded-md p-3 flex flex-col justify-center items-center shadow-md cursor-pointer">
                            <img src={item.src} className="w-[120px] h-[71px] object-contain" alt="" />
                            <span className="mx-2 my-3 font-medium">{item.title}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
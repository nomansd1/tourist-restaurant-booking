import '../../styles/Product.css'

export default function Product() {
    return (
        <div className='rounded-md cursor-pointer group'>
            <div className="h-[210px] relative overflow-hidden">
                <div className='flex items-center justify-between absolute top-3 w-full px-3 uppercase text-xs text-white z-50'>
                    <span className='bg-black py-0.5 px-2 rounded-sm'>dinner</span>
                    <span className='bg-[#f17741] py-0.5 px-2 rounded-sm'>-20%</span>
                </div>
                <img className="absolute h-full w-full rounded-md group-[:hover]:scale-[1.2] transition-all duration-300 ease-linear" src="https://img.freepik.com/free-photo/freshly-italian-pizza-with-mozzarella-cheese-slice-generative-ai_188544-12347.jpg" alt="" />
                <div className="product__gradient absolute bottom-0 w-full h-[60px] text-white px-3 rounded-b-md">
                    <h1 className='text-lg font-bold leading-tight'>Pizza Curry</h1>
                    <p className='text-sm font-medium'>27 Old Gloucester St</p>
                </div>
            </div>
        </div>
    )
}
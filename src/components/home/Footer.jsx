export default function Footer() {

    const navLinks = [
        { title: 'About', href: '' },
        { title: 'Contact Us', href: '' },
        { title: 'Info', href: '' },
        { title: 'FAQs', href: '' },
        { title: 'Terms & Conditions', href: '' },
        { title: 'Privacy Policy', href: '' },
    ]
    
    return (
        <footer className="p-4 bg-white md:p-8 lg:p-10 dark:bg-gray-800">
            <div className="mx-auto max-w-screen-xl text-center">
                <a href="#" className="flex justify-center items-center text-2xl font-semibold text-gray-900 dark:text-white">
                    Logo
                </a>
                <div className="flex mx-auto mt-5 justify-center space-x-5 rtl:space-x-reverse">
                    <a href="#" className="text-gray-400 hover:text-gray-900 dark:hover:text-white">
                        <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                            <path fillRule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clipRule="evenodd" />
                        </svg>
                        <span className="sr-only">Facebook page</span>
                    </a>
                    <a href="#" className="text-gray-400 hover:text-gray-900 dark:hover:text-white">
                        <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 17">
                            <path fillRule="evenodd" d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z" clipRule="evenodd" />
                        </svg>
                        <span className="sr-only">Twitter page</span>
                    </a>
                    <a href="#" className="text-gray-400 hover:text-gray-900 dark:hover:text-white">
                        <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 15 15">
                            <path fillRule="evenodd" d="M7.979 5v1.586a3.5 3.5 0 0 1 3.082-1.574C14.3 5.012 15 7.03 15 9.655V15h-3v-4.738c0-1.13-.229-2.584-1.995-2.584-1.713 0-2.005 1.23-2.005 2.5V15H5.009V5h2.97ZM3 2.487a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" clipRule="evenodd" />
                            <path d="M3 5.012H0V15h3V5.012Z" />
                        </svg>
                    </a>
                </div>
                <p className="my-6 text-gray-500 dark:text-gray-400">Discover Delicious Destinations & Unleash Taste with our Culinary GPS.</p>
                <ul className="flex flex-wrap justify-center items-center mb-6 text-gray-900 dark:text-white">
                    {navLinks.map((items, index) => (
                        <li key={index}>
                            <a href="#" className="mr-4 hover:underline md:mr-6 ">{items.title}</a>
                        </li>
                    ))}
                </ul>
                <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2021-2022 <a href="#" className="hover:underline">Logo™</a>. All Rights Reserved.</span>
            </div>
        </footer>
    )
}
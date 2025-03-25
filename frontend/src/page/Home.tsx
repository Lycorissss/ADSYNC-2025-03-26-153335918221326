const Home = () => {
    return (
        <>
            <div className="pb-10 bg-gradient-to-r from-gray-900 to-black bg-opacity-90 text-white">
                <div className="container mx-auto px-4">
                    <header className="flex justify-between items-center py-6">
                        <div className="flex items-center">
                            <span className="text-xl font-bold">ADSYNC</span>
                        </div>
                        <nav className="hidden md:flex space-x-8">
                            <a href="#" className="text-orange-500 hover:text-orange-400">Home</a>
                            <a href="#" className="text-white hover:text-orange-400">About Us</a>
                            <a href="#" className="text-white hover:text-orange-400">How it Works</a>
                            <a href="#" className="text-white hover:text-orange-400">Features</a>
                            <a href="#" className="text-white hover:text-orange-400">Contact</a>
                        </nav>
                        <div className="flex items-center space-x-4">
                            <button className="hover:text-orange-400">Log In</button>
                            <button className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-full">Sign Up</button>
                        </div>
                    </header>
                    <div className="flex flex-col md:flex-row items-center mt-8">
                        <div className="md:w-1/2 z-10">
                            <div className="inline-block border border-orange-500 rounded-full px-4 py-1 text-sm mb-6">
                                <span>Connect - Advertise - Grow</span>
                            </div>
                            <h1 className="text-5xl font-bold mb-6">Boost Your<br /> Brand with <span className="text-orange-500">Adsync</span></h1>
                            <p className="mb-8 text-gray-300">Find the perfect influencers to amplify your brand's reach or monetize your audience with premium advertise slots.</p>
                            <div className="flex space-x-4">
                                <button className="border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-6 py-2 rounded-full transition duration-300">Contact Us</button>
                                <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full transition duration-300">Sign Up </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-gradient-to-r from-gray-900 to-black bg-opacity-90 text-white p-5 w-2/4 rounded-br-4xl">
                <div className="container mx-auto px-4 flex justify-center ">
                <button className="flex items-center text-xl hover:text-orange-400 transition duration-300">
                    Get Started
                    <div className="ml-2 w-8 h-8 rounded-full border border-white flex items-center justify-center">
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg>
                    </div>
                </button>
                </div>
            </div>
        </>
    );
}
export default Home;
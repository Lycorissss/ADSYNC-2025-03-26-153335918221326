import React from 'react';
import Features from '../components/Features';

const Home = () => {
    return (
        <>
            <div
                className="pb-10 text-white mt-2 ml-2 mr-2 relative rounded-4xl"
                style={{
                    backgroundImage: "url('/img/Background.png')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    WebkitMaskImage: "url('/img/Background.png')",
                    maskImage: "url('/img/Background.png')",
                    WebkitMaskSize: "100% 100%",
                    maskSize: "100% 100%",
                    WebkitMaskRepeat: "no-repeat",
                    maskRepeat: "no-repeat",
                }}
            >
                <div className="container mx-auto px-4 mb-25">
                    <header className="relative top-8 flex justify-between items-center py-3 bg-[#0e0e1b] rounded-1-none rounded-full px-8">
                        <div className="flex items-center">
                            <img src="/img/logo_adsync.png" alt="ADSYNC Logo" className="h-6" />
                        </div>
                        <nav className="hidden md:flex space-x-8">
                            <a href="#" className="text-[#FF5733] hover:text-[#FF5733]">Home</a>
                            <a href="#" className="text-white hover:text-[#FF5733]">About Us</a>
                            <a href="#" className="text-white hover:text-[#FF5733]">How it Works</a>
                            <a href="#" className="text-white hover:text-[#FF5733]">Features</a>
                            <a href="#" className="text-white hover:text-[#FF5733]">Contact</a>
                        </nav>
                        <div className="flex items-center space-x-4">
                            <button className="hover:text-[#FF5733]">Log In</button>
                            <button className="bg-[#FF5733] hover:bg-[#FF5733] text-white px-4 py-2 rounded-full">Sign Up</button>
                        </div>
                    </header>
                    <div className="flex flex-col md:flex-row items-center ml-8 mt-40">
                        <div className="md:w-1/2 z-10">
                            <div className="inline-block border border-[#FF5733] rounded-full px-4 py-1 text-sm mb-6">
                                <span>Connect - Advertise - Grow</span>
                            </div>
                            <h1 className="text-5xl font-bold mb-6">Boost Your<br /> Brand with <span className="text-[#FF5733]">Adsync</span></h1>
                            <p className="mb-8 text-gray-300">Find the perfect influencers to amplify your brand's reach or monetize your audience with premium advertise slots.</p>
                            <div className="flex space-x-4">
                                <button className="border border-[#FF5733] text-[#FF5733] hover:bg-[#FF5733] hover:text-white px-6 py-2 rounded-full transition duration-300">Contact Us</button>
                                <button className="bg-[#FF5733] hover:bg-[#FF5733] text-white px-6 py-2 rounded-full transition duration-300">Sign Up </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="absolute bottom-4 left-4">
                    <button className="flex items-center text-3xl hover:text-[#FF5733] transition duration-300 ml-30">
                        Get Started
                        <div className="ml-2 w-8 h-8 rounded-full border border-white flex items-center justify-center">
                            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                            </svg>
                        </div>
                    </button>
                </div>
            </div>


            {/* Konten Kiri */}
            <div className="container mx-auto px-4 mt-50 text-black max-w-[30%] w-full text-left ml-32 pb-30">
                <h2 className="text-2xl font-bold mb-4">
                    Find the Perfect Influencer Instantly
                </h2>
                <p className="text-gray-700 mb-6">
                    Our advanced AI technology analyzes audience demographics, engagement,
                    and content niche to match advertisers with the most relevant
                    influencers. This ensures your ads reach the right people at the right
                    time, maximizing engagement and ROI.
                </p>

                <div className="flex flex-col space-y-3">
                    <button className="border border-black text-black px-6 py-2 rounded-full hover:bg-gray-200 transition duration-300">
                        AI-Powered Matching
                    </button>
                    <button className="border border-gray-300 text-gray-400 px-6 py-2 rounded-full bg-transparent cursor-not-allowed">
                        Blockchain Transparency
                    </button>
                    <button className="border border-gray-300 text-gray-400 px-6 py-2 rounded-full bg-transparent cursor-not-allowed">
                        Seamless Ad Management
                    </button>
                </div>
            </div>





            <div className="py-16 px-4 pb-50">
                <div className="container mx-auto max-w-6xl flex items-center">
                    <div className="w-1/2 pr-12">
                        <div className="border border-[#FF5733] text-[#FF5733] hover:bg-[#FF5733] hover:text-white px-6 py-2 rounded-full transition duration-300 inline-block w-fit mb-8">How It Works</div>

                        <h2 className="text-4xl font-bold mb-6">
                            Simplify Advertising <br></br>with <span className="text-[#FF5733]">Adsync</span>
                        </h2>

                        <p className="text-black mb-6 mt-40">
                            At <span className="text-[#FF5733]">Adsync</span>, we make digital advertising easy, transparent, and efficient.
                            Whether you're an advertiser looking for the best ad placements or an influencer wanting to monetize your audience,
                            our platform streamlines the entire process.
                        </p>
                        <button className="border border-black text-black hover:bg-gray-200  hover:text-black px-6 py-2 rounded-full transition duration-300 inline-block w-fit mb-8">
                            Explore More
                        </button>
                    </div>
                    <div className="w-1/2 relative pl-12">
                        <div className="grid grid-cols-3 gap-4">
                            {[1, 2, 3, 4, 5, 6].map((item, index) => (
                                <div
                                    key={index}
                                    className={`bg-white rounded-3xl shadow-[0px_16px_40px_rgba(0,0,0,0.08),8px_16px_40px_rgba(0,0,0,0.08)] p-6 min-h-[200px]
                    ${index % 3 === 1 ? "-translate-y-6" : ""}   /* Kolom 2 naik */
                    ${index % 3 === 2 ? "translate-y-6" : ""}   /* Kolom 3 turun */
                `}
                                ></div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <Features />

            <footer className="bg-[#0e0e1b] text-white py-10 mt-20">
                <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
                    {/* Logo */}
                    <div className="mb-4 md:mb-0">
                        <img src="/img/logo_adsync.png" alt="ADSYNC Logo" className="h-8" />
                    </div>

                    {/* Navigasi Sosial Media */}
                    <div className="flex space-x-6">
                        {/* LinkedIn */}
                        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#FF5733]">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M4.98 3.5c0 1.38-1.12 2.5-2.5 2.5S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8.5h4v12h-4v-12zM7.5 8.5h3.5v1.72c.48-.88 1.72-1.72 3.23-1.72 3.46 0 4.11 2.27 4.11 5.23v6.77h-4v-6.02c0-1.44-.03-3.3-2.01-3.3s-2.33 1.57-2.33 3.19v6.13h-4v-12z" />
                            </svg>
                        </a>

                        {/* Instagram */}
                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#FF5733]">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M7.75 2C4.13 2 2 4.13 2 7.75v8.5C2 19.87 4.13 22 7.75 22h8.5c3.62 0 5.75-2.13 5.75-5.75v-8.5C22 4.13 19.87 2 16.25 2h-8.5zM12 5.5c3.54 0 6.5 2.96 6.5 6.5s-2.96 6.5-6.5 6.5-6.5-2.96-6.5-6.5 2.96-6.5 6.5-6.5zm0 2c-2.48 0-4.5 2.02-4.5 4.5s2.02 4.5 4.5 4.5 4.5-2.02 4.5-4.5-2.02-4.5-4.5-4.5zm6.88-.88a1.12 1.12 0 11-2.24 0 1.12 1.12 0 012.24 0z" />
                            </svg>
                        </a>

                        {/* X (Twitter) */}
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#FF5733]">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M22 5.92c-.77.35-1.6.58-2.47.69a4.34 4.34 0 001.91-2.41c-.83.49-1.75.84-2.72 1.03a4.29 4.29 0 00-7.32 3.91A12.19 12.19 0 013.14 5.16a4.29 4.29 0 001.33 5.72c-.6-.02-1.17-.18-1.67-.46v.05a4.29 4.29 0 003.44 4.2 4.31 4.31 0 01-1.94.07 4.29 4.29 0 004.01 2.98A8.62 8.62 0 012 18.08 12.18 12.18 0 009.3 20c7.53 0 11.65-6.23 11.65-11.64l-.01-.53A8.16 8.16 0 0022 5.92z" />
                            </svg>
                        </a>

                        {/* Discord */}
                        <a href="https://discord.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#FF5733]">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M20.29 5.63A19.85 19.85 0 0016.66 4a14.6 14.6 0 00-.73 1.49 18.65 18.65 0 00-5.86 0A14.6 14.6 0 009.34 4a19.85 19.85 0 00-3.63 1.63 20.9 20.9 0 00-3.4 14.35 19.9 19.9 0 005.9 3 14.68 14.68 0 001.27-1.74 10.07 10.07 0 01-1.8-.86 5.28 5.28 0 004.94-.35 5.28 5.28 0 004.94.35 10.07 10.07 0 01-1.8.86 14.68 14.68 0 001.27 1.74 19.9 19.9 0 005.9-3 20.9 20.9 0 00-3.4-14.35zM8.08 15.49c-1.21 0-2.2-1.09-2.2-2.43s.97-2.44 2.2-2.44 2.2 1.09 2.2 2.44-.97 2.43-2.2 2.43zm7.84 0c-1.21 0-2.2-1.09-2.2-2.43s.97-2.44 2.2-2.44 2.2 1.09 2.2 2.44-.97 2.43-2.2 2.43z" />
                            </svg>
                        </a>
                    </div>


                    {/* Hak Cipta */}
                    <p className="text-gray-400 text-sm mt-4 md:mt-0">
                        © {new Date().getFullYear()} Adsync. All rights reserved.
                    </p>
                </div>
            </footer>
        </>
    );
}

export default Home;
import React, { useState } from 'react';

const UserLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Logging in with:', { email, password });
    };

    return (
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
                            <span>Login to Continue</span>
                        </div>
                        <h1 className="text-5xl font-bold mb-6">Welcome Back to <span className="text-[#FF5733]">Adsync</span></h1>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Email"
                                className="w-full px-6 py-2 rounded-full bg-[#1e1e1e] text-white"
                            />
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Password"
                                className="w-full px-6 py-2 rounded-full bg-[#1e1e1e] text-white"
                            />
                            <div className="flex space-x-4 mt-4">
                                <button type="submit" className="bg-[#FF5733] hover:bg-[#FF5733] text-white px-6 py-2 rounded-full transition duration-300">Login</button>
                                <button type="button" className="border border-[#FF5733] text-[#FF5733] hover:bg-[#FF5733] hover:text-white px-6 py-2 rounded-full transition duration-300">Forgot Password</button>
                            </div>
                        </form>
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
    );
}

export default UserLogin;

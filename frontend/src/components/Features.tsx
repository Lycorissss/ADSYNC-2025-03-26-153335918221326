import React from 'react';

const Features = () => {
    const featuresList = [
        'AI-Powered Matching',
        'Blockchain-Powered Transactions',
        'Real-Time Analytics',
        'Token-Based Payments',
        'Seamless Ad Management'
    ];

    return (
        <div className="container mx-auto px-4 py-16 ml-20 max-w-[calc(100%-5rem)]">
            {/* Bagian Judul */}
            <div className="text-left mb-6">
                <div className="border border-black text-gray-800 px-4 py-1 rounded-full inline-block text-sm font-medium">
                    Features — The Power of <span className="text-[#FF5733]">Adsync</span>
                </div>
            </div>

            {/* Layout utama */}
            <div className="flex items-start space-x-12">
                {/* Daftar Fitur (lebih lebar) */}
                <div className="w-3/5 bg-white rounded-4xl border border-black p-6 shadow-sm">
                    <div className="divide-y divide-black">
                        {featuresList.map((feature, index) => (
                            <div key={index} className="flex justify-between items-center py-4 group">
                                <span className="text-gray-900 text-lg flex-shrink-0">{feature}</span>
                                <svg
                                    className="w-64 h-6 text-[#FF5733] opacity-100 transition-transform transform group-hover:translate-x-1 flex-shrink-0"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 250 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M2 12h200m0 0l-6-6m6 6l-6 6"
                                    />
                                </svg>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Placeholder untuk Gambar/Media (lebih kecil) */}
                <div className="w-2/5 mr-20">
                    <div className="bg-gray-600 rounded-2xl h-88 w-full"></div>
                </div>
            </div>
        </div>
    );
}

export default Features;

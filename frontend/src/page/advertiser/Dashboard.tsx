import AdsLayout from "../../layouts/Layout";
import React from "react";

const RecentOrder = [
    {
        id: 1,
        image: "/img/bg-dashboard.png",
        name: "Publiseher 1",
        date: "2 - 23 - 2025",
        platform: "instagram",
        status: "Completed",
        price: 23.442
    },
    {
        id: 2,
        image: "/img/bg-dashboard.png",
        name: "Publiseher 2",
        status: "Pending",
        date: "2 - 23 - 2025",
        platform: "instagram",
        price: 3.000
    },
    {
        id: 3,
        image: "/img/bg-dashboard.png",
        name: "Publiseher 3",
        date: "2 - 23 - 2025",
        platform: "instagram",
        status: "In Progress",
        price: 2.252
    },
];

export default function Dashboard() {
    return (
        <>
            <AdsLayout>
                <div className="grid grid-cols-3 gap-4">
                    <div id="welcome">
                        <h1 className="text-7xl font-bold mb-3">Hello, <br /> Edward!</h1>
                        <p>Targeted Ads. Maximum <br /> Results with <label className="text-[#f96d46]">Adsync</label></p>
                    </div>

                    <div id="earning" className="card bg-[#f96d46a9] h-full p-4 text-white rounded-2xl">
                        <div className="p-5 pt-0">
                            <img src="/img/dashboard/earnings.png" alt="Earnings" />
                            <p>Earnings</p>
                            <h1 className="text-2xl">$8.300</h1>
                            <p className="bg-[#f96d46] rounded-full w-[70%] text-center text-[10px] p-2">
                                + 10% since last month
                            </p>
                        </div>
                    </div>

                    <div id="your-order">
                        <h1 className="font-bold text-3xl mb-2">Your Order</h1>
                        <div className="card bg-white rounded-2xl h-auto p-5">
                            {[...Array(2)].map((_, index) => (
                                <div key={index} className="flex gap-3 mb-3">
                                    <img src="/img/bg-dashboard.png" alt="Order" className="w-[40px] h-[40px] rounded-full" />
                                    <div>
                                        <h2 className="font-bold text-[1rem]">Lorem ipsum dolor</h2>
                                        <p className="text-[0.7rem]">1 day remaining</p>
                                    </div>
                                </div>
                            ))}
                            <div className="text-end">
                                <h5 className="text-[#f96d46] font-semibold text-[0.7rem]">See All My Order</h5>
                            </div>
                        </div>
                    </div>

                    <div className="col-span-2">
                        <h1 className="font-bold text-3xl mb-2">Recent My Order</h1>
                        <div className="card bg-white rounded-2xl p-5">
                            {RecentOrder.map((order) => (
                                <div key={order.id} className="flex items-center gap-4 p-3">
                                    <img src={order.image} alt={order.name} className="w-16 h-16 rounded-lg object-cover" />
                                    <div className="flex-1">
                                        <h3 className="font-semibold">{order.name}</h3>
                                        <p className="text-gray-500 text-sm">{order.platform} | {order.date}</p>
                                    </div>

                                    {/* Order Status sejajar semua */}
                                    <div className="w-32 flex justify-center">
                                        <span
                                            className={`px-4 py-1 rounded-full text-sm font-semibold shadow-sm text-center
                                            ${order.status === "Completed" ? "bg-green-100 text-green-800" :
                                                order.status === "Pending" ? "bg-red-100 text-red-600" :
                                                    order.status === "In Progress" ? "bg-blue-100 text-blue-700 capitalize" : ""}`}
                                        >
                                            {order.status}
                                        </span>
                                    </div>

                                    {/* Harga di kanan */}
                                    <span className="font-semibold text-green-600">${order.price}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h1 className="font-bold text-3xl mb-2">Recommended</h1>
                        <div className="card bg-white p-5 rounded-2xl">
                            <div className="flex gap-2">
                                <img src="/img/bg-dashboard.png" alt="Recommendation" className="w-15 h-15 rounded-full" />
                                <div>
                                    <h2 className="text-xl font-bold">Lorem ipsum</h2>
                                    <p className="text-sm">Lorem ipsum</p>
                                </div>
                            </div>
                            <div className="mt-2">
                                <h2 className="font-medium">Lorem ipsum dolor sit</h2>
                                <p className="text-[0.7rem]">
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta maiores, 
                                    iusto perspiciatis vel a illum. Veniam, rem libero quod dicta aut facilis 
                                    molestias quas amet minima dolores quo, animi nam.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </AdsLayout>
        </>
    );
}

import { Search, Bell, Settings, LineChart, Facebook, Instagram, Globe } from "lucide-react";
import { LineChart as Chart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

const data = [
    { name: "Jan", facebook: 10, instagram: 20, website: 15 },
    { name: "Feb", facebook: 15, instagram: 25, website: 20 },
    { name: "Mar", facebook: 20, instagram: 30, website: 25 },
    { name: "Apr", facebook: 25, instagram: 35, website: 30 },
    { name: "May", facebook: 30, instagram: 40, website: 35 },
    { name: "Jun", facebook: 35, instagram: 45, website: 40 },
];

export default function Dashboard() {
    return (
        <>
            <div className="flex h-screen bg-gradient-to-br from-pink-100 to-white">
                {/* Sidebar */}
                <div className="w-64 bg-white p-6 shadow-lg flex flex-col space-y-6">
                    <h1 className="text-xl font-bold">ADSYNC</h1>
                    <nav className="flex flex-col space-y-4">
                        <a className="bg-orange-500 text-white p-3 rounded-lg flex items-center gap-2" href="#">Dashboard</a>
                        <a className="p-3 rounded-lg flex items-center gap-2" href="#">Create Ad Slot</a>
                        <a className="p-3 rounded-lg flex items-center gap-2" href="#">My Ad Slots</a>
                        <a className="p-3 rounded-lg flex items-center gap-2" href="#">Orders Received</a>
                        <a className="p-3 rounded-lg flex items-center gap-2" href="#">Notification</a>
                        <a className="p-3 rounded-lg flex items-center gap-2" href="#">Settings</a>
                    </nav>
                </div>

                {/* Content */}
                <div className="flex-1 p-6">
                    <div className="flex justify-between items-center">
                        <div className="relative w-72">
                            <input className="w-full p-2 pl-10 rounded-lg shadow-sm border" type="text" placeholder="Search" />
                            <Search className="absolute left-3 top-3 text-gray-400" size={16} />
                        </div>
                        <div className="flex items-center gap-4">
                            <Bell size={24} />
                            <Settings size={24} />
                            <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
                            <span>Hi, Michael!</span>
                        </div>
                    </div>

                    {/* Cards */}
                    <div className="grid grid-cols-3 gap-4 mt-6">
                        <div className="p-6 bg-orange-200 rounded-lg">
                            <LineChart size={24} />
                            <p>Earnings</p>
                            <h2 className="text-2xl font-bold">$1,893.5</h2>
                            <span className="text-sm">+54% since last month</span>
                        </div>

                        <div className="p-6 bg-orange-200 rounded-lg">
                            <p>Engagement Rate</p>
                            <h2 className="text-2xl font-bold">34.3K</h2>
                            <span className="text-sm">+86% since last month</span>
                        </div>

                        <div className="p-6 bg-white rounded-lg shadow">
                            <p>Orders Received</p>
                            <div className="mt-2 space-y-2">
                                <div className="flex justify-between items-center p-2 bg-gray-100 rounded">
                                    <span>Lorem Ipsum</span>
                                    <span>1m remaining</span>
                                </div>
                                <div className="flex justify-between items-center p-2 bg-gray-100 rounded">
                                    <span>Lorem Ipsum</span>
                                    <span>5m remaining</span>
                                </div>
                            </div>
                            <a className="text-blue-500 mt-2 inline-block" href="#">See all my orders</a>
                        </div>
                    </div>

                    {/* Chart */}
                    <div className="bg-white p-6 mt-6 rounded-lg shadow">
                        <h2 className="text-xl font-bold">Performance Charts</h2>
                        <h3 className="text-2xl">$5,837.96</h3>
                        <Chart width={600} height={300} data={data}>
                            <XAxis dataKey="name" />
                            <YAxis />
                            <CartesianGrid strokeDasharray="3 3" />
                            <Tooltip />
                            <Legend />
                            <Line type="monotone" dataKey="facebook" stroke="blue" />
                            <Line type="monotone" dataKey="instagram" stroke="purple" />
                            <Line type="monotone" dataKey="website" stroke="pink" />
                        </Chart>
                    </div>

                    {/* Platform Engagement */}
                    <div className="bg-white p-6 mt-6 rounded-lg shadow">
                        <h2 className="text-xl font-bold">Platform Engagement</h2>
                        <div className="mt-4 space-y-2">
                            <div className="flex items-center gap-2">
                                <Facebook size={24} />
                                <span>Facebook</span>
                                <span className="ml-auto">1.6K → 3.2K</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Instagram size={24} />
                                <span>Instagram</span>
                                <span className="ml-auto">2.1K → 7.6K</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Globe size={24} />
                                <span>Website</span>
                                <span className="ml-auto">1.9K → 2.9K</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

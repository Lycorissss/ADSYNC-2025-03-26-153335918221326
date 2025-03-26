import SallerLayout from "../../layouts/SallerLayout";
import { LineChart, Facebook, Instagram, Globe } from "lucide-react";
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
            <SallerLayout>
                <div className="grid grid-cols-3 gap-4 mt-6">{/* Cards */}
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
                <div className="bg-white p-6 mt-6 rounded-lg shadow">{/* Chart */}
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
                <div className="bg-white p-6 mt-6 rounded-lg shadow"> {/* Platform Engagement */}
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
            </SallerLayout>
        </>
    );
}

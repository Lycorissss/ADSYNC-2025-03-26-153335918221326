import { ReactNode } from "react";
import { Search, Bell, Settings } from "lucide-react";
import SiderBar from "../components/SiderBar";
interface LayoutProps {
    children: ReactNode;
}

const AdsLayout = ({ children }: LayoutProps) => {
    return (
        <div className="flex h-screen bg-gradient-to-br from-pink-100 to-white">
            <SiderBar />
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
                <div className="h-screen overflow-y-auto">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default AdsLayout;
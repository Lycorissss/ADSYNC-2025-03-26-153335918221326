import { ReactNode } from "react";
import { Search, Bell, Settings } from "lucide-react";
import SiderBar from "../components/SideBarSller";

interface LayoutProps {
    children: ReactNode;
}

const SallerLayout = ({ children }: LayoutProps) => {
    return (
        <div className="flex h-screen bg-gradient-to-br from-[#f96d4677] to-[#ffffff18]  overflow-hidden ">
            <div className="absolute inset-0 bg-[url('/img/bg-dashboard.png')] bg-cover bg-no-repeat -z-2"></div>
            <SiderBar />
            <div className="flex-1 p-6 pl-0">
                <div className="flex justify-between items-center pb-2">
                    <div className="relative w-72">
                        <input className="w-full p-2 rounded-full bg-white pl-10 shadow-sm border-none" type="text" placeholder="Search" />
                        <Search className="absolute left-3 top-3 text-gray-400" size={16} />
                    </div>
                    <div className="flex items-center gap-4">
                        <Bell size={24} />
                        <Settings size={24} />
                        <div className="w-10 h-10 bg-[url('/img/dashboard/icon-profile.jpg')] bg-cover  rounded-full"></div>
                        <span>Hi, Michael!</span>
                    </div>
                </div>
                <div className="h-screen overflow-scroll pb-25 scrollbar-hide ">
                    <div className="pt-5">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SallerLayout;
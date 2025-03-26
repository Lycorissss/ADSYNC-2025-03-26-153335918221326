import { useLocation } from "react-router-dom";

export default function SiderBar() {
    const location = useLocation(); // Ambil path halaman saat ini

    return (
        <div className="p-[25px] min-h-screen">
            <div className="w-64 bg-white h-full p-6 shadow-lg flex flex-col space-y-6 rounded-2xl">
                {/* <h1 className="text-xl font-bold">ADSYNC</h1> */} <img src="/img/dashboard/logo-black.png" alt="logo" className="w-[60%]" />
                <nav className="flex flex-col space-y-1">
                    <a className={`p-3 rounded-lg flex items-center gap-1 ${location.pathname === "/saller/" ? "bg-orange-500 text-white" : ""}`} href="/saller/">Dashboard</a>
                    <a className={`p-3 rounded-lg flex items-center gap-1 ${location.pathname === "/saller/ads-list" ? "bg-orange-500 text-white" : ""}`} href="/saller/ads-list">Ads Slot</a>
                    <a className={`p-3 rounded-lg flex items-center gap-1 ${location.pathname === "/saller/order" ? "bg-orange-500 text-white" : ""}`} href="/saller/order">My Order</a>
                </nav>
            </div>
        </div>
    );
}

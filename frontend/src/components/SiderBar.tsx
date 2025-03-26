export default function SiderBar() {
    return (
        <>
            <div className="p-[25px] min-h-screen">
                <div className="w-64 bg-white h-full p-6 shadow-lg flex flex-col space-y-6  rounded-2xl">
                    <h1 className="text-xl font-bold">ADSYNC</h1>
                    <nav className="flex flex-col space-y-4">
                        <a className="bg-orange-500 text-white p-3 rounded-lg flex items-center gap-2" href="#">Dashboard</a>
                        <a className="p-3 rounded-lg flex items-center gap-2" href="#">Browse Ads</a>
                        <a className="p-3 rounded-lg flex items-center gap-2" href="#">My Order</a>
                    </nav>
                </div>
            </div>
        </>
    );
}
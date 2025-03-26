import AdsLayout from "../../layouts/Layout";
export default function Dashboard() {
    return (
        <>
            <AdsLayout>
                <div className="grid grid-cols-3 gap-4">
                    <div id="welcome" className="">
                        <h1 className="text-7xl font-bold mb-3">Hello, <br /> Edward!</h1>
                        <p>Targeted Ads. Maximum <br /> Results with <label className="text-[#f96d46]">Adsync</label></p>
                    </div>
                    <div id="erning" className="card bg-[#f96d46a9] h-full p-4 text-white rounded-2xl">
                        <div className="p-5 pt-0">
                            <img src="/img/dashboard/earnings.png" alt="" className="" />
                            <p>Earnings</p>
                            <h1 className="text-2xl">$8.300</h1>
                            <p className="bg-[#f96d46] rounded-full w-[70%] text-center text-[10px] p-2">+ 10% since last mouth</p>
                        </div>
                    </div>
                    <div id="erning" className="">
                        <h1 className="font-bold text-3xl mb-2">Your Order</h1>
                        <div className="card bg-white rounded-2xl h-auto p-5">
                            <div className="flex gap-3 mb-3">
                                <img src="/img/bg-dashboard.png" alt="" className="w-[40px] h-[40px] rounded-full" />
                                <div className="">
                                    <h2 className="font-bold text-[1rem]">Lorem ipsum dolor</h2>
                                    <p className="text-[0.7rem]">1 day remaining</p>
                                </div>
                            </div>
                            <div className="flex gap-3 mb-3">
                                <img src="/img/bg-dashboard.png" alt="" className="w-[40px] h-[40px] rounded-full" />
                                <div className="">
                                    <h2 className="font-bold text-[1rem]">Lorem ipsum dolor</h2>
                                    <p className="text-[0.7rem]">1 day remaining</p>
                                </div>
                            </div>
                            <div className="text-end">
                                <h5 className="text-[#f96d46] font-semibold text-[0.7rem]">See All My Order</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </AdsLayout>
        </>
    );
}

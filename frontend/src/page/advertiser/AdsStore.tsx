import AdsLayout from "../../layouts/Layout";

const adsData = [
    { id: 1, name: "Adasdasdas 1", platform: "Instagram", duration: "3 days", price: "$15 USD" },
    { id: 2, name: "Ad 2", platform: "Facebook", duration: "5 days", price: "$25 USD" },
    { id: 3, name: "Ad 3", platform: "Twitter", duration: "2 days", price: "$10 USD" },
    { id: 4, name: "Ad 4", platform: "LinkedIn", duration: "7 days", price: "$35 USD" },
    { id: 5, name: "Ad 5", platform: "TikTok", duration: "4 days", price: "$20 USD" },
    { id: 6, name: "Ad 6", platform: "Snapchat", duration: "6 days", price: "$30 USD" },
];

export default function Component() {
    return (
        <AdsLayout>
            <h1 className="text-4xl font-bold mb-2" >Store</h1>
            <div className="grid grid-cols-3 gap-4">
                {adsData.map((ad) => (
                    <div key={ad.id} className="card bg-white h-auto p-5 text-ce w-full rounded-2xl">
                        <div className="text-center flex justify-center">
                            <img src="/img/bg-dashboard.png" alt="" className="w-[100%] h-[50%] rounded-2xl" />
                        </div>
                        <div className="flex gap-4">
                            <div className="flex flex-col w-full mt-2">
                                <h1 className="text-4xl font-bold">{ad.name}</h1>
                                <div className="mt-2 text-xl grid grid-cols-2 gap-1">
                                    <p>{ad.platform}</p>
                                    <div className="text-end">
                                        <p>{ad.duration}</p>
                                    </div>
                                </div>
                                <p>{ad.price}</p>
                                <a href={`/advertiser/Store/detail/${ad.id}`} className="bg-[#f96d46] mt-2 text-white p-2 rounded-full text-center">
                                    Details
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </AdsLayout>
    );
}
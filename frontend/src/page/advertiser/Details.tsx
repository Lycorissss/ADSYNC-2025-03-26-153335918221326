import AdsLayout from "../../layouts/Layout";
export default function Details() {
    return (
        <>
            <AdsLayout>
                <div className="card w-full rounded-2xl bg-white p-5">
                    <div className="grid grid-cols-3 gap-4">
                        <img src="/img/bg-dashboard.png" alt="" className="rounded-2xl h-full object-cover" />
                        <div className="col-span-2">
                            <div className="">
                                <h1 className="font-bold text-3xl mb-2">Nama Judul</h1>
                                <div className="grid grid-cols-2">
                                    <p>Instagram</p>
                                    <p className="text-end">$300 USD</p>
                                </div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero laboriosam et quis nobis. Voluptate temporibus veniam fugiat laudantium quisquam, voluptates eius et inventore quia veritatis laboriosam ducimus est quo iste!</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero laboriosam et quis nobis. Voluptate temporibus veniam fugiat laudantium quisquam, voluptates eius et inventore quia veritatis laboriosam ducimus est quo iste!</p>
                                <p>Lor em ipsum dolor sit amet, consectetur adipisicing elit. Vero laboriosam et quis nobis. Voluptate temporibus veniam fugiat laudantium quisquam, voluptates eius et inventore quia veritatis laboriosam ducimus est quo iste!</p>
                            </div>
                            <div className="flex justify-end mt-1">
                                <a href="" className="bg-orange-600 p-2 rounded-full text-white text-[15px]">Order Now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </AdsLayout>
        </>
    );
}

import SallerLayout from "../../../layouts/SallerLayout"
const services = [
    {
        s_id: 1,
        s_title: "Promo Instagram Influencer",
        s_platform: "Instagram",
        s_price: 150000,
        s_category: "Fashion",
        s_is_active: true,
    },
    {
        s_id: 2,
        s_title: "TikTok Viral Marketing",
        s_platform: "TikTok",
        s_price: 200000,
        s_category: "Technology",
        s_is_active: false,
    },
    {
        s_id: 3,
        s_title: "Facebook Ads Service",
        s_platform: "Facebook",
        s_price: 120000,
        s_category: "Food",
        s_is_active: true,
    },
];

const priceBodyTemplate = (rowData: any) => `$${rowData.s_price.toLocaleString()}`;

const statusBodyTemplate = (rowData: any) => (
    <Tag severity={rowData.s_is_active ? "success" : "danger"}>
        {rowData.s_is_active ? "Active" : "Inactive"}
    </Tag>
);

export default function AdsSaller() {
    return (
        <>
            <SallerLayout>
                <a href="/saller/ads/create" className="p-2 bg-[#f96d46] rounded-full text-white">
                    + Make Offer
                </a>
                <div className="rounded-2xl overflow-auto scrollbar-hide mt-6">
                    <DataTable value={services} stripedRows paginator rows={5}>
                        <Column field="s_title" header="Service Title" sortable />
                        <Column field="s_platform" header="Platform" sortable />
                        <Column field="s_category" header="Category" sortable />
                        <Column field="s_price" header="Price" body={priceBodyTemplate} sortable />
                        <Column field="s_is_active" header="Status" body={statusBodyTemplate} sortable />
                        <Column
                                header="Action"
                                body={(rowData) => (
                                    <div className="flex gap-2">
                                        <a href={`/edit/${rowData.om_id}`} className="text-blue-500 hover:underline">Edit</a>
                                        <a href={`/details/${rowData.om_id}`} className="text-green-500 hover:underline">Details</a>
                                    </div>
                                )}
                            />
                    </DataTable>
                </div>
            </SallerLayout>
        </>
    );
}
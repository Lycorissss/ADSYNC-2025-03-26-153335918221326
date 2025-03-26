import AdsLayout from "../../layouts/Layout";
interface Order {
    om_id: number;
    om_uid_order: string;
    om_s_id: number;
    om_seller: string;
    om_buyer: string;
    om_price: number;
    om_commission: number;
    om_status: string;
    om_start_date: string;
    om_end_date: string;
    om_requirements: string;
    om_created_at: string;
    om_updated_at: string;
    om_completed_at?: string;
}

export default function Order() {
    const [orders, setOrders] = useState<Order[]>([]);

    useEffect(() => {
        // Simulasi data yang akan diambil dari API atau database
        const mockData: Order[] = [
            {
                om_id: 1,
                om_uid_order: "ORD123456",
                om_s_id: 101,
                om_seller: "Seller A",
                om_buyer: "Buyer X",
                om_price: 200.0,
                om_commission: 10.0,
                om_status: "Pending",
                om_start_date: "2024-03-01",
                om_end_date: "2024-03-10",
                om_requirements: "Banner Ads 300x250",
                om_created_at: "2024-02-28",
                om_updated_at: "2024-02-28",
                om_completed_at: "",
            },
            {
                om_id: 2,
                om_uid_order: "ORD123457",
                om_s_id: 102,
                om_seller: "Seller B",
                om_buyer: "Buyer Y",
                om_price: 350.5,
                om_commission: 15.0,
                om_status: "In Progress",
                om_start_date: "2024-03-05",
                om_end_date: "2024-03-15",
                om_requirements: "Video Ads 15s",
                om_created_at: "2024-03-02",
                om_updated_at: "2024-03-06",
                om_completed_at: "",
            },
            {
                om_id: 2,
                om_uid_order: "ORD123457",
                om_s_id: 102,
                om_seller: "Seller B",
                om_buyer: "Buyer Y",
                om_price: 350.5,
                om_commission: 15.0,
                om_status: "In Progress",
                om_start_date: "2024-03-05",
                om_end_date: "2024-03-15",
                om_requirements: "Video Ads 15s",
                om_created_at: "2024-03-02",
                om_updated_at: "2024-03-06",
                om_completed_at: "",
            },
            {
                om_id: 2,
                om_uid_order: "ORD123457",
                om_s_id: 102,
                om_seller: "Seller B",
                om_buyer: "Buyer Y",
                om_price: 350.5,
                om_commission: 15.0,
                om_status: "In Progress",
                om_start_date: "2024-03-05",
                om_end_date: "2024-03-15",
                om_requirements: "Video Ads 15s",
                om_created_at: "2024-03-02",
                om_updated_at: "2024-03-06",
                om_completed_at: "",
            },
            {
                om_id: 2,
                om_uid_order: "ORD123457",
                om_s_id: 102,
                om_seller: "Seller B",
                om_buyer: "Buyer Y",
                om_price: 350.5,
                om_commission: 15.0,
                om_status: "In Progress",
                om_start_date: "2024-03-05",
                om_end_date: "2024-03-15",
                om_requirements: "Video Ads 15s",
                om_created_at: "2024-03-02",
                om_updated_at: "2024-03-06",
                om_completed_at: "",
            },
            {
                om_id: 2,
                om_uid_order: "ORD123457",
                om_s_id: 102,
                om_seller: "Seller B",
                om_buyer: "Buyer Y",
                om_price: 350.5,
                om_commission: 15.0,
                om_status: "In Progress",
                om_start_date: "2024-03-05",
                om_end_date: "2024-03-15",
                om_requirements: "Video Ads 15s",
                om_created_at: "2024-03-02",
                om_updated_at: "2024-03-06",
                om_completed_at: "",
            },
            {
                om_id: 2,
                om_uid_order: "ORD123457",
                om_s_id: 102,
                om_seller: "Seller B",
                om_buyer: "Buyer Y",
                om_price: 350.5,
                om_commission: 15.0,
                om_status: "In Progress",
                om_start_date: "2024-03-05",
                om_end_date: "2024-03-15",
                om_requirements: "Video Ads 15s",
                om_created_at: "2024-03-02",
                om_updated_at: "2024-03-06",
                om_completed_at: "",
            },
            {
                om_id: 2,
                om_uid_order: "ORD123457",
                om_s_id: 102,
                om_seller: "Seller B",
                om_buyer: "Buyer Y",
                om_price: 350.5,
                om_commission: 15.0,
                om_status: "In Progress",
                om_start_date: "2024-03-05",
                om_end_date: "2024-03-15",
                om_requirements: "Video Ads 15s",
                om_created_at: "2024-03-02",
                om_updated_at: "2024-03-06",
                om_completed_at: "",
            },
            {
                om_id: 2,
                om_uid_order: "ORD123457",
                om_s_id: 102,
                om_seller: "Seller B",
                om_buyer: "Buyer Y",
                om_price: 350.5,
                om_commission: 15.0,
                om_status: "In Progress",
                om_start_date: "2024-03-05",
                om_end_date: "2024-03-15",
                om_requirements: "Video Ads 15s",
                om_created_at: "2024-03-02",
                om_updated_at: "2024-03-06",
                om_completed_at: "",
            },
            {
                om_id: 2,
                om_uid_order: "ORD123457",
                om_s_id: 102,
                om_seller: "Seller B",
                om_buyer: "Buyer Y",
                om_price: 350.5,
                om_commission: 15.0,
                om_status: "In Progress",
                om_start_date: "2024-03-05",
                om_end_date: "2024-03-15",
                om_requirements: "Video Ads 15s",
                om_created_at: "2024-03-02",
                om_updated_at: "2024-03-06",
                om_completed_at: "",
            },
            {
                om_id: 2,
                om_uid_order: "ORD123457",
                om_s_id: 102,
                om_seller: "Seller B",
                om_buyer: "Buyer Y",
                om_price: 350.5,
                om_commission: 15.0,
                om_status: "In Progress",
                om_start_date: "2024-03-05",
                om_end_date: "2024-03-15",
                om_requirements: "Video Ads 15s",
                om_created_at: "2024-03-02",
                om_updated_at: "2024-03-06",
                om_completed_at: "",
            },
            {
                om_id: 2,
                om_uid_order: "ORD123457",
                om_s_id: 102,
                om_seller: "Seller B",
                om_buyer: "Buyer Y",
                om_price: 350.5,
                om_commission: 15.0,
                om_status: "In Progress",
                om_start_date: "2024-03-05",
                om_end_date: "2024-03-15",
                om_requirements: "Video Ads 15s",
                om_created_at: "2024-03-02",
                om_updated_at: "2024-03-06",
                om_completed_at: "",
            },
            {
                om_id: 2,
                om_uid_order: "ORD123457",
                om_s_id: 102,
                om_seller: "Seller B",
                om_buyer: "Buyer Y",
                om_price: 350.5,
                om_commission: 15.0,
                om_status: "In Progress",
                om_start_date: "2024-03-05",
                om_end_date: "2024-03-15",
                om_requirements: "Video Ads 15s",
                om_created_at: "2024-03-02",
                om_updated_at: "2024-03-06",
                om_completed_at: "",
            },
        ];

        setOrders(mockData);
    }, []);
    return (
        <>
            <AdsLayout>
                <div className="">
                    <h2 className="text-xl font-bold mb-4">Order List</h2>
                    <div className="overflow-auto scrollbar-hide rounded-2xl">
                        <DataTable paginator rows={5} value={orders} showGridlines tableStyle={{ Width: "55rem" }}>
                            <Column field="om_uid_order" header="Order ID"></Column>
                            <Column field="om_seller" header="Seller"></Column>
                            <Column field="om_buyer" header="Buyer"></Column>
                            <Column field="om_price" header="Price ($)"></Column>
                            <Column field="om_commission" header="Commission ($)"></Column>
                            <Column field="om_status" header="Status"></Column>
                            <Column field="om_start_date" header="Start Date"></Column>
                            <Column field="om_end_date" header="End Date"></Column>
                            <Column field="om_requirements" header="Requirements"></Column>
                            <Column field="om_created_at" header="Created At"></Column>
                            <Column field="om_updated_at" header="Updated At"></Column>
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
                </div>
            </AdsLayout>
        </>
    );
}
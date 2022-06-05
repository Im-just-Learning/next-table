import DashboardLayout from "../layout/dashboardLayout";
import CallTable from "../components/call-table/call-table";

const Call = () => {
    return(
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
            <div className="py-10">
                <CallTable/>
            </div>
        </div>
    )
};

export default Call;

Call.getLayout = function getLayout(page){
    return (
        <DashboardLayout>
            {page}
        </DashboardLayout>
    )
}
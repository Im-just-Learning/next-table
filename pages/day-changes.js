import DashboardLayout from "../layout/dashboardLayout";
import ListChanges from "../components/day-changes/listChanges";

const DayChange = () => {
    return(
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
            <div className="py-10">
                <ListChanges/>
            </div>
        </div>
    )
};

export default DayChange;

DayChange.getLayout = function getLayout(page){
    return (
        <DashboardLayout>
            {page}
        </DashboardLayout>
    )
}
import DashboardLayout from "../layout/dashboardLayout";
import GroupsTable from "../components/groups/table";

const Groups = () => {
    return(
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
            <div className="py-10">
                <GroupsTable/>
            </div>
        </div>
    )
};

export default Groups;

Groups.getLayout = function getLayout(page){
    return (
        <DashboardLayout>
            {page}
        </DashboardLayout>
    )
}
import DashboardLayout from "../layout/dashboardLayout";
import GroupsTable from "../components/groups/table";
import ListTable from "../components/lessons-table/listTable";
import {useContext, useEffect} from "react";
import {Context} from "./_app";

const Lessons = () => {
    const {store} = useContext(Context);

    useEffect(()=>{
        store.groupsGetAll()
    }, [])

    return(
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
            <div className="py-10">
                <ListTable/>
            </div>
        </div>
    )
};

export default Lessons;

Lessons.getLayout = function getLayout(page){
    return (
        <DashboardLayout>
            {page}
        </DashboardLayout>
    )
}
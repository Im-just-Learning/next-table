import OneTable from "./oneTable";
import Selector from "./selector";
import {observer} from "mobx-react-lite";
import {useContext, useEffect, useState} from "react";
import {Context} from "../../pages/_app";

const ListTable = ()=>{
    const {store} = useContext(Context);
    useEffect(()=>{
        store.groupsGetAll()
    }, [store.currentGroup])

    const pairsOnWeek = store.lessonsGet(store.currentGroup)

    console.log(pairsOnWeek)

    return (
        <>
            <div className="px-4 sm:px-6 lg:px-8">
                <div className="lg:flex lg:items-center">
                    <div className="lg:flex-auto">
                        <h1 className="text-xl font-semibold text-gray-900">Расписание занятий - <span className='text-teal-400'>{}</span></h1>
                        <p className="mt-2 text-sm text-gray-700">
                            Список, включающий день недели, порядок, название предмета, аудиторию и ФИО преподавателя.
                        </p>
                    </div>
                    <div className="flex mt-4 lg:mt-0 lg:ml-16 lg:flex-none">
                        <Selector/>
                        <button
                            type="button"
                            className="ml-3 inline-flex items-center justify-center rounded-md border border-transparent bg-teal-400 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 sm:w-auto"
                        >
                            Добавить
                        </button>
                    </div>
                </div>
                <div className="mt-8 flex flex-col">
                    {/*{
                        pairsOnWeek.map((pairsOnDay) => (
                            <span key={pairsOnDay.id}>{pairsOnDay}</span>*/}
                            {/*/*<OneTable pairsPurDay={pairsOnDay} key={pairsOnDay.id}/>*/}
                        {/*))
                    }*/}
                </div>
            </div>
        </>

    )
}
export default observer(ListTable)
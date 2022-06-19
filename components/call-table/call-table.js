import Selector from "./selector";
import {useRef, useState, Fragment, useContext, useEffect} from "react";
import {Dialog, Transition} from "@headlessui/react";
import {Context} from "../../pages/_app";
import {observer} from "mobx-react-lite";
import EditForm from "./editForm";



const GroupsTable = observer(()=>{
    const [open, setOpen] = useState(false)

    const cancelButtonRef = useRef(null)

    const {store} = useContext(Context);

    const currentDay = store.daysOfWeek.filter((dw)=>dw.id === store.currentDayId)[0]

    const [pairsList, setPairsList] = useState(store.callsList);

    useEffect(()=>{
        store.callsGetDay(currentDay.id)
    }, [])

    return (
        <>
            <div className="px-4 sm:px-6 lg:px-8">
                <div className="lg:flex lg:items-center">
                    <div className="lg:flex-auto">
                        <h1 className="text-xl font-semibold text-gray-900">Расписание звонков - <span className='text-teal-400'>{currentDay.name}</span></h1>
                        <p className="mt-2 text-sm text-gray-700">
                            Список, включающий порядок и время начала/окончания ленты.
                        </p>
                    </div>
                    <div className="flex mt-4 lg:mt-0 lg:ml-16 lg:flex-none">
                        <Selector/>
                        <button
                            onClick={()=>setOpen(true)}
                            type="button"
                            className="ml-3 inline-flex items-center justify-center rounded-md border border-transparent bg-teal-400 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 sm:w-auto"
                        >
                            Редактировать
                        </button>
                    </div>
                </div>
                <div className="mt-8 flex flex-col">
                    <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 rounded-lg px-3 bg-white">
                                { !pairsList || empty(pairsList.listItems)?
                                        <span className=''>Список расписания пуст</span>:
                                <table className="min-w-full divide-y divide-teal-300">
                                    <thead className="bg-white">
                                    <tr>
                                        <th scope="col" className="py-3.5 pl-4 pr-3 text-center text-sm font-semibold text-gray-900 sm:pl-6">
                                            Лента
                                        </th>
                                        <th scope="col" className="px-3 py-3.5 text-center text-sm font-semibold text-gray-900">
                                            Время начала
                                        </th>
                                        <th scope="col" className="relative py-3.5 pl-3 pr-4 text-center text-sm font-semibold text-gray-900 sm:pr-6">
                                            Время окончания
                                        </th>
                                    </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-200 bg-white">
                                        {pairsList.listItems.map((pair) => (
                                            <tr key={pair.num}>
                                                <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm text-center text-gray-900 sm:pl-6">{pair.position}</td>
                                                <td className="whitespace-nowrap px-3 py-4 text-sm text-center text-gray-900">{pair.startTime}</td>
                                                <td className="whitespace-nowrap py-4 pl-3 pr-4 text-sm text-center text-gray-900 sm:pr-6">{pair.endTime}</td>
                                            </tr>
                                        ))
                                    }
                                    </tbody>
                                </table>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Transition.Root show={open} as={Fragment}>
                <Dialog as="div" className="fixed z-10 inset-0 overflow-y-auto" initialFocus={cancelButtonRef}
                        onClose={setOpen}>
                    <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"/>
                        </Transition.Child>

                        {/* This element is to trick the browser into centering the modal contents. */}
                        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
            &#8203;
          </span>
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            enterTo="opacity-100 translate-y-0 sm:scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        >
                            <div
                                className="relative inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-3xl sm:w-full sm:p-6">
                                <EditForm callsList={pairsList} dayName={currentDay.name}/>
                            </div>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition.Root>
        </>
    )
})


export default GroupsTable
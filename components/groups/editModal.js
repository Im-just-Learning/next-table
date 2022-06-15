/* This example requires Tailwind CSS v2.0+ */
import {Fragment, useContext, useEffect, useRef, useState} from 'react'
import {Dialog, Transition} from '@headlessui/react'
import {ExclamationIcon} from '@heroicons/react/outline'
import {Context} from "../../pages/_app";
import {observer} from "mobx-react-lite";

export default observer(GroupEditModal)
function GroupEditModal({show, group}) {

    const [groupNumber, setGroupNumber] = useState(group.groupNumber);
    const [yearOfStudy, setYearOfStudy] = useState(group.yearOfStudy);

    const {store} = useContext(Context)
    const saveForm = (group, groupNumber, yearOfStudy)=>{
        store.groupEdit(group.id, groupNumber, yearOfStudy)
        setClose(false)
    }
    const setClose = (bool) => {
        store.setEditShow(bool)
    }

    const cancelButtonRef = useRef(null)

    return (
        <Transition.Root show={show} as={Fragment}>
            <Dialog as="div" className="fixed z-10 inset-0 overflow-y-auto" initialFocus={cancelButtonRef}
                    onClose={()=>setClose(false)}>
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
                            <form className="space-y-8 divide-y divide-gray-200">
                                <div className="space-y-8 divide-y divide-gray-200 sm:space-y-5">
                                    <div>
                                        <div>
                                            <h3 className="text-lg leading-6 font-medium text-gray-900">Добавление группы</h3>
                                        </div>

                                        <div className="mt-6 sm:mt-5 space-y-6 sm:space-y-5">
                                            <div
                                                className="sm:grid sm:grid-cols-4 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                                                <div
                                                    className="mt-1 sm:mt-0 sm:col-span-4 sm:grid sm:grid-cols-2 gap-4">
                                                    <div className="sm:pt-2">
                                                        <label htmlFor="groupNumber"
                                                               className="block text-sm font-medium text-gray-700">
                                                            Номер
                                                        </label>
                                                        <div className="mt-1">
                                                            <input
                                                                type="text"
                                                                name="groupNumber"
                                                                id="groupNumber"
                                                                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                                                placeholder="Номер группы"
                                                                value={groupNumber}
                                                                onChange={e=>setGroupNumber(e.target.value)}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="sm:pt-2">
                                                        <label htmlFor="yearOfStudy"
                                                               className="block text-sm font-medium text-gray-700">
                                                            Курс
                                                        </label>
                                                        <div className="mt-1">
                                                            <input
                                                                type="text"
                                                                name="yearOfStudy"
                                                                id="yearOfStudy"
                                                                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                                                placeholder="Курс"
                                                                value={yearOfStudy}
                                                                onChange={e=>setYearOfStudy(e.target.value)}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="pt-5">
                                    <div className="flex justify-end">
                                        <button

                                            type="button"
                                            className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-400"
                                        >
                                            Отменить
                                        </button>
                                        <button
                                            onClick={()=>saveForm(groupNumber, yearOfStudy)}
                                            type="button"
                                            className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-teal-400 hover:bg-teal-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-400"
                                        >
                                            Ок
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </Transition.Child>
                </div>
            </Dialog>
        </Transition.Root>
    )
}

import OneTable from "./oneTable";
import Selector from "./selector";
import {observer} from "mobx-react-lite";
import {useContext, useEffect, useState, Fragment, useRef} from "react";
import {Context} from "../../pages/_app";
import {Dialog, Transition} from "@headlessui/react";
import AddForm from "./addForm";

const ListTable = ()=>{

    const {store} = useContext(Context);

    const [open, setOpen] = useState(false)

    const [list, setList] = useState(store.lessonsList)

    const cancelButtonRef = useRef(null)

    useEffect(()=>{
        setOpen(false)
        setList(store.lessonsList)
    },[store.lessonsList])

    return (
        <>
            <div className="px-4 sm:px-6 lg:px-8">
                <div className="lg:flex lg:items-center">
                    <div className="lg:flex-auto">
                        <h1 className="text-xl font-semibold text-gray-900">Расписание занятий - <span className='text-teal-400'>{store.currentGroup.groupNumber}</span></h1>
                        <p className="mt-2 text-sm text-gray-700">
                            Список, включающий день недели, порядок, название предмета, аудиторию и ФИО преподавателя.
                        </p>
                    </div>
                    <div className="flex mt-4 lg:mt-0 lg:ml-16 lg:flex-none">
                        <Selector/>
                        <button
                            onClick={()=>setOpen(true)}
                            type="button"
                            className="ml-3 inline-flex items-center justify-center rounded-md border border-transparent bg-teal-400 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 sm:w-auto"
                        >
                            Добавить
                        </button>
                    </div>
                </div>
                <div className="mt-8 flex flex-col">
                    {list.length? list.map((lesson)=>(
                        <OneTable pairsPurDay={lesson} key={lesson.id}/>
                    )): null}
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
                                <AddForm/>
                            </div>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition.Root>

        </>
    )
}
export default observer(ListTable)
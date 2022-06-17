import React, {useEffect, useState} from 'react';
import {Fragment, useRef, useContext} from "react";
import {Dialog, Transition} from "@headlessui/react";
import EditForm from "./editForm";
import {Context} from "../../pages/_app";

const OneGroup = ({group}) => {
    const {store} = useContext(Context)

    const [show, setShow] = useState(false);
    const cancelButtonRef = useRef(null)

    useEffect(()=>{
        setShow(false)
    },[group])

    return (
        <>
            <tr key={group.id}>
                <td className="whitespace-nowrap py-4 pl-4 text-sm text-center text-gray-900 sm:pl-6">
                    {group.groupNumber}
                </td>
                <td className="whitespace-nowrap px-3 py-4 text-sm text-right text-gray-500">{group.yearOfStudy}</td>
                <td className="whitespace-nowrap px-3 py-4 text-sm text-right text-gray-500 pr-4 sm:pr-6">
                    <button
                        onClick={()=>setShow(true)}
                        type='button'
                        className="text-sm text-teal-500 hover:text-teal-600">
                        Редактировать
                    </button>
                </td>
            </tr>
            {/*modal*/}
            <Transition.Root show={show} as={Fragment}>
                <Dialog as="div" className="fixed z-10 inset-0 overflow-y-auto" initialFocus={cancelButtonRef}
                        onClose={()=>setShow(false)}>
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
                                <EditForm groupData={group}/>
                            </div>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition.Root>
        </>
    );
};

export default OneGroup;

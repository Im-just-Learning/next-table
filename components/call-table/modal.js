/* This example requires Tailwind CSS v2.0+ */
import {Fragment, useRef, useState} from 'react'
import {Dialog, Transition} from '@headlessui/react'
import {ExclamationIcon} from '@heroicons/react/outline'

export default function CallModal() {
    const [open, setOpen] = useState(true)

    const cancelButtonRef = useRef(null)

    return (
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
                            <form className="space-y-8 divide-y divide-gray-200">
                                <div className="space-y-8 divide-y divide-gray-200 sm:space-y-5">
                                    <div>
                                        <div>
                                            <h3 className="text-lg leading-6 font-medium text-gray-900">Редактирование расписания звонков - Понедельник</h3>
                                        </div>

                                        <div className="mt-6 sm:mt-5 space-y-6 sm:space-y-5">
                                            <div
                                                className="sm:grid sm:grid-cols-4 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                                                <label htmlFor="about"
                                                       className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                                                    Лента 1
                                                </label>
                                                <div className="mt-1 sm:mt-0 sm:col-span-2 sm:grid sm:grid-cols-2 gap-4">
                                                    <div className="sm:pt-2">
                                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                                            Время начала
                                                        </label>
                                                        <div className="mt-1">
                                                            <input
                                                                type="text"
                                                                name="email"
                                                                id="email"
                                                                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                                                placeholder="you@example.com"
                                                                value='8:30'
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="sm:pt-2">
                                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                                            Время окончания
                                                        </label>
                                                        <div className="mt-1">
                                                            <input
                                                                type="text"
                                                                name="email"
                                                                id="email"
                                                                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                                                placeholder="you@example.com"
                                                                value='10:05'
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="mt-1 sm:mt-0 sm:col-span-1">
                                                    <div className="sm:pt-7 ">
                                                        <button
                                                            type="button"
                                                            className="mt-1 bg-white py-2 px-4 border border-red-300 rounded-md shadow-sm text-sm font-medium text-red-700 hover:bg-red-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-400"
                                                        >
                                                            Удалить
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mt-6 sm:mt-5 space-y-6 sm:space-y-5">
                                            <div
                                                className="sm:grid sm:grid-cols-4 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                                                <label htmlFor="about"
                                                       className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                                                    Лента 2
                                                </label>
                                                <div className="mt-1 sm:mt-0 sm:col-span-2 sm:grid sm:grid-cols-2 gap-4">
                                                    <div className="sm:pt-2">
                                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                                            Время начала
                                                        </label>
                                                        <div className="mt-1">
                                                            <input
                                                                type="text"
                                                                name="email"
                                                                id="email"
                                                                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                                                placeholder="you@example.com"
                                                                value='10:15'
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="sm:pt-2">
                                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                                            Время окончания
                                                        </label>
                                                        <div className="mt-1">
                                                            <input
                                                                type="text"
                                                                name="email"
                                                                id="email"
                                                                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                                                placeholder="you@example.com"
                                                                value='11:50'
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="mt-1 sm:mt-0 sm:col-span-1">
                                                    <div className="sm:pt-7 ">
                                                        <button
                                                            type="button"
                                                            className="mt-1 bg-white py-2 px-4 border border-red-300 rounded-md shadow-sm text-sm font-medium text-red-700 hover:bg-red-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-400"
                                                        >
                                                            Удалить
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mt-6 sm:mt-5 space-y-6 sm:space-y-5">
                                            <div
                                                className="sm:grid sm:grid-cols-4 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                                                <label htmlFor="about"
                                                       className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                                                    Лента 3
                                                </label>
                                                <div className="mt-1 sm:mt-0 sm:col-span-2 sm:grid sm:grid-cols-2 gap-4">
                                                    <div className="sm:pt-2">
                                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                                            Время начала
                                                        </label>
                                                        <div className="mt-1">
                                                            <input
                                                                type="text"
                                                                name="email"
                                                                id="email"
                                                                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                                                placeholder="you@example.com"
                                                                value='12:30'
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="sm:pt-2">
                                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                                            Время окончания
                                                        </label>
                                                        <div className="mt-1">
                                                            <input
                                                                type="text"
                                                                name="email"
                                                                id="email"
                                                                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                                                placeholder="you@example.com"
                                                                value='13:05'
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="mt-1 sm:mt-0 sm:col-span-1">
                                                    <div className="sm:pt-7 ">
                                                        <button
                                                            type="button"
                                                            className="mt-1 bg-white py-2 px-4 border border-red-300 rounded-md shadow-sm text-sm font-medium text-red-700 hover:bg-red-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-400"
                                                        >
                                                            Удалить
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mt-6 sm:mt-5 space-y-6 sm:space-y-5">
                                            <div
                                                className="sm:grid sm:grid-cols-4 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                                                <label htmlFor="about"
                                                       className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                                                    Лента 4
                                                </label>
                                                <div className="mt-1 sm:mt-0 sm:col-span-2 sm:grid sm:grid-cols-2 gap-4">
                                                    <div className="sm:pt-2">
                                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                                            Время начала
                                                        </label>
                                                        <div className="mt-1">
                                                            <input
                                                                type="text"
                                                                name="email"
                                                                id="email"
                                                                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                                                placeholder="you@example.com"
                                                                value='13:15'
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="sm:pt-2">
                                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                                            Время окончания
                                                        </label>
                                                        <div className="mt-1">
                                                            <input
                                                                type="text"
                                                                name="email"
                                                                id="email"
                                                                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                                                placeholder="you@example.com"
                                                                value='14:50'
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="mt-1 sm:mt-0 sm:col-span-1">
                                                    <div className="sm:pt-7 ">
                                                        <button
                                                            type="button"
                                                            className="mt-1 bg-white py-2 px-4 border border-red-300 rounded-md shadow-sm text-sm font-medium text-red-700 hover:bg-red-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-400"
                                                        >
                                                            Удалить
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mt-6 sm:mt-5 space-y-6 sm:space-y-5">
                                            <div
                                                className="sm:grid sm:grid-cols-4 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                                                <label htmlFor="about"
                                                       className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                                                    Лента 5
                                                </label>
                                                <div className="mt-1 sm:mt-0 sm:col-span-2 sm:grid sm:grid-cols-2 gap-4">
                                                    <div className="sm:pt-2">
                                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                                            Время начала
                                                        </label>
                                                        <div className="mt-1">
                                                            <input
                                                                type="text"
                                                                name="email"
                                                                id="email"
                                                                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                                                placeholder="you@example.com"
                                                                value='15:00'
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="sm:pt-2">
                                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                                            Время окончания
                                                        </label>
                                                        <div className="mt-1">
                                                            <input
                                                                type="text"
                                                                name="email"
                                                                id="email"
                                                                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                                                placeholder="you@example.com"
                                                                value='16:50'
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="mt-1 sm:mt-0 sm:col-span-1">
                                                    <div className="sm:pt-7 ">
                                                        <button
                                                            type="button"
                                                            className="mt-1 bg-white py-2 px-4 border border-red-300 rounded-md shadow-sm text-sm font-medium text-red-700 hover:bg-red-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-400"
                                                        >
                                                            Удалить
                                                        </button>
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
                                            type="submit"
                                            className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-400 hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400"
                                        >
                                            Добавить ленту
                                        </button>
                                        <button
                                            type="submit"
                                            className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-teal-400 hover:bg-teal-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-400"
                                        >
                                            Сохранить
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

import React from 'react';

function EditForm({callsList, dayName}) {
    return (
        <form className="space-y-8 divide-y divide-gray-200">
            <div className="space-y-8 divide-y divide-gray-200 sm:space-y-5">
                <div>
                    <div>
                        <h3 className="text-lg leading-6 font-medium text-gray-900">Редактирование расписания звонков - {dayName}</h3>
                    </div>

                    {
                        callsList.map((item)=>(
                            <div className="mt-6 sm:mt-5 space-y-6 sm:space-y-5" key={item.id}>
                                <div
                                    className="sm:grid sm:grid-cols-4 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                                    <label htmlFor="about"
                                           className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                                        Лента {item.position}
                                    </label>
                                    <div className="mt-1 sm:mt-0 sm:col-span-2 sm:grid sm:grid-cols-2 gap-4">
                                        <div className="sm:pt-2">
                                            <label htmlFor={`start-time-${item.position}`} className="block text-sm font-medium text-gray-700">
                                                Время начала
                                            </label>
                                            <div className="mt-1">
                                                <input
                                                    type="text"
                                                    name={`start-time-${item.position}`}
                                                    id={`start-time-${item.position}`}
                                                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                                    placeholder="Время начала"
                                                    value={item.startTime}
                                                />
                                            </div>
                                        </div>
                                        <div className="sm:pt-2">
                                            <label htmlFor={`end-time-${item.position}`} className="block text-sm font-medium text-gray-700">
                                                Время окончания
                                            </label>
                                            <div className="mt-1">
                                                <input
                                                    type="text"
                                                    name={`end-time-${item.position}`}
                                                    id={`end-time-${item.position}`}
                                                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                                    placeholder="Время окончания"
                                                    value={item.endTime}
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
                        ))
                    }
                </div>
            </div>

            <div className="pt-5">
                <div className="flex justify-end">
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
    );
}

export default EditForm;
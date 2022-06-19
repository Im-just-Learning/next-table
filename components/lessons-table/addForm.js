import React, {useState, useContext, useEffect} from 'react';
import {Context} from "../../pages/_app";

function AddForm() {

    const {store} = useContext(Context);

    const [dayOfWeek, setDayOfWeek] = useState('')

    const saveForm = (dayName)=>{
        store.lessonsDayAdd(dayName)
    }


    return (
        <form className="space-y-8 divide-y divide-gray-200">
            <div className="space-y-8 divide-y divide-gray-200 sm:space-y-5">
                <div>
                    <div>
                        <h3 className="text-lg leading-6 font-medium text-gray-900">Добавление дня в расписание</h3>
                    </div>

                    <div className="mt-6 sm:mt-5 space-y-6 sm:space-y-5">
                        <div
                            className="sm:grid sm:grid-cols-2 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                            <div className="mt-1 sm:mt-0 sm:col-span-2">
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                    День недели
                                </label>
                                <div className="sm:pt-2">
                                    <div className="mt-1">
                                        <input
                                            type="text"
                                            name="day"
                                            id="day"
                                            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                            placeholder="День недели..."
                                            value={dayOfWeek}
                                            onChange={(e)=>setDayOfWeek(e.target.value)}
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
                        onClick={()=>saveForm(dayOfWeek)}
                        type="button"
                        className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-teal-400 hover:bg-teal-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-400"
                    >
                        Сохранить
                    </button>
                </div>
            </div>
        </form>
    );
}

export default AddForm;

/*
<form className="space-y-8 divide-y divide-gray-200">
    <div className="space-y-8 divide-y divide-gray-200 sm:space-y-5">
        <div>
            <div>
                <h3 className="text-lg leading-6 font-medium text-gray-900">Редактирование занятий на
                    понедельник</h3>
            </div>

            <div className="mt-6 sm:mt-5 space-y-6 sm:space-y-5">
                <div
                    className="sm:grid sm:grid-cols-4 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                    <label htmlFor="about"
                           className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                        Лента 1
                    </label>
                    <div className="mt-1 sm:mt-0 sm:col-span-2">
                        <div className="sm:pt-2">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                Аудитория
                            </label>
                            <div className="mt-1">
                                <input
                                    type="text"
                                    name="email"
                                    id="email"
                                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                    placeholder="you@example.com"
                                    value='C-5'
                                />
                            </div>
                        </div>
                        <div className="sm:pt-2">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                Дисциплина
                            </label>
                            <div className="mt-1">
                                <input
                                    type="text"
                                    name="email"
                                    id="email"
                                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                    value='Теория разработки и защиты баз данных'
                                />
                            </div>
                        </div>
                        <div className="sm:pt-2">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                Преподаватель
                            </label>
                            <div className="mt-1">
                                <input
                                    type="text"
                                    name="email"
                                    id="email"
                                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                    value='Ефименков А.Б.'
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
                    <div className="mt-1 sm:mt-0 sm:col-span-2">
                        <div className="sm:pt-2">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                Аудитория
                            </label>
                            <div className="mt-1">
                                <input
                                    type="text"
                                    name="email"
                                    id="email"
                                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                    placeholder="you@example.com"
                                    value='C-5'
                                />
                            </div>
                        </div>
                        <div className="sm:pt-2">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                Дисциплина
                            </label>
                            <div className="mt-1">
                                <input
                                    type="text"
                                    name="email"
                                    id="email"
                                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                    value='Теория разработки и защиты баз данных'
                                />
                            </div>
                        </div>
                        <div className="sm:pt-2">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                Преподаватель
                            </label>
                            <div className="mt-1">
                                <input
                                    type="text"
                                    name="email"
                                    id="email"
                                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                    value='Ефименков А.Б.'
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
                    <div className="mt-1 sm:mt-0 sm:col-span-2">
                        <div className="sm:pt-2">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                Аудитория
                            </label>
                            <div className="mt-1">
                                <input
                                    type="text"
                                    name="email"
                                    id="email"
                                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                    placeholder="you@example.com"
                                    value='К410'
                                />
                            </div>
                        </div>
                        <div className="sm:pt-2">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                Дисциплина
                            </label>
                            <div className="mt-1">
                                <input
                                    type="text"
                                    name="email"
                                    id="email"
                                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                    value='Системное программирование'
                                />
                            </div>
                        </div>
                        <div className="sm:pt-2">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                Преподаватель
                            </label>
                            <div className="mt-1">
                                <input
                                    type="text"
                                    name="email"
                                    id="email"
                                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                    value='Гвоздиевская О.С.'
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
</form>*/

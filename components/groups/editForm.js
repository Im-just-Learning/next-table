import React, {useContext, useState} from 'react';
import {Context} from "../../pages/_app";

const EditForm = ({groupData}) => {
    const {store} = useContext(Context)

    const id = groupData.id

    const [groupNumber, setGroupNumber] = useState(groupData.groupNumber);
    const [yearOfStudy, setYearOfStudy] = useState(groupData.yearOfStudy);

    const updatedGroup = {
        'id': id,
        'groupNumber': groupNumber,
        'yearOfStudy': parseInt(yearOfStudy)
    }

    const saveForm = (id, updatedGroup)=>{
        store.groupEdit(id, updatedGroup)
    }


    return (
        <form className="space-y-8 divide-y divide-gray-200">
            <div className="space-y-8 divide-y divide-gray-200 sm:space-y-5">
                <div>
                    <div>
                        <h3 className="text-lg leading-6 font-medium text-gray-900">Редактирование группы <span className='text-teal-400'>{groupData.groupNumber}</span></h3>
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
                                            required
                                            type="text"
                                            name="groupNumber"
                                            id="groupNumber"
                                            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                            placeholder="Номер группы"
                                            value={groupNumber}
                                            onChange={(e)=>setGroupNumber(e.target.value)}
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
                                            required
                                            type="text"
                                            name="yearOfStudy"
                                            id="yearOfStudy"
                                            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                            placeholder="Курс"
                                            value={yearOfStudy}
                                            onChange={(e)=>setYearOfStudy(e.target.value)}
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
                        onClick={()=>saveForm(id, updatedGroup)}
                        type="button"
                        className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-teal-400 hover:bg-teal-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-400"
                    >
                        Сохранить
                    </button>
                </div>
            </div>
        </form>
    );
};

export default EditForm;

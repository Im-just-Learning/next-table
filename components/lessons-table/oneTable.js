import {useContext} from "react";
import {Context} from "../../pages/_app";

const OneTable = ({pairsPurDay}) => {
    const {store} = useContext(Context);

    return (
        <div className="pb-8 mt-2 -my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 rounded-lg px-3 bg-white">
                    <div className="flex justify-between pt-3 px-2">
                        <span className='text-2xl'>
                            {store.daysOfWeek.filter((dw)=>dw.id === pairsPurDay.dayOfWeek)[0].name}
                        </span>
                        <div className="">
                            <button
                                type="button"
                                className="ml-3 inline-flex items-center justify-center rounded-md border border-transparent bg-blue-400 px-4 py-2 text-sm font-medium text-blue-050 shadow-sm hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 sm:w-auto"
                            >
                                Редактировать
                            </button>
                            <button
                                onClick={()=>store.lessonsDayDelete(pairsPurDay.id)}
                            type="button"
                            className="ml-3 inline-flex items-center justify-center rounded-md border border-transparent bg-red-400 px-4 py-2 text-sm font-medium text-red-050 shadow-sm hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2 sm:w-auto"
                        >
                            Удалить
                        </button>
                        </div>
                    </div>
                    <table className="min-w-full divide-y divide-teal-300">
                        <thead className="bg-white">
                        <tr>
                            <th scope="col" className="py-3.5 pl-4 pr-3 text-center text-sm font-semibold text-gray-900 sm:pl-6">
                                Лента
                            </th>
                            <th scope="col" className="px-3 py-3.5 text-center text-sm font-semibold text-gray-900">
                                Аудитория
                            </th>
                            <th scope="col" className="px-3 py-3.5 text-center text-sm font-semibold text-gray-900">
                                Дисциплина
                            </th>
                            <th scope="col" className="relative py-3.5 pl-3 pr-4 text-center text-sm font-semibold text-gray-900 sm:pr-6">
                                Преподаватель
                            </th>
                        </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200 bg-white">
                        {pairsPurDay.listItems.map((pair) => (
                            <tr key={pair.id}>
                                <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm text-center text-gray-900 sm:pl-6">{pair.position}</td>
                                <td className="whitespace-nowrap px-3 py-4 text-sm text-center text-gray-900">{pair.auditorium}</td>
                                <td className="whitespace-nowrap px-3 py-4 text-sm text-center text-gray-900">{pair.discipline}</td>
                                <td className="whitespace-nowrap py-4 pl-3 pr-4 text-sm text-center text-gray-900 sm:pr-6">{pair.teacher}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default OneTable;

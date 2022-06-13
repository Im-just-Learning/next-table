import Selector from "./selector";
import CallModal from "./modal";

const pairs = [
    { num: '1', startTime: '8:30', endTime: '10:05' },
    { num: '2', startTime: '10:15', endTime: '11:50' },
    { num: '3', startTime: '12:30', endTime: '13:05' },
    { num: '4', startTime: '13:10', endTime: '14:50' },
]
const day = 'Понедельник'

export default function GroupsTable() {
    return (
        <>
            <CallModal></CallModal>
            <div className="px-4 sm:px-6 lg:px-8">
                <div className="lg:flex lg:items-center">
                    <div className="lg:flex-auto">
                        <h1 className="text-xl font-semibold text-gray-900">Расписание звонков - <span className='text-teal-400'>{day}</span></h1>
                        <p className="mt-2 text-sm text-gray-700">
                            Список, включающий порядок и время начала/окончания ленты.
                        </p>
                    </div>
                    <div className="flex mt-4 lg:mt-0 lg:ml-16 lg:flex-none">
                        <Selector/>
                        <button
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
                                    {pairs.map((pair) => (
                                        <tr key={pair.num}>
                                            <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm text-center text-gray-900 sm:pl-6">{pair.num}</td>
                                            <td className="whitespace-nowrap px-3 py-4 text-sm text-center text-gray-900">{pair.startTime}</td>
                                            <td className="whitespace-nowrap py-4 pl-3 pr-4 text-sm text-center text-gray-900 sm:pr-6">{pair.endTime}</td>
                                        </tr>
                                    ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

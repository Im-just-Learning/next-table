import { PencilIcon } from "@heroicons/react/outline";

const groups = [
    { name: 'П-14-18', course: 4 },
    { name: 'П-15-18', course: 4 },
    { name: 'П-16-18', course: 2 },
    { name: 'П-17-18', course: 3 },
]

export default function GroupsTable() {
    return (
        <div className="px-4 sm:px-6 lg:px-8">
            <div className="sm:flex sm:items-center">
                <div className="sm:flex-auto">
                    <h1 className="text-xl font-semibold text-gray-900">Список групп</h1>
                    <p className="mt-2 text-sm text-gray-700">
                        Список, включающий номера и курс всех, добавленных групп.
                    </p>
                </div>
                <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
                    <button
                        type="button"
                        className="ml-3 inline-flex items-center justify-center rounded-md border border-transparent bg-teal-400 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 sm:w-auto"
                    >
                        Добавить группу
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
                                    <th scope="col" className="py-3.5 pl-4 text-center text-sm font-semibold text-gray-900 sm:pl-6">
                                        Номер
                                    </th>
                                    <th scope="col" className="px-3 py-3.5 text-right text-sm font-semibold text-gray-900">
                                        Курс
                                    </th>
                                    <th scope="col" className="py-3.5 pl-3 pr-4 sm:pr-6">
                                        <span className="sr-only">Редактировать</span>
                                    </th>
                                </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200 bg-white">
                                {groups.map((group) => (
                                    <tr key={group.name}>
                                        <td className="whitespace-nowrap py-4 pl-4 text-sm text-center font-medium text-gray-900 sm:pl-6">
                                            {group.name}
                                        </td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-right text-gray-500">{group.course}</td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-right text-gray-500 pr-4 sm:pr-6">
                                            <a href="#" className="text-teal-500 hover:text-teal-600 ">
                                                Редактировать
                                            </a>
                                        </td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

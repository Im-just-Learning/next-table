import { PencilIcon } from "@heroicons/react/outline";
import OneTable from "./day-change-table";
import Selector from "./selector";


const day = '07.06.2022'

export default function ListChanges() {
    return (
        <div className="px-4 sm:px-6 lg:px-8">
            <div className="lg:flex lg:items-center">
                <div className="lg:flex-auto">
                    <h1 className="text-xl font-semibold text-gray-900">Изменение в расписании - <span className='text-teal-400'>{day}</span></h1>
                    <p className="mt-2 text-sm text-gray-700">
                        Список, изменения в расписании на выбранную дату.
                    </p>
                </div>
                <div className="flex mt-4 lg:mt-0 lg:ml-16 lg:flex-none">
                    <Selector></Selector>
                    <button
                        type="button"
                        className="ml-3 inline-flex items-center justify-center rounded-md border border-transparent bg-teal-400 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 sm:w-auto"
                    >
                        Добавить
                    </button>
                </div>
            </div>
            <div className="mt-8 flex flex-col">
                {
                    pairsOnWeek.map((pairsOnDay) => (
                        <OneTable pairsPurDay={pairsOnDay} key={pairsOnDay.num}/>
                    ))
                }
            </div>
        </div>
    )
}


const pairsOnWeek = [
    {
        num: '1',
        name: 'П-14-18',
        pairs:[
            {
                num: '1',
                place: 'С-5',
                name: 'Теория разработки и защиты баз данных',
                teacher: 'Ефименков А.Б.',
            },
            {
                num: '2',
                place: 'С-3',
                name: 'Теория разработки и защиты баз данных',
                teacher: 'Ефименков А.Б.',
            },
            {
                num: '3',
                place: 'К-410',
                name: 'Системное программирование',
                teacher: 'Гвоздиевская О.С.',
            }
        ]
    },
    {
        num: '2',
        name: 'П-15-18',
        pairs:[
            {
                num: '1',
                place: 'С-5',
                name: 'Теория разработки и защиты баз данных',
                teacher: 'Ефименков А.Б.',
            },
            {
                num: '2',
                place: 'С-3',
                name: 'Теория разработки и защиты баз данных',
                teacher: 'Ефименков А.Б.',
            },
            {
                num: '3',
                place: 'К-410',
                name: 'Системное программирование',
                teacher: 'Гвоздиевская О.С.',
            }
        ]
    },
]
import {Fragment, useState} from 'react'
import {Listbox, Transition} from '@headlessui/react'
import {CheckIcon, SelectorIcon} from '@heroicons/react/solid'

const days = [
    {id: 1, name: 'Понедельник'},
    {id: 2, name: 'Вторник'},
    {id: 3, name: 'Среда'},
    {id: 4, name: 'Четверг'},
    {id: 5, name: 'Пятница'},
    {id: 6, name: 'Суббота'},
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Selector() {
    const [selected, setSelected] = useState(days[3])

    return (
        <Listbox value={selected} onChange={setSelected}>
            {({open}) => (
                <>
                    <div className="relative">
                        <Listbox.Button className="
                            relative w-36 bg-white border border-gray-300
                            rounded-md shadow-sm pl-3 pr-10 py-2 text-left
                            cursor-default focus:outline-none focus:ring-1
                            focus:ring-teal-500 focus:border-teal-500
                            sm:text-sm
                            "
                        >
                            <span className="block truncate">{selected.name}</span>
                            <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                <SelectorIcon className="h-5 w-5 text-gray-400" aria-hidden="true"/>
              </span>
                        </Listbox.Button>

                        <Transition
                            show={open}
                            as={Fragment}
                            leave="transition ease-in duration-100"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <Listbox.Options
                                className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                                {days.map((day) => (
                                    <Listbox.Option
                                        key={day.id}
                                        className={({active}) =>
                                            classNames(
                                                active ? 'text-white bg-teal-600' : 'text-gray-900',
                                                'cursor-default select-none relative py-2 pl-8 pr-4'
                                            )
                                        }
                                        value={day}
                                    >
                                        {({selected, active}) => (
                                            <>
                                                <span
                                                    className={classNames(selected ? 'font-semibold' : 'font-normal', 'block truncate')}>
                                                  {day.name}
                                                </span>

                                                {selected ? (
                                                    <span
                                                        className={classNames(
                                                            active ? 'text-white' : 'text-teal-600',
                                                            'absolute inset-y-0 left-0 flex items-center pl-1.5'
                                                        )}
                                                    >
                                                        <CheckIcon className="h-5 w-5" aria-hidden="true"/>
                                                    </span>
                                                ) : null}
                                            </>
                                        )}
                                    </Listbox.Option>
                                ))}
                            </Listbox.Options>
                        </Transition>
                    </div>
                </>
            )}
        </Listbox>
    )
}

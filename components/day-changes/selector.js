import {Fragment, useState, useContext, useEffect} from 'react'
import {Listbox, Transition} from '@headlessui/react'
import {CheckIcon, SelectorIcon} from '@heroicons/react/solid'
import {Context} from "../../pages/_app";
import {observer} from "mobx-react-lite";
import {format} from "date-fns";

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}


const Selector = () => {
    const {store} = useContext(Context);

    const [selected, setSelected] = useState(store.currentDate)

    useEffect(()=>{
        setCurrent(selected)
    }, [selected])


    const setCurrent = (date)=>{
        store.setCurrentDate(date)
        /*store.changesBrief(date)*/
    }

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
                            <span className="block truncate">{selected.date}</span>
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
                                {store.changesList.map((changes) => (
                                    <Listbox.Option
                                        key={changes.id}
                                        className={({active}) =>
                                            classNames(
                                                active ? 'text-white bg-teal-600' : 'text-gray-900',
                                                'cursor-default select-none relative py-2 pl-8 pr-4'
                                            )
                                        }
                                        value={changes}
                                    >
                                        {({selected, active}) => (
                                            <>
                                                <span
                                                    className={classNames(selected ? 'font-semibold' : 'font-normal', 'block truncate')}>
                                                  {changes.date}
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

export default observer(Selector)
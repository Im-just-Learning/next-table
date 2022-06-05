import {useState, useEffect, Fragment} from 'react'
import {Dialog, Transition} from '@headlessui/react'
import {
    BellIcon, BookOpenIcon,
    CalendarIcon,
    ChartBarIcon,
    FolderIcon,
    HomeIcon,
    InboxIcon,
    MenuIcon, UserGroupIcon,
    UsersIcon,
    XIcon,
} from '@heroicons/react/outline'
import Image from "next/image";
import logo from "../public/logo.svg";
import Link from "next/link";
import {useRouter} from "next/router";

const navigation = [
    {name: 'Журнал изменений', href: '/day-changes', icon: CalendarIcon, current: true},
    {name: 'Расписание занятий', href: '/lessons-table', icon: BookOpenIcon, current: false},
    {name: 'Расписание звонков', href: '/call-table', icon: BellIcon, current: false},
    {name: 'Список групп', href: '/groups', icon: UserGroupIcon, current: false},
]

function classNames(...classes) {

    return classes.filter(Boolean).join(' ')
}


export default function DashboardLayout({children}) {
    const [sidebarOpen, setSidebarOpen] = useState(false)
    useEffect(() => {
        document.querySelector('body').classList.add('h-full')
    })
    useEffect(() => {
        document.querySelector('html').classList.add('h-full', 'bg-white')
    })
    const router = useRouter()

    return (
        <>
            <div>
                <Transition.Root show={sidebarOpen} as={Fragment}>
                    <Dialog as="div" className="fixed inset-0 flex z-40 md:hidden" onClose={setSidebarOpen}>
                        <Transition.Child
                            as={Fragment}
                            enter="transition-opacity ease-linear duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="transition-opacity ease-linear duration-300"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <Dialog.Overlay className="fixed inset-0 bg-gray-600 bg-opacity-75"/>
                        </Transition.Child>
                        <Transition.Child
                            as={Fragment}
                            enter="transition ease-in-out duration-300 transform"
                            enterFrom="-translate-x-full"
                            enterTo="translate-x-0"
                            leave="transition ease-in-out duration-300 transform"
                            leaveFrom="translate-x-0"
                            leaveTo="-translate-x-full"
                        >
                            <div className="relative flex-1 flex flex-col max-w-xs w-full bg-white">
                                <Transition.Child
                                    as={Fragment}
                                    enter="ease-in-out duration-300"
                                    enterFrom="opacity-0"
                                    enterTo="opacity-100"
                                    leave="ease-in-out duration-300"
                                    leaveFrom="opacity-100"
                                    leaveTo="opacity-0"
                                >
                                    <div className="absolute top-0 right-0 -mr-12 pt-2">
                                        <button
                                            type="button"
                                            className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                                            onClick={() => setSidebarOpen(false)}
                                        >
                                            <span className="sr-only">Close sidebar</span>
                                            <XIcon className="h-6 w-6 text-white" aria-hidden="true"/>
                                        </button>
                                    </div>
                                </Transition.Child>
                                <div className="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
                                    <div className="flex-shrink-0 flex items-center px-3">
                                        <Image
                                            src={logo}
                                            alt="Picture of the author"
                                            width={30}
                                            height={30}
                                        />
                                    </div>
                                    <nav className="mt-5 px-2 space-y-1">
                                        {navigation.map((item) => (
                                            <Link key={item.name} href={item.href}>
                                                <a
                                                    className={classNames(
                                                        item.current
                                                            ? 'bg-teal-100 text-gray-400'
                                                            : 'text-gray-400 hover:bg-gray-50 text-gray-500 hover:bg-opacity-75',
                                                        'group flex items-center px-2 py-2 text-sm rounded-md'
                                                    )}
                                                >
                                                    <item.icon className={classNames(item.current ? 'text-gray-400 bg-teal-100' : 'text-gray-300', 'mr-3 flex-shrink-0 h-6 w-6')}
                                                               aria-hidden="true"/>
                                                    {item.name}
                                                </a>
                                            </Link>
                                        ))}
                                    </nav>
                                </div>
                            </div>
                        </Transition.Child>
                        <div className="flex-shrink-0 w-14" aria-hidden="true">
                            {/* Force sidebar to shrink to fit close icon */}
                        </div>
                    </Dialog>
                </Transition.Root>

                {/* Static sidebar for desktop */}
                <div className="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0 shadow-lg">
                    {/* Sidebar component, swap this element with another sidebar if you like */}
                    <div className="flex-1 flex flex-col min-h-0 bg-white">
                        <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
                            <div className="flex items-center flex-shrink-0 px-3">
                                <Image
                                    src={logo}
                                    alt="Picture of the author"
                                    width={30}
                                    height={30}
                                />
                            </div>
                            <nav className="mt-5 flex-1 px-2 space-y-1 ">
                                {navigation.map((item) => (
                                    <Link href={item.href} key={item.name}>
                                        <a
                                            className={classNames(
                                                item.current ? 'bg-gray-100 text-teal-400' : 'text-gray-400 hover:bg-gray-50 text-gray-500 hover:bg-opacity-75',
                                                'group flex items-center px-2 py-2 text-sm rounded-md font-medium'
                                            )}
                                        >
                                            <item.icon className={classNames(item.current ? 'text-teal-400 bg-gray-100' : 'text-gray-300', 'mr-3 flex-shrink-0 h-6 w-6')}
                                                       aria-hidden="true"/>
                                            {item.name}
                                        </a>
                                    </Link>
                                ))}
                            </nav>
                        </div>
                    </div>
                </div>
                <div className="md:pl-64 flex flex-col flex-1">
                    <div className="sticky top-0 z-10 md:hidden pl-1 pt-1 sm:pl-3 sm:pt-3 bg-white">
                        <button
                            type="button"
                            className="-ml-0.5 -mt-0.5 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-teal-500"
                            onClick={() => setSidebarOpen(true)}
                        >
                            <span className="sr-only">Open sidebar</span>
                            <MenuIcon className="h-6 w-6" aria-hidden="true"/>
                        </button>
                    </div>
                    <main className="flex-1">
                        <div className="py-6">
                            {children}
                        </div>
                    </main>
                </div>
            </div>
        </>
    )
}

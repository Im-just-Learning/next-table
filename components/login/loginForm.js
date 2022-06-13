import {useContext, useState} from "react";
import logo from '../../public/logo.svg'
import Image from "next/image";
import {Context} from "../../pages/_app";

const LoginFrom = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const {store} = useContext(Context);

    return (
        <div className="mx-auto w-full max-w-sm lg:w-96">
            <div>
                <Image
                    className="h-12 w-auto"
                    src={logo}
                    alt="SIBGU"
                    height={100}
                />
                <h2 className="mt-6 text-3xl font-extrabold text-gray-900">Войдите в свой аккаунт</h2>
                <p className="mt-2 text-sm text-gray-600">
                    Или{' '}
                    <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                        войти как гость
                    </a>
                </p>
            </div>

            <div className="mt-8">
                <div className="mt-6">
                    <form className="space-y-6">
                        <div>
                            <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                                Логин
                            </label>
                            <div className="mt-1">
                                <input
                                    onChange={e => setUsername(e.target.value)}
                                    value={username}
                                    id="username"
                                    name="username"
                                    type="text"
                                    autoComplete="username"
                                    required
                                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                />
                            </div>
                        </div>

                        <div className="space-y-1">
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                Пароль
                            </label>
                            <div className="mt-1">
                                <input
                                    onChange={e => setPassword(e.target.value)}
                                    value={password}
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    required
                                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                />
                            </div>
                        </div>

                        <div className='pt-8'>
                            <button
                                onClick={() => store.login(username, password)}
                                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                Войти как редактор
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LoginFrom;

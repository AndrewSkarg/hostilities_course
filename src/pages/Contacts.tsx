import React from 'react';
import some from '../assets/react.svg';

const Contacts = () => {
    return (
        <div className="bg-gray-100 py-6 text-black">
            <div className="xl:container mx-auto px-3 sm:px-4 xl:px-2">
                <div className="flex flex-row flex-wrap">
                    <div className="flex-shrink max-w-full w-full lg:w-2/3  overflow-hidden">
                        <div className="w-full py-3">
                            <h2 className="text-gray-800 text-3xl font-bold">
                                <span className="inline-block h-5 border-l-3 border-red-600 mr-2"></span> Для скарг та пропозицій
                            </h2>
                        </div>
                        <div className="flex flex-row flex-wrap -mx-3">
                            <div className="flex-shrink max-w-full w-full px-3 pb-5">
                                <div className="px-8 py-6 border border-gray-100 bg-white">
                                    <form className="flex flex-wrap flex-row -mx-4">
                                        <div className="flex-shrink max-w-full px-4 w-full md:w-1/2 mb-6">
                                            <label htmlFor="inputfirst4" className="inline-block mb-2">Ім'я</label>
                                            <input type="text" className="w-full leading-5 relative py-3 px-5 text-gray-800 bg-white border border-gray-100 overflow-x-auto focus:outline-none focus:border-gray-400 focus:ring-0 dark:text-gray-400 dark:bg-gray-700 dark:border-gray-700 dark:focus:border-gray-600" id="inputfirst4" required="" />
                                        </div>
                                        <div className="flex-shrink max-w-full px-4 w-full md:w-1/2 mb-6">
                                            <label htmlFor="inputlast4" className="inline-block mb-2">Прізвище</label>
                                            <input type="text" className="w-full leading-5 relative py-3 px-5 text-gray-800 bg-white border border-gray-100 overflow-x-auto focus:outline-none focus:border-gray-400 focus:ring-0 dark:text-gray-400 dark:bg-gray-700 dark:border-gray-700 dark:focus:border-gray-600" id="inputlast4" required="" />
                                        </div>
                                        <div className="flex-shrink max-w-full px-4 w-full md:w-1/2 mb-6">
                                            <label htmlFor="inpuemail4" className="inline-block mb-2">Пошта</label>
                                            <input type="email" className="w-full leading-5 relative py-3 px-5 text-gray-800 bg-white border border-gray-100 overflow-x-auto focus:outline-none focus:border-gray-400 focus:ring-0 dark:text-gray-400 dark:bg-gray-700 dark:border-gray-700 dark:focus:border-gray-600" id="inpuemail4" required="" />
                                        </div>
                                        <div className="flex-shrink max-w-full px-4 w-full md:w-1/2 mb-6">
                                            <label htmlFor="inputurgent" className="inline-block mb-2">Тип звернення</label>
                                            <select id="inputurgent" className="inline-block w-full leading-5 relative py-3 pl-3 pr-8 text-gray-800 bg-white border border-gray-100 overflow-x-auto focus:outline-none focus:border-gray-400 focus:ring-0 select-caret appearance-none dark:text-gray-400 dark:bg-gray-700 dark:border-gray-700 dark:focus:border-gray-600" required="">
                                                <option>Пропозиція</option>
                                                <option>Скарга</option>
                                                <option>Інше</option>
                                            </select>
                                        </div>
                                        <div className="flex-shrink max-w-full px-4 w-full mb-6">
                                            <label htmlFor="exampleTextarea1" className="inline-block mb-2">повідомлення</label>
                                            <textarea className="w-full leading-5 relative py-3 px-5 text-gray-800 bg-white border border-gray-100 overflow-x-auto focus:outline-none focus:border-gray-400 focus:ring-0 dark:text-gray-400 dark:bg-gray-700 dark:border-gray-700 dark:focus:border-gray-600" id="exampleTextarea1" rows="3"></textarea>
                                        </div>
                                        <div className="flex-shrink max-w-full px-4 w-full mb-6">
                                            <label className="flex items-center">
                                                <input type="checkbox" name="checked-demo" value="1" className="htmlForm-checkbox h-5 w-5 text-blue-500 dark:bg-gray-700 border border-gray-100 dark:border-gray-700 focus:outline-none" required="" />
                                                <span className="text-gray-700 ml-4">Я погоджуюся з політикою використання</span>
                                            </label>
                                        </div>
                                        <div className="flex-shrink max-w-full px-4 w-full">
                                            <button className="flex items-center py-3 px-5 leading-5 text-gray-100 bg-black hover:text-white hover:bg-gray-900 hover:ring-0 focus:outline-none focus:ring-0" type="submit">
                                                Відправити повідомлення
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex-shrink max-w-full w-full lg:w-1/3 lg:pl-8 lg:pt-14 lg:pb-8 order-first lg:order-last " style={{ position: 'relative' }}>
                        <div className="w-full bg-white">
                            <div className="mb-6">
                                <div className="p-4 bg-gray-100">
                                    <h2 className="text-lg font-bold">Контакти для співпраці</h2>
                                </div>
                                <ul className="px-6 py-6 post-number text-lg list-disc list-inside">
                                    <li className="mb-2">Телефон: <span className="font-semibold">+123 456 789</span></li>
                                    <li className="mb-2">Адреса: <span className="font-semibold">Вулиця, Місто, Країна</span></li>
                                    <li className="mb-2">Пошта: <span className="font-semibold">info@example.com</span></li>
                                    <li>Менеджер: <span className="font-semibold">Ім'я Прізвище По-батькові</span></li>
                                </ul>
                            </div>
                        </div>


                        <div className="text-sm py-6" style={{ position: 'static', left: 'auto', width: '475px' }}>
                            <div className="w-full text-center">
                                <a className="uppercase" href="#">
                                    Реклама
                                </a>
                                <a href="#">
                                    <img className="mx-auto" src={some} alt="advertisement area" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contacts;

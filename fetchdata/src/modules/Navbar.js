import React from 'react'
import hacker from '../images/21004063-removebg-preview.png'
export const Navbar = (props) => {

    return (
        <nav className="bg-[#ff6464] fixed w-full z-20 top-0 left-0 dark:border-gray-600">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="https://flowbite.com/" className="flex flex-row items-center gap-x-0">
                    <img
                        src={hacker}
                        className="h-12"
                        alt="zebi Logo"
                    />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap text-white font-custom">
                        Zohaib
                    </span>
                </a>
                <div className="flex md:order-2">
                    <button
                        type="button"
                        className="text-[#ff6464] bg-white hover:bg-[#ff6464] hover:text-white hover:shadow-sm hover:shadow-black focus:ring-4 focus:outline-none focus:ring-white font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-[#ff6464] dark:hover:bg-[#ff6464] dark:focus:ring-white"
                        onClick={props.Fetch}
                    >
                        Fetch Data
                    </button>
                    <button
                        data-collapse-toggle="navbar-sticky"
                        type="button"
                        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                        aria-controls="navbar-sticky"
                        aria-expanded="false"
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg
                            className="w-5 h-5"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 17 14"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M1 1h15M1 7h15M1 13h15"
                            />
                        </svg>
                    </button>
                </div>
                <div
                    className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
                    id="navbar-sticky"
                >
                    <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-white rounded-lg bg-[#ff6464] md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-[#ff6464] dark:bg-[#ff6464] md:dark:bg-[#ff6464] dark:border-white">
                        <li>
                            <a
                                href="/"
                                className="block py-2 pl-3 pr-4 text-white bg-[#ff6464] rounded md:bg-transparent md:text-white md:p-0 md:dark:text-white font-custom"
                                aria-current="page"
                            >
                                Home
                            </a>
                        </li>
                        <li>
                            <a
                                href="/"
                                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent font-custom md:hover:text-white md:p-0 md:dark:hover:text-white dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                            >
                                About
                            </a>
                        </li>
                        <li>
                            <a
                                href="/"
                                className="block py-2 pl-3 pr-4 font-custom text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-white md:p-0 md:dark:hover:text-white dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                            >
                                Services
                            </a>
                        </li>
                        <li>
                            <a
                                href="/"
                                className="block py-2 pl-3 pr-4 font-custom text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-white md:p-0 md:dark:hover:text-white dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                            >
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    )
}

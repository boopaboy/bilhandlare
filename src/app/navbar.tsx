"use client";
import logo from './assets/logga.webp';
import Image from 'next/image';



function Navbar() {
    const navItems = [
        { name: 'Startsida', path: '/' },
        { name: 'Bilar', path: '/cars' },
        { name: 'Finansiering', path: '/financing' },
        { name: 'Sälj din bil', path: '/sell' },
        { name: 'Kontakt', path: '/contact' }
    ];

console.log(window.location.pathname);

    return (
        <nav className="bg-white border-gray-200">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <Image src={logo} className="h-20" alt="Logga" />
                </a>
                <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button>
                <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                    <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white">
                        {navItems.map((item) => (
                            <li key={item.name}>
                                <a
                                    href={item.path}
                                    className={`block py-2 px-3 rounded-sm md:border-0 md:p-0 ${
                                        window.location.pathname === item.path 
                                            ? 'text-white bg-red-700 md:bg-transparent md:text-red-700'
                                            : 'text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-red-700'
                                    }`}
                                >
                                    {item.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
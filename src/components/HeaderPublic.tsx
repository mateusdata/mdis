import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function HeaderPublic() {
const [currentPage, setCurrentPage] = useState<number>(1)
    useEffect(() => {
        const handleClickOutside = (event: any) => {
            if (!event.target.closest('header')) {
                setOpenMenu(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleToggleMenu = (event: any) => {
        event.stopPropagation();
        setOpenMenu(!openMenu);
    };

    const [openMenu, setOpenMenu] = useState(false)
 

    return (
        <header className="flex  bg-[#407aff] flex-wrap md:justify-start md:flex-nowrap z-50 w-full text-sm py-3 md:py-0">
            <nav className="max-w-[85rem] w-full mx-auto px-4 md:px-6 lg:px-8" aria-label="Global">
                <div className="relative md:flex md:items-center md:justify-between">
                    <div className="flex items-center justify-between">

                        <div className="flex gap-1">
                            <div className="flex-none  w-7" >
                                <svg className="w-28 h-auto" width="116" height="32" viewBox="0 0 116 32" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">

                                    <path
                                        d="M1 28.9786V15.9786C1 9.35116 6.37258 3.97858 13 3.97858C19.6274 3.97858 25 9.35116 25 15.9786C25 22.606 19.6274 27.9786 13 27.9786H12"
                                        className="stroke-gray-50 dark:stroke-white" stroke="currentColor" stroke-width="2" />
                                    <path
                                        d="M5 28.9786V16.1386C5 11.6319 8.58172 7.97858 13 7.97858C17.4183 7.97858 21 11.6319 21 16.1386C21 20.6452 17.4183 24.2986 13 24.2986H12"
                                        className="stroke-gray-50 dark:stroke-white" stroke="currentColor" stroke-width="2" />
                                    <circle cx="13" cy="16" r="5" fill="currentColor" className="fill-gray-50 dark:fill-white" />
                                </svg>
                            </div>

                            <span className="text-white font-medium text-lg">MDis</span>
                        </div>


                        <div className="md:hidden">
                            <button onClick={handleToggleMenu} type="button"
                                className="hs-collapse-toggle bg-cyan-100 size-9 flex justify-center items-center text-sm font-semibold rounded-lg border border-gray-200 text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:border-neutral-800 dark:hover:bg-neutral-700"
                                data-hs-collapse="#navbar-collapse-with-animation" aria-controls="navbar-collapse-with-animation"
                                aria-label="Toggle navigation">
                                <svg className="hs-collapse-open:hidden flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg"
                                    width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                    stroke-linecap="round" stroke-linejoin="round">
                                    <line x1="3" x2="21" y1="6" y2="6" />
                                    <line x1="3" x2="21" y1="12" y2="12" />
                                    <line x1="3" x2="21" y1="18" y2="18" />
                                </svg>
                                <svg className="hs-collapse-open:block hidden flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg"
                                    width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                    stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M18 6 6 18" />
                                    <path d="m6 6 12 12" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    <div id="navbar-collapse-with-animation"
                        className={`hs-collapse   overflow-hidden transition-all duration-300 basis-full grow md:block`}>
                        <div
                            className="overflow-hidden overflow-y-auto max-h-[75vh] [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500">
                            <div
                                className={` ${openMenu ? "flex" : "hidden"} md:flex flex-col gap-x-0 mt-5 divide-y divide-dashed divide-gray-200 md:flex-row md:items-center md:justify-end md:gap-x-7 md:mt-0 md:ps-7 md:divide-y-0 md:divide-solid dark:divide-neutral-700`}>

                                <Link onClick={()=>setCurrentPage(1)} to={"/"} className={`text-[15px] ${currentPage===1 ? "text-white": "text-gray-200"} font-bold  hover:text-gray-800 py-3 md:py-6 dark:text-neutral-400 dark:hover:text-neutral-500`}
                                   aria-current="page">
                                   Inicio 
                                </Link>
                                  <Link onClick={()=>setCurrentPage(2)} to={"/questao1"} className={`text-[15px] ${currentPage===2 ? "text-white": "text-gray-200"} font-bold  hover:text-gray-800 py-3 md:py-6 dark:text-neutral-400 dark:hover:text-neutral-500`}
                                   aria-current="page">
                                   Atividade 1
                                </Link>
                                <Link onClick={()=>setCurrentPage(3)} to={"/questao2"} className={`text-[15px] ${currentPage===3 ? "text-white": "text-gray-200"} font-bold  hover:text-gray-800 py-3 md:py-6 dark:text-neutral-400 dark:hover:text-neutral-500`}
                                   aria-current="page">
                                   Atividade 2
                                </Link>
                                <Link onClick={()=>setCurrentPage(4)} to={"/questao3"} className={`text-[15px] ${currentPage===4 ? "text-white": "text-gray-200"} font-bold  hover:text-gray-800 py-3 md:py-6 dark:text-neutral-400 dark:hover:text-neutral-500`}
                                   aria-current="page">
                                   Atividade 3
                                </Link>
                                <Link onClick={()=>setCurrentPage(5)} to={"/sobre"} className={`text-[15px] ${currentPage===5 ? "text-white": "text-gray-200"} font-bold  hover:text-gray-800 py-3 md:py-6 dark:text-neutral-400 dark:hover:text-neutral-500`}
                                   aria-current="page">
                                   Sobre
                                </Link>
                                
                                
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}

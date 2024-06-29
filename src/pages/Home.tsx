import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <>

            <div className="relative overflow-hidden min-h-[75vh] p-3">

                <div aria-hidden="true" className="flex absolute -top-96 start-1/2 transform -translate-x-1/2">
                    <div className=" to-purple-100 blur-3xl w-[25rem] h-[44rem] rotate-[-60deg] transform -translate-x-[10rem] dark:from-violet-900/50 dark:to-purple-900"></div>
                    <div className=" h-[50rem] rounded-fulls origin-top-left -rotate-12 -translate-x-[15rem] dark:from-indigo-900/70 dark:via-indigo-900/70 dark:to-blue-900/70"></div>
                </div>


                <div className="relative z-10">
                    <div className="mt-2">
                        <div className="max-w-2xl text-center mx-auto">
                            <p className="animate__animated animate__fadeInDown inline-block text-sm font-medium bg-clip-text bg-gradient-to-l from-pink-600 to-violet-500 text-transparent dark:from-blue-400 dark:to-violet-600">
                                MDis: Uma visão para 2024
                            </p>

                            <div className="max-w-2xl mx-auto text-center mb-1 2xl:mt-10 ">
                                <h2
                                    className="text-3xl leading-tight font-bold md:text-4xl md:leading-tight lg:text-5xl lg:leading-tight bg-clip-text bg-gradient-to-r from-cyan-600 to-fuchsia-700 text-transparent">
                                    MDis: Marcadores do Discurso
                                </h2>
                                <p className="mt-2 md:px-24 lg:text-lg text-gray-800 dark:text-neutral-200">
                                    Marcadores do Discurso do Português Brasileiro para hispanofalantes

                                </p>


                            </div>




                            <div className="mt-8 gap-3 flex flex-col justify-center">
                                <Link
                                    to="/sobre"
                                    className="py-3 px-4 inline-flex flex-col items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-gradient-to-r from-green-600 to-green-400 text-white hover:from-green-700 hover:to-green-500 disabled:opacity-50 disabled:pointer-events-none"
                                >
                                    Sobre
                                    <svg
                                        className="flex-shrink-0 size-4"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="m9 18 6-6-6-6" />
                                    </svg>
                                </Link>

                                <Link
                                    to="/questao1"
                                    className="py-3 px-4 inline-flex flex-col items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-gradient-to-r from-cyan-600 to-cyan-400 text-white hover:from-cyan-700 hover:to-cyan-500 disabled:opacity-50 disabled:pointer-events-none"
                                >
                                    Atividade 1
                                    <svg
                                        className="flex-shrink-0 size-4"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="m9 18 6-6-6-6" />
                                    </svg>
                                </Link>

                                <Link
                                    to="/questao2"
                                    className="py-3 px-4 inline-flex flex-col items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-gradient-to-r from-blue-600 to-blue-400 text-white hover:from-blue-700 hover:to-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                                >
                                    Atividade 2
                                    <svg
                                        className="flex-shrink-0 size-4"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="m9 18 6-6-6-6" />
                                    </svg>
                                </Link>

                                <Link
                                    to="/questao3"
                                    className="py-3 px-4 inline-flex flex-col items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-gradient-to-r from-purple-600 to-purple-400 text-white hover:from-purple-700 hover:to-purple-500 disabled:opacity-50 disabled:pointer-events-none"
                                >
                                    Atividade 3
                                    <svg
                                        className="flex-shrink-0 size-4"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="m9 18 6-6-6-6" />
                                    </svg>
                                </Link>



                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

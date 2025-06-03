'use client'
import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faHome, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import Head from "next/head";

const NotFound = () => {
    return (
        <>
            <Head>
                <title>Page Not Found | Apexx9</title>
                <meta name="description" content="The page you're looking for doesn't exist" />
            </Head>

            <div className="flex-1 min-h-screen bg-[var(--background)] text-[var(--foreground)] w-screen overflow-x-hidden flex flex-col items-center justify-center px-4 py-12 relative">
                {/* Container with max width */}
                <div className="w-full max-w-[95vw] md:max-w-3xl mx-auto flex flex-col items-center">
                    {/* Animated 404 text */}
                    <div className="relative mb-8 w-full flex justify-center">
                        <div className="relative">
                            <h1 className="text-8xl md:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600 animate-pulse">
                                404
                            </h1>
                            <div className="absolute -inset-4 rounded-full bg-purple-500 opacity-10 blur-lg animate-pulse"></div>
                        </div>
                    </div>

                    <h2 className="text-2xl md:text-4xl font-bold mb-4 text-center">Oops! Page Not Found</h2>
                    <p className="text-gray-400 text-base md:text-lg mb-8 text-center max-w-md px-4">
                        The page you&apos;re looking for might have been removed, had its name changed, or is temporarily unavailable.
                    </p>

                    {/* Search bar */}
                    <div className="relative w-full max-w-md mb-8 px-4">
                        <input
                            type="text"
                            placeholder="Search the site..."
                            className="w-full bg-gray-800 text-[var(--foreground)] placeholder-gray-500 rounded-full py-3 pl-12 pr-6 focus:outline-none focus:ring-2 focus:ring-purple-500 border border-gray-700"
                        />
                        <FontAwesomeIcon 
                            icon={faSearch} 
                            className="absolute left-7 top-1/2 transform -translate-y-1/2 text-gray-500"
                        />
                    </div>

                    {/* Action buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 w-full px-4 justify-center">
                        <Link 
                            href="/" 
                            className="flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-500 text-white font-medium py-3 px-6 rounded-full transition-all duration-300 hover:scale-105 flex-1 sm:flex-none sm:w-auto text-center max-w-xs"
                        >
                            <FontAwesomeIcon icon={faHome} />
                            Return Home
                        </Link>
                        <button 
                            onClick={() => window.history.back()} 
                            className="flex items-center justify-center gap-2 bg-gray-800 hover:bg-gray-700 text-[var(--foreground)] font-medium py-3 px-6 rounded-full transition-all duration-300 hover:scale-105 border border-gray-700 flex-1 sm:flex-none sm:w-auto text-center max-w-xs"
                        >
                            <FontAwesomeIcon icon={faArrowLeft} />
                            Go Back
                        </button>
                    </div>
                </div>

                {/* Decorative elements - ensure they don't cause overflow */}
                <div className="fixed bottom-10 left-0 w-32 h-32 rounded-full bg-gray-800 opacity-20 blur-xl -translate-x-1/2"></div>
                <div className="fixed top-20 right-0 w-48 h-48 rounded-full bg-gray-800 opacity-10 blur-xl translate-x-1/2"></div>
                <div className="fixed top-1/3 left-0 w-16 h-16 rounded-full bg-gray-800 opacity-20 blur-lg -translate-x-1/2"></div>
            </div>
        </>
    );
};

export default NotFound;
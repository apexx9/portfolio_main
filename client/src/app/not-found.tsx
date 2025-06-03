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

            <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)] flex flex-col items-center justify-center px-4 py-12">
                {/* Animated 404 text */}
                <div className="relative mb-8">
                    <h1 className="text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600 animate-pulse">
                        404
                    </h1>
                    <div className="absolute -inset-4 rounded-full bg-purple-500 opacity-10 blur-lg animate-pulse"></div>
                </div>

                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Oops! Page Not Found</h2>
                <p className="text-gray-400 text-lg mb-8 text-center max-w-md">
                    The page you're looking for might have been removed, had its name changed, or is temporarily unavailable.
                </p>

                {/* Search bar */}
                <div className="relative w-full max-w-md mb-8">
                    <input
                        type="text"
                        placeholder="Search the site..."
                        className="w-full bg-gray-800 text-[var(--foreground)] placeholder-gray-500 rounded-full py-3 pl-12 pr-6 focus:outline-none focus:ring-2 focus:ring-purple-500 border border-gray-700"
                    />
                    <FontAwesomeIcon 
                        icon={faSearch} 
                        className="absolute left-5 top-1/2 transform -translate-y-1/2 text-gray-500"
                    />
                </div>

                {/* Action buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                    <Link 
                        href="/" 
                        className="flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-500 text-white font-medium py-3 px-6 rounded-full transition-all duration-300 hover:scale-105"
                    >
                        <FontAwesomeIcon icon={faHome} />
                        Return Home
                    </Link>
                    <button 
                        onClick={() => window.history.back()} 
                        className="flex items-center justify-center gap-2 bg-gray-800 hover:bg-gray-700 text-[var(--foreground)] font-medium py-3 px-6 rounded-full transition-all duration-300 hover:scale-105 border border-gray-700"
                    >
                        <FontAwesomeIcon icon={faArrowLeft} />
                        Go Back
                    </button>
                </div>

                {/* Decorative elements */}
                <div className="absolute bottom-10 left-10 w-32 h-32 rounded-full bg-gray-800 opacity-20 blur-xl"></div>
                <div className="absolute top-20 right-10 w-48 h-48 rounded-full bg-gray-800 opacity-10 blur-xl"></div>
                <div className="absolute top-1/3 left-1/4 w-16 h-16 rounded-full bg-gray-800 opacity-20 blur-lg"></div>
            </div>
        </>
    );
};

export default NotFound;
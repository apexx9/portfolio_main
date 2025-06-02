'use client';
import React from 'react';
import { useQuotes } from '@/hooks/useQuotes';

const Quotes = () => {
  const { quote, author, loading, error } = useQuotes();
  
  const renderContent = () => {
    if (loading) {
      return (
        <div className="flex items-center justify-center space-x-2">
          <div className="w-4 h-4 rounded-full bg-amber-200 animate-pulse"></div>
          <div className="w-4 h-4 rounded-full bg-amber-300 animate-pulse delay-75"></div>
          <div className="w-4 h-4 rounded-full bg-amber-400 animate-pulse delay-150"></div>
        </div>
      );
    }

    if (error) {
      return (
        <p className='text-white font-semibold text-xl text-center'>
          Couldn't load quote. {error}
        </p>
      );
    }

    return (
      <>
        <blockquote className='text-white font-semibold text-xl md:text-2xl text-center'>
          "{quote}"
        </blockquote>
        {author && (
          <cite className='text-purple-200 text-lg md:text-xl mt-2 block text-center'>
            — {author}
          </cite>
        )}
      </>
    );
  };

  return (
    <div className="h-fit grid place-items-center p-4">
      <div className='w-full max-w-2xl p-6 border-gradient rounded-3xl shadow-lg'>
        {renderContent()}
      </div>
    </div>
  );
};

export default Quotes;
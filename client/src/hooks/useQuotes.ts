import { useState, useEffect } from "react";
import axios from "axios";
import { QUOTES_API_URL } from "../constants/components";

interface QuoteData {
  quote: string;
  author: string;
}

export const useQuotes = () => {
  const [quoteData, setQuoteData] = useState<QuoteData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchQuote = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const response = await axios.get<QuoteData[]>(QUOTES_API_URL, {
          headers: {
            'X-Api-Key': process.env.NEXT_PUBLIC_API_NINJAS_API_KEY || '',
            'Content-Type': 'application/json'
          }
        });

        if (!response.data || response.data.length === 0) {
          throw new Error('No quotes available');
        }

        const [firstQuote] = response.data;
        setQuoteData(firstQuote);
      } catch (err) {
        const errorMessage = axios.isAxiosError(err)
          ? err.response?.data?.message || err.message
          : err instanceof Error
            ? err.message
            : 'Failed to fetch quote';
        
        setError(errorMessage);
        console.error('Error fetching quote:', err);
      } finally {
        setLoading(false);
      }
    };

    // Add a small delay to avoid immediate loading state flicker
    const timer = setTimeout(fetchQuote, 300);
    return () => clearTimeout(timer);
  }, []);

  return {
    quote: quoteData?.quote || null,
    author: quoteData?.author || null,
    loading,
    error
  };
};
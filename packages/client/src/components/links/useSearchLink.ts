import axios from 'axios';
import debounce from 'lodash.debounce';
import { useEffect, useState } from "react";

import { LinkEntity } from '@/types/link.type';

export function useSearchLink() {
  const [filteredLinks, setFilteredLinks] = useState<LinkEntity[]>([]);
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  useEffect(() => {
    console.log('Search term:', searchTerm);
    const searchLinks = async () => {
      console.log('Searching links...');
      try {
        setLoading(true);
        // Your backend API endpoint for searching links
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/links`, { params: { term:searchTerm } });
        if (response.status === 200) {
          const data = await response.data;
          setFilteredLinks(data); // Assuming your backend returns an array of links
          console.log('Fetched data:', data);
        } else {
          console.error('Failed to fetch data');
        }
      } catch (error) {
        console.error('Error:', error);
      } finally {
        setLoading(false);
      }
    };

    const debouncedSearch = debounce(searchLinks, 300);
    debouncedSearch();


    return () => {
      debouncedSearch.cancel();
    };
  }, [searchTerm]);
  return { links: filteredLinks,loading,  searchTerm, setSearchTerm}
}

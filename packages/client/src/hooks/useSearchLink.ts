import axios from 'axios';
import debounce from 'lodash.debounce';
import { useEffect, useState } from "react";

import { LinkEntity } from '@/types/link.type';

export function useSearchLink() {
  const [filteredLinks, setFilteredLinks] = useState<LinkEntity[]>([]);
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  useEffect(() => {
    const searchLinks = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/links`, { params: { term:searchTerm } });
        if (response.status === 200) {
          const data = response.data;
          setFilteredLinks(data);
        } else {
          console.error('Failed to fetch data');
        }
      } catch (error) {
        console.error('Error:', error);
        setFilteredLinks([]);
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

import { sdk } from "~/sdk.config";

export const useSearch = () => {
  const searchQuery = useState('s', () => '');
  const isSearchOpen = useState('o', () => false);
  const results = useState('r', () => []);

  function closeSearch() {
    isSearchOpen.value = false;
  }

  function openSearch() {
    isSearchOpen.value = true;
  } 
  
  watch(searchQuery, () => {
    sdk.prestashop.search({
      query: searchQuery.value
    }).then((res: any) => {
      results.value = res.products;
    })
  })

  return {
    searchQuery,
    isSearchOpen,
    closeSearch,
    openSearch,
    results
  };
}
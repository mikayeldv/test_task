"use client";
import { useMemo, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { ISearchCountries } from "../../constants/types";
import { Country } from "../Country";
import { Dropdown } from "../Dropdown";
import s from "./style.module.scss";
import { useDebounce } from "../../helpers/debounce";

export const SearchCountries: React.FC<ISearchCountries> = ({ countries }) => {
  const [searchValue, setSearchValue] = useState<string>("");
  const debouncedSearchValue = useDebounce(searchValue, 300);

  const handleSearch = useMemo(
    () => (searchBy: string[]) =>
      searchBy.some((item) =>
        item.toLowerCase().includes(debouncedSearchValue.toLowerCase())
      ),
    [debouncedSearchValue]
  );

  const searchResults = useMemo(
    () =>
      countries.filter((country) =>
        handleSearch([country.iso, country.country])
      ),
    [debouncedSearchValue, countries, handleSearch]
  );

  return (
    <div className={s.searchCountries}>
      <CiSearch className={s.searchIcon} />
      <input
        value={searchValue}
        type="text"
        className={s.searchCountry}
        placeholder="Search for a country"
        onChange={(e) => setSearchValue(e.target.value)}
      />
      {debouncedSearchValue && searchResults.length > 0 && (
        <Dropdown search={searchResults} Component={Country} />
      )}
    </div>
  );
};

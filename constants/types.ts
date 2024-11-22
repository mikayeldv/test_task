export type CountriesProps = {
  countries: ICountryData[];
  defaultCountries: ICountryData[];
};

export type CountryProps = {
  c: ICountryData;
  isFullWidth?: boolean;
};

export type OperatorItemProps = {
  operatorName: string;
};

export type OperatorsListProps = {
  operators: IOperator[];
};

export type ITitle = {
  title: string;
};

export type ICountryData = {
  iso: string;
  country: string;
  id: string;
  cost_per_day: string;
  url: string;
  price: {
    symbol: string;
  };
  operators: IOperator[];
};

export type ISearchCountries = {
  countries: ICountryData[];
};

export type IDropdown = {
  search: ICountryData[];
  Component: React.ComponentType<CountryProps>;
};

export type IOperator = {
  phone_view: string;
};

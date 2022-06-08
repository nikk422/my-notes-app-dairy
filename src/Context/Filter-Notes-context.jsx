import { createContext, useContext, useReducer } from "react";
import { filterFun } from "../Reducer/FilterReducer";

const FilterContext = createContext();


const FilterNotesProvider = ({ children }) => {
  const [filterState, filterDispatch] = useReducer(filterFun, {
    byPriority: "",
    byDate: "",
  });


  return (
    <FilterContext.Provider value={{ filterState, filterDispatch }}>
      {children}
    </FilterContext.Provider>
  );
  };

  
const useFilter = () => useContext(FilterContext);

export { useFilter, FilterNotesProvider };

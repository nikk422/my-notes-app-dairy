import "./filter.css";
import { useState } from "react";
import { useFilter } from "../../Context/Filter-Notes-context";

const FilterNotes = () => {
  const { filterDispatch } = useFilter();
  const [showFilter, setShowFilter] = useState(false);
  return (
    <div className="filter-container">
      <div>
        <i
          onClick={() => setShowFilter(!showFilter)}
          className="fa fa-filter note-icon filterIcon "
          aria-hidden="true"
        >Filter By</i>
      </div>
      {showFilter && (
        <div className="filters">
          <h3>Filter</h3>
          <hr></hr>
          <p>Filter by</p>
          <lable htmlFor="Low">
            <input
              onClick={() => filterDispatch({ type: "LOW", payload:"Low" })}
              type="radio"
              name="byPriority"
              value="Low"
            />
            Low
          </lable>
          <lable htmlFor="High">
            <input
              onClick={() => filterDispatch({ type: "HIGH", payload:"High" })}
              type="radio"
              name="byPriority"
              value="High"
            />
            High
          </lable>
          <hr></hr>
          <p>sort by date </p>
          <lable htmlFor="new date">
            <input
              onClick={() => filterDispatch({ type: "SORT_BY_DATE",payload:"Latest" })}
              type="radio"
              name="date"
              value="Latest"
            />
            latest date
          </lable>
          <lable htmlFor="old date">
            <input
              onClick={() => filterDispatch({ type: "SORT_BY_DATE",payload:"Oldest" })}
              type="radio"
              name="date"
              value="Oldest"
            />
            Oldest date
          </lable>
          <hr></hr>
          <button onClick={() => filterDispatch({ type: "CLEAR"})}>Clear</button>
        </div>
      )}
    </div>
  );
};

export default FilterNotes;

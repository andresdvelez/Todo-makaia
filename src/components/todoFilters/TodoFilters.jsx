import React from "react";
import {
  FilterButton,
  FilterButtonContainer,
  FiltersContainer,
  ItemsLeft,
} from "./TodoFilters.components";

function TodoFilters() {
  return (
    <div>
      <FiltersContainer>
        <ItemsLeft />
        <FilterButtonContainer>
          <FilterButton action={() => {}} active="All" filter="All" />
          <FilterButton action={() => {}} active="All" filter="Active" />
          <FilterButton action={() => {}} active="All" filter="Completed" />
        </FilterButtonContainer>
        <button className="text-gray-400 hover:text-white cursor-pointer transition-all duration-300 ease-in">
          Clear Completed
        </button>
      </FiltersContainer>
    </div>
  );
}

export { TodoFilters };

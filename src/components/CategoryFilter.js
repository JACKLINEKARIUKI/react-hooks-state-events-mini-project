import React from "react";

function CategoryFilter({ categories, filterCategory }) {
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map((category) => {
        return (
          <button
            key={category}
            onClick={(event) => {
              filterCategory(category);
              event.currentTarget.classList.add("selected");
            }}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}

export default CategoryFilter;

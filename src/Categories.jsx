import React from "react";

const Categories = ({ categories, filtereCategory, category }) => {
  return (
    <div className="btn-container">
      {categories.map((categ, index) => (
        <button
          className="filter-btn"
          key={index}
          onClick={() => filtereCategory(categ)}
          style={{position:'relative'}}
        >
          {categ}
          
          {(categ===category) && <span style={{
            display: 'inline-block',
            width: '100%',
            position: 'absolute',
            top: '35px',
            left: 0,
            height: '2px',
            background: 'var(--clr-gold)',
          }}></span>}
        </button>
      ))}
    </div>
  );
};

export default Categories;

import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';

/**
 * Creates a pagination component based on the current page, total number of pages,
 * and onPageChange function.
 *
 * @param {number} currentPage - The current active page number.
 * @param {number} totalPages - The total number of pages.
 * @param {function} onPageChange - A function to be called when the active page changes.
 * @return {JSX.Element} A React component representing the pagination.
 */
function Pagination({ currentPage, totalPages, onPageChange }) {
  const pageNumbers = [];

  for (let i = 1; i <= totalPages; i += 1) {
    pageNumbers.push(
	<NavLink
		key={i}
		to={`/${i}`}
		className={i === currentPage ? 'active' : ''}
		onClick={() => { onPageChange(i); window.scrollTo(0, 0); }}
	>
		{i}
	</NavLink>,
    );
  }

  return (
	<div className="pagination">
		{pageNumbers}
	</div>
  );
}

Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};

export default Pagination;

import React from 'react';
import PropTypes from 'prop-types';
import Search from '../Search';
import './index.scss';

/**
 * Renders the Header component with a Marvel logo and a Search component.
 *
 * @param {Object} search - The search query string.
 * @param {function} setSearch - The function to update the search query string.
 * @param {Array} characters - The list of characters to be displayed.
 * @param {function} setCharacters - The function to update the list of characters.
 * @return {JSX.Element} The rendered Header component.
 */
const Header = ({
  search, setSearch, characters, setCharacters,
}) => (
	<header className="lumx-spacing-padding-big header">
		<img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/b/b9/Marvel_Logo.svg" alt="Logo Marvel" />
		<Search search={search} setSearch={setSearch} characters={characters} setCharacters={setCharacters} />
	</header>
);

Header.propTypes = {
  search: PropTypes.string.isRequired,
  setSearch: PropTypes.func.isRequired,
  characters: PropTypes.arrayOf(PropTypes.object).isRequired,
  setCharacters: PropTypes.func.isRequired,
};

export default Header;

/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Card from '../Card';
import Pagination from '../Pagination/Pagination';
import './index.scss';

/**
 * Renders a list of characters with pagination.
 *
 * @param {Object[]} characters - an array of character objects
 * @param {string} characters[].id - the unique identifier of the character
 * @param {Object} characters[].thumbnail - the thumbnail object of the character
 * @param {string} characters[].thumbnail.path - the path of the thumbnail image
 * @param {string} characters[].thumbnail.extension - the extension of the thumbnail image
 * @param {string} characters[].name - the name of the character
 * @param {string} characters[].description - the description of the character
 * @param {Object} characters[].comics - the comics object of the character
 * @param {number} characters[].comics.available - the number of available comics for the character
 * @param {Object} characters[].series - the series object of the character
 * @param {number} characters[].series.available - the number of available series for the character
 * @param {Object} characters[].stories - the stories object of the character
 * @param {number} characters[].stories.available - the number of available stories for the character
 * @return {JSX.Element} a section element containing a list of character cards and pagination
 */
function List({ characters }) {
  const itemsPerPage = 4;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(characters.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentCharacters = characters.slice(indexOfFirstItem, indexOfLastItem);

  const charactersList = currentCharacters.map((character) => (
	<Card key={character.id} picture={`${character.thumbnail.path}.${character.thumbnail.extension}`} name={character.name} description={character.description} comics={character.comics.available} series={character.series.available} stories={character.stories.available} />
  ));
  return (
	<section className="result-container">
		<div className="list-card">
			{charactersList}
		</div>
		<Pagination
			currentPage={currentPage}
			totalPages={totalPages}
			onPageChange={setCurrentPage}
		/>
	</section>
  );
}
List.propTypes = {
  characters: PropTypes.arrayOf(PropTypes.object).isRequired,
};
export default List;

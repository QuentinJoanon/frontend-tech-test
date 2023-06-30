import React from 'react';
import { TextField, Theme } from '@lumx/react';
import { mdiMagnify } from '@lumx/icons';

<<<<<<< Updated upstream
const Search = () => (
	<TextField theme={Theme.dark} placeholder="Search ..." icon={mdiMagnify} onChange={() => {}} />
);
=======
/**
 * Renders a search input field that queries the Marvel API for characters based on user input.
 *
 * @param {Object} props - The props object containing:
 *   {string} search - The current value of the search input field.
 *   {function} setSearch - A function to update the value of the search input field.
 *   {function} setCharacters - A function to update the list of characters returned by the API.
 * @return {JSX.Element} A form containing a search input field.
 */
const Search = ({
  search, setSearch, setCharacters,
}) => {
  const history = useHistory();
  /* Function to handle the search input */
  const handleSearch = (value) => {
    // TODO: since you are not adding any logic, you can use setSearch directly on the onChange prop
    // console.log(value);
    setSearch(value);
  };

  /* Function to handle the form submission */
  const handleSubmit = (event) => {
    event.preventDefault();
    const apiKey = process.env.REACT_APP_MARVEL_API_KEY;
    // TODO: should you use the api you defined in src/api/index.js?
    axios
      .get('https://gateway.marvel.com:443/v1/public/characters', {
        params: {
          nameStartsWith: search,
          apikey: apiKey,
        },
      })
      .then((response) => {
        history.push('/1');
        setCharacters(response.data.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  // console.log(characters);

  // NICE: Love to see the input wrapped in the form 👍
  return (
	<form className="form" onSubmit={handleSubmit}>
		<TextField
			theme={Theme.dark}
			placeholder="Search..."
			icon={mdiMagnify}
			onChange={handleSearch}
			value={search}
		/>
	</form>
  );
};

Search.propTypes = {
  search: PropTypes.string.isRequired,
  setSearch: PropTypes.func.isRequired,
  setCharacters: PropTypes.func.isRequired,
};
>>>>>>> Stashed changes

export default Search;

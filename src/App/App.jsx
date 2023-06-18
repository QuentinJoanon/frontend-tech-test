/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react';
import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Header from '../components/Header';
import List from '../components/List/List';

/**
 * Creates the main component of the application.
 *
 * @return {JSX.Element} The main component of the application.
 */
function App() {
  const [search, setSearch] = useState('');
  const [characters, setCharacters] = useState([]);

  return (
	<>
		<Router>
			<Header search={search} setSearch={setSearch} characters={characters} setCharacters={setCharacters} />
			<List characters={characters} />
			<Switch>
				<Route
					exact
					path="/"
				>
					<section className="lumx-spacing-padding-horizontal-huge" />
				</Route>
			</Switch>
		</Router>

	</>
  );
}

export default App;

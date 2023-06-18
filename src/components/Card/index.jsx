import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';


/**
 * Renders a card with information about a character.
 *
 * @param {Object} props - An object containing the following properties:
 *    - picture: A string representing the URL for the character's picture.
 *    - name: A string representing the character's name.
 *    - description: A string representing the character's description.
 *    - comics: A number representing the amount of comics the character has appeared in.
 *    - series: A number representing the amount of series the character has appeared in.
 *    - stories: A number representing the amount of stories the character has appeared in.
 * @return {JSX.Element} A JSX element representing the card with the character's information.
 */
const Card = ({
  picture, name, description, comics, series, stories,
}) => (
	<div className="card-result">
		<div className="card-picture">
			<img className="picture" src={picture} alt={name} />
		</div>
		<div className="cardcard-info">
			<h1 className="card__title">{name}</h1>
			<p className="card__description">{description}</p>
			<div className="card-stat">
				<p className="card__info__item">
					# comics:
					{' '}
					{comics}
				</p>
				<p className="card__info__item">
					# series:
					{' '}
					{series}
				</p>
				<p className="card__info__item">
					# stories:
					{' '}
					{stories}
				</p>
			</div>
		</div>
	</div>
);

Card.propTypes = {
  picture: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  comics: PropTypes.number.isRequired,
  series: PropTypes.number.isRequired,
  stories: PropTypes.number.isRequired,
};

export default Card;

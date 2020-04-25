import React from "react";
import "./_statistics.sass";
import PropTypes from "prop-types";

const colorRandomaizer = () => {
	const a = Math.floor(Math.random() * 256);
	const b = Math.floor(Math.random() * 256);
	const c = Math.floor(Math.random() * 256);
	const opacity = 1;
	const color = `rgba(${a},${b},${c},${opacity})`;
	return color;
};

export const Statistics = ({ title, stat }) => {
	return (
		<section className="stat">
			<h2 className="title">{title}</h2>
			<ul className="stat__list">
				{stat.map((arr) => {
					return (
						<li
							className="item"
							key={arr.id}
							style={{ backgroundColor: `${colorRandomaizer()}` }}
						>
							<span className="statlabel">{arr.label}</span>
							<span className="percentage"> {arr.percentage}</span>
						</li>
					);
				})}
			</ul>
		</section>
	);
};

Statistics.defaultProps = {
	title: "title",
	stat: [],
};

Statistics.propTypes = {
	title: PropTypes.string.isRequired,
	stat: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.string,
			label: PropTypes.string,
			percentage: PropTypes.number,
		}),
	),
};

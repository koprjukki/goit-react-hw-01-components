import React from "react";
import "./_profile.sass";
import PropTypes from "prop-types";

export const Profile = ({
	avatar,
	name,
	tag,
	location,
	stats: { followers, views, likes },
}) => {
	return (
		<div className="profile">
			<div className="description">
				<img src={avatar} alt="user avatar" className="avatar" />
				<p className="name">{name}</p>
				<p className="tag">@{tag}</p>
				<p className="location">{location}</p>
			</div>
			<ul className="stats">
				<li className="stats__items">
					<span className="label">Followers</span>
					<span className="quantity"> {followers}</span>
				</li>
				<li className="stats__items">
					<span className="label">Views</span>
					<span className="quantity"> {views}</span>
				</li>
				<li className="stats__items">
					<span className="label">Likes</span>
					<span className="quantity"> {likes}</span>
				</li>
			</ul>
		</div>
	);
};

Profile.defaultProps = {
	name: "Незнакомец",
	avatar:
		"https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.3brecruitment.co.uk%2Fwebsite%2Fassets%2Fimages%2Fplaceholders%2Fteam-placeholder.jpg&f=1&nofb=1",
	tag: "неизвестный",
	location: "Не указно",
	stats: {
		followers: 0,
		views: 0,
		likes: 0,
	},
};

Profile.propTypes = {
	avatar: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	tag: PropTypes.string.isRequired,
	location: PropTypes.string.isRequired,
	stats: PropTypes.shape({
		followers: PropTypes.number,
		views: PropTypes.number,
		likes: PropTypes.number,
	}).isRequired,
};

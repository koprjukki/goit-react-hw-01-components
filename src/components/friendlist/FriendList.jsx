import React from "react";
import "./_friendlist.sass";
import PropTypes from "prop-types";

export const FriendList = ({ friends }) => {
	return (
		<ul className="friends__list">
			{friends.map((friend) => {
				return (
					<li key={friend.id} className="friends__list--item">
						<span
							className="status"
							style={{
								backgroundColor: `${friend.isOnline ? "green" : "red"}`,
							}}
						></span>
						<img src={friend.avatar} alt="" width="48px" />
						<p className="name">{friend.name}</p>
					</li>
				);
			})}
		</ul>
	);
};

FriendList.defaultProps = {
	friends: {},
};

FriendList.propTypes = {
	friends: PropTypes.arrayOf(
		PropTypes.shape({
			avatar: PropTypes.string.isRequired,
			name: PropTypes.string.isRequired,
			id: PropTypes.number.isRequired,
			isOnline: PropTypes.bool.isRequired,
		}),
	).isRequired,
};

import React from "react";
import "./_transactionhistory.sass";
import PropTypes from "prop-types";

export const TransactionHistory = ({ items }) => {
	return (
		<table className="transaction__history">
			<thead className="transaction__head">
				<tr>
					<th>Type</th>
					<th>Amount</th>
					<th>Currency</th>
				</tr>
			</thead>

			<tbody>
				{items.map(({ type, amount, currency, id }) => {
					return (
						<tr className="tbody_tr" key={id}>
							<td className="type_td">{type}</td>
							<td>{amount}</td>
							<td>{currency}</td>
						</tr>
					);
				})}
			</tbody>
		</table>
	);
};

TransactionHistory.defaultProps = {
	items: [],
};

TransactionHistory.propTypes = {
	items: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.string,
			type: PropTypes.string,
			amount: PropTypes.string,
			currency: PropTypes.string,
		}).isRequired,
	).isRequired,
};

import React from "react";
import "./_app.sass";

import user from "./json/user";
import statdata from "./json/statistical-data";
import friends from "./json/friends.json";
import transactions from "./json/transactions.json";

import { Profile } from "./components/profile/Profile";
import { Statistics } from "./components/statistics/Statistics";
import { FriendList } from "./components/friendlist/FriendList";
import { TransactionHistory } from "./components/transactionhistory/TransactionHistory";

function App() {
	return (
		<>
			<Profile {...user} />
			<Statistics title="Upload stats" stat={statdata} />
			<FriendList friends={friends} />
			<TransactionHistory items={transactions} />
		</>
	);
}

export default App;

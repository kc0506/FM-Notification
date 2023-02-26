import { useEffect, useState } from "react";
import Body from "./components/Body";
import { CardProps } from "./components/Card";
import { ContentProps } from "./components/Content";
import Header from "./components/Header";

import { db } from "./db";

export default function App() {

	const [cards, setCards] = useState<CardProps[]>(db);

	const markAllAsRead = () => {
		setCards((cards) => {
			return cards.map(card => {
				return { ...card, unread: false };
			});
		});
	}

	const count = cards.reduce((acc, cur) => acc + Number(cur.unread), 0);

	return <>
		<div className="h-screen flex items-center justify-center bg-grayish-blue-100 ">
			<div style={{ borderRadius: '1rem' }} className="p-4 shadow-2xl shadow-grayish-blue-300 h-full md:h-5/6 max-w-3xl grow bg-white	flex flex-col">
				<Header markAllAsRead={markAllAsRead} count={count} />
				<Body cards={cards} />
			</div>
		</div>
	</>
}	
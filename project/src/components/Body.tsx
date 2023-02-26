import { useState } from "react"
import Card, { CardProps } from "./Card"

interface BodyProps {
    cards: CardProps[],
};

export default function Body(props: BodyProps) {

    const { cards } = props;

    return <>
        <div className=" overflow-y-scroll grow h-auto flex  bg-white flex-col p-4 pt-0 gap-3 ">
            {cards.map(card => <Card {...card} />)}
        </div>
    </>
}
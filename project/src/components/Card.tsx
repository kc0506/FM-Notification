import { useEffect, useState } from "react";
import Content, { ContentProps } from "./Content";


interface CardProps {
    img: string,
    contents: ContentProps[],
    time: string,
    unread: Boolean,

    picture?: string,
    messages?: string,
};


export default function Card(props: CardProps) {

    const { img, contents, unread, time } = props;

    const bgColor = unread ? " bg-grayish-blue-100 shadow-sm" : " bg-white";

    const [name, setName] = useState("?");
    useEffect(() => {
        contents.forEach((content) => {
            if (content.type === 'name')
                setName(content.text);
        });
    }, [contents]);

    return <>
        <div className={" flex w-full p-4 gap-4 rounded-xl" + bgColor}>
            <img src={img} alt={name} className=" w-12 h-12" />
            <div>
                <div>
                    {contents.map((content) => <Content {...content} />)}
                </div>
                <div className="  text-grayish-blue-400 mt-1">
                    {time}
                </div>
            </div>
        </div>
    </>
}

export type { CardProps };
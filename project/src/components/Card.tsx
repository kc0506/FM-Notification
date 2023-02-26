import { useEffect, useState } from "react";
import Content, { ContentProps } from "./Content";


interface User {
    name: string,
    profile: string,
}

interface CardProps {

    user: User,
    contents: ContentProps[],
    time: string,
    unread: Boolean,

    picture?: string,
    message?: string,
};


export default function Card(props: CardProps) {

    const { user, contents, unread, time, message, picture } = props;

    const bgColor = unread ? " bg-grayish-blue-100 shadow-sm" : " bg-white";

    return <>
        <div className={" flex w-full p-4 gap-4 rounded-xl" + bgColor}>
            <img src={user.profile} alt={user.name} className=" w-12 h-12" />
            <div className="w-full">
                <div className=" flex ">
                    <div className=" align-middle">
                        <Content type="name" text={user.name} />
                        {contents.map((content) => <Content {...content} />)}
                        {unread && <span className=" bg-primary-red h-[0.6rem] w-[0.6rem] inline-block rounded-full" />}
                    </div>
                    {
                        picture
                            ? <img src={picture} alt="picture" className=" rounded-xl cursor-pointer relative w-12 h-12 ml-auto" />
                            : null
                    }
                </div>
                <div className="  text-grayish-blue-400 mt-1">
                    {time}
                </div>
                {
                    message
                        ? <div className=" hover:bg-grayish-blue-200 cursor-pointer mt-3 rounded px-4 py-4 border border-grayish-blue-300 text-grayish-blue-500">
                            {message}
                        </div>
                        : null
                }

            </div>
        </div>
    </>
}

export type { CardProps };

interface HeaderProps {
    markAllAsRead: () => any,
    count: number,
};

export default function Header(props: HeaderProps) {

    const { markAllAsRead, count } = props;

    return <>
        <div className=" p-4 h-20 bg-white flex w-full gap-3 items-center">
            <div className=" text-grayish-blue-600 font-extrabold text-xl">
                Notifications
            </div>
            <div className=" rounded-md bg-primary-blue text-grayish-blue-300 px-3 py-0.5 text-base">
                {count}
            </div>
            <div className=" ml-auto cursor-pointer hover:text-primary-blue text-grayish-blue-500 cursor-pointer" onClick={markAllAsRead}>Mark all as read</div>
        </div>
    </>
}
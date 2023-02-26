import { CardProps } from "./components/Card";

const db: CardProps[] = [
    {
        user: {
            profile: './images/avatar-mark-webber.webp',
            name: 'Mark Webber',
        },
        unread: true,
        time: '1m ago',
        contents: [
            {
                type: 'default',
                text: 'reacted to your recent post'
            },
            {
                type: 'bold',
                text: 'My first tournament today!'
            },
        ]
    },
    {
        user: {
            profile: './images/avatar-angela-gray.webp',
            name: 'Angela Gray',
        },
        unread: true,
        time: '5m ago',
        contents: [
            {
                type: 'default',
                text: 'followed you',
            },
        ],
    },
    {
        user: {
            profile: './images/avatar-jacob-thompson.webp',
            name: 'Jacob Thompson'
        },
        unread: true,
        time: '1 days ago',
        contents: [
            {
                type: 'default',
                text: 'has joined your group',
            },
            {
                type: 'bold',
                text: 'Chess Club'
            },
        ],
    },
    {
        user: {
            profile: './images/avatar-rizky-hasanuddin.webp',
            name: 'Rizky Hasanuddin',
        },
        unread: false,
        time: '5 days ago',
        contents: [
            {
                type: 'default',
                text: 'sent you a private message',
            },
        ],
        message: "Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game."
    },
    {
        user: {
            profile: './images/avatar-kimberly-smith.webp',
            name: 'Kimberly Smith',
        },
        unread: false,
        time: '1 week ago',
        contents: [
            {
                type: 'default',
                text: 'commented on your picture',
            }
        ],
        picture: './images/image-chess.webp',
    },
    {
        user: {
            profile: './images/avatar-nathan-peterson.webp',
            name: 'Nathan Peterson',
        },
        unread: false,
        time: '2 weeks ago',
        contents: [
            {
                type: 'default',
                text: 'reacted to your recent post'
            },
            {
                type: 'bold',
                text: '5 end-game strategies to increase your win rate'
            }
        ]
    },
    {
        user: {
            profile: './images/avatar-anna-kim.webp',
            name: 'Anna Kim'
        },
        unread: false,
        time: '2 weeks ago',
        contents: [
            {
                type: 'default',
                text: 'left the group'
            },
            {
                type: 'bold',
                text: 'Chess Club'
            }
        ]
    }
]

export { db };



interface ContentProps {
    type: 'name' | 'bold' | 'default',
    text: string,
};
export default function Content(props: ContentProps) {

    const { text, type } = props;

    const weight = type === 'default' ? 'font-medium' : 'font-extrabold';
    const hover = type === 'default' ?'' :' cursor-pointer hover:text-primary-blue'

    let color: string;
    switch (type) {
        case 'default':
        case 'bold':
            color = 'text-grayish-blue-500';
            break;
        case 'name':
            color = 'text-grayish-blue-600';
            break;
    }

    return <>
        <span className={`${weight} ${color} ${hover}`}>
            {text + ' '}&nbsp;
        </span>
    </>
};

export type { ContentProps };
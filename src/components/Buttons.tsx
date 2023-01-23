

interface IButtons {
    content: string
    url?: string
}

export function Buttons({ content, url }: IButtons) {

    return (
        <a 
            href={url}
            className=" text-white text-lg font-medium border
             border-white py-2 px-3 h-16 w-540 flex
              items-center justify-center m-3 rounded-lg"
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.1);',
                borderColor: 'rgba(255, 255, 255, 0.5);',
                backdropFilter: 'blur(4px);'
            }}
        >
            <p className="text-white">{content}</p>
        </a>
    )
}
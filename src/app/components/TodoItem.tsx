interface Props{
    text:string;
    onDelete: () => void;
}

export default function TodoItem({text , onDelete} : Props){
    return (
        <div className="flex justify-between items-center border-b py-2">
            <span>{text}</span>
            <button onClick={onDelete} className="text-red-500 hover:text-red-700">
                삭제
            </button>
        </div>
    );
}


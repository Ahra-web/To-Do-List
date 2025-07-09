import { useState , FormEvent} from 'react'; // FormEvent : 폼 제출 이벤트의 타입

interface Props{
    onAdd: (text: string) => void;
}

export default function TodoInput({ onAdd } : Props){
    const [text, setText] = useState("");

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault(); // 페이지 새로고침을 막음
        const trimmed = text.trim();
        if ( !trimmed ) return;
        onAdd(trimmed);
        setText("");
    }
    return(
        <form onSubmit={handleSubmit} className="flex gap-2 mt-4">
            <input
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="할 일을 입력하세요"
                className="border p-2 rounded w-full"
            />
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
                추가
            </button>
        </form>
    )
}
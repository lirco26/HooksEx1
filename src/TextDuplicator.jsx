import React, {useEffect, useState, useRef} from 'react';

export default function TextDuplicator() {
    const [content, setContent] = useState('');

    const inputRef = React.createRef();

    useEffect(() => {
        inputRef.current.focus();
    });

    return <div className="text-duplicator">
        <input type="text" ref={inputRef} onChange={(event) => {
            setContent(event.target.value);
        }
        }/>
        <span>{content}</span>
    </div>;
}
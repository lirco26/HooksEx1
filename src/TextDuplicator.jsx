import React, {useState} from 'react';

export default function TextDuplicator() {
    const [content, setContent] = useState('');
    return <div className="text-duplicator">
        <input type="text" onChange={ (event) => {
            setContent(event.target.value);
        }
        }/>
        <span>{content}</span>
    </div>;
}
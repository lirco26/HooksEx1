import React, {useEffect, useState} from 'react';

export default function TextDuplicator() {
    const [content, setContent] = useDelayedState('', 1);

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

const MILLISECONDS_IN_SECOND = 1000;

function useDelayedState(initialState, delayInSeconds) {
    const [content, setContent] = useState(initialState);
    const setContentInDelay = (newValue) => {
        setTimeout(() => {
            setContent(newValue);
        }, delayInSeconds * MILLISECONDS_IN_SECOND);
    };

    return [content, setContentInDelay];
}
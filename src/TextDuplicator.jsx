import React, {useState, useEffect} from 'react';

export default function TextDuplicator() {
    const [state, setState] = useDelayedState({content: ''}, 1);

    const inputRef = React.createRef();
    useEffect(() => {
        inputRef.current.focus();
    });

    return <div className="text-duplicator">
        <input type="text" ref={inputRef} onChange={event => {
            setState({content: event.target.value});
        }}/>
        <span>{state.content}</span>
    </div>;

}

const MILLISECONDS_IN_SECOND = 1000;

function useDelayedState(initialState, delayInSeconds) {
    const [state, setState] = useState(initialState);

    let timeout = null;
    const setStateWithDelay = function (newState) {
        if (timeout) {
            clearTimeout(timeout);
        }
        timeout = setTimeout(() => {
            setState(newState);
        }, delayInSeconds * MILLISECONDS_IN_SECOND);
    };

    return [state, setStateWithDelay];
}
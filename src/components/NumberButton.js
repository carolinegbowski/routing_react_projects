import React, { useState } from 'react';

function NumberButton() {
    const [output, setOutput] = useState([]);
    const iterable = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]
    
    const createNumber = (num) => {
        return ( <p>{ num }</p>)
    }

    function showNumbers() {
        setOutput(iterable.map(createNumber));
    }

    return (
        <div class="component-body">
            <h1 class="component-header">N U M B E R - B U T T O N</h1>
            <button onClick={e => showNumbers()}>Number Button</button>
            { output }
        </div>
    )
}

export default NumberButton;
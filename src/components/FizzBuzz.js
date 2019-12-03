import React, {useState} from "react"

function FizzBuzz () {
    const [myNumber, setMyNumber] = useState(0);
    const [output, setOutput] = useState([]);

    const fizzBuzzLogic = (num) => {
        if (num === 0) {
            return ( <p>{ num }</p> )
        }
        else if (num % 5 === 0 && num % 3 === 0) {
            return ( <p>FizzBuzz</p> )
        }
        else if (num % 3 === 0) {
            return ( <p>Fizz</p> )
        }
        else if (num % 5 === 0) {
            return ( <p>Buzz</p> )
        }
        else {
            return ( <p>{ num }</p>)
        }
    }

    function range(size, startAt = 0) {
        return [...Array(size).keys()].map(i => i + startAt);
    };

    const myRange = range(myNumber)
    
    function showNumbers() {
        setOutput(myRange.map(fizzBuzzLogic))
    }

    return (
        <div class="component-body">
            <h1 class="component-header">F I Z Z B U Z Z</h1>
            <label>Enter a number: </label>
            <input id="number" name="number" onChange={e => setMyNumber(Number(e.target.value))} />
            <button onClick={e => showNumbers()}>Submit</button>
            { output }
        </div>
    )

}

export default FizzBuzz;
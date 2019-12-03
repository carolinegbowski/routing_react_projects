import React, {useState} from 'react'

function Pokemon () {
    const [data, setData] = useState ({});
    const [query, setQuery] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    const sendData = async () => {
        setIsLoading(true);
        setIsError(false);
        try {
            const response = await fetch(`http://pokeapi.co/api/v2/pokemon/${query}`);
            const output = await response.json();
            setData(output);
        } catch (error) {
            setIsError(true);
        };
        setIsLoading(false);
    }
    return (
        <div class="component-body">
            <h1 class="component-header">P O K E M O N</h1>
            <label>Enter Pokemon Name</label>
            <input id="name" name="name" onChange={e => setQuery(e.target.value)}></input>
            <button onClick={e => sendData()}>Search</button>
            {isLoading ? 
                (<p>Loading...</p>) :
                ( <div>
                    <img src={data.sprites.front_default}/>
                    <h3>{data.name}</h3>
                    <p>{data.id}</p>
                </div>
                )
            }   
            {isError ? <p>Error in request</p> : <p>No Errors</p>}
        </div>
    )

}

export default Pokemon;
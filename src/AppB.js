import React from 'react';

const Hello = ({name,age}) => {
    const bornYear = () => new Date().getFullYear() - age
    return (
        <div>
            <p>Hello {name}, you are {age} years old</p>
            <p>So you were born in {bornYear()}</p>
        </div>
    )
}

const AppB = () => {
    const name = 'Ryan'
    const age = 10

    return (
        <div>
            <h1>Greetings Human</h1>
            <Hello name='Edeline' age={24+10}/>
            <Hello name='Ryan' age={25+10}/>
            <Hello name={name} age={age}/>
        </div>
    )
}

export default AppB;
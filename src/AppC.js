import React, {useState} from 'react';

const Display = ({counter}) => <div>{counter}</div>

const Button = ({handleClick,text}) => (
        <button onClick={handleClick}>
            {text}
        </button>    
)

const AppC = () => {
    const [counter,setCounter] = useState(0)
    // const handleClick = () => {
    //     console.log('clicked')
    const increaseByOne = () => setCounter(counter + 1)
    const decreaseByOne = () => setCounter(counter - 1)
    const setToZero = () => setCounter(0)
    
    return (
        <div>
            <Display counter={counter}/>
            <Button handleClick={increaseByOne}
            text = 'plus'/>
            <Button handleClick={setToZero}
            text = 'zero'/>
            <Button handleClick={decreaseByOne}
            text = 'minus'/>
        </div>
    )
}

export default AppC
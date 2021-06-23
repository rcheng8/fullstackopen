// import logo from './logo.svg';
// import './App.css';
import React from 'react';


const Header = (props) => {
  //console.log(props)
  return <h1>{props.course}</h1>
}

const Part = (props) => {
    return (
        <div>
            {props.name} {props.exercises}
        </div>
    )
}

const Content = (props) => {
    //props.parts.forEach(value => {console.log(value)})
  return <div>
      <Part name={props.parts[0].name} exercises={props.parts[0].exercises} />
      <Part name={props.parts[1].name} exercises={props.parts[1].exercises} />
      <Part name={props.parts[2].name} exercises={props.parts[2].exercises} />
  </div>
  }

const Total = (props) => {
    const t1 = props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises
  return <div>
      Total: {t1}
  </div>

}


const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
    name: 'Fundamentals of React',
    exercises: 10
    },
    {
    name: 'Using props to pass data',
    exercises: 7
    },
    {
    name: 'State of a component',
    exercises: 14
    }
  ]
  

  return (
    <div>
    <Header course={course}/>
    <Content parts={parts}/>
    <Total parts={parts}/>
    </div>
  )
}

export default App;

// import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import GoalList from './Componets/GoalList/GoalList';
import NewGoal from './Componets/NewGoal/NewGoal';

function App() {
  const[courseGoal,setCourseGoal] = useState([
    {id:'cg1',text:'learn the coures'},
    {id:'cg2',text:'take a notes'},
    {id:'cg3',text:'perform prcticals'}
  ])

  const addNewGoalhandler=(newGoal)=>{
        setCourseGoal((previousGoal)=>{
          return previousGoal.concat(newGoal)
        })

      // courseGoal.push(newGoal);
      console.log(courseGoal);
  }



  return (
    <>
      <div className='course_goal'>
        <h1 >Course Content</h1>
        <NewGoal onAddGoal={addNewGoalhandler}/>
        <GoalList goals={courseGoal}/>
      </div>
  </>
  );
}

// class App extends React.Component{
//   render(){

//        return <h1> hi this is reactJS class</h1>


//   }
// }

export default App;

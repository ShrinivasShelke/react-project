import React, { useState } from "react";
import "./NewGoal.css"


const NewGoal=(props)=>{
    const [entertext,setEnterText]=useState("");
   
    const onChangeHandler=(event)=>{
        if(event.target.value==""){
            alert("invalidinput")
        }
        setEnterText(event.target.value);
   }
    const onGoalhandler=(event)=>{
        event.preventDefault();

        const goal={
            id:Math.random().toString(),
            text:entertext
        }
        console.log(goal)

        props.onAddGoal(goal);

       setEnterText("")



    }

    



    return(
        <>
        <form className="new-goal" onSubmit={onGoalhandler}>
            <input type="text" value={entertext} onChange={onChangeHandler}/>
            <button type="submit">Add Goal</button>
        </form>
        </>
    )
}

export default NewGoal
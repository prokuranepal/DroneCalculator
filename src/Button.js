import React from 'react'
import './App.css'

export const Button = ({text,submitHandler}) => {
    return (
        <div className="button-container">
           <form action="" onSubmit={submitHandler}>
           <button type="submit">{text}</button>
           </form>
       </div>
    )
}

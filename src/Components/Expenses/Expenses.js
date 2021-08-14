import React from 'react'
import './Expenses.css'
import del from "../../Assets/bin.png"

const Expenses = ({exp,cost}) => {
    return (
        <div className='card'>
            <div className="card-content">
                <p>{exp}</p>
            </div>
            <div className="card-cost"> 
                <p>{cost}</p>
            </div>
            <div className="card-delete"> 
                <img src={del} width="20vh" height="20vh" alt="del"/>
            </div>
        </div>
        
    )
}

export default Expenses

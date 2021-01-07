import React from 'react'
import Button from 'react-bootstrap/Button'
import { connect} from "react-redux";
import {tooglecomlete,removetodo,edittask} from "../js/action"
//import EditForm from './EditForm';
function Todocard({todo,removetodo,tooglecomlete,edittask}) {
    return (
        <div className="parg">
            <h3 className="title">Learn React</h3>
            <p style={todo.isComlete ?{textDecoration:"line-througth",opacity:"0.3"}:{}}>
            {todo.text}
            </p>
            <div>
            <Button variant="outline-primary"onClick={()=>tooglecomlete (todo.id)} >{todo.isComlete ?"undo":"complete"}</Button>
            <Button variant="outline-danger" onClick={()=>removetodo (todo.id)}>Delete</Button>{' '}
           {/* <EditForm/>  */}
         
            </div>

            
        </div>
    )
}

export default connect (null,{tooglecomlete,removetodo,edittask})(Todocard)

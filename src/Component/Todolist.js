import React from 'react'
import Todocard from './Todocard'
import { connect } from 'react-redux'



const Todolist=({Todolist}) =>{
    return (
        <div>
          {Todolist.map((el) => (
          <Todocard key={el.id} todo={el}/>
          ))}
        </div>
    );
};
const mapStateToProps=(state)=>{
return {Todolist:state.todos,};
} ;




export default connect(mapStateToProps)(Todolist);


import React ,{useState}from 'react'
import {Container,Navbar,Button} from 'react-bootstrap'
import {InputGroup,FormControl} from 'react-bootstrap'
import { connect } from 'react-redux'
import {addtodo} from "../js/action"



function Addtodo({addtodo}) {
    const [text, settext] = useState("")
    const handlesubmit=(event)=>{
        event.preventDefault();
        const newtodo={
            text:text,
            id:Date.now(),
            isComplete:false,
        };
        addtodo (newtodo)
    };

    return (
        <div className="A" >
            <h1>TO DO LIST</h1>
            <Container>
                    <Navbar expand="lg" variant="light" bg="light">
                     <Navbar.Brand href="#" ></Navbar.Brand>
                       <InputGroup className="mb-3" onSubmit={handlesubmit}> 
      <InputGroup.Prepend>
     </InputGroup.Prepend>  
     <FormControl aria-describedby="basic-addon1" value ={text} onChange={(e)=>settext(e.target.value)} required/>
  </InputGroup> 
            
                      </Navbar>
             </Container> 
             <Button variant="primary" size="lg" active type="submit">
                     ADD
             </Button>
        
        </div>
    )
}

export default  connect(null,{addtodo})(Addtodo)

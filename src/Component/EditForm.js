//  import { Modal } from 'react-modal';
//  import React,{Fragment,useState} from 'react'


//  const customStyles={
//      content:{
//         top:"25%",
//          left:"50%",
//         right:"auto",
//          bottom:"auto",
//         marginRigth:".50%",
//         transform:"translate(-50%,-50%)",
//         background:"#c5d0dd",     }
//  };
//  //Modal.setAppElement("#root");

//  const EditForm=()=> {
//      const [show,setshow]=useState(false);
//      const toggleModal=()=>setshow(!show)
//      return (
//         <Fragment>
//             <button onClick={ toggleModal}>Edit</button>
//             <Modal isOpen={show} style={customStyles} onRequestClose={ toggleModal}>
//                 <form>    
//                 <h1>hello word</h1>
//                 </form>
//            </Modal>
//        </Fragment  >  )
//  }
//  export default EditForm ;

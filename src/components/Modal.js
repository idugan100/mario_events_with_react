import './Modal.css'
import ReactDOM from 'react-dom';
function Modal(props){


    return ReactDOM.createPortal((
        <div className="modal-backdrop">
            <div className="modal" style={{border:"4px solid", textAlign:"center", borderColor:"#ff4500"}}>
                {props.children}
               
            </div>
            

        </div>
    ),document.body)

}


export default Modal;
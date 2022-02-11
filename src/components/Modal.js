import React from "react";
import '../assets/styles/modal.css'
import {useDispatch, useSelector} from "react-redux";
import {hideModal} from "../redux/actions/modal";

const Modal = ({active, children}) => {
    const dispatch = useDispatch()

    return (
        <div className={active ? 'modal active' : 'modal'} >
            <div className={active ? "modal__content active" : "modal__content"}  onClick={(e) => e.stopPropagation() }>
                <button className='modal__button' onClick={() => dispatch(hideModal())}>
                    <img src={require("../assets/images/close.png")} alt="close-cross" className='modal__button-img'/>
                </button>
                    {children}
            </div>
        </div>
    )
}

export default Modal
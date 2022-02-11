import "../assets/styles/about.css"
import {useState} from "react";
import SignUpForm from "./SignUpForm";
import Modal from "./Modal";
import {useDispatch, useSelector} from "react-redux";
import {showSignInModal} from "../redux/actions/modal";
import {Link} from "react-router-dom";
import Home from "./Home";


const About = () => {
    const dispatch = useDispatch()
    const localState = useSelector( state => state)
    const signInStatus = localState.modal.signInStatus

    return (
        <div>
            <div className="about">
                <div className="about__inner">
                    <div className="about__logo">
                        <img src={require("../assets/images/LoginLogo.png")} alt=""/>
                    </div>
                    <div className="about__form ">
                        <div className="about__form-title">
                            About us
                        </div>
                        <div className="about__form-subtitle">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Id quam tortor nec arcu. Euismod neque ultricies eget adipiscing condimentum.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Id quam tortor nec arcu.
                            Euismod neque ultricies eget adipiscing condimentum.
                        </div>
                        <img src={require('../assets/images/AboutUs-bg.png')} alt="" className="about__form-image"/>
                        <div className="about__form-contacts">
                            Contact us at:
                        </div>
                        <div className="about__form-sign-in-socialmedia">
                            <img src={require("../assets/images/Gmail.png")} alt="" className="login__form-sign-in-socialmedia-item"/>
                            <img src={require("../assets/images/Facebook.png")} alt="" className="login__form-sign-in-socialmedia-item"/>
                            <img src={require("../assets/images/Instagram.png")} alt="" className="login__form-sign-in-socialmedia-item"/>
                            <img src={require("../assets/images/Linkedin.png")} alt="" className="login__form-sign-in-socialmedia-item"/>
                        </div>
                        <div className="about__form-sign-in-new-account">
                            Don’t have an account? <span onClick={()=> {dispatch(showSignInModal())}}>Click here to sign up.</span>
                        </div>
                        <Modal active={signInStatus}>
                            <SignUpForm />
                        </Modal>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
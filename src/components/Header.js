import "../assets/styles/header.css"
import Modal from "./Modal";
import SignUpForm from "./SignUpForm";
import LoginForm from "./LoginForm";
import {useDispatch, useSelector} from "react-redux";
import {showLoginModal, showSignInModal} from "../redux/actions/modal";
import {Link} from "react-router-dom";

const Header = () => {

    const dispatch = useDispatch()
    const {signInStatus, loginStatus} = useSelector(({ modal }) => ({
        signInStatus: modal.signInStatus,
        loginStatus: modal.loginStatus,
    }));

    
    const {totalPrice, totalCount } = useSelector(({ basket }) => ({
      totalPrice: basket.totalPrice,
      totalCount: basket.totalCount,
    }));
    

    return(
        <div>
            <div className='header'>
                <div className="header__container container">
                    <button  className="header__logo">
                        <Link to={'/'}><img src={require("../assets/images/LoginLogo.png")} alt="" className="header__logo-img"/></Link>
                    </button>
                    <div className="header__menu">
                        <div className="header__menu-items">
                            <div className="header__menu-item">
                                <button className="login" onClick={() => {dispatch(showLoginModal())}}>
                                    Login
                                </button>
                                <Modal active={loginStatus} >
                                    <LoginForm />
                                </Modal>
                            </div>
                            <div className="header__menu-item">
                                <button className="login" onClick={() => {dispatch(showSignInModal())}}>
                                    Sign up
                                </button>
                                <Modal active={signInStatus}>
                                    <SignUpForm />
                                </Modal>
                            </div>
                            <button className="header__menu-item">
                                <Link to='/basket'> <img src={require(`../assets/images/Iconly/Bulk/Buy.png`)} alt="" className="header__menu-img"/></Link>
                            </button>
                            <div className="header__menu-info">
                                 В корзине {totalCount}  позиций на сумму {totalPrice}
                            </div>
                        </div>
                        <div className="header__account">
                            <div className="header__account-img">
                                <img src={require(`../assets/images/header_account_img.png`)} alt="" className="header__account-image"/>
                            </div>
                            <div className="header__account-info">
                                <div className="header__account-name">Customer name</div>
                                <div className="header__account-position">Customer</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
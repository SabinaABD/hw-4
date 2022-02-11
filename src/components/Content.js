import Header from "./Header";
import Sidebar from "./Sidebar";
import {Outlet} from "react-router-dom";

const Content = () => {
    return (
        <div className='App'>
            <div className="wrapper">
                <div className=" header">
                    <Header/>
                </div>
                <div className="box sidebar">
                    <Sidebar/>
                </div>
                <div className=" content">
                    <Outlet/>
                </div>
            </div>
        </div>
    )
}

export default Content
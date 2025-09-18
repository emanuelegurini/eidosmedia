import { Outlet } from "react-router";
import {Header} from "./Header.jsx";


const DefaultLayout = () => {
    return (
        <div>
            <Header />
            <div className="content">
                <Outlet />
            </div>
        </div>
    );
};

export default DefaultLayout;
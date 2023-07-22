import { Outlet } from "react-router-dom";

const LayoutPublic = () => {
    return (
        <div className="container">
            <Outlet />
            <h1 className="text-center">Public Layout</h1>
        </div>
    );
}

export default LayoutPublic
import { Outlet, useNavigation } from "react-router-dom";
import NavBar from "../components/NavBar";
const LayoutPublic = () => {

    const navigation = useNavigation();
    console.log(navigation)

    return (
        <>
            <NavBar />
            <main>
                {navigation.state === 'loading' ? <div>Loading...</div> : null}
                <Outlet />
            </main>
            <footer>
                Footer
            </footer>
        </>

    );
}

export default LayoutPublic;
import {Navigate} from "react-router-dom";
import {useAuth} from "../../hooks/useAuth";
import {useDispatch} from "react-redux";
import {AuthLogOut} from "../../redux/action/userAction";

const HomePage = () => {

    const {isAuth, email} = useAuth()
    const dispatch = useDispatch()
    const handleLogOut = () => {
        dispatch(AuthLogOut())
    }


    return isAuth ? (
        <div>
            <h1>welcome to home page</h1>
            <button
                onClick={handleLogOut}
            >
                Log out from {email}
            </button>
        </div>
    ) : (
        <Navigate to={'/login'}/>
    );
};

export default HomePage;
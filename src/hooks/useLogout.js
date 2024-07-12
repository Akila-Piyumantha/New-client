import { useAuthContext } from "./useAuthContext"
import { useNavigate } from "react-router-dom";
export const useLogout =()=>
    {
        const { dispatch } = useAuthContext()
        const navigate =useNavigate();
        const logout=()=>
            {
                //remove useer from lcl storage
                localStorage.removeItem('user')

                //dispatch logut action
                dispatch({type:'LOGOUT'})

                navigate('/login');

            }

            return{logout}
    }
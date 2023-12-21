import axios from "axios";
import { createContext, useReducer } from "react";
import { API } from "../helpers/consts";

export const stuffContext = createContext();

// массив со stuffом
const INIT_STATE = {stuff: [], oneStuff: null};

const reducer = (state, action) => {
    switch (action.type) {
        case "GET_STUFF":
            return {...state, stuff: action.payload};

            case "GET_ONE_STUFF":
            return {...state, oneStuff: action.payload};

            default:
                return state;
    }
};

const StuffContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, INIT_STATE);

    const addStuff = async (newStuff) => {
        await axios.post(API, newStuff)
    };

    // Стягивание с базы данных в дату дабы выводить данные
    const getStuff = async() => {
        let {data} = await axios(API)
        let action = {
            type: "GET_STUFF",
            payload: data,
        }
        // передача acion в reducer
        dispatch(action)
    }
    
    // запишет данные в oneStuff
    const getOneStuff = async (id) => {
        let {data} = await axios(`${API}/${id}`);

        let action = {
            type: "GET_ONE_STUFF",
            payload: data,
        };
        dispatch(action)
    }

    // Удаление
    const deleteStuff = async (id) => {
        await axios.delete(`${API}/${id}`);
        getStuff()
    };

const saveEditedStuff = async (newStuff) => {
    await axios.patch(`${API}/${newStuff.id}`, newStuff)
    getStuff();
}

    const values = {addStuff, getStuff, getOneStuff, deleteStuff, saveEditedStuff, stuff: state.stuff, oneStuff: state.oneStuff};

    return(
        <>
        <stuffContext.Provider value={values}>
            {children}
        </stuffContext.Provider>
        </>
    )

}
export default StuffContextProvider;
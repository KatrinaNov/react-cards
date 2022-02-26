import {applyMiddleware, combineReducers, createStore} from "redux";
import {authReducer} from "../reducers/authReducer";
import thunkMiddleware from 'redux-thunk'

const rootReducer = combineReducers({
  auth: authReducer
})
// непосредственно создаём store
export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));
// определить автоматически тип всего объекта состояния
export type AppRootStateType = ReturnType<typeof rootReducer>

// а это, чтобы можно было в консоли браузера обращаться к store в любой момент
// @ts-ignore
window.store = store;
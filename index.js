import { addTodoActionCreator, addUserActionCreator, removeTodoActionCreator } from "./actionCreator.js";
import store from "./store.js";

// {type: "", payload: ""}
//  dispatch({type:"ADD", payload:2})
console.log(store.getState());
store.dispatch(addTodoActionCreator("Buy Milk"));
console.log(store.getState().todoState);

store.dispatch(addTodoActionCreator("Buy eggs"));
console.log(store.getState().todoState);
store.dispatch(addUserActionCreator("Farhan Aktar"));
console.log(store.getState().userState);
// store.dispatch(removeTodoActionCreator(store.getState().todos[0].id))
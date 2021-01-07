import{ ADD_TODO,REMOVE_TODO,TOGGLE_COMLETE,EDIT_TASK} from "../const/index"

export const addtodo=(newtodo)=>({
type:ADD_TODO,
payload:newtodo,
});
export const removetodo=(id)=>({
    type:REMOVE_TODO,
    payload:id,
    });
export const tooglecomlete=(id)=>({
        type:TOGGLE_COMLETE,
        payload:id,
        });
export const edittask=(edittask)=>({
        type:EDIT_TASK,
            payload:edittask,
            });
            
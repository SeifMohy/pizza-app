export const Increment = (item) =>{
    return {
        type: "INCREMENT",
        payload: item
    }
}
export const Decrement = (item) =>{
    return {
        type: "DECREMENT",
        payload: item
    }
}
export const Delete = (item) =>{
    return {
        type: "DELETE",
        payload: item
    }
}
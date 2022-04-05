export const Increment = (item) =>{
    return {
        type: "INCREMENT",
        payload: item
    }
}
export const Decrement = () =>{
    return {
        type: "DECREMENT"
    }
}
export const ToggleCheckBox = (order, id) =>{
    return {
        type: "TOGGLE",
        payload: order , id
    }
}
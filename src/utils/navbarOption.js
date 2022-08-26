export const changeNavbarOptions = (status) => {
    if(status === "") { 
        return "Every Task";
    }
    if(status === "Completed") {
        return "UnCompleted";
    }
    if(status === "UnCompleted"){
        return "Every Task";
    }
    if(status === "Every Task"){
        return "Completed";
    }
}

export default changeNavbarOptions;
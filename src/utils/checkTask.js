export const checkTask = (name, category, importance) => {
    if(name === '' || category === '' || (importance.Low === false &&
    importance.High === false && importance.Extreme === false)){
        return false;
    }
    return true;
}

export default checkTask;
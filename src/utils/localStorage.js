export const setToken = (token) => {
    localStorage.setItem("token", token);
}

export const getToken = () => {
    const token = localStorage.getItem("token");
    return token;
}

export const setId= (id) => {
    localStorage.setItem("id", id);
}

export const getId = () => {
    const id = localStorage.getItem("id");
    return id;
}


export const clearLocalStorage = () => {
    localStorage.removeItem("id");
    localStorage.removeItem("token");
}
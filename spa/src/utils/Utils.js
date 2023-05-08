export function isAdmin() {
    const user_status = localStorage.getItem("user_status" || "");
    if (user_status === "admin") {
        return true;
    }
}
export function isUser() {
    const user_status = localStorage.getItem("user_status" || "");
    if (user_status === "user") {
        return true;
    }
}

export function isLoggedIn() {
    const user_session = localStorage.getItem("user_session");
    return user_session === "True";
}
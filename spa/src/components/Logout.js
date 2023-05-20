export function Logout() {
    localStorage.setItem('user_session', "False");
    localStorage.setItem('user_status', null);
    localStorage.setItem('token', null)
}
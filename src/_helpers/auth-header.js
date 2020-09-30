export function authHeader() {
    // return authorization header with jwt token
    let idToken = localStorage.getItem('accessToken');

    if (idToken) {
        return { 'Authorization': 'Bearer ' + idToken };
    } else {
        return {};
    }
}
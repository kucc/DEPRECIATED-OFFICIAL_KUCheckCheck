import jwt from "jwt-decode";
import moment from "moment";

const tokenKey = 'accessToken';

export function getToken() {
    return localStorage.getItem(tokenKey);
}

export function removeToken() {
    localStorage.removeItem(tokenKey);
}

export function getMember() {
    const accessToken = getToken();

    if (!accessToken) {
        return null;
    }

    const member = jwt(accessToken);
    const newDate = moment().toDate().getTime() / 1000;
    member.isLoggedIn = member.exp > newDate;
    return member;
}

export function isLoggedIn(exp) {
    let expireAt = exp;
    if (!expireAt) {
        const member = getMember();
        expireAt = member.exp
    }
    const newDate = moment().toDate().getTime() / 1000;

    if (expireAt < newDate) {
        console.log('만료')
        return false
    }

    return true
}

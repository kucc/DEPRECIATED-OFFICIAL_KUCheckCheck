import jwt from "jwt-decode";
import moment from "moment";

export function getMember() {
    const accessToken = localStorage.getItem('accessToken');

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

import { atom } from "recoil"
import { persistAtom } from "./common"

export const userState = atom({
    key: 'userState',
    default: {
        isLogin: false,
        name : null,
        userId:null,
        category:null,
    },
    effects_UNSTABLE: [persistAtom],
})
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import create from "zustand";
import axios from "axios";
import { appStore } from "./appStore";
const { setMessage } = appStore.getState();
export const userStore = create((set) => ({
    user: "",
    token: "",
    setToken: (localToken) => {
        set(() => ({ token: localToken }));
    },
    login: (email, password) => __awaiter(void 0, void 0, void 0, function* () {
        const config = {
            headers: { "Content-Type": "application/json" }
        };
        const body = {
            email,
            password
        };
        try {
            let res = yield axios.post("/api/v1/user/login", JSON.stringify(body), config);
            console.log(res);
            set(() => ({ token: res.data.token }));
            setMessage("Login successful");
            localStorage.setItem("token", res.data.token);
            return (res.data.success);
        }
        catch (err) {
            console.log(err);
            setMessage(err);
            return false;
        }
    }),
    logout: () => {
        localStorage.removeItem("token");
        set(() => ({ token: "" }));
        setMessage("Logout Successful");
    },
    register: (email, password) => __awaiter(void 0, void 0, void 0, function* () {
        const { setMessage } = appStore.getState();
        const config = {
            headers: { "Content-Type": "application/json" }
        };
        const body = {
            email,
            password
        };
        try {
            let res = yield axios.post("/api/v1/user/register", JSON.stringify(body), config);
            console.log(res);
            set(() => ({ token: res.data.token }));
            setMessage("Successfully registered, welcome!");
            return (res.data.success);
        }
        catch (err) {
            setMessage("An error happened while creating the account!");
        }
    })
}));
//# sourceMappingURL=userStore.js.map
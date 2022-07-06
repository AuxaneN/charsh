import { jsx as _jsx } from "react/jsx-runtime";
import { userStore } from '../../stores/userStore';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
const Logout = () => {
    const { logout } = userStore((state) => state);
    const navigate = useNavigate();
    useEffect(() => {
        logout();
        navigate("/", { replace: true });
    }, [logout]);
    return (_jsx("div", { children: "Logging out..." }));
};
export default Logout;
//# sourceMappingURL=Logout.js.map
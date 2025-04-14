import { createContext, useState } from 'react';
import { toast } from 'react-toastify';
import { request } from '../services/request';
import { useNavigate } from 'react-router-dom';

const defaultProvider = {
    user: null,
    loading: true,
    setUser: () => null,
    setLoading: () => Boolean,
    login: () => Promise.resolve(),
    register: () => Promise.resolve()
};

const AuthContext = createContext(defaultProvider);

const AuthProvider = ({ children }) => {
    const navigate = useNavigate()
    const [user, setUser] = useState(defaultProvider.user);
    const [loading, setLoading] = useState(defaultProvider.loading);

    const handleLogin = (params, errorCallback) => {
        setLoading(false);
        request
            .post(`https://fixcode-fastapi-636bb.ondigitalocean.app/api/v1/auth/login`, params)
            .then((response) => {
                window.localStorage.setItem('userToken', response?.data.access_token);
                setUser({ ...response.data.user });
                // window.location.reload()
                navigate("/problems")
                // window.localStorage.setItem('userData', JSON.stringify(response.data?.data.user));
                toast.success('Siz muvaffaqiyatli kirdingiz!');
            })
            .catch((err) => {
                console.log(err);
                if (errorCallback) errorCallback(err);
            })
            .finally(() => {
                setLoading(true);
            });
    };

    const handleRegister = (params, errorCallback) => {
        setLoading(false);
        request
            .post(`https://fixcode-fastapi-636bb.ondigitalocean.app/api/v1/auth/register`, params)
            .then((response) => {
                window.localStorage.setItem('userToken', response?.data.access_token);
                setUser({ ...response.data.user });
                // window.location.reload()
                navigate("/problems")
                // window.localStorage.setItem('userData', JSON.stringify(response.data?.data.user));
                toast.success('Siz muvaffaqiyatli kirdingiz!');
            })
            .catch((err) => {
                console.log(err);
                if (errorCallback) errorCallback(err);
            })
            .finally(() => {
                setLoading(true);
            });
    };


    const values = {
        user,
        loading,
        setUser,
        setLoading,
        login: handleLogin,
        register: handleRegister
    };

    return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export { AuthContext, AuthProvider };

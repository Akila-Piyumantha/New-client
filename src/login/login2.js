import React, { useState } from 'react';
import './login2.css'; 
import '../navbar2styles.css';
import { useLogin } from '../hooks/useLogin';

const LoginPage2 = () => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const { login, isLoading, error } = useLogin();

    const handleLogin = async (e) => {
        e.preventDefault();
        await login(userName, password);
    }

    return (
        <div className='bodylogin overlay rela-block grad-back'>
            <div className="abc-wrapper">
                <div className="abc-container">
                    <div className="abc-col-left">
                        <div className="abc-login-text">
                            <h2 className='under-top-small-text'>Hello Admin</h2>
                            <p className='asd'>Please login to manage the Products</p>
                        </div>
                    </div>
                    <div className="abc-col-right">
                        <div className="abc-login-form">
                            <h2 className='under-top-small-text'>LOGIN</h2>
                            <form onSubmit={handleLogin}>
                                <p>
                                    <label>Username or email address<span>*</span></label>
                                    <input
                                        type="text"
                                        placeholder="Username or Email"
                                        required
                                        onChange={(e) => setUserName(e.target.value)}
                                        value={userName}
                                    />
                                </p>
                                <p>
                                    <label>Password<span>*</span></label>
                                    <input
                                        type="password"
                                        placeholder="Password"
                                        required
                                        onChange={(e) => setPassword(e.target.value)}
                                        value={password}
                                    />
                                </p>
                                <p>
                                    <input
                                        disabled={isLoading}
                                        type="submit"
                                        value="Sign In"
                                    />
                                    {error && <div className="error">{error}</div>}
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage2;

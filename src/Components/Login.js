import "../css/styles.css";
import { useForm } from "react-hook-form";
import React from "react";

export default function Login() {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    const onSubmit = data => {
        requestDb(data.email, data.password);
    }

    const requestDb = (email, password) => {
        const url = 'https://localhost:44338/api/Login/authenticate';

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Methods': 'POST, GET', "Access-Control-Allow-Headers": "*" },
            body: JSON.stringify({ name: email, password: password }),
            crossOriginIsolated: true
        }

        fetch(url, requestOptions)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                if (data.status === 401) {
                    alert(data.title);
                } else {
                    alert(data.token);
                    window.location.href = "/main";
                }
            });
    };

    return (
        <div className="App">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control">
                    <label>Email</label>
                    <input
                        type="text"
                        name="email"
                        {...register("email", {
                            required: true,
                            pattern: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/
                        })}
                    />
                    {errors.email && errors.email.type === "required" && (
                        <p className="errorMsg">Email is required.</p>
                    )}
                    {errors.email && errors.email.type === "pattern" && (
                        <p className="errorMsg">Email is not valid.</p>
                    )}
                </div>
                <div className="form-control">
                    <label>Password</label>
                    <input
                        type="password"
                        name="password"
                        {...register("password", {
                            required: true,
                            minLength: 6
                        })} />
                    {errors.password && errors.password.type === "required" && (
                        <p className="errorMsg">Password is required.</p>
                    )}
                    {errors.password && errors.password.type === "minLength" && (
                        <p className="errorMsg">Password should be at-least 6 characters.</p>
                    )}
                </div>
                <div className="form-control">
                    <label></label>
                    <button type="submit">Login</button>
                </div>
            </form>
        </div>
    );
};
import React, { useEffect, useState } from "react";
import TextField from "../components/textField";
import { validator } from "../utils/validator";

const Login = () => {
    const [data, setData] = useState({ email: "", password: "" });
    const [errors, setErrors] = useState({});

    const handelChange = ({ target }) => {
        setData(prevState => ({ ...prevState, [target.name]: target.value }));
    };

    const validatorConfig = {
        email: {
            isRequired: { message: "Электронная почта обезательна для заполнения" },
            isEmail: { message: "Email введен не корректно" }
        },
        password: {
            isRequired: { message: "Пароль обезателен для заполнения" },
            isCapitalSymbol: { message: "Пароль должен содержать хотя бы одну заглавную букву" },
            isContainDigit: { message: "Пароль должен содержать хотя бы одно число" },
            min: {
                message: "пароль должен состоять минимум из 8 символов",
                value: 8
            }
        }
    };

    useEffect(() => {
        validate();
    }, [data]);

    const validate = () => {
        const errors1 = validator(data, validatorConfig);
        setErrors(errors1);
        return Object.keys(errors1).length === 0;
    };
    const isValid = Object.keys(errors).length === 0;

    const handleSubmit = (e) => {
        e.preventDefault();
        const isValid = validate();
        if (!isValid) return;
        console.log(data);
    };

    return (
            <form onSubmit={handleSubmit}>
                <TextField label="Электронная почта" value={data.email} name="email" onChange={handelChange} error={errors.email}/>
                <TextField label="Пароль" type="password" value={data.password} name="password" onChange={handelChange} error={errors.password} />
                <button className="btn btn-success" type="submit" disabled={!isValid}>Submit</button>
            </form>
    );
};

export default Login;

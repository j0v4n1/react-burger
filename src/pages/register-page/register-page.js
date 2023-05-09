import {Input, PasswordInput, EmailInput, Button,} from "@ya.praktikum/react-developer-burger-ui-components";
import {useState} from "react";
import styles from "./register-page.module.css";
import {Link} from "react-router-dom";
import authentication from "../../utils/authentication-api";
import {useDispatch} from "react-redux";
import {setAccessToken} from "../../services/slices/authentication-slice";
import {registrationURL} from "../../constants/constants";

const RegisterPage = () => {

    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const dispatch = useDispatch();

    const getTokens = (email, password, name) => {
        authentication(registrationURL, {email, password, name})
            .then((data) => {
                dispatch(setAccessToken(data.accessToken))
                localStorage.setItem('accessToken', JSON.stringify(data.refreshToken));
            })
            .then(() => {
                setEmail("");
                setName("");
                setPassword("");
            });
    };

    return (
        <main className={styles.wrapper}>
            <h2 className={styles.header}>Регистрация</h2>
            <form style={{display: "flex", flexDirection: "column"}}>
                <Input
                    type={"text"}
                    placeholder={"Имя"}
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    name={"name"}
                    error={false}
                    errorText={"Ошибка"}
                    size={"default"}
                    extraClass="mb-6"
                />
                <EmailInput
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    name={"email"}
                    isIcon={false}
                    extraClass="mb-6"
                />
                <PasswordInput
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    name={"password"}
                    extraClass="mb-2"
                />
            </form>
            <Button
                extraClass="mt-4"
                htmlType="button"
                type="primary"
                size="large"
                disabled={!name || !password || !email}
                onClick={() => {
                    getTokens(email, password, name);
                }}
            >
                Зарегистрироваться
            </Button>
            <p className="mt-20 mb-6">
                Уже зарегистрированы? <Link to={"/login"}>Войти</Link>
            </p>
        </main>
    );
};

export default RegisterPage;

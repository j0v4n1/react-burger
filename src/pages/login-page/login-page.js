import {
  PasswordInput,
  Input,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useState } from "react";
import React from "react";

const LoginPage = () => {
  const inputRef = React.useRef(null);
  const [passwordValue, setPasswordValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const onIconClick = () => {
    setTimeout(() => inputRef.current.focus(), 0);
    alert("Icon Click Callback");
  };
  return (
    <main className={"content"}>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <Input
          type={"text"}
          placeholder={"E-mail"}
          onChange={(e) => setEmailValue(e.target.value)}
          icon={"CurrencyIcon"}
          value={emailValue}
          name={"name"}
          error={false}
          ref={inputRef}
          onIconClick={onIconClick}
          errorText={"Ошибка"}
          size={"default"}
          extraClass="ml-1"
        />
        <PasswordInput
          onChange={(e) => setPasswordValue(e.target.value)}
          value={passwordValue}
          name={"password"}
          extraClass="mb-2"
        />
      </div>
    </main>
  );
};

export default LoginPage;

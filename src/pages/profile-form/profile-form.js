import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import authentication from '../../utils/authentication-api';
import { PROFILE_URL } from '../../constants/constants';
import {
  setProfileEmail,
  setProfileName,
  updateProfileInformationFailed,
  updateProfileInformationRequest,
  updateProfileInformationSuccess,
} from '../../services/slices/profile';
import styles from './profile-form.module.css';
import { Button, EmailInput, Input, PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components';

const ProfileForm = () => {
  const { profileName, profileEmail, accessToken } = useSelector((store) => store.profile);

  const [nameValue, setNameValue] = useState(profileName);
  const [emailValue, setEmailValue] = useState(profileEmail);
  const [passwordValue, setPasswordValue] = useState('qwerty123');

  useEffect(() => {
    if (profileName && profileEmail) {
      setNameValue(profileName);
      setEmailValue(profileEmail);
    }
  }, [profileEmail, profileName]);

  const dispatch = useDispatch();

  const isFormChanged = () => {
    return !(profileName === nameValue && profileEmail === emailValue);
  };

  const handleCancelButton = () => {
    setNameValue(profileName);
    setEmailValue(profileEmail);
  };

  const handleChangeFields = () => {
    dispatch(updateProfileInformationRequest());
    authentication(PROFILE_URL, {
      method: 'PATCH',
      headers: {
        authorization: accessToken,
      },
      body: {
        name: nameValue,
        email: emailValue,
        password: passwordValue,
      },
    })
      .then((data) => {
        dispatch(updateProfileInformationSuccess());
        dispatch(setProfileName(data.user.name));
        dispatch(setProfileEmail(data.user.email));
      })
      .catch((error) => {
        dispatch(updateProfileInformationFailed());
        console.log(error);
      });
  };

  return (
    <form className={styles['profile__form']}>
      <Input
        type={'text'}
        placeholder={'Имя'}
        onChange={(e) => setNameValue(e.target.value)}
        value={nameValue}
        name={'name'}
        size={'default'}
        extraClass="mb-6"
      />
      <EmailInput
        onChange={(e) => setEmailValue(e.target.value)}
        value={emailValue}
        name={'email'}
        placeholder={'Логин'}
      />
      <PasswordInput
        onChange={(e) => setPasswordValue(e.target.value)}
        value={passwordValue}
        name={'password'}
        extraClass="mb-2 mt-6"
        placeholder={'Пароль'}
      />
      <div className={styles.buttons}>
        {isFormChanged() ? (
          <Button onClick={handleCancelButton} htmlType="button" type="secondary" size="large">
            Отмена
          </Button>
        ) : null}
        <Button
          disabled={!isFormChanged()}
          onClick={handleChangeFields}
          extraClass="mt-4"
          htmlType="button"
          type="primary"
          size="large">
          Сохранить
        </Button>
      </div>
    </form>
  );
};

export default ProfileForm;

import React from 'react';
import {Field, reduxForm} from "redux-form";
import {InjectedFormProps} from "redux-form/lib/reduxForm";

type FormDataType = {
  login: string
  password: string
  rememberMe: boolean
}

const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
  return (
    <form action="" onSubmit={props.handleSubmit}>
      <div>
        <Field type="text"
               component={'input'}
               name={'login'}
               placeholder="login"/>
      </div>
      <div>
        <Field type="text"
               component={'input'}
               name={'password'}
               placeholder="password"/>
      </div>
      <div>
        <Field type="checkbox"
               name={'rememberMe'}
               component={'input'}/>
        remember me
      </div>
      <div>
        <button>Login</button>
      </div>
    </form>
  );
};

const LoginReduxForm = reduxForm<FormDataType>({
  form: "login"
})(LoginForm);


export default LoginReduxForm;

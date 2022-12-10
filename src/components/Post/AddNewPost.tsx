import React from 'react';
import {Field, reduxForm} from "redux-form";
import {InjectedFormProps} from "redux-form/lib/reduxForm";

type FormDataType = {
  newPost: string
}

const AddNewPost: React.FC<InjectedFormProps<FormDataType>> = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <p>Writing your post</p>
      <Field type="text"
             name={'newPost'}
             component={'input'}
             placeholder={'Write your post'}
      />
      <button>Send</button>
    </form>
  );
};

const NewPostReduxForm = reduxForm<FormDataType>({
  form: 'newPost'
})(AddNewPost);

export default NewPostReduxForm;

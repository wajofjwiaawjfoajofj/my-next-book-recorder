'use client'  //stateに関わる操作　イベントリスナー　ブラウザapiへのアクセス　　はuse clientにしないとエラーが発生するので注意
import React from 'react';
import { useForm, useFormState } from 'react-hook-form';



const page = () => {
  const defaultValue = {
    name: '',
    email: '',
    require: ''
  };

  const { register, handleSubmit, formState: { errors } } = useForm({ defaultValues: defaultValue });

  const onSubmit = data => console.log(data);
  const onError = err => console.log(err);

  return (
    <div>
      <h2>お問い合せフォーム</h2>
      <p>*送信してもコンソールにログが出るだけ</p>
      <form onSubmit={handleSubmit(onSubmit, onError)} noValidate>
        <div>
          <label htmlFor='name'>名前:</label>
          <input
            id='name'
            type="text"
            {...register('name', {
              required: '名前は必須です（フルネームでお願いします。）',
              minLength: {
                value: 2,
                message: '最低でも2文字で入力してください'
              }
            })}
          />
          <div>{errors.name?.message}</div>
        </div>
      </form>
    </div>
  );
};

export default page;


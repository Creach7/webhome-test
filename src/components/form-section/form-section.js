import React, { useState } from 'react';
import '../../css/container.css';
import './form-section.css';

export default function FormSection({ postComment }) {
  const [name, setName] = useState('');
  const [text, setText] = useState('');
  const [nameIsWrong, setNameIsWrong] = useState(false);
  const [textIsWrong, setTextIsWrong] = useState(false);
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(name, text);
    let itIsOk = true;
    if (name === '') {
      setNameIsWrong(true);
      itIsOk = false;
    }
    if (text === '') {
      setTextIsWrong(true);
      itIsOk = false;
    }
    if (itIsOk) {
      postComment(name, text);
      setName('');
      setText('');
    }
  }
  return (
    <div>
      <form
        className='container column'
        onSubmit={onSubmit}>
        <input
          type='text'
          placeholder='Введите имя'
          className={'input' + (nameIsWrong ? ' form-section__wrong_input' : '')}
          onChange={(e) => {
            if (nameIsWrong) {
              setNameIsWrong(false);
            }
            setName(e.target.value);
          }}
          value={name}
        />
        <textarea
          type='text'
          className={'form-section__text input' + (textIsWrong ? ' form-section__wrong_input' : '')}
          placeholder='Напишите коментарий'
          onChange={(e) => {
            if (textIsWrong) {
              setTextIsWrong(false);
            }
            setText(e.target.value);
          }}
          value={text}
        />
        <button
          type='submit'
        >
          Отправить
        </button>
      </form >
    </div>
  );
}

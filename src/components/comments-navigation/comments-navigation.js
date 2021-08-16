import React, { useState } from 'react';
import '../../css/container.css';
import './comments-navigation.css';

export default function CommentsNavigation({ firstPage, lastPage, changePage, pagesCount }) {
  const makePagins = () => {
    const pagins = [];

    pagins.push(<a className='pagin' key='<<' href='/' onClick={(e) => {
      e.preventDefault();
      if (firstPage !== 1) {
        changePage(firstPage - 1)
      }
    }}>{'<<'}</a>);

    if (firstPage > 3) {
      for (let i = 1; i <= 3 && i < firstPage - 2; i++) {
        pagins.push(
          <a key={i} href='/' onClick={(e) => {
            e.preventDefault();
            changePage(i)
          }}>{`${i}`}</a>
        );
      }
    }
    if (firstPage > 6) {
      pagins.push(<p key='1points'>...</p>)
    }
    for (let i = firstPage - 2; i <= lastPage + 2 && i <= pagesCount; i++) {
      if (i <= 0) {
        continue
      }
      if (i === firstPage) {
        if (firstPage !== lastPage) {
          pagins.push(
            <p key={`${firstPage}-${lastPage}`}>{`${firstPage}-${lastPage}`}</p>
          );
          i = lastPage + 1;
        } else {
          pagins.push(
            <p key={`${firstPage}`}>{`${firstPage}`}</p>
          );
        }
        continue;
      }
      pagins.push(
        <a key={i} href='/' onClick={(e) => {
          e.preventDefault();
          changePage(i)
        }}>{`${i}`}</a>
      );
    }

    if (lastPage < pagesCount - 6) {
      pagins.push(<p key='2points'>...</p>)
    }

    if (lastPage < pagesCount - 3) {
      for (let i = pagesCount - 2; i <= pagesCount && i > lastPage + 2; i++) {
        pagins.push(
          <a key={i} href='/' onClick={(e) => {
            e.preventDefault();
            changePage(i)
          }}>{`${i}`}</a>
        );
      }
    }

    pagins.push(<a key='>>' href='/' onClick={(e) => {
      e.preventDefault();
      if (lastPage !== pagesCount) {
        changePage(lastPage + 1)
      }
    }}>{'>>'}</a>);
    return pagins;
  }
  const [text, setText] = useState('');
  const [wrongText, setwrongText] = useState(false);
  return (
    <div>
      <div className='container row navigation'>
        {makePagins()}
      </div>
      <input
        type='text'
        placeholder='Введите страницу'
        className={`navigation-input ${wrongText ? 'wrong-text' : ''}`}
        onChange={(e) => {
          setwrongText(false);
          setText(e.target.value);
        }}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            if (/^\d+$/.test(text) && text > 0 && text <= pagesCount) {
              changePage(parseInt(text));
            } else {
              setwrongText(true);
            }
          }
        }}
        value={text}>
      </input>
    </div>
  );
}
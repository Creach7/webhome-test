import React, { useState } from 'react';
// import '../../css/container.css';
import './comments-section.css';


import CommentsNavigation from '../comments-navigation/comments-navigation';
import CommentsItem from '../comments-item/comments-item';

export default function CommentsSection({ getComments, addComments, comments, pagesCount }) {
  const [firstPage, setFirstPage] = useState(1);
  const [lastPage, setLastPage] = useState(1);
  const changePage = (page) => {
    setFirstPage(page);
    setLastPage(page);
    getComments(page);
  }
  const button = (lastPage !== pagesCount) ?
    (<button
      className='button-more'
      onClick={() => {
        const page = lastPage + 1;
        setLastPage(page);
        addComments(page);
      }}
    >
      Показать еще
    </button>)
    : (<></>);
  return (
    <div>
      <CommentsNavigation firstPage={firstPage} lastPage={lastPage} changePage={changePage} pagesCount={pagesCount} />
      <ul className='list'>
        {
          comments.map((comment) => {
            return (
              <li key={comment.id}>
                <CommentsItem name={comment.name} text={comment.text} />
              </li>
            );
          })
        }
      </ul>
      {button}
      <CommentsNavigation firstPage={firstPage} lastPage={lastPage} changePage={changePage} pagesCount={pagesCount} />
    </div >
  );
}

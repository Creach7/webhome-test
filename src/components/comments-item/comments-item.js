import React from 'react';
// import '../../css/container.css';
import './comments-item.css';

export default function CommentsItem({ name, text }) {
  return (
    <div className='item'>
      <p className='item-name'>
        {name} пишет: 
      </p>
      <p>
        {text}
      </p>
    </div>
  );
}
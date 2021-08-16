import React from 'react';
import './App.css';

import FormSection from '../form-section/form-section';
import CommentsSection from '../comments-section/comments-section';

import { postData, getResource } from '../../services/service';

class App extends React.Component {
  state = {
    apiBase: 'https://jordan.ashton.fashion/api/goods/30/comments',
    comments: [],
    last_page: 0
  };
  componentDidMount() {
    this.getComments(1);
  }
  getComments = (page) => {
    getResource(`${this.state.apiBase}?page=${page}`).then((data) => {
      this.setState(state => {
        return {
          comments: data.data,
          last_page: data.last_page
        }
      })
    });
  }
  addComments = (page) => {
    getResource(`${this.state.apiBase}?page=${page}`).then((data) => {
      this.setState(state => {
        return {
          comments: state.comments.concat(data.data),
          last_page: data.last_page
        }
      })
    });
  }
  postComment = (name, text) => {
    postData(
      this.state.apiBase,
      JSON.stringify({
        name: name,
        text: text
      })
    );
  }
  render() {
    const { comments, last_page } = this.state;
    return (
      <div className="App">
        <FormSection postComment={this.postComment} />
        <CommentsSection getComments={this.getComments} addComments={this.addComments} comments={comments} pagesCount={last_page} />
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import { connect } from 'react-redux';
import './BlogView.scss';

class BlogView extends Component {
  render() {
    return (
      <div className="page page-blog">
        <div className="blog">
          <p className="title">
            <a href="https://medium.com/p/fbb31cf78415/edit" title="Re-designed Chart for React" target="_blank">Re-designed Chart for React</a>
          </p>
          <p className="date">Jan 29, 2016</p>
          <p className="abstract">
            Over the past few years, our team were satisfied with React and Redux in some projects,
            which are almost web applications involved to data presentation or operation.
            The projects need use  a lot of charts which is so painful that we decided to create new chart library for React...
          </p>
        </div>
      </div>
    );
  }
}

export default BlogView;

import React, { Component } from 'react';
import Header from '../components/Header';
import { Link } from 'react-router-dom';

export default class HomePage extends Component {
  render() {
    return (
      <div className="home">
        <Header></Header>
        <section>
          <div className=" d-flex justify-content-center border-primary mt-7">
            <div className="card container text-center py-5 mt-7">
              <h1 className="display-4">Welcome to Chatty</h1>
              <p className="lead">A great place to share your thoughts with friends</p>
              <div className="mt-4">
                <Link className="btn btn-secondary px-5 mr-3" to="/signup">Create New Account</Link>
                <Link className="btn btn-info px-5" to="/login">Login to Your Account</Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

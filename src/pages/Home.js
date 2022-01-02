import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class HomePage extends Component {
  render() {
    return (
      <div className="home">
        <section>
          <div className=" d-flex justify-content-center border-primary mt-7">
            <div className="card container text-center py-5 mt-7">
              <h1 className="display-4">Bienvenido a Chatty</h1>
              <div className="mt-4">
                <Link className="btn btn-secondary px-5 mr-3" to="/signup">Crear cuenta nueva</Link>
                <Link className="btn btn-info px-5" to="/login">Inicia sesión</Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

import React, { Component, Fragment } from 'react';
import './page3.scss';
import { Link } from 'react-router-dom';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';

class Page3 extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="home">
        <Header title="Page3" />

        <div className="content">
          Page3
        </div>

        <Footer />
      </div>
    );
  }
}

export default Page3;


import React, { Component, Fragment } from 'react';
import './page2.scss';
import { Link } from 'react-router-dom';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';

class Page2 extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="home">
        <Header title="page2" />

        <div className="content">
          page2
        </div>

        <Footer />
      </div>
    );
  }
}

export default Page2;


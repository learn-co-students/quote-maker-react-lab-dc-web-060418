import React, { Component } from 'react';
import { connect } from 'react-redux'
import Quotes from './containers/Quotes';
import QuoteForm from './containers/QuoteForm';

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row title justify-content-center" style={{ paddingTop: '12px' }}>
          <h1>Quote Maker</h1>
        </div>
        <hr />

         <QuoteForm />
         <Quotes />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { state }
}

export default connect(mapStateToProps)(App);

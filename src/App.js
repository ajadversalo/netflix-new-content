/**
 * Netflix Navigator
 * https://github.com/ajadversalo/netflix-navigator
 *
 */

import React, { Component } from 'react';
import {Container} from 'react-bootstrap';
import NavBar from '../src/components/NavBar';
import FullTitleDetail from '../src/components/FullTitleDetail';
import TableContainer from '../src/components/TableContainer.js';
import {connect} from 'react-redux';
import * as actionCreator from '../src/actions/actions';
import style from '../src/index.css';
import Footer from './components/Footer';
import {Helmet} from 'react-helmet';

class App extends Component {
  constructor(props) {
    super(props);
  }

componentDidMount = () => {
  this.props.setCurrentYear();
  this.props.fetchNewEpisodes();
}

sanitizeString = (string = '-no content-') => {
  let sanitizedString = string;
  sanitizedString = sanitizedString.split("&amp;#39;").join("'");
  sanitizedString = sanitizedString.split("&#39;").join("'");
  sanitizedString = sanitizedString.split("&rsquo;").join("'");
  if (sanitizedString.includes("<")) {
    let pos = sanitizedString.indexOf("<"); 
    sanitizedString = sanitizedString.substr(0,pos);
  }
  return sanitizedString;
}

render(){
  return (
    <div>
      <Helmet>
          <title>Netflix Navigator</title>
          <meta name="description" content="Netflix by AJ Adversalo" />
          <meta name="author" content="AJ Adversalo" />
      </Helmet>
      <Container style={style}>
        <NavBar/>
        { this.props.titleDetail && <FullTitleDetail sanitizeString={this.sanitizeString}/> }
        <TableContainer sanitizeString={this.sanitizeString}/> 
        <Footer/>
      </Container>
    </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
      titleDetail: state.main.titleDetail,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      fetchNewEpisodes: () => {
        dispatch(actionCreator.fetchNewEpisodes());
      },
      setCurrentYear: () => {
        dispatch(actionCreator.setCurrentYear())
      }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

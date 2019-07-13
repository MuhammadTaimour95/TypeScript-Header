
import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faFontAwesomeLogoFull } from '@fortawesome/free-solid-svg-icons';

import { faTimes, faArrowCircleLeft, faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components';
import FontAwesomeIconStyle from './FontAwesomeIcon'
import HeaderStyle from './HeaderStyle'
import { library } from '@fortawesome/fontawesome-svg-core';
import { Router as Router, Route, Link } from "react-router-dom";
import { createBrowserHistory } from 'history'; // you need to install this package
let history = createBrowserHistory();

library.add(faHome);


function Index() {
  return <h2></h2>;
}

type HeaderProps = {
  showBackIcon?: boolean,
  showCloseIcon?: boolean,
  Message?: string
}

export class ModalHeader extends Component<HeaderProps, { showHeader: boolean }> {
  constructor(props: any) {
    super(props);
    this.state = {
      showHeader: true
    };

    this.handleOpenheader = this.handleOpenheader.bind(this);
    this.handleCloseHeader = this.handleCloseHeader.bind(this);
  }

  handleOpenheader() {
    this.setState({ showHeader: true });
  }

  handleCloseHeader() {
    this.setState({ showHeader: false });

  }

  public modalState() {
    const stateRef = this.state;
    return stateRef["showHeader"];
  }


  static defaultProps = {
    showCloseIcon: false,
    showBackIcon: false
  }

  render() {
    if (this.modalState()) {
      return (

        <HeaderStyle >


          <FontAwesomeIconStyle>
            {this.props.showBackIcon &&
              <Router history={createBrowserHistory()}>
                <i onClick={history.goBack}> <FontAwesomeIcon icon={faArrowLeft} color="white" /></i>
              </Router>
            }
          </FontAwesomeIconStyle>
          <FontAwesomeIconStyle>
            {this.props.Message}
          </FontAwesomeIconStyle>
          <FontAwesomeIconStyle>
            <Router history={createBrowserHistory()}>
              {this.props.showCloseIcon &&
                <Link to="/Home" onClick={this.handleCloseHeader} >
                  <FontAwesomeIcon icon={faTimes} />
                  <Route path="/Home" exact component={Index} />
                </Link>
              }
            </Router>
          </FontAwesomeIconStyle>
        </HeaderStyle>
      );
    }
    else {

      return ("Home");
    }
  }
}



export default ModalHeader;
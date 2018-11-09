import React, { Component } from 'react';
import { Col, Row, Container } from '../components/Grid';
import { Icon } from 'react-materialize';
import background from '../images/floor2.jpg';

class Booking extends Component {

  render() {
    return (
        <div>
            <div className="parallax-container">
                <Container>
                    <div className="white">
                        <Row className>
                            <div className="white center" id="search-heading">
                                <h2 className="center" id="search-title"><Icon className="medium">search</Icon>SEARCH INSTRUCTORS</h2>
                                <div class="input-field col s6">
                                    <i class="material-icons prefix">account_circle</i>
                                    <input id="icon_prefix" type="text" class="validate" />
                                    <label for="icon_prefix">Name</label>
                                </div>
                            </div>
                            <div className="white center">
                                <div class="input-field col s6">
                                    <i class="material-icons prefix">account_circle</i>
                                    <input id="icon_prefix" type="text" class="validate" />
                                    <label for="icon_prefix">Location</label>
                                </div>
                            </div>
                        </Row>
                    </div>
                </Container>
                <div className="parallax"><img className="background" src={ background}  alt="Unsplashed background img 1"/></div>
            </div>
        </div>
    )
  }

}

export default Booking;
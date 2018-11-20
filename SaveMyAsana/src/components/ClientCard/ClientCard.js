import React from 'react';
import './clientCard.css';
import {Row} from '../Grid';
import parisCard from '../../images/parisCard.png';

const ClientCard = () => (
    <div className="instructor-row">
        <div className="instructor-card">
            <div className="card">
                <div className="waves-effect waves-block waves-light">
                    <img className="instructor-image activator" src={ parisCard } />
                </div>
                <div class="card-content instructor-name">
                    <span className="card-title activator grey-text text-darken-4">Paris<i className="material-icons right">more_vert</i></span>
                </div>
                <div className="card-reveal">
                    <span className="card-title grey-text text-darken-4">About Me<i className="material-icons right">close</i></span>
                    <p>I want a hot body</p>
                    <hr />
                    <p>Name: Paris Hilton</p>
                    <p>Location: Beverly Hills</p>
                    <p>Email: paris@hilton.com</p>
                    <p>Phone: 500-PARIS</p>
                    <div>
                      <a className="waves-effect waves-light btn-small right instructor-btn">
                          View Profile
                      </a>
                </div>

                </div>
            </div>
        </div>
    </div>
)

export default ClientCard;

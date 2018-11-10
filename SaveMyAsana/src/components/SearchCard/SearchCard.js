import React from 'react';
import { Row, Col, Container } from '../Grid';
import './searchCard.css';
import paris from '../../images/paris.jpg';

const SearchCard = () => (
    <div className="card horizontal searchCard">
        <div className="card-image">
            <img src= { paris } alt="filler"/>
        </div>
        <div className="card-stacked">
            <div className="card-content">
                <p>Name: Paris Hilton</p>
                <p>Location: Beverly Hills</p>
                <p>Email: philton@hilton.com</p>
                <p>Phone: 500-PARIS</p>
                <br /> <br />
                <a class="waves-effect waves-light btn">Search other instructors</a>
            </div>
        </div>
    </div>
);

export default SearchCard;
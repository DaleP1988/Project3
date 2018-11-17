import React from 'react';
import './instructorCard.css';
import parisCard from '../../images/parisCard.png';

const InstructorCard = () => (
    <div className="instructor-card">
          <div className="card">
            <div className="waves-effect waves-block waves-light">
                <img className="instructor-image activator" src={ parisCard } />
            </div>
            <div class="card-content instructor-name">
                <span className="card-title activator grey-text text-darken-4">Paris<i className="material-icons right">more_vert</i></span>
            </div>
            <div className="card-reveal">
                <span className="card-title grey-text text-darken-4">Why I Teach<i className="material-icons right">close</i></span>
                <p>Because I'm hot</p>
                <hr />
                <p>Email: paris@hilton.com</p>
                <p>Phone: 500-PARIS</p>
            </div>
        </div>
    </div>
)

export default InstructorCard;
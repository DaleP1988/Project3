import React, { Component } from "react";
import { Row, Input, Button } from "react-materialize";


class FormLogin extends Component {
    render() {
        return (
            <div className="card-panel amber lighten-5">
                <Row>
                    <h5>Login</h5>
                </Row>
                <Row>
                    <Input type="email" label="E-mail" s={12} />
                </Row>
                <Row>
                    <Input type="password" label="Password" s={12} />
                </Row>
                <Button waves='light'>Submit</Button>
             </div>
        )
    }
}

function UserProfile(props) {
    return (
      <div className="user-profile">
        <img src={props.userProfile.picture} />
        <p>{props.userProfile.name}</p>
      </div>
    );
  }

export default FormLogin;
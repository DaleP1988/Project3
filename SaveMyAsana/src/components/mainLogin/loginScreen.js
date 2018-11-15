import React, { Component } from "react";
import { Row, Input, Button } from "react-materialize";


class FormLogin extends Component {
    render() {
        return (
            <div className="App card-panel amber lighten-5">
<Row>
    <Input type="email" label="E-mail" s={32} />
    <Input type="password" label="Password" s={32} />
    <Button waves='light'>Submit</Button>
</Row>


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
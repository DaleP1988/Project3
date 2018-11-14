import React, { Component } from "react";
import { Row, Input, Button } from "react-materialize";


class FormLogin extends Component {
    render() {
        return (
            <div className="App">
<Row>
    <Input placeholder="Placeholder" s={6} label="First Name" />
    <Input s={6} label="Last Name" />
    <Input s={12} label="User Name" label="User Name" />
    <Input type="password" label="password" s={12} />
    <Input type="email" label="Email" s={12} />
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
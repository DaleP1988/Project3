import React, { Component } from "react";
import { Row, Input, Button } from "react-materialize";


class FormLogin extends Component {
    constructor(props) {
        super(props);
        this.login = this.login.bind(this);
        this.state = {
            email: "",
            password: ""
        }
    }
    login(event) {
        const target = event.target;
        const name = target.name;
        const value = target.value;
        this.setState({ [name] : value});
        // this.setState({
        //     email: event.target.value,
        //     password: event.target.value
        // })
    }
        render() {
            console.log('email ', this.state.email)
            console.log('password', this.state.password)
        return (
            <div className="App card-panel amber lighten-5">
            {/* <h1>Her is a compoent</h1> */}
                <Row>
                    <Input type="email" label="E-mail" s={32} name="email" value={this.state.email} onChange={this.login} />
                    <Input type="password" label="Password" s={32} name="password" value={this.state.password} onChange={this.login}/>
                    <Button waves='light' onClick={this.handleClick}>Submit</Button>
                </Row>


            </div>
        )
    }
}


export default FormLogin;
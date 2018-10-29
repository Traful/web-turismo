import React, { Component } from "react";
import axios from "axios";
const Context = React.createContext();

//Provider
export class Provider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            token: ""
        }
    }

    componentWillMount() {
        var self = this;
        let data = {
            email: "hansjal@gmail.com",
            password: "quilmes"
        }
        axios.post(`${process.env.REACT_APP_API}/user/login`, data)
        .then((response) => {
            if(response.statusText === 'OK' && response.status === 200) {
                if(!response.data.err) {
                    self.setState({token: response.data.data.token});
                } else {
                    console.log(response.data.errMsg);
                }
            } else {
                console.log("Error Token");
            }
        })
        .catch((error) => {
            console.log(error);
        });
    }

    render() {
        return (
            <Context.Provider value={this.state}>
                { this.props.children }
            </Context.Provider>
        )
    }
}

//Consumer
export const Consumer = Context.Consumer;

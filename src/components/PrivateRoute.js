import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';

class PrivateRoute extends Component {
    state = {
        user: {}
    }
    componentDidMount () {
        const { token } = localStorage; 
        fetch(`https://conduit.productionready.io/api/user`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                authorization: `Token ${token}`
            }
        })
        .then(res => res.json())
        .then(({user}) => this.setState({
            user: user
        }))
    }

    render() {
        const { token } = localStorage; 
        const { user } = this.state;
        console.log(user, 'checking user in private route');
        return (
            <>
                {
                   token ? <Route {...this.props} /> : <Redirect to='/' />
                }
            </>
        )
    }
} 

export default PrivateRoute;
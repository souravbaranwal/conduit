import React, { Component } from 'react';

class Articles extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }


    componentDidMount = () => {

        fetch('https://conduit.productionready.io/api/articles').then(res => res.json())
        .then(articles => console.log(articles, 'articles'))
    }


    render() {
        return (
            <>
            </>
        );
    }
}

export default Articles;
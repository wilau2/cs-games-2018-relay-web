import React from 'react';

export default class Deferred extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        };
    }
    componentDidMount() {
        this.props.promise.then(value => {
            this.setState({value});
        });
    }
    render() {
        const then = this.props.then || (value => <span>{value}</span>);
        return then(this.state.value);
    }
}
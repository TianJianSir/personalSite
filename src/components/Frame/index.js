import React, { Component } from 'react';

export default class FrameContainer extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount(){
        console.log('frame did moutn');
    }

    render(){
        return (
            <div className='Frame'>
                {this.props.children}
            </div>
        );
    }
}

import React, { Component } from 'react';
import nprogress from 'nprogress';

export default class FrameContainer extends Component {
    constructor(props) {
        super(props);
    }

    handleProgress = (nextProps) => {
        if(nextProps.location.pathname !== this.props.pathname){
            nprogress.start();
            const loading = nextProps.app._store.getState().loading;

            if(!loading.global){
                nprogress.done();
            }
        }
    }

    componentWillReceiveProps(nextProps){
        this.handleProgress(nextProps);
    }

    render(){
        return (
            <div className='Frame'>
                {this.props.children}
            </div>
        );
    }
}

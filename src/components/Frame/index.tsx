import * as React from 'react';
import nprogress from 'nprogress';

interface IProps {
    pathname?: any;
    app: any,
    children: any
}

export default class FrameContainer extends React.Component<IProps> {
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

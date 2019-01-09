import React from 'react';

// 捕获错误高阶组件，客户端可以正常捕获，
// node渲染时的错误需要在node解析的时候去捕获
export default function ErrorBoundary(Component) {
    class ErrorBoundaryHoc extends React.Component {
        constructor(props) {
            super(props);
            this.componentName = Component.name;
            this.componentKind = Component._component_kind_;
            this.state = {hasError: false, error: null, info: null};
        }

        handleError(error, info) {
            const {componentName, componentKind} = this;
            this.setState({hasError: true, error, info});
            console.log('----------------------------');
            console.log('[error componentKind]', componentKind);
            console.log('[error componentName]', componentName);
            console.log('[error message]', error);
            console.log('[error info]', info);
            console.log('----------------------------');
            // todo 错误上传
        }

        componentDidCatch(error, info) {
            this.handleError(error, info);
        }

        render() {
            const {hasError} = this.state;
            if (hasError) {
                return null;
            }

            return <Component {...this.props} />;
        }
    }

    return ErrorBoundaryHoc;
}

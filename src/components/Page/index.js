import ErrorBoundary from './ErrorBoundary';

export default function Page(_Component) {
    const Component = ErrorBoundary(_Component);

    return Component;
}


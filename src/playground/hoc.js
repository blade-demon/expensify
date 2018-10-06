import React from 'react';
import ReactDOM from 'react-dom';

// Higher Order Component (HOC) A component that renders another component

// Reuse code
// Render hijacking
// Prop manipulation
// Abstract state

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is: {props.info}</p>
    </div>
);

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <p>These are admin info.</p>}
            <WrappedComponent {...props} />
        </div>
    )
};

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuthenticated ? <WrappedComponent {...props} /> : <p>Please login to view the info.</p>}

        </div>
    )
}
// requireAuthentication

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);


ReactDOM.render(<AuthInfo isAuthenticated={true} info="There are some details" />, document.getElementById('app'));
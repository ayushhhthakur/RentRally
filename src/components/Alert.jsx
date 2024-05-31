import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Alert = () => {
    return (
        <div
            className="alert alert-info alert-dismissible fade show"
            role="alert"
            style={{ padding: '20px', margin: '20px', fontSize: '16px', color: '#856404', textAlign: 'center' }}
        >
            The car booking services have been stopped. For any queries, feel free to <a href='/contact' style={{ color: '#856404' }}>contact us</a>.
        </div>
    );
}

export default Alert;

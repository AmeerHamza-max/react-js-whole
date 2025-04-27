import React from 'react';
import { useNavigate, useRouteError } from 'react-router-dom';

const ErrorPages = () => {
  const erro = useRouteError();
  const navigate = useNavigate();

  const handleGoback = () => {
    navigate(-1);
  };

  const errorStyle = {
    textAlign: 'center',
    padding: '20px',
    backgroundColor: '#f8f8f8',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  };

  const imgStyle = {
    maxWidth: '80%',
    height: 'auto',
    marginBottom: '20px',
  };

  const buttonStyle = {
    padding: '10px 20px',
    fontSize: '16px',
    backgroundColor: '#007BFF',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  };

  const buttonHoverStyle = {
    backgroundColor: '#0056b3',
  };

  if (erro.status === 404) {
    return (
      <section style={errorStyle}>
        <div>
          <figure>
            {/* 404 Error Image */}
            <img
              src="https://media.giphy.com/media/13CoXDiaCcCoyk/giphy.gif"
              alt="404 Error"
              style={imgStyle}
            />
          </figure>
          <div>
            <p>The page you are looking for does not exist</p>
            <p>... Back to previous page</p>
          </div>
          <button
            onClick={handleGoback}
            style={buttonStyle}
            onMouseEnter={(e) => (e.target.style.backgroundColor = buttonHoverStyle.backgroundColor)}
            onMouseLeave={(e) => (e.target.style.backgroundColor = buttonStyle.backgroundColor)}
          >
            Go Back
          </button>
        </div>
      </section>
    );
  }

  return <h1>404 error Message</h1>;
};

export default ErrorPages;

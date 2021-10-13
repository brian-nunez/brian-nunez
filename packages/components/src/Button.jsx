import * as React from 'react';

const styles = {
  btnContainer: {
    margin: '2rem',
    border: '0.0625rem solid #000',
  },

  button: {
    padding: '1rem 1.5rem',
    borderRadius: '1rem',
    backgroundColor: '#000',
    color: '#bada55',
  },
};

function Button({
  children,
  type,
  onClick,
}) {
  return (
    <div styles={styles.btnContainer}>
      <button
        type={type}
        onClick={onClick}
        styles={styles.button}
      >
        {children}
      </button>
    </div>
  );
}

export default Button;

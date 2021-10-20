import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const Parallax = styled.div`
  background-image: url(${props => props.backgroundImage});
  min-height: ${props => props.height};
  max-height: ${props => props.height};
  position: relative;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  box-sizing: border-box;
`;

Parallax.defaultProps = {
  height: '100%',
};

Parallax.propTypes = {
  backgroundImage: PropTypes.string.isRequired,
  height: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
    PropTypes.func,
  ]).isRequired,
};

Parallax.displayName = 'Parallax';

export default Parallax;

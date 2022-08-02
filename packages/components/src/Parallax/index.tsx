import styled from '@emotion/styled';

const Parallax = styled.div<{ height?: string, backgroundImage?: string }>`
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

Parallax.displayName = 'Parallax';

export default Parallax;

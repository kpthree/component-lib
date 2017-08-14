import PropTypes from 'prop-types';
import styled from 'styled-components';
import * as colors from '../styles/colors';

const Label = styled.label`
    color: ${({ color }) => colors[color]};
    display: inline-block;
    font-size: 14px;
    font-weight: ${({ fontWeight }) => fontWeight};
    margin: 8px 0;
    text-transform: ${({ textTransform }) => textTransform};
    transition: all 300ms ease;
`;
Label.propTypes = {
    color: PropTypes.string,
    fontWeight: PropTypes.number,
    textTransform: PropTypes.string,
};
Label.defaultProps = {
    color: 'silver',
    fontWeight: 400,
    textTransform: 'uppercase',
};
export default Label;
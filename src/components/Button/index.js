import React from 'react';
import { Button as BaseButton } from '@mui/material';
import Spinner from '../Spinner';
import { default as BaseIconButton } from '@mui/material/IconButton';

function Button({ children, disabled, loading, style, ...otherProps }) {
  const child = loading ? <Spinner /> : children;
  const isDisabled = loading || disabled;

  const loadingStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const buttonStyle = { ...style, ...(loading ? loadingStyle : style) };

  return (
    <BaseButton {...otherProps} style={buttonStyle} disabled={isDisabled}>
      {child}
    </BaseButton>
  );
}

const IconButton = ({ children }) => {
  return <BaseIconButton>{children}</BaseIconButton>;
};

export { IconButton };
export default Button;

import React from 'react';
import { Button as BaseButton } from '@mui/material';
import Spinner from '../Spinner';

function Button({ children, disabled, loading, style, ...otherProps }) {
  const child = loading ? <Spinner /> : children;
  const isDisabled = loading || disabled;

  const loadingStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const buttonStyle = { ...style, ...(loading ? loadingStyle : {}) };

  return (
    <BaseButton {...otherProps} style={buttonStyle} disabled={isDisabled}>
      {child}
    </BaseButton>
  );
}

export default Button;

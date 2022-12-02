import React from 'react';
import { FormControl as Control, TextField, InputLabel, Select, MenuItem } from '@mui/material';
import Register2 from '../../asset/Register2.png';

function Form({ children, title }) {
  return (
    <div
      style={{
        width:"min(100%,500px)",
      }}
      className="flex-col items-center justify-center content-center bg-light font-semibold rounded-xl  shadow-md shadow-gray-700 px-12 py-6 border-4 border-primary opacity-80 min-w-[500] "
    >
      <div style={{ marginBottom: 16 }}>
        <h1 className="text-left font-extrabold text-primary text-3xl ">{title}</h1>
      </div>
      {children}
    </div>
  );
}

function FormPageWrapper({ children }) {
  return (
    <div
      style={{
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundImage: `url(${Register2})`,
      }}
      className="flex  content-center items-center justify-center  min-h-screen  w-full"
    >
      {children}
    </div>
  );
}

function FormInput({ icon: Icon, ...otherProps }) {
  return (
    <div className="flex  justify-center text-center mb-2 items-center">
      <div style={{ marginRight: 10 }}>
        <Icon />
      </div>
      <TextField size='small'style={{paddingBlock:"6px"}} {...otherProps} className="w-full" />
    </div>
  );
}

function FormControl({ onChange, value, name, label, items = [], icon: Icon }) {
  return (
    <div className="flex items-center" style={{ marginBottom: 12 }}>
      <div style={{ marginRight: 10 }}>
        <Icon />
      </div>
      <Control fullWidth>
        <InputLabel>{label}</InputLabel>
        <Select label={label} name={name} value={value} onChange={onChange}>
          {items.map((item) => (
            <MenuItem value={item.value}>{item.label}</MenuItem>
          ))}
        </Select>
      </Control>
    </div>
  );
}

function FormInfo({ children }) {
  return <div className="text-center m-4 text-xsm">{children}</div>;
}

export default Form;
export { FormInput, FormControl, FormInfo, FormPageWrapper };

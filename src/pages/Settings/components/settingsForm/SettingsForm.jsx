import styles from './form.module.scss';
import cn from 'classnames';

const SettingsTitle = ({ text }) => {
  return <h1 className={styles.settingsTitle}>{text}</h1>;
};

const SettingsInput = ({ name, className, label, type = 'text', placeholder, value, onChange, error }) => {
  return (
    <div className={cn(styles.formInput, className)}>
      <label>{label}</label>
      <input
        name={name}
        type={type}
        variant={error && 'error'}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      <span className={styles.error}>{error}</span>
    </div>
  );
};

const SettingsSelect = ({ label, options = [], defaultValue, onChange, error, value }) => {
  return (
    <div className={styles.formSelect}>
      <label>{label}</label>
      <select onChange={onChange} defaultValue={defaultValue} value={value}>
        {options.map((option, key) => (
          <option key={key} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <span className={styles.error}>{error}</span>
    </div>
  );
};

const SettingsPhoneSelect = ({ label, placeholder, options = [] }) => {
  return (
    <div className={styles.formNumber}>
      <label>{label}</label>
      <div className={styles.formNumberContainer}>
        <select>
          {options.map((option, key) => (
            <option key={key} value={option.value}>
              {option.text}
            </option>
          ))}
        </select>
        <input type="text" placeholder={placeholder} />
      </div>
    </div>
  );
};

const SettingsTextarea = ({ placeholder, value, name, onChange, label, error }) => {
  return (
    <div className={styles.formTextarea}>
      <label>{label}</label>
      <textarea placeholder={placeholder} variant={error && 'error'} name={name} onChange={onChange} value={value} />
      <span className={styles.error}>{error}</span>
    </div>
  );
};

const SettingsSubmitButton = ({ type, onClick, children, disabled, style }) => {
  return (
    <button onClick={onClick} className={styles.formSubmit} disabled={disabled} type={type} style={style}>
      {children}
    </button>
  );
};

const SettingsResponse = ({ message, success }) => {
  return <div style={{ color: success ? 'green' : 'red' }}>{message}</div>;
};

export {
  SettingsInput,
  SettingsSelect,
  SettingsSubmitButton,
  SettingsPhoneSelect,
  SettingsTitle,
  SettingsTextarea,
  SettingsResponse,
};

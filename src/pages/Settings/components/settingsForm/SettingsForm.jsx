import styles from './form.module.scss';
import cn from 'classnames';

const SettingsTitle = ({ text }) => {
  return <h1 className={styles.settingsTitle}>{text}</h1>;
};

const SettingsInput = ({ name, className, label, type = 'text', placeholder, value, onChange }) => {
  return (
    <div className={cn(styles.formInput, className)}>
      <label>{label}</label>
      <input name={name} type={type} placeholder={placeholder} value={value} onChange={onChange} />
    </div>
  );
};

const SettingsSelect = ({ label, options = [] }) => {
  return (
    <div className={styles.formSelect}>
      <label>{label}</label>
      <select>
        {options.map((option, key) => (
          <option key={key} value={option.value}>
            {option.text}
          </option>
        ))}
      </select>
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

const SettingsTextarea = ({ placeholder, value, name, onChange, label }) => {
  return (
    <div className={styles.formTextarea}>
      <label>{label}</label>
      <textarea placeholder={placeholder} name={name} onChange={onChange} value={value} />
    </div>

  )
}

const SettingsSubmitButton = ({ onClick,children, disabled, style }) => {
  return (
    <button onClick={onClick} className={styles.formSubmit} disabled={disabled} style={style}>
      {children}
    </button>
  );
};

export { SettingsInput, SettingsSelect, SettingsSubmitButton, SettingsPhoneSelect, SettingsTitle, SettingsTextarea };

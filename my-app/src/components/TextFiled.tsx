import cx from 'clsx';
import { forwardRef } from 'react';
import styles from './TextField.module.css';

interface Props {
  type?: 'input' | 'textarea';
  name: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent<{
    name: string;
    value: string;
  }>) => void;
  value: string;
  error?: string;
}

export default forwardRef((
  {
    type = 'input', name, placeholder, onChange, value, error,
  }: Props,
  ref: React.LegacyRef<HTMLTextAreaElement | HTMLInputElement>,
) => (type === 'input' ? (
  <input
    onChange={onChange}
    value={value}
    name={name}
    ref={ref as React.LegacyRef<HTMLInputElement>}
    className={cx(styles.input, styles.border, {
      [styles.error]: Boolean(error),
    })}
    placeholder={placeholder}
  />
) : (
  <textarea
    onChange={onChange}
    name={name}
    ref={ref as React.LegacyRef<HTMLTextAreaElement>}
    className={cx(styles.textarea, styles.border, styles.input, {
      [styles.error]: Boolean(error),
    })}
    placeholder={placeholder}
  />
)));

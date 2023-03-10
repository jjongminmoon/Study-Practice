import React, { useState } from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';
import { GITHUB_API } from './api';

// Generic 제네릭 : 데이터의 타입을 제너럴라이즈 한다.

interface Props {
  initialValues: Record<string, string>;
  validate: (value: Record<string, string>) => Record<string, string>;
  refs: Record<string, React.MutableRefObject<HTMLInputElement>>;
  onSuccess: (result: string) => void;
  onErrors: () => void;
  onSubmit: () => Promise<string>
}

export function useForm({
  initialValues,
  validate,
  refs,
  onSuccess,
  onErrors,
  onSubmit,
}: Props) {
  const [inputValues, setInputValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  function onChange(e: React.ChangeEvent<{ name: string, value: string }>) {
    const { name, value } = e.target;
    setInputValues({ ...inputValues, [name]: value });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    setIsSubmitting(true);
    const validateResult = validate(inputValues);
    setErrors(validateResult);

    const errorKeys = Object.keys(validateResult);

    if (errorKeys.length !== 0) {
      const key = errorKeys[0];
      // eslint-disable-next-line no-alert
      alert(validateResult[key]);
      // onErrors();
      refs[key].current.focus();
      // ref control
      setIsSubmitting(false);
      return;
    }

    if (errorKeys.length === 0) {
      try {
        const result = await onSubmit();
        onSuccess(result);
      } catch {
        onErrors();
      }
    }
  }
  return {
    inputValues,
    onChange,
    isSubmitting,
    errors,
    handleSubmit,
  };
}

async function getUserInfo() {
  const data = await axios.get(`${GITHUB_API}/user`, {
    headers: {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      Authorization: process.env.REACT_APP_GITHUB_TOKEN!,
      'Content-Type': 'application/json',
    },
  });

  return data.data;
}

export function useUser() {
  return useQuery(['userInfo'], () => getUserInfo());
}

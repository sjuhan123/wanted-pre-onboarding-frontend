import { FormEvent, useState } from 'react';

interface FormValues {
  email: string;
  password: string;
}

interface Props {
  initialValues: FormValues;
  onSubmit: (values: FormValues) => void;
}

const useForm = ({ initialValues, onSubmit }: Props) => {
  const [values, setValues] = useState<FormValues>(initialValues);

  const handleChange = ({ name, value }: { name: string; value: string }) => {
    setValues(prevValues => ({ ...prevValues, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSubmit(values);
  };

  return { values, handleChange, handleSubmit };
};

export default useForm;

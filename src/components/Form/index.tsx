import type { SubmitEvent } from 'react';

import type { FormProps } from './types';

const Form = ({ onSubmit, children }: FormProps) => {
  const handleSubmit = (e: SubmitEvent) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className={[
        'flex flex-col w-full',
        'gap-4 px-4 py-6',
        'bg-steel-100',
        'rounded-xl border border-steel-200',
        'md:max-w-md md:mx-auto',
        'md:gap-6 md:px-8 md:py-12',
        'md:rounded-2xl md:shadow-sm md:shadow-steel-300',
      ].join(' ')}
    >
      {children}
    </form>
  );
};

export default Form;

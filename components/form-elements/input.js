import PropTypes from 'prop-types';
import React from 'react';

import { Error } from './error';

function Input({
  label,
  name,
  required = true,
  type = 'text',
  register,
  errors,
}) {
  const MIN_LENGTH = type === 'tel' ? 8 : 2;
  return (
    <div>
      <label htmlFor={name}>
        <span className="sr-only">{label}</span>
        <div className="relative mt-1 shadow-sm">
          <input
            id={name}
            name={name}
            type={type}
            placeholder={label}
            required={required}
            aria-invalid={!!errors[name]}
            ref={register({
              required: required && (
                <Error message={`${label} is a required field`} />
              ),
              minLength: {
                value: MIN_LENGTH,
                message: (
                  <Error
                    message={`${label} must be at least ${MIN_LENGTH} characters`}
                  />
                ),
              },
            })}
            className="block w-full px-4 py-3 tracking-wider text-black placeholder-gray-600 transition duration-150 ease-in-out border rounded-none form-input"
          />
        </div>
      </label>
      {errors[name]?.message}
    </div>
  );
}

Input.propTypes = {
  errors: PropTypes.object,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  register: PropTypes.func.isRequired,
  required: PropTypes.bool,
  type: PropTypes.string,
};

export { Input };

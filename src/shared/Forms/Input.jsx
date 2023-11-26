const Input = ({
  label,
  name,
  type,
  placeholder,
  defaultValue,
  disabled,
  onChange,
}) => {
  return (
    <>
      <label className="block text-sm font-medium text-primary">
        {label}
        <input
          type={type}
          name={name}
          className="bg-dark border mt-2 mb-2 border-darker rounded-lg focus:ring-brand-primary focus:border-brand-primary w-full p-2.5"
          placeholder={placeholder}
          required
          defaultValue={defaultValue}
          disabled={disabled}
          onChange={onChange}
        />
      </label>
    </>
  );
};

export default Input;

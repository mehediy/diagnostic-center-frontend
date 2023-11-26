const Textarea = ({ label, name, placeholder, defaultValue }) => {
  return (
    <>
      <label className="block text-sm font-medium text-primary">
        {label}
        <textarea
          name={name}
          className="bg-dark border mt-2 mb-2 border-darker rounded-lg focus:ring-brand-primary focus:border-brand-primary w-full p-2.5"
          placeholder={placeholder}
          defaultValue={defaultValue}
          required
        />
      </label>
    </>
  );
};

export default Textarea;

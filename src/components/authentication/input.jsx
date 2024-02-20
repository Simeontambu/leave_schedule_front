export default function Input({ className, placeholder, name, ...validation }) {
  return (
    <input
      className={className}
      placeholder={placeholder}
      name={name}
      validation={validation}
    />
  );
}

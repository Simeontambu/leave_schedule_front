export default function Button({ className, value, type }) {
  return (
    <button className={className} type={type}>
      {value}
    </button>
  );
}

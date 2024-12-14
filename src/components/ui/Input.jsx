export const Input = (props) => {
  return (
    <input
      {...props}
      className={`peer py-3 px-4 block border rounded-lg text-sm outline-blue-500 disabled:opacity-50 disabled:pointer-events-none ${props.className}`}
    />
  );
};

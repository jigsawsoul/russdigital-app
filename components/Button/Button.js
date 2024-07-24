export default function Button({ children, className }) {
  const defaultClasses =
    "bg-black inline-block text-white font-title font-semibold text-sm px-10 py-[22px]";
  const combinedClasses = `${defaultClasses} ${className}`;

  return (
    <button type="submit" className={combinedClasses}>
      {children}
    </button>
  );
}

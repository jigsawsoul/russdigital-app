export default function Container({ children }) {
  return (
    <div className="mx-auto px-4 md:px-14 lg:px-20 max-w-screen-2xl">
      {children}
    </div>
  );
}

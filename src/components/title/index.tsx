export default function Title({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-12 flex items-center px-1">
      <h1 className="text-white">{children}</h1>
    </div>
  );
}

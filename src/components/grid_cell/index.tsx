export default function GridCell({
  children,
  heading,
}: {
  children: React.ReactNode;
  heading: boolean;
}) {
  return (
    <div
      className={
        'text-white p-2 text-xs ' + (heading ? 'bg-tertiary' : 'bg-primary')
      }
    >
      {children}
    </div>
  );
}

GridCell.defaultProps = {
  heading: false,
};

export default function GridCell({
  children,
  heading
}: {
  children: React.ReactNode
  heading: boolean
}) {
  return (
    <div
      className={
        'p-2 text-xs uppercase text-white ' +
        (heading ? 'bg-tertiary' : 'bg-primary')
      }
    >
      {children}
    </div>
  )
}

GridCell.defaultProps = {
  heading: false
}

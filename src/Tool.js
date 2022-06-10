export default function Tool({ tool }) {
  return <div className="tool">
    {tool === 'hammer' && '🔨'}
    {tool === 'axe' && '🪓'}
    {tool === 'tractor' && '🚜'}
    {tool === 'pickaxe' && '⛏️'}
  </div>;
}
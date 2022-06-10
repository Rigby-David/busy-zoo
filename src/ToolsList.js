import Tool from './Tool';

export default function ToolsList({ tools }) {
  return (
    <div className='tools'>
      {
        tools.map((tool, i) => <Tool tool={tool} key={tool + i} />)
      }
    </div>
  );
}
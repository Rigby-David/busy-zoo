import Tool from './Tool';

export default function ToolsList({ tools }) {
  console.log(tools);
  return (
    <div>
      {
        tools.map((tool, i) => <Tool tool={tool} key={tool + i} />)
      }
    </div>
  );
}
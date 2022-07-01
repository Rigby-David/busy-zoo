import { VictoryBar } from 'victory';

const data = [
  { x: 1, y: 13000 },
  { x: 2, y: 16500 },
  { x: 3, y: 14250 },
  { x: 4, y: 19000 }
];

export default function MyCharts() {
  return (
    <div>
      <VictoryBar data={data}/>
    </div>
  );
}
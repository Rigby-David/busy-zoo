import MyCharts from './MyCharts';
import MyCoolerTable from './MyCoolerTable';
import MyTable from './MyTable';
// import MyCharts from './MyCharts';

export default function Admin() {
  return (
    <div>
      <MyTable />
      <MyCoolerTable />
      <MyCharts />
    </div>
  );
}
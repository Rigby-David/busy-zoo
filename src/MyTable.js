import MaterialTable from 'material-table';
import { data } from './data';

export default function MyTable() {
  return (
    <div style={{ maxWidth: '100%' }}>
      <MaterialTable
        columns={
          [
            { title: 'Gladiator Rank', field: 'id' },
            { title: 'Gladiator Title', field: 'first_name' },
            { title: 'Last Slain Opponent', field: 'last_name' },
            { title: 'Email', field: 'email' },
            { title: 'Gender', field: 'gender' },
          ]
        }
        data={data}
        title="Spokane Regional Thunder Dome Sudden-Death Standings"
        options={{  
          headerStyle: { 
            background: 'RGB(175, 17, 28)',
            border: 'solid 3px rosybrown'
          },
          rowStyle: { 
            background: 'hsl(0, 71%, 62%)',
          }
        }
        }
      />      
    </div>
  );
}
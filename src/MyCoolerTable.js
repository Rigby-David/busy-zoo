import MaterialTable from 'material-table';
import { animalData } from './MoreData';

export default function MyCoolerTable() {
  return (
    <div style={{ maxWidth: '100%' }}>
      <MaterialTable
        columns={
          [
            { title: 'Animal ID', field: 'id' },
            { title: 'Animal Name', field: 'animal' },
            { title: 'Cool Stuff', field: 'cool stuff' },
            { title: 'City', field: 'city' },
          ]
        }
        data={animalData}
        title="Super cool animals"
        options={{  
          headerStyle: { 
            background: 'green',
            border: 'solid 3px rosybrown'
          },
          rowStyle: { 
            background: 'turquoise',
          }
        }
        }
      />      
    </div>
  );
}
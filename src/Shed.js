

export default function Shed({ shedIsOpen }) {
  return (
    <div className={shedIsOpen ? 'open' : 'closed'}>
      {
        shedIsOpen ? <img src="shedclosed.jpg" /> : <img src="shedopen.jpg"/>
      }
    </div>
  );
}
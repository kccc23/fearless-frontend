import Nav from './Nav';
import AttendeesList from './AttendeesList';
import LocationForm from './LocationForm';
import ConferenceForm from './ConferenceForm';
import AttendeeForm from './AttendeeForm';

function App(props) {
  const {attendees} = props;
  if (attendees === undefined) {
    return null;
  }

  return (
    <>
    <Nav />
    <div className="container">
      <AttendeeForm />
      {/* <ConferenceForm /> */}
      {/* <LocationForm /> */}
      {/* <AttendeesList attendees={attendees} /> */}
    </div>
    </>
  );
}

export default App;

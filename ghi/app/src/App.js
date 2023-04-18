import Nav from './Nav';
import AttendeesList from './AttendeesList';
import LocationForm from './LocationForm';
import ConferenceForm from './ConferenceForm';
import AttendeeForm from './AttendeeForm';
import PresentationForm from './PresentationForm';
import MainPage from './MainPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App(props) {
  const {attendees} = props;
  if (attendees === undefined) {
    return null;
  }

  return (
    <BrowserRouter>
      <Nav />
      {/* <div className="container"> */}
        <Routes>
          <Route index element={<MainPage />} />
          <Route path="attendees" element={<AttendeesList attendees={attendees} />}>
          </Route>
          <Route path="attendees/new" element={<AttendeeForm />} />
          <Route path="conferences">
            <Route path="new" element={<ConferenceForm />} />
          </Route>
          <Route path="locations">
            <Route path="new" element={<LocationForm />} />
          </Route>
          <Route path="presentations">
            <Route path="new" element={<PresentationForm />} />
          </Route>
        </Routes>
      {/* </div> */}
    </BrowserRouter>
  );
}

export default App;

import { FaSpotify, FaCalendar } from "react-icons/fa";
import { Button } from "./Components/Button/Button";

function App() {
  return (
    <>
      <h1 className="text-3xl font-light pt-6">
        Coding Challenge for Interview
      </h1>

      <Button size="small">Small Default</Button>
      <Button variant="outlined" size="small">
        Small Outlined Primary
      </Button>
      <Button variant="secondary" size="small">
        Small Secondary
      </Button>
      <Button
        variant="secondary"
        className="rounded-full py-6"
        iconPosition="left"
        size="large"
      >
        <FaSpotify className="text-2xl" />
      </Button>
      <Button
        variant="default"
        icon={<FaSpotify />}
        iconPosition="left"
        size="medium"
      >
        Default Medium Icon Left
      </Button>
      <Button
        variant="outlined"
        icon={<FaCalendar />}
        iconPosition="right"
        size="large"
      >
        Large Outlined Icon Right
      </Button>
    </>
  );
}

export default App;

import Toolbar from "./components/Toolbar";
import "./styles/css/styles.css"
import ImageComponent from "./components/ImageComponent";
import QuoteComponent from "./components/QuoteComponent";
import InvitationalComponent from "./components/InvitationalComponent";
import InfoComponent from "./components/InfoComponent";

function App() {
  return (
      <div>
          <Toolbar/>
          <InvitationalComponent/>
          <InfoComponent/>
          <QuoteComponent/>
          <ImageComponent/>
      </div>
  );
}

export default App;

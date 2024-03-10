import Toolbar from "./components/Toolbar";
import "./styles/css/styles.css"
import ImageComponent from "./components/ImageComponent";
import QuoteComponent from "./components/QuoteComponent";
import Description from "./components/Description";

function App() {
  return (
      <div>
          <Toolbar/>
          <ImageComponent/>
          <Description/>
          <QuoteComponent/>
      </div>
  );
}

export default App;

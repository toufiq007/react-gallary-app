import "./App.css";
import AddImage from "./gallary/AddImage";
import Gallary from "./gallary/Gallary";

function App() {
  return (
    <>
      <div className="container mx-auto">
      <h2 className="text-center text-3xl my-2 font-serif font-bold">React image galary</h2>
        <AddImage />
        <Gallary />
      </div>
    </>
  );
}

export default App;

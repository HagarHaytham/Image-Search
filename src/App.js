import SearchQuery from "./components/SearchQuery";
import ImagesGrid from "./components/ImagesGrid";
import { Key } from "key";
function App() {
  return (
    <div className="App">
      <h2> Image Search Using Pixabay</h2>
      <SearchQuery/>
      <ImagesGrid/>
    </div>
  );
}

export default App;

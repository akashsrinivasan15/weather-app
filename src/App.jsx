import Weather from "./Weather";
import Img from "./assets/image.png";

function App() {
  return (
    <div
      className="h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${Img})` }}
    >
      <Weather />
    </div>
  );
}

export default App;
import Linn from "./Linn";
import "./App.css";
import pilt from "./pildid/haldjatants.png";

function App() {
  const pariis = {
    nimi: "Pariis",
    huvitav: "Palju kunsti",
  };

  const berliin = {
    nimi: "Berliin",
    huvitav: "Väga hea curryvorst",
  };
  const london = {
    nimi: "London",
    huvitav: "Punased bussid",
  };

  const linnad = [
    pariis,
    {
      nimi: "London",
      huvitav: "Punased bussid",
      pilt: pilt,
    },
    berliin,
    london,
  ];

  return (
    <div className="App">
      <h1>Linnad</h1>
      {linnad.map((linn) => (
        <Linn Linn={linn} />
      ))}
    </div>
  );
}

export default App;

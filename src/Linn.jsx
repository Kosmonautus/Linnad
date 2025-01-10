import { useState } from "react";
function Linn({ Linn }) {
  const [kylastusi, setKylastusi] = useState(0);

  const vajutus = (event) => {
    console.log("klikiti nupule " + event.target.innerText);
    setKylastusi(kylastusi + 1);
    console.log(kylastusi);
  };

  return (
    <div>
      <h1>{Linn.nimi}</h1>
      <div>{Linn.huvitav}</div>
      <button onClick={vajutus}>Külasta linna {Linn.nimi}</button>
      <span>-- {kylastusi}--</span>
      <div>
        <img src={Linn.pilt} alt="pilt" />
      </div>
    </div>
  );
}
export default Linn;

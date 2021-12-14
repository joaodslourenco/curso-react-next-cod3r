import { useState } from "react"
import NumeroDisplay from "../../components/NumeroDisplay"

export default function numeroMegaSena() {
const layoutApp = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column"
}
const numberStyle = {
  display: "flex"
}
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}


  const [numero, setNumero] = useState(0)

  const inc = () => setNumero(numero + 1)


  return (
<>
<div style={layoutApp}>
      <h1>Gerador de números da MegaSena</h1>
<div style={numberStyle}>
<NumeroDisplay numero={getRandomInt(0, 60)}/>
<NumeroDisplay numero={getRandomInt(0, 60)}/>
<NumeroDisplay numero={getRandomInt(0, 60)}/>
<NumeroDisplay numero={getRandomInt(0, 60)}/>
<NumeroDisplay numero={getRandomInt(0, 60)}/>
<NumeroDisplay numero={getRandomInt(0, 60)}/>
</div>
      <div>
    
      <button onClick={inc}>Gerar</button>
      </div>
</div>
      
    
</>
  )
}
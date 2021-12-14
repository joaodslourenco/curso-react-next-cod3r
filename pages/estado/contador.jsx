import { useState } from "react"
import ContadorDisplay from "../../components/ContadorDisplay"

export default function numero() {

  const [numero, setNumero] = useState(0)

  const dec = () => setNumero(numero - 1)
  const inc = () => setNumero(numero + 1)


  return (
<>
<div style={{
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column"
}}>
      <h1>Contador</h1>

<ContadorDisplay contador={contador}/>
      <div>
        
      <button onClick={inc}>Aumentar</button>
      </div>
</div>
      
    
</>
  )
}
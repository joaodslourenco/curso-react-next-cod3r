export default function Filho(props) {
  console.log(props)
  return (
    <div>
      <h1>Filho</h1>
      <button onClick={props.funcao}>Chamar Pai #01</button>
      <button onClick={() => props.funcao("Passei no ENEM", "uhu", "mas eu to tao feliz")}>Chamar Pai #02</button>

    </div>
  )
}
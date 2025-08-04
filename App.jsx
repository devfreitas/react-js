import Componente1 from "./components/Componente1"
import frieren from "./assets/Frieren.jpeg"

// todo componente só retorna um elemento
function App() {
  // return deve ser entre parênteses para que comporte o JSX "Javascript XML"
  let nome = "Rafael"
  let alunos = ['Victor', 'Maria', 'Leonardo']
  return(
    <div>
          <h1>Olá</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          {/* {Ah} */}
          <p>Nome: {nome}</p>
          <p>Soma: {2+3}</p>
          <p>Aluno: {alunos[2]}</p>
          <Componente1></Componente1>
          <img src={frieren} alt="Img" />
    </div>

  )
}
export default App

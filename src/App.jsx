
const Header = (hprop) => {
  return (
    <div>
      <h1>{hprop.course}</h1> 
    </div>
  )
}
const Part = ({ part, tehtavat }) => {
  return (
    <p>{part} {tehtavat}</p>
  );
}

const Content = (cprop) => {
  return (
    <div>
      <Part part="Fundamentals of React" tehtavat={cprop.ex1} />
      <Part part="Using props to pass data" tehtavat={cprop.ex2} />
      <Part part="State of a component" tehtavat={cprop.ex3} />
    </div>
  );
}

const Total = (tprop) => {
  const a = 'Number of exercises '
  return(
    <p>{a}{tprop.ex1 + tprop.ex2 + tprop.ex3}</p>
  )
}

const App = () => {
  
  const kurssi = 'Half Stack application development'
  return (
    <div>
      <Header  course= {kurssi}/>
      <Content ex1 = {10} ex2 = {7} ex3 = {14}/>
      <Total ex1 = {10} ex2 = {7} ex3 = {14}/> 
    </div>
  )
}

export default App



const Header = (hprop) => {
  return (
    <div>
      <h1>{hprop.course}</h1> 
    </div>
  )
}

const Content = (cprop) => {
  console.log(cprop)
  const part1 = 'Fundamentals of React '
  const part2 = 'Using props to pass data '
  const part3 = 'State of a component ' 
  return (
    <div>
      <p>{part1}{cprop.ex1}</p>
      <p>{part2}{cprop.ex2}</p>
      <p>{part3}{cprop.ex3}</p>
    </div>
  )

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


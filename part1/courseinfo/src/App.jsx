import Header from "./Header"
import Content from "./Content.jsx"
import Total from "./Total.jsx"
const App = () => {
const details = {
nameOfCourse :'Half stack development',
list :[ {
    name : 'Fundamentals of react',
    exercises : 10
}, 
{
    name :  'Using props to display data',
    exercises: 7
},
{
    name : 'State of a component',
    exercises: 7
}
]
}

       return (
    
    
    
    <div>
      <Header nameOfCourse ={details.nameOfCourse}/>
      <Content list={details.list}/>
      <Total list = {details.list} />
    </div>
  )
}
export default App
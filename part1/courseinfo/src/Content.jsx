import Part from "./Part.jsx"
const list =[ {
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
const Content = () => {
    return (
        <div>
            <Part partName ={list[0].name} partContent={list[0].exercises} />
            <Part partName ={list[1].name} partContent={list[1].exercises} />
            <Part partName ={list[2].name} partContent={list[2].exercises} />
        </div>
    )
}
export default Content
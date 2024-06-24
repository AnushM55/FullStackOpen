const Total = (props) => {
    return (
        <p>Total Number of exercises are : {props.list.map(value => value.exercises).reduce((a,b) => a+b,0)} </p>
    )
}

export default Total
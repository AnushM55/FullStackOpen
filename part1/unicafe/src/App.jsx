import { useState } from "react";

const StatLine = (props) => {
  return (
    <p>
      {props.description} : {props.value}{" "}
    </p>
  );
};
const Statistics = (props) => {
  if (props.good + props.bad + props.neutral > 0) {
    return (
      <div>
        <h1>Statistics</h1>
        <table>
          <tbody>
            <tr>
              <td>
                <StatLine description="Good " value={props.good} />
              </td>
            </tr>
            <tr>
              <td>
                <StatLine description="Neutral" value={props.neutral} />
              </td>
            </tr>
            <tr>
              <td>
                <StatLine description="Bad" value={props.bad} />
              </td>
            </tr>
            <tr>
              <td>
                <StatLine
                  description="All"
                  value={props.good + props.neutral + props.bad}
                />
              </td>
            </tr>
            <tr>
              <td>
                <StatLine
                  description="Average"
                  value={(props.good + props.neutral + props.bad) / 3}
                />
              </td>
            </tr>
            <tr>
              <td>
                <StatLine
                  description="Positive percentage"
                  value={
                    ((props.good + props.neutral) /
                      (props.good + props.neutral + props.bad)) *
                    100
                  }
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  } else {
    return <h1>NOT ENOUGH DATA</h1>;
  }
};
const Button = (props) => {
  return (
    <button
      onClick={() => {
        props.callback();
      }}
    >
      {props.text}
    </button>
  );
};
const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <div>
        <h1>Give feedback</h1>
        <Button
          callback={() => {
            setGood(good + 1);
          }}
          text="good"
        />
        <Button
          callback={() => {
            setNeutral(neutral + 1);
          }}
          text="neutral"
        />
        <Button
          callback={() => {
            setBad(bad + 1);
          }}
          text="bad"
        />
      </div>
      <Statistics good={good} bad={bad} neutral={neutral} />
    </div>
  );
};

export default App;

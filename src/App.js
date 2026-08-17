import React from "react";
import FeedbackOptions from "./components/FeedbackOptions";
import Statistics from "./components/Statistics";
import Section from "./components/Section";
import Notification from "./components/Notification";

class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  addFeedback = (type) => {
    this.setState({
      [type]: this.state[type] + 1
    });
  };

  render() {
    const { good, neutral, bad } = this.state;

    const total = good + neutral + bad;

    const positivePercentage =
      total === 0 ? 0 : Math.round((good / total) * 100);

    return (
      <>
        

        <Section title="Напишіть відгукц">
          <FeedbackOptions
            options={["good", "neutral", "bad"]}
            onLeaveFeedback={this.addFeedback}
          />
        </Section>

        <Section title="Статістика">
          {total > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positivePercentage}
            />
          ) : (
            <Notification message="no fidback" />
          )}
        </Section>
      </>
    );
  }
}

export default App;
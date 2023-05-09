import { Component } from 'react';
import Message from './Message/Message';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Section from './Section/Section';



export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
}


updateStatistics = (state) => {
    this.setState((prevState) => ({ [state]: prevState[state] + 1 }));
};



    countTotalFeedback = () => {
        const total = Object.values(this.state).reduce((previusValue, number) => {
            return previusValue + number;
        }, 0);

        return total;
    };

    countPositiveFeedbackPercentage = () => {
        const total = Object.values(this.state).reduce((previusValue, number) => {
            return previusValue + number;
        }, 0);
        const percentage = total === 0 ? 0 : ((this.state.good*100)/total);
        return Math.round(percentage);
    };


    render() {
      const { good, neutral, bad } = this.state;

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions 
          options={this.state} 
          onLeaveFeedback={this.updateStatistics}
        />
      </Section>


      {this.countTotalFeedback()
      ? (
        <Section 
          title="Statistics"
        >
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            totalFeedback={this.countTotalFeedback()}
            positiveFeedbackPercentage={this.countPositiveFeedbackPercentage()}        
          />
        </Section>
        
      )
        : (
          <Message 
            message="There is no feedback"
          />
        )
      }
      

    </>
  );
};
};
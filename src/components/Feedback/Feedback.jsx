import React from 'react';
import { Component } from 'react';
import css from './Feedback.module.css';
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';
import Statistics from '../Statistics/Statistics';




class Feedback extends Component {
    
    // state = {
    //     good: 0,
    //     neutral: 0,
    //     bad: 0
    // };


    
    // handleGoodRate = () => {
    //     this.setState( prevState => {
    //         return {
    //             good: prevState.good + 1,
    //         };
    //     });

    //     // или второй вариант записи без return

    //     // this.setState(prevState => ({
    //     //     good: prevState.good + 1,
    //     // }));

    // };

    // handleNeutralRate = () => {
    //     this.setState( prevState => {
    //         return {
    //             neutral: prevState.neutral + 1,
    //         };
    //     });
    // };

    // handleBadRate = () => {
    //     this.setState( prevState => {
    //         return {
    //             bad: prevState.bad + 1,
    //         };
    //     });
    // };

    // countTotalFeedback = () => {
    //     const total = Object.values(this.state).reduce((previusValue, number) => {
    //         return previusValue + number;
    //     }, 0);

    //     return total;
    // };

    // countPositiveFeedbackPercentage = () => {
    //     const total = Object.values(this.state).reduce((previusValue, number) => {
    //         return previusValue + number;
    //     }, 0);
    //     const percentage = total === 0 ? 0 : ((this.state.good*100)/total);
    //     return Math.round(percentage);
    // };

      render () {

        return (
        <div className={css.feedback}>
            {/* <div className={css.rateSection}>
                <h2 className={css.title}>Please leave feedback</h2>
                <button type='button' className={css.rateButton} onClick={this.handleGoodRate}>Good</button>
                <button type='button' className={css.rateButton} onClick={this.handleNeutralRate}>Neutral</button>
                <button type='button' className={css.rateButton} onClick={this.handleBadRate}>Bad</button>
            </div> */}
            {/* <div className={css.statisticsSection}>
                <h2 className={css.title}>Statistics</h2>
                <p className={css.rateResult}>Good: {this.state.good}</p>
                <p className={css.rateResult}>Neutral: {this.state.neutral}</p>
                <p className={css.rateResult}>Bad: {this.state.bad}</p>
                <p className={css.rateResult}>Total: {this.countTotalFeedback()}</p>
                <p className={css.rateResult}>Positive feedback: {this.countPositiveFeedbackPercentage()} %</p>
            </div> */}
        </div>
        )
        
      }

};

export default Feedback;

import PropTypes from 'prop-types';
import css from './Statistics.module.css';

const Statistics = ({
    good = 0,
    neutral = 0,
    bad = 0,
    totalFeedback = 0,
    positiveFeedbackPercentage = 0,
}) => (
    <div className={css.statisticsSection}>
        <p className={css.rateResult}>Good: {good}</p>
        <p className={css.rateResult}>Neutral: {neutral}</p>
        <p className={css.rateResult}>Bad: {bad}</p>
        <p className={css.rateResult}>Total: {totalFeedback}</p>
        <p className={css.rateResult}>Positive feedback: {positiveFeedbackPercentage}%</p>
    </div>
)



export default Statistics;

Statistics.propTypes = {
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
    totalFeedback: PropTypes.number,
    positiveFeedbackPercentage: PropTypes.string,
};
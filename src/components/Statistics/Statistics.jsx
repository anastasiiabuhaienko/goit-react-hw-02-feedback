import PropTypes from 'prop-types';
import css from './Statistics.module.css';

const Statistics = ({
    good = 0,
    neutral = 0,
    bad = 0,
    total = 0,
    positivPercentage,
}) => (
    <div className={css.statisticsSection}>
        <p className={css.rateResult}>Good: {good}</p>
        <p className={css.rateResult}>Neutral: {neutral}</p>
        <p className={css.rateResult}>Bad: {bad}</p>
        <p className={css.rateResult}>Total: {total}</p>
        <p className={css.rateResult}>Positive feedback: {positivPercentage}%</p>
    </div>
)



export default Statistics;

Statistics.propTypes = {
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
    total: PropTypes.number,
    positivPercentage: PropTypes.string,
};
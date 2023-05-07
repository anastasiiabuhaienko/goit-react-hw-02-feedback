import React from 'react';
import css from './FeedbackOptions.module.css';


const FeedbackOptions = ({options, onLeaveFeedback}) => {

   return (
        <div className={css.rateSection}>
            {
                Object.keys(options).map((option) => {
                    return (
                        <button 
                            type="button" 
                            className={css.rateButton} 
                            onClick={() => onLeaveFeedback(option)}
                        >
                        {option}
                        </button>
                    );
                })
            }
        </div>
    );
};

export default FeedbackOptions;

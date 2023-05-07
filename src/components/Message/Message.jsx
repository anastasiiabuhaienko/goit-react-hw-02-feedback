import PropTypes from 'prop-types';
import css from './Message.module.css';

const Message = ({ message }) => {
  return (
    <div className={css.messageSection}>
      {message && <b>{message}</b>}      
    </div>
  )
};

export default Message;

Message.propTypes = {
  title: PropTypes.string,  
}
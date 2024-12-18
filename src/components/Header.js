import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ title, onAdd, showAdd }) => {

  return (
    <header className='header'>
      <h1>{title}</h1>
      <Button 
        color={showAdd ? 'Red' : 'green'} 
        text={showAdd ? 'Close' : 'Add'} 
        onClick={ onAdd }
      />
    </header>
  )
}

export default Header

Header.defaultProps = {
  title: 'Todo List',
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
}
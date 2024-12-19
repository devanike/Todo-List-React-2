import Button from './Button'

interface HeaderProps {
  title?: string;
  onAdd: () => void;
  showAdd: boolean;
}

const Header: React.FC<HeaderProps> = ({ title = 'Todo List', onAdd, showAdd }) => {

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

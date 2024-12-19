
interface ButtonProps {
  color?: string;
  text: string;
  onClick: () =>void;
}

const Button: React.FC<ButtonProps> = ({ color = 'steelblue', text, onClick }) => {

  return (
    <button className="btn" style={{ backgroundColor: color}} onClick={ onClick }>{ text }</button>
  )
}

export default Button


import "./Button.css"

export const Button = ({ text, functionClick, currentClass }) => {
  return (
    <div onClick={functionClick} className={currentClass}>
      {text}
    </div>
  )
}
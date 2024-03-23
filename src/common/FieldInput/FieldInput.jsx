import "./FieldInput.css"

export const FieldInput = ({
  type,
  name,
  placeholder,
  value,
  disabled,
  onChangeFunction,
  onBlurFunction,
  className
}) => {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      disabled={disabled}
      onChange={onChangeFunction}
      onBlur={onBlurFunction}
      className="fieldInputDesign"
    />
  )
}
import "./FieldInput.css"

export const FieldInput = ({
  type,
  name,
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
      value={value}
      disabled={disabled}
      onChange={onChangeFunction}
      onBlur={onBlurFunction}
      className={className}
    />
  )
}
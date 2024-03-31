import "./CustomTextArea.css";

export const CustomAreaText = ({
  type,
  name,
  value,
  disabled,
  onChangeFunction,
  onBlurFunction,
  className,
}) => {
  return (
    <textarea
      type={type}
      name={name}
      value={value}
      disabled={disabled}
      onChange={onChangeFunction}
      onBlur={onBlurFunction}
      className={className}
    />
  );
};

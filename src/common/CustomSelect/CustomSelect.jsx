import "./CustomSelect.css";

export const CustomSelect = ({ optionsArray, name, newRole, value, onChange }) => {
  return (
  <>
    <div value={value} onClick={onChange}> {newRole}
        {optionsArray.map((option, index) => (
          <div key={index} value={option}>
            {option}
          </div>
        ))}
      </div>
  </>
  );
};

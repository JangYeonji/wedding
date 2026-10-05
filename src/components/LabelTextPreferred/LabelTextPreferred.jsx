import "./style.css";

export const LabelTextPreferred = ({
  label = "Label",
  mode = "light",
  state = "default",
  className,
  symbolClassName,
}) => {
  return (
    <div className={`label-text-preferred ${className}`}>
      <div className={`symbol ${symbolClassName}`}>{label}</div>
    </div>
  );
};

import "./style.css";

export const LiquidGlassRegular = ({
  mode = "light",
  state = "primary",
  className,
  glassEffectClassName,
}) => {
  return (
    <div className={`liquid-glass-regular ${className}`}>
      <div className={`glass-effect ${glassEffectClassName}`} />
    </div>
  );
};

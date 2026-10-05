import { LabelTextPreferred } from "../LabelTextPreferred";
import { LiquidGlassRegular } from "../LiquidGlassRegular";
import "./style.css";

export const ButtonLiquidGlass = ({
  tinted = true,
  className,
  labelTextPreferredLabel = "Label",
  labelTextPreferredModeLightStateClassName,
  labelTextPreferredSymbolClassName,
  onClick,
}) => {
  const Wrapper = onClick ? "button" : "div";

  return (
    <Wrapper
      className={`button-liquid-glass ${className}`}
      onClick={onClick}
      type={onClick ? "button" : undefined}
      aria-live={onClick ? "polite" : undefined}
    >
      <LiquidGlassRegular
        className="BG"
        glassEffectClassName="liquid-glass-regular-small"
        mode="light"
        state="primary"
      />
      <LabelTextPreferred
        className={labelTextPreferredModeLightStateClassName}
        label={labelTextPreferredLabel}
        mode="light"
        state="default"
        symbolClassName={labelTextPreferredSymbolClassName}
      />
    </Wrapper>
  );
};

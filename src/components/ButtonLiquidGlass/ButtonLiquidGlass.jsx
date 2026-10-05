import { LabelTextPreferred } from "../LabelTextPreferred";
import { LiquidGlassRegular } from "../LiquidGlassRegular";
import "./style.css";

export const ButtonLiquidGlass = ({
  tinted = true,
  className,
  labelTextPreferredLabel = "Label",
  labelTextPreferredModeLightStateClassName,
  labelTextPreferredSymbolClassName,
}) => {
  return (
    <div className={`button-liquid-glass ${className}`}>
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
    </div>
  );
};

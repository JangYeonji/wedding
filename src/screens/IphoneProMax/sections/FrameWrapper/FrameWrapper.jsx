import { ButtonLiquidGlass } from "../../../../components/ButtonLiquidGlass";
import "./style.css";

export const FrameWrapper = () => {
  return (
    <div className="frame-wrapper">
      <div className="text-wrapper-12">마음 전하실 곳</div>
      <div className="frame-8">
        <div className="frame-9">
          <div className="text-wrapper-13">신랑측</div>
          <div className="dashicons-arrow-down">
            <img className="vector-11" alt="Vector" src="/img/vector-13.svg" />
          </div>
        </div>
        <div className="rectangle" />
        <div className="frame-10">
          <div className="frame-11">
            <div className="frame-12">
              <div className="text-wrapper-14">신랑</div>
              <p className="element-4">
                <span className="text-wrapper-15">
                  송문석
                  <br />
                </span>
                <span className="text-wrapper-16">
                  우리은행 1002-364-341611
                </span>
              </p>
            </div>
            <ButtonLiquidGlass
              className="design-component-instance-node"
              labelTextPreferredLabel="복사하기"
              labelTextPreferredModeLightStateClassName="button-liquid-glass-2"
              labelTextPreferredSymbolClassName="button-liquid-glass-3"
              tinted
            />
          </div>
          <div className="frame-11">
            <div className="frame-12">
              <div className="text-wrapper-14">신랑 아버지</div>
              <p className="element-4">
                <span className="text-wrapper-15">
                  송성호
                  <br />
                </span>
                <span className="text-wrapper-16">
                  단위농협 423025-51-045881
                </span>
              </p>
            </div>
            <ButtonLiquidGlass
              className="design-component-instance-node"
              labelTextPreferredLabel="복사하기"
              labelTextPreferredModeLightStateClassName="button-liquid-glass-2"
              labelTextPreferredSymbolClassName="button-liquid-glass-3"
              tinted
            />
          </div>
          <div className="frame-11">
            <div className="frame-12">
              <div className="text-wrapper-14">신랑 어머니</div>
              <div className="element-5">
                홍정주
                <br />
                농협중앙회 335-12-232834
              </div>
            </div>
            <ButtonLiquidGlass
              className="design-component-instance-node"
              labelTextPreferredLabel="복사하기"
              labelTextPreferredModeLightStateClassName="button-liquid-glass-2"
              labelTextPreferredSymbolClassName="button-liquid-glass-3"
              tinted
            />
          </div>
        </div>
      </div>
      <div className="frame-8">
        <div className="frame-9">
          <div className="text-wrapper-13">신부측</div>
          <div className="dashicons-arrow-down">
            <img className="vector-11" alt="Vector" src="/img/vector-13.svg" />
          </div>
        </div>
        <div className="rectangle" />
        <div className="frame-10">
          <div className="frame-11">
            <div className="frame-12">
              <div className="text-wrapper-17">신부</div>
              <div className="element-5">
                장연지
                <br />
                우리은행 1002-954-609671
              </div>
            </div>
            <ButtonLiquidGlass
              className="design-component-instance-node"
              labelTextPreferredLabel="복사하기"
              labelTextPreferredModeLightStateClassName="button-liquid-glass-2"
              labelTextPreferredSymbolClassName="button-liquid-glass-3"
              tinted
            />
          </div>
          <div className="frame-11">
            <div className="frame-13">
              <div className="text-wrapper-17">신부 아버지</div>
              <div className="element-6">
                장영훈
                <br />
                카카오뱅크 3333-04-1121431
              </div>
            </div>
            <ButtonLiquidGlass
              className="design-component-instance-node"
              labelTextPreferredLabel="복사하기"
              labelTextPreferredModeLightStateClassName="button-liquid-glass-2"
              labelTextPreferredSymbolClassName="button-liquid-glass-3"
              tinted
            />
          </div>
          <div className="frame-11">
            <div className="frame-12">
              <div className="text-wrapper-17">신부 어머니</div>
              <div className="element-5">
                정훤희
                <br />
                신한은행 110-139-768862
              </div>
            </div>
            <ButtonLiquidGlass
              className="design-component-instance-node"
              labelTextPreferredLabel="복사하기"
              labelTextPreferredModeLightStateClassName="button-liquid-glass-2"
              labelTextPreferredSymbolClassName="button-liquid-glass-3"
              tinted
            />
          </div>
        </div>
      </div>
    </div>
  );
};

import { useEffect, useState } from "react";
import { ButtonLiquidGlass } from "../../../../components/ButtonLiquidGlass";
import "./style.css";

export const FrameWrapper = () => {
  const [copyStatus, setCopyStatus] = useState(null);
  const [groomSideExpanded, setGroomSideExpanded] = useState(true);
  const [brideSideExpanded, setBrideSideExpanded] = useState(true);

  useEffect(() => {
    if (!copyStatus) {
      return;
    }

    const timeoutId = window.setTimeout(() => setCopyStatus(null), 2000);
    return () => window.clearTimeout(timeoutId);
  }, [copyStatus]);

  const copyAccount = async (accountIndex, accountDetails) => {
    try {
      await navigator.clipboard.writeText(accountDetails);
      setCopyStatus({ accountIndex, message: "복사 완료" });
    } catch (error) {
      console.error("계좌 정보 복사에 실패했습니다.", error);
      setCopyStatus({ accountIndex, message: "복사 실패" });
    }
  };

  return (
    <div className="frame-wrapper">
      <div className="text-wrapper-12">마음 전하실 곳</div>
      <div className={`frame-8${groomSideExpanded ? "" : " is-collapsed"}`}>
        <div className="frame-9">
          <div className="text-wrapper-13">신랑측</div>
          <button
            className={`dashicons-arrow-down${groomSideExpanded ? " is-expanded" : ""}`}
            type="button"
            aria-label={`신랑측 계좌 ${groomSideExpanded ? "접기" : "펼치기"}`}
            aria-expanded={groomSideExpanded}
            aria-controls="groom-account-list"
            onClick={() => setGroomSideExpanded((expanded) => !expanded)}
          >
            <img className="vector-11" alt="" src="/img/vector-13.svg" />
          </button>
        </div>
        <div className="rectangle" />
        <div className="frame-10" id="groom-account-list">
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
              labelTextPreferredLabel={
                copyStatus?.accountIndex === 0
                  ? copyStatus.message
                  : "복사하기"
              }
              labelTextPreferredModeLightStateClassName="button-liquid-glass-2"
              labelTextPreferredSymbolClassName="button-liquid-glass-3"
              onClick={() => copyAccount(0, "우리은행 1002-364-341611")}
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
              labelTextPreferredLabel={
                copyStatus?.accountIndex === 1
                  ? copyStatus.message
                  : "복사하기"
              }
              labelTextPreferredModeLightStateClassName="button-liquid-glass-2"
              labelTextPreferredSymbolClassName="button-liquid-glass-3"
              onClick={() => copyAccount(1, "단위농협 423025-51-045881")}
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
              labelTextPreferredLabel={
                copyStatus?.accountIndex === 2
                  ? copyStatus.message
                  : "복사하기"
              }
              labelTextPreferredModeLightStateClassName="button-liquid-glass-2"
              labelTextPreferredSymbolClassName="button-liquid-glass-3"
              onClick={() => copyAccount(2, "농협중앙회 335-12-232834")}
              tinted
            />
          </div>
        </div>
      </div>
      <div className={`frame-8${brideSideExpanded ? "" : " is-collapsed"}`}>
        <div className="frame-9">
          <div className="text-wrapper-13">신부측</div>
          <button
            className={`dashicons-arrow-down${brideSideExpanded ? " is-expanded" : ""}`}
            type="button"
            aria-label={`신부측 계좌 ${brideSideExpanded ? "접기" : "펼치기"}`}
            aria-expanded={brideSideExpanded}
            aria-controls="bride-account-list"
            onClick={() => setBrideSideExpanded((expanded) => !expanded)}
          >
            <img className="vector-11" alt="" src="/img/vector-13.svg" />
          </button>
        </div>
        <div className="rectangle" />
        <div className="frame-10" id="bride-account-list">
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
              labelTextPreferredLabel={
                copyStatus?.accountIndex === 3
                  ? copyStatus.message
                  : "복사하기"
              }
              labelTextPreferredModeLightStateClassName="button-liquid-glass-2"
              labelTextPreferredSymbolClassName="button-liquid-glass-3"
              onClick={() => copyAccount(3, "우리은행 1002-954-609671")}
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
              labelTextPreferredLabel={
                copyStatus?.accountIndex === 4
                  ? copyStatus.message
                  : "복사하기"
              }
              labelTextPreferredModeLightStateClassName="button-liquid-glass-2"
              labelTextPreferredSymbolClassName="button-liquid-glass-3"
              onClick={() => copyAccount(4, "카카오뱅크 3333-04-1121431")}
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
              labelTextPreferredLabel={
                copyStatus?.accountIndex === 5
                  ? copyStatus.message
                  : "복사하기"
              }
              labelTextPreferredModeLightStateClassName="button-liquid-glass-2"
              labelTextPreferredSymbolClassName="button-liquid-glass-3"
              onClick={() => copyAccount(5, "신한은행 110-139-768862")}
              tinted
            />
          </div>
        </div>
      </div>
    </div>
  );
};

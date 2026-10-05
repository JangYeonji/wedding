import { useEffect, useState } from "react";
import "./style.css";

export const Div = () => {
  const [copyStatus, setCopyStatus] = useState("");

  useEffect(() => {
    if (!copyStatus) {
      return;
    }

    const timeoutId = window.setTimeout(() => setCopyStatus(""), 2000);
    return () => window.clearTimeout(timeoutId);
  }, [copyStatus]);

  const copyInvitationUrl = async () => {
    try {
      await navigator.clipboard.writeText("https://wedding-xi-silk.vercel.app/");
      setCopyStatus("복사 완료!");
    } catch (error) {
      console.error("청첩장 주소 복사에 실패했습니다.", error);
      setCopyStatus("복사 실패");
    }
  };

  return (
    <div className="div">
      <img className="l" alt="L" src="/img/l1150368-1.png" />
      <p className="text-wrapper-18">
        한정된 공간에서 작은 결혼식을 준비하게 되었습니다.
        <br />
        소중한 분들을 모두 모시지 못함을
        <br />
        너그러이 헤아려 주시기 바랍니다.
      </p>
      <div className="frame-14">
        <div className="frame-15">
          <div className="text-wrapper-19">카카오톡으로 청첩장 전하기</div>
          <div className="kakao">
            <img className="vector-12" alt="Vector" src="/img/vector-14.svg" />
          </div>
        </div>
        <button
          className="frame-16"
          type="button"
          onClick={copyInvitationUrl}
        >
          <div className="text-wrapper-20">
            {copyStatus || "청첩장 주소 복사하기"}
          </div>
          <div className="boxicons-copy">
            <img className="vector-13" alt="Vector" src="/img/vector-15.svg" />
            <img className="vector-14" alt="Vector" src="/img/vector-16.svg" />
          </div>
        </button>
      </div>
    </div>
  );
};

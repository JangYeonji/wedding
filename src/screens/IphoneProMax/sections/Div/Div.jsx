import { useEffect, useState } from "react";
import "./style.css";

const invitationUrl = "https://wedding-xi-silk.vercel.app/";
const kakaoJavaScriptKey = import.meta.env.VITE_KAKAO_JS_KEY;
let kakaoSdkPromise;

const loadKakaoSdk = () => {
  if (window.Kakao) {
    return Promise.resolve(window.Kakao);
  }

  if (!kakaoSdkPromise) {
    kakaoSdkPromise = new Promise((resolve, reject) => {
      const script = document.createElement("script");
      script.src = "https://t1.kakaocdn.net/kakao_js_sdk/2.7.2/kakao.min.js";
      script.onload = () => {
        if (window.Kakao) {
          resolve(window.Kakao);
        } else {
          reject(new Error("카카오톡 공유 SDK를 불러오지 못했습니다."));
        }
      };
      script.onerror = () =>
        reject(new Error("카카오톡 공유 SDK를 불러오지 못했습니다."));
      document.head.appendChild(script);
    }).catch((error) => {
      kakaoSdkPromise = undefined;
      throw error;
    });
  }

  return kakaoSdkPromise;
};

export const Div = () => {
  const [copyStatus, setCopyStatus] = useState("");
  const [kakaoReady, setKakaoReady] = useState(false);

  useEffect(() => {
    if (!copyStatus) {
      return;
    }

    const timeoutId = window.setTimeout(() => setCopyStatus(""), 2000);
    return () => window.clearTimeout(timeoutId);
  }, [copyStatus]);

  useEffect(() => {
    if (!kakaoJavaScriptKey) {
      return;
    }

    loadKakaoSdk()
      .then((Kakao) => {
        if (!Kakao.isInitialized()) {
          Kakao.init(kakaoJavaScriptKey);
        }
        setKakaoReady(true);
      })
      .catch((error) => {
        console.error("카카오톡 공유 SDK 초기화에 실패했습니다.", error);
      });
  }, []);

  const copyInvitationUrl = async () => {
    try {
      await navigator.clipboard.writeText(invitationUrl);
      setCopyStatus("복사 완료!");
    } catch (error) {
      console.error("청첩장 주소 복사에 실패했습니다.", error);
      setCopyStatus("복사 실패");
    }
  };

  const shareInvitation = () => {
    if (!kakaoJavaScriptKey) {
      console.error("VITE_KAKAO_JS_KEY 환경 변수가 설정되지 않았습니다.");
      window.alert("카카오톡 공유 설정이 필요합니다. 관리자에게 문의해 주세요.");
      return;
    }

    if (!kakaoReady || !window.Kakao?.isInitialized()) {
      window.alert("카카오톡 공유 기능을 준비하고 있습니다. 잠시 후 다시 시도해 주세요.");
      return;
    }

    try {
      window.Kakao.Share.sendDefault({
        objectType: "feed",
        content: {
          title: "오드힐하우스 결혼식에 초대합니다",
          description: "소중한 분들을 오드힐하우스 결혼식에 초대합니다.",
          imageUrl: `${invitationUrl}img/l1150368-1.png`,
          link: {
            mobileWebUrl: invitationUrl,
            webUrl: invitationUrl,
          },
        },
        buttons: [
          {
            title: "청첩장 보기",
            link: {
              mobileWebUrl: invitationUrl,
              webUrl: invitationUrl,
            },
          },
        ],
      });
    } catch (error) {
      console.error("카카오톡 청첩장 공유에 실패했습니다.", error);
      window.alert("카카오톡 공유에 실패했습니다. 잠시 후 다시 시도해 주세요.");
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
        <button
          className="frame-15"
          type="button"
          onClick={shareInvitation}
        >
          <div className="text-wrapper-19">카카오톡으로 청첩장 전하기</div>
          <div className="kakao">
            <img className="vector-12" alt="Vector" src="/img/vector-14.svg" />
          </div>
        </button>
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

import { useEffect, useRef, useState } from "react";
import { ButtonLiquidGlass } from "../../../../components/ButtonLiquidGlass";
import "./style.css";

const venueName = "오드힐하우스";
const venueAddress = "서울 서초구 방배로 47";
const kakaoMapUrl = `https://map.kakao.com/link/search/${encodeURIComponent(venueName)}`;
const naverMapUrl = `https://map.naver.com/p/search/${encodeURIComponent(venueName)}`;
const kakaoJavaScriptKey = import.meta.env.VITE_KAKAO_JS_KEY;
let kakaoMapsSdkPromise;

const loadKakaoMapsSdk = () => {
  if (window.kakao?.maps) {
    return Promise.resolve(window.kakao);
  }

  if (!kakaoMapsSdkPromise) {
    kakaoMapsSdkPromise = new Promise((resolve, reject) => {
      const script = document.createElement("script");
      script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${encodeURIComponent(kakaoJavaScriptKey)}&autoload=false&libraries=services`;
      script.onload = () => {
        if (window.kakao?.maps) {
          resolve(window.kakao);
        } else {
          reject(new Error("카카오 지도 SDK를 불러오지 못했습니다."));
        }
      };
      script.onerror = () => reject(new Error("카카오 지도 SDK를 불러오지 못했습니다."));
      document.head.appendChild(script);
    }).catch((error) => {
      kakaoMapsSdkPromise = undefined;
      throw error;
    });
  }

  return kakaoMapsSdkPromise;
};

const openMapApp = (event, appUrl) => {
  event.preventDefault();
  const fallbackUrl = event.currentTarget.href;
  let appWasOpened = false;
  const handleVisibilityChange = () => {
    if (document.visibilityState === "hidden") {
      appWasOpened = true;
    }
  };

  document.addEventListener("visibilitychange", handleVisibilityChange);
  window.location.href = appUrl;
  window.setTimeout(() => {
    document.removeEventListener("visibilitychange", handleVisibilityChange);
    if (!appWasOpened) {
      window.location.href = fallbackUrl;
    }
  }, 1200);
};

export const Frame = () => {
  const [copyStatus, setCopyStatus] = useState("");
  const [mapError, setMapError] = useState("");
  const mapElementRef = useRef(null);
  const appName = window.location.hostname || "wedding-invitation";

  useEffect(() => {
    let isMounted = true;

    if (!kakaoJavaScriptKey) {
      console.error("VITE_KAKAO_JS_KEY 환경 변수가 설정되지 않았습니다.");
      setMapError("카카오 지도 키가 없습니다. 배포 환경의 VITE_KAKAO_JS_KEY 설정을 확인해 주세요.");
      return () => {
        isMounted = false;
      };
    }

    loadKakaoMapsSdk()
      .then((Kakao) => {
        Kakao.maps.load(() => {
          if (!isMounted || !mapElementRef.current) {
            return;
          }

          const map = new Kakao.maps.Map(mapElementRef.current, {
            center: new Kakao.maps.LatLng(37.4815, 126.9848),
            level: 3,
          });
          const geocoder = new Kakao.maps.services.Geocoder();

          geocoder.addressSearch(venueAddress, (results, status) => {
            if (status !== Kakao.maps.services.Status.OK || results.length === 0) {
              console.error("카카오 지도에서 예식장 주소를 찾지 못했습니다.");
              if (isMounted) {
                setMapError("장소를 찾지 못했습니다. 카카오맵에서 확인해 주세요.");
              }
              return;
            }

            const position = new Kakao.maps.LatLng(results[0].y, results[0].x);
            map.setCenter(position);
            new Kakao.maps.Marker({ map, position });
          });
        });
      })
      .catch((error) => {
        console.error("카카오 지도를 불러오지 못했습니다.", error);
        if (isMounted) {
          setMapError(
            "지도를 불러오지 못했습니다. 카카오 JavaScript 키와 허용 도메인 설정을 확인해 주세요.",
          );
        }
      });

    return () => {
      isMounted = false;
    };
  }, []);

  useEffect(() => {
    if (!copyStatus) {
      return;
    }

    const timeoutId = window.setTimeout(() => setCopyStatus(""), 2000);
    return () => window.clearTimeout(timeoutId);
  }, [copyStatus]);

  const copyVenueAddress = async () => {
    try {
      await navigator.clipboard.writeText(venueAddress);
      setCopyStatus("복사 완료!");
    } catch (error) {
      console.error("주소 복사에 실패했습니다.", error);
      setCopyStatus("복사 실패");
    }
  };

  return (
    <div className="frame">
      <div className="text-wrapper-5">오시는 길</div>
      <div className="kakao-map-container">
        <div
          className="kakao-map"
          ref={mapElementRef}
          role="region"
          aria-label={`${venueName} 위치 카카오 지도`}
        />
        {mapError && (
          <div className="kakao-map-error" role="status">
            {mapError}
          </div>
        )}
        <a
          className="kakao-map-open-label"
          href={kakaoMapUrl}
          target="_blank"
          rel="noreferrer"
          aria-label={`${venueName} 카카오맵에서 크게 보기`}
        >
          카카오맵에서 크게 보기
        </a>
      </div>
      <div className="div-2">
        <div className="div-3">
          <div className="text-wrapper-6">오드힐하우스</div>
          <div className="text-wrapper-7">서울특별시 서초구 방배로 47</div>
        </div>
        <ButtonLiquidGlass
          className="button-liquid-glass-text"
          labelTextPreferredLabel={copyStatus || "주소 복사하기"}
          labelTextPreferredModeLightStateClassName="button-liquid-glass-instance"
          labelTextPreferredSymbolClassName="button-liquid-glass-text-instance"
          onClick={copyVenueAddress}
          tinted
        />
      </div>
      <div className="div-4">
        <a
          className="div-5"
          href="https://www.tmap.co.kr/"
          onClick={(event) =>
            openMapApp(
              event,
              `tmap://search?name=${encodeURIComponent(venueName)}`,
            )
          }
          aria-label="T map 앱에서 오드힐하우스 찾기"
        >
          <div className="text-wrapper-8">T MAP</div>
          <div className="clip-path-group">
            <div className="group-wrapper">
              <div className="group-2">
                <img className="vector" alt="Vector" src="/img/TMAP.svg" />
                <img
                  className="vector-2"
                  alt="Vector"
                  src="/img/vector-2.svg"
                />
              </div>
            </div>
          </div>
        </a>
        <a
          className="div-5"
          href={`https://map.kakao.com/link/search/${encodeURIComponent(venueName)}`}
          onClick={(event) =>
            openMapApp(
              event,
              `kakaomap://search?q=${encodeURIComponent(venueName)}`,
            )
          }
          aria-label="카카오맵 앱에서 오드힐하우스 찾기"
        >
          <div className="text-wrapper-8">카카오맵</div>
          <div className="element-wrapper">
            <div className="vector-wrapper">
              <img className="vector-3" alt="Vector" src="/img/KAKAO.svg" />
            </div>
          </div>
        </a>
        <a
          className="div-5"
          href={naverMapUrl}
          onClick={(event) =>
            openMapApp(
              event,
              `nmap://search?query=${encodeURIComponent(venueName)}&appname=${encodeURIComponent(appName)}`,
            )
          }
          aria-label="네이버 지도 앱에서 오드힐하우스 찾기"
        >
          <div className="text-wrapper-8">네이버지도</div>
          <img
            className="service-icon"
            alt="Service icon"
            src="/img/service-icon-1.png"
          />
        </a>
      </div>
      <div className="div-6">
        <div className="div-7">
          <div className="div-8">
            <img className="vector-4" alt="Vector" src="/img/arcticons_where-is-my-train.svg" />
          </div>
          <div className="div-9">
            <div className="text-wrapper-9">지하철 이용시</div>
            <p className="p">
              <span className="text-wrapper-10">2호선 방배역</span>
              <span className="text-wrapper-11"> 2번 출구에서 도보 3분</span>
            </p>
          </div>
        </div>
        <div className="div-10">
          <div className="div-8">
            <img className="vector-8" alt="Vector" src="/img/arcticons_bus.svg" />
          </div>
          <div className="div-9">
            <div className="text-wrapper-9">버스 이용시</div>
            <p className="element-2">
              방배역, 방배그랑자이, 방배임광아파트 하차
              <br />
              간선버스 142, 350, 406, 461
              <br />
              지선버스 5413, 4319
              <br />
              광역버스 1500-2
              <br />
              마을버스 서초07, 서초13, 서초15, 서초16, 서초17
            </p>
          </div>
        </div>
        <div className="frame-wrapper-2">
          <div className="div-10">
            <div className="div-8">
              <img
                className="vector-9"
                alt="주차"
                src="/img/hugeicons_square-parking.svg"
              />
            </div>
            <div className="div-9">
              <div className="text-wrapper-9">주차 안내</div>
              <p className="element-3">
                <span className="text-wrapper-10">2시간 무료</span>
                <span className="text-wrapper-11">
                  이용
                  <br />
                  웨딩홀 1층 주차장 또는 방배동 성당 주차장(도보 5분)
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Div } from "./sections/Div";
import { DivWrapper } from "./sections/DivWrapper";
import { Frame } from "./sections/Frame";
import { FrameWrapper } from "./sections/FrameWrapper";
import { Group } from "./sections/Group";
import "./style.css";

const galleryImages = [
  { src: "/img/Gallery1-1.webp", alt: "웨딩 갤러리 사진 1" },
  { src: "/img/Gallery1-2.webp", alt: "웨딩 갤러리 사진 2" },
  { src: "/img/Gallery1-3.webp", alt: "웨딩 갤러리 사진 3" },
  { src: "/img/Gallery1-4.webp", alt: "웨딩 갤러리 사진 4" },
  { src: "/img/Gallery1-5.webp", alt: "웨딩 갤러리 사진 5" },
  { src: "/img/Gallery1-6.webp", alt: "웨딩 갤러리 사진 6" },
  { src: "/img/Gallery2-1.webp", alt: "웨딩 갤러리 사진 7" },
  { src: "/img/Gallery2-2.webp", alt: "웨딩 갤러리 사진 8" },
  { src: "/img/Gallery2-3.webp", alt: "웨딩 갤러리 사진 9" },
  { src: "/img/Gallery2-4.webp", alt: "웨딩 갤러리 사진 10" },
  { src: "/img/Gallery2-5.webp", alt: "웨딩 갤러리 사진 11" },
  { src: "/img/Gallery2-6.webp", alt: "웨딩 갤러리 사진 12" },
  { src: "/img/Gallery2-7.webp", alt: "웨딩 갤러리 사진 13" },
  { src: "/img/Gallery2-8.webp", alt: "웨딩 갤러리 사진 14" },
  { src: "/img/Gallery3-1.webp", alt: "웨딩 갤러리 사진 15" },
  { src: "/img/Gallery3-2.webp", alt: "웨딩 갤러리 사진 16" },
  { src: "/img/Gallery3-3.webp", alt: "웨딩 갤러리 사진 17" },
  { src: "/img/Gallery3-4.webp", alt: "웨딩 갤러리 사진 18" },
  { src: "/img/Gallery3-5.webp", alt: "웨딩 갤러리 사진 19" },
  { src: "/img/Gallery3-6.webp", alt: "웨딩 갤러리 사진 20" },
  { src: "/img/Gallery3-7.webp", alt: "웨딩 갤러리 사진 21" },
  { src: "/img/Gallery3-8.webp", alt: "웨딩 갤러리 사진 22" },
  { src: "/img/Gallery3-9(Extra).webp", alt: "웨딩 갤러리 사진 23" },
  { src: "/img/Gallery3-10(Extra).webp", alt: "웨딩 갤러리 사진 24" },
  { src: "/img/Gallery4-1.webp", alt: "웨딩 갤러리 사진 25" },
  { src: "/img/Gallery4-2.webp", alt: "웨딩 갤러리 사진 26" },
  { src: "/img/Gallery4-3.webp", alt: "웨딩 갤러리 사진 27" },
  { src: "/img/Gallery4-4.webp", alt: "웨딩 갤러리 사진 28" },
  { src: "/img/Gallery4-5.webp", alt: "웨딩 갤러리 사진 29" },
  { src: "/img/Gallery4-6.webp", alt: "웨딩 갤러리 사진 30" },
  { src: "/img/Gallery5-1.webp", alt: "웨딩 갤러리 사진 31" },
  { src: "/img/Gallery5-2.webp", alt: "웨딩 갤러리 사진 32" },
  { src: "/img/Gallery5-3.webp", alt: "웨딩 갤러리 사진 33" },
  { src: "/img/Gallery5-4.webp", alt: "웨딩 갤러리 사진 34" },
  { src: "/img/Gallery5-5.webp", alt: "웨딩 갤러리 사진 35" },
  { src: "/img/Gallery5-6.webp", alt: "웨딩 갤러리 사진 36" },
  { src: "/img/Gallery5-7(Extra).webp", alt: "웨딩 갤러리 사진 37" },
];

const secondGalleryPageImageIndices = [6, 9, 10, 7, 8, 12, 13, 11];
const fourthGalleryPageImageIndices = [23, 24, 25, 26, 27, 28];
const fifthGalleryPageImageIndices = [32, 33, 30, 29, 31, 34];

export const IphoneProMax = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const [galleryPage, setGalleryPage] = useState(0);
  const closeButtonRef = useRef(null);
  const touchStartXRef = useRef(null);
  const galleryTouchStartXRef = useRef(null);
  const isLightboxOpen = selectedImageIndex !== null;

  useEffect(() => {
    if (!isLightboxOpen) {
      return undefined;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setSelectedImageIndex(null);
      } else if (event.key === "ArrowLeft") {
        setSelectedImageIndex((index) => Math.max(0, index - 1));
      } else if (event.key === "ArrowRight") {
        setSelectedImageIndex((index) => Math.min(galleryImages.length - 1, index + 1));
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isLightboxOpen]);

  const showPreviousImage = () => {
    setSelectedImageIndex((index) => Math.max(0, index - 1));
  };

  const showNextImage = () => {
    setSelectedImageIndex((index) => Math.min(galleryImages.length - 1, index + 1));
  };

  const showPreviousGalleryPage = () => {
    setGalleryPage((page) => Math.max(0, page - 1));
  };

  const showNextGalleryPage = () => {
    setGalleryPage((page) => Math.min(4, page + 1));
  };

  const handleGalleryTouchStart = (event) => {
    galleryTouchStartXRef.current = event.changedTouches[0].clientX;
  };

  const handleGalleryTouchEnd = (event) => {
    if (galleryTouchStartXRef.current === null) {
      return;
    }

    const swipeDistance = event.changedTouches[0].clientX - galleryTouchStartXRef.current;
    galleryTouchStartXRef.current = null;

    if (Math.abs(swipeDistance) > 50) {
      if (swipeDistance > 0) {
        showPreviousGalleryPage();
      } else {
        showNextGalleryPage();
      }
    }
  };

  const handleTouchStart = (event) => {
    touchStartXRef.current = event.changedTouches[0].clientX;
  };

  const handleTouchEnd = (event) => {
    if (touchStartXRef.current === null) {
      return;
    }

    const swipeDistance = event.changedTouches[0].clientX - touchStartXRef.current;
    touchStartXRef.current = null;

    if (Math.abs(swipeDistance) > 50) {
      if (swipeDistance > 0) {
        showPreviousImage();
      } else {
        showNextImage();
      }
    }
  };

  const handleImageKeyDown = (event, index) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      setSelectedImageIndex(index);
    }
  };

  return (
    <div className="iphone-pro-max" data-model-id="202:381">
      <div className="frame-17">
        <img className="element-7" alt="Element" src="/img/1.png" />
        <DivWrapper />
        <Group />
        <img className="image" alt="Image" src="/img/image.png" />
        <img className="image-2" alt="Image" src="/img/1-2.png" />
        <img className="group-4" alt="Group" src="/img/group-166-2.png" />
        <div className="group-5">
          <div className="text-wrapper-21">갤러리</div>
          <div
            className={`group-6${galleryPage > 0 ? " gallery-grid-layout" : ""}${galleryPage === 2 ? " gallery-third-layout" : ""}${galleryPage === 3 ? " gallery-fourth-layout" : ""}${galleryPage === 4 ? " gallery-fifth-layout" : ""}`}
            onTouchStart={handleGalleryTouchStart}
            onTouchEnd={handleGalleryTouchEnd}
          >
            {galleryPage === 1 ? (
              secondGalleryPageImageIndices.map((imageIndex, index) => {
                const image = galleryImages[imageIndex];

                return (
                  <img
                    key={image.src}
                    className={`gallery-grid-image gallery-grid-image-${index + 1} gallery-thumbnail`}
                    {...image}
                    role="button"
                    tabIndex={0}
                    aria-haspopup="dialog"
                    onClick={() => setSelectedImageIndex(imageIndex)}
                    onKeyDown={(event) => handleImageKeyDown(event, imageIndex)}
                  />
                );
              })
            ) : galleryPage === 2 ? (
              galleryImages.slice(14, 22).map((image, index) => {
                const imageIndex = index + 14;

                return (
                  <img
                    key={image.src}
                    className={`gallery-third-image gallery-third-image-${index + 1} gallery-thumbnail`}
                    {...image}
                    role="button"
                    tabIndex={0}
                    aria-haspopup="dialog"
                    onClick={() => setSelectedImageIndex(imageIndex)}
                    onKeyDown={(event) => handleImageKeyDown(event, imageIndex)}
                  />
                );
              })
            ) : galleryPage === 3 ? (
              fourthGalleryPageImageIndices.map((imageIndex, index) => {
                const image = galleryImages[imageIndex];

                return (
                  <img
                    key={image.src}
                    className={`gallery-fourth-image gallery-fourth-image-${index + 1} gallery-thumbnail`}
                    {...image}
                    role="button"
                    tabIndex={0}
                    aria-haspopup="dialog"
                    onClick={() => setSelectedImageIndex(imageIndex)}
                    onKeyDown={(event) => handleImageKeyDown(event, imageIndex)}
                  />
                );
              })
            ) : galleryPage === 4 ? (
              fifthGalleryPageImageIndices.map((imageIndex, index) => {
                const image = galleryImages[imageIndex];

                return (
                  <img
                    key={image.src}
                    className={`gallery-fifth-image gallery-fifth-image-${index + 1} gallery-thumbnail`}
                    {...image}
                    role="button"
                    tabIndex={0}
                    aria-haspopup="dialog"
                    onClick={() => setSelectedImageIndex(imageIndex)}
                    onKeyDown={(event) => handleImageKeyDown(event, imageIndex)}
                  />
                );
              })
            ) : (
              <>
            <img
                className="l-2 gallery-thumbnail"
                {...galleryImages[1]}
                role="button"
                tabIndex={0}
                aria-haspopup="dialog"
                onClick={() => setSelectedImageIndex(1)}
                onKeyDown={(event) => handleImageKeyDown(event, 1)}
              />
              <img
                className="l-3 gallery-thumbnail"
                {...galleryImages[2]}
                role="button"
                tabIndex={0}
                aria-haspopup="dialog"
                onClick={() => setSelectedImageIndex(2)}
                onKeyDown={(event) => handleImageKeyDown(event, 2)}
              />
              <div className="frame-18">
                <img
                  className="l-4 gallery-thumbnail"
                  {...galleryImages[3]}
                  role="button"
                  tabIndex={0}
                  aria-haspopup="dialog"
                  onClick={() => setSelectedImageIndex(3)}
                  onKeyDown={(event) => handleImageKeyDown(event, 3)}
                />
                <img
                  className="l-4 gallery-thumbnail"
                  {...galleryImages[4]}
                  role="button"
                  tabIndex={0}
                  aria-haspopup="dialog"
                  onClick={() => setSelectedImageIndex(4)}
                  onKeyDown={(event) => handleImageKeyDown(event, 4)}
                />
                <img
                  className="l-5 gallery-thumbnail"
                  {...galleryImages[5]}
                  role="button"
                  tabIndex={0}
                  aria-haspopup="dialog"
                  onClick={() => setSelectedImageIndex(5)}
                  onKeyDown={(event) => handleImageKeyDown(event, 5)}
                />
              </div>
              <img
                className="l-6 gallery-thumbnail"
                {...galleryImages[0]}
                role="button"
                tabIndex={0}
                aria-haspopup="dialog"
                onClick={() => setSelectedImageIndex(0)}
                onKeyDown={(event) => handleImageKeyDown(event, 0)}
              />
              </>
            )}
            <button
              className="gallery-lightbox-nav gallery-lightbox-previous gallery-layout-previous"
              type="button"
              aria-label="이전 갤러리 보기"
              disabled={galleryPage === 0}
              onClick={showPreviousGalleryPage}
            >
              <svg className="gallery-lightbox-arrow" viewBox="0 0 24 24" aria-hidden="true">
                <path d="m15 18-6-6 6-6" />
              </svg>
            </button>
            <button
              className="gallery-lightbox-nav gallery-lightbox-next gallery-layout-next"
              type="button"
              aria-label="다음 갤러리 보기"
              disabled={galleryPage === 4}
              onClick={showNextGalleryPage}
            >
              <svg className="gallery-lightbox-arrow" viewBox="0 0 24 24" aria-hidden="true">
                <path d="m9 18 6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>
        <Frame />
        <FrameWrapper />
        <Div />
      </div>
      {selectedImageIndex !== null &&
        createPortal(
          <div
            className="gallery-lightbox"
            role="dialog"
            aria-modal="true"
            aria-label="갤러리 사진 크게 보기"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            onClick={(event) => {
              if (event.target === event.currentTarget) {
                setSelectedImageIndex(null);
              }
            }}
          >
            <button
              ref={closeButtonRef}
              className="gallery-lightbox-close"
              type="button"
              aria-label="사진 닫기"
              onClick={() => setSelectedImageIndex(null)}
            >
              ×
            </button>
            <button
              className="gallery-lightbox-nav gallery-lightbox-previous"
              type="button"
              aria-label="이전 사진"
              disabled={selectedImageIndex === 0}
              onClick={showPreviousImage}
            >
              <svg
                className="gallery-lightbox-arrow"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="m15 18-6-6 6-6" />
              </svg>
            </button>
            <img
              className="gallery-lightbox-image"
              src={galleryImages[selectedImageIndex].src}
              alt={galleryImages[selectedImageIndex].alt}
            />
            <button
              className="gallery-lightbox-nav gallery-lightbox-next"
              type="button"
              aria-label="다음 사진"
              disabled={selectedImageIndex === galleryImages.length - 1}
              onClick={showNextImage}
            >
              <svg
                className="gallery-lightbox-arrow"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </button>
            <div className="gallery-lightbox-count" aria-live="polite">
              {selectedImageIndex + 1} / {galleryImages.length}
            </div>
          </div>,
          document.body,
        )}
    </div>
  );
};

import { Div } from "./sections/Div";
import { DivWrapper } from "./sections/DivWrapper";
import { Frame } from "./sections/Frame";
import { FrameWrapper } from "./sections/FrameWrapper";
import { Group } from "./sections/Group";
import "./style.css";

export const IphoneProMax = () => {
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
          <div className="group-6">
            <img className="l-2" alt="L" src="/img/l1140617-1.png" />
            <img className="l-3" alt="L" src="/img/l1150193-1.png" />
            <div className="frame-18">
              <img className="l-4" alt="L" src="/img/l1140544-1.png" />
              <img className="l-4" alt="L" src="/img/l1140577-2-1.png" />
              <img className="l-5" alt="L" src="/img/l1140703-2-1.png" />
            </div>
            <img className="l-6" alt="L" src="/img/l1140700-1.png" />
            <div className="img-wrapper">
              <img className="vector-15" alt="Vector" src="/img/vector.svg" />
            </div>
          </div>
        </div>
        <Frame />
        <FrameWrapper />
        <Div />
      </div>
    </div>
  );
};

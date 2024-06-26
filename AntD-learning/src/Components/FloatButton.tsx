import React from "react";
import { FloatButton } from "antd";
import { QuestionCircleOutlined } from "@ant-design/icons";
function FloatButtons() {
  return (
    <div>
      <FloatButton
        shape="circle"
        badge={{ dot: true }}
        style={{ right: 24 + 70 + 70 }}
        className="border-2 border-red m-5"
      />
      <FloatButton.Group shape="circle" style={{ right: 24 + 70 }}>
        <FloatButton
          href="https://ant.design/index-cn"
          tooltip={<div>custom badge color</div>}
          badge={{ count: 5, color: "blue" }}
        />
        <FloatButton badge={{ count: 5 }} />
      </FloatButton.Group>
      <FloatButton.Group shape="circle">
        <FloatButton badge={{ count: 12 }} icon={<QuestionCircleOutlined />} />
        <FloatButton badge={{ count: 123, overflowCount: 999 }} />
        <FloatButton.BackTop visibilityHeight={0} />
      </FloatButton.Group>
    </div>
  );
}

export default FloatButtons;

import React, { useState } from "react";
import { DownloadOutlined } from "@ant-design/icons";
import {
  Button,
  Divider,
  Flex,
  Radio,
  Tooltip,
  ConfigProvider,
  Space,
} from "antd";
import { TinyColor } from "@ctrl/tinycolor";
import type { ConfigProviderProps } from "antd";
import { SearchOutlined } from "@ant-design/icons";

type SizeType = ConfigProviderProps["componentSize"];
const colors1 = ["#6253E1", "#04BEFE"];
const colors2 = ["#fc6076", "#ff9a44", "#ef9d43", "#e75516"];
const colors3 = ["#40e495", "#30dd8a", "#2bb673"];
const getHoverColors = (colors: string[]) =>
  colors.map((color) => new TinyColor(color).lighten(5).toString());
const getActiveColors = (colors: string[]) =>
  colors.map((color) => new TinyColor(color).darken(5).toString());
function Buttons() {
  const [size, setSize] = useState<SizeType>("large");
  return (
    <div className="m-5">
      <div>
        <Flex gap="small" wrap="wrap">
          <Button type="primary">Primary Button</Button>
          <Button>Default Button</Button>
          <Button type="dashed">Dashed Button</Button>
          <Button type="text">Text Button</Button>
          <Button type="link">Link Button</Button>
        </Flex>
      </div>
      <div className="m-5">
        <Radio.Group value={size} onChange={(e) => setSize(e.target.value)}>
          <Radio.Button value="large">Large</Radio.Button>
          <Radio.Button value="default">Default</Radio.Button>
          <Radio.Button value="small">Small</Radio.Button>
        </Radio.Group>
        <Divider orientation="left" plain>
          Preview
        </Divider>
        <Flex gap="small" align="flex-start" vertical>
          <Flex gap="small" wrap="wrap">
            <Button type="primary" size={size}>
              Primary
            </Button>
            <Button size={size}>Default</Button>
            <Button type="dashed" size={size}>
              Dashed
            </Button>
          </Flex>
          <Button type="link" size={size}>
            Link
          </Button>
          <Flex gap="small" wrap="wrap">
            <Button type="primary" icon={<DownloadOutlined />} size={size} />
            <Button
              type="primary"
              shape="circle"
              icon={<DownloadOutlined />}
              size={size}
            />
            <Button
              type="primary"
              shape="round"
              icon={<DownloadOutlined />}
              size={size}
            />
            <Button
              type="primary"
              shape="round"
              icon={<DownloadOutlined />}
              size={size}
            >
              Download
            </Button>
            <Button type="primary" icon={<DownloadOutlined />} size={size}>
              Download
            </Button>
          </Flex>
        </Flex>
      </div>
      <div className="m-5">
        <Flex gap="small" vertical>
          <Flex wrap="wrap" gap="small">
            <Tooltip title="search">
              <Button type="primary" shape="circle" icon={<SearchOutlined />} />
            </Tooltip>
            <Button type="primary" shape="circle">
              A
            </Button>
            <Button type="primary" icon={<SearchOutlined />}>
              Search
            </Button>
            <Tooltip title="search">
              <Button shape="circle" icon={<SearchOutlined />} />
            </Tooltip>
            <Button icon={<SearchOutlined />}>Search</Button>
          </Flex>
          <Flex wrap="wrap" gap="small">
            <Tooltip title="search">
              <Button shape="circle" icon={<SearchOutlined />} />
            </Tooltip>
            <Button icon={<SearchOutlined />}>Search</Button>
            <Tooltip title="search">
              <Button type="dashed" shape="circle" icon={<SearchOutlined />} />
            </Tooltip>
            <Button type="dashed" icon={<SearchOutlined />}>
              Search
            </Button>
            <Button icon={<SearchOutlined />} href="https://www.google.com" />
          </Flex>
        </Flex>
      </div>
      <div>
        <Flex wrap="wrap" gap="small">
          <Button type="primary" danger>
            Primary
          </Button>
          <Button danger>Default</Button>
          <Button type="dashed" danger>
            Dashed
          </Button>
          <Button type="text" danger>
            Text
          </Button>
          <Button type="link" danger>
            Link
          </Button>
        </Flex>
      </div>
      <div className="m-5">
        <Space>
          <ConfigProvider
            theme={{
              components: {
                Button: {
                  colorPrimary: `linear-gradient(135deg, ${colors1.join(
                    ", "
                  )})`,
                  colorPrimaryHover: `linear-gradient(135deg, ${getHoverColors(
                    colors1
                  ).join(", ")})`,
                  colorPrimaryActive: `linear-gradient(135deg, ${getActiveColors(
                    colors1
                  ).join(", ")})`,
                  lineWidth: 0,
                },
              },
            }}
          >
            <Button type="primary" size="large">
              Gradient 1
            </Button>
          </ConfigProvider>
          <ConfigProvider
            theme={{
              components: {
                Button: {
                  colorPrimary: `linear-gradient(90deg,  ${colors2.join(
                    ", "
                  )})`,
                  colorPrimaryHover: `linear-gradient(90deg, ${getHoverColors(
                    colors2
                  ).join(", ")})`,
                  colorPrimaryActive: `linear-gradient(90deg, ${getActiveColors(
                    colors2
                  ).join(", ")})`,
                  lineWidth: 0,
                },
              },
            }}
          >
            <Button type="primary" size="large">
              Gradient 2
            </Button>
          </ConfigProvider>
          <ConfigProvider
            theme={{
              components: {
                Button: {
                  colorPrimary: `linear-gradient(116deg,  ${colors3.join(
                    ", "
                  )})`,
                  colorPrimaryHover: `linear-gradient(116deg, ${getHoverColors(
                    colors3
                  ).join(", ")})`,
                  colorPrimaryActive: `linear-gradient(116deg, ${getActiveColors(
                    colors3
                  ).join(", ")})`,
                  lineWidth: 0,
                },
              },
            }}
          >
            <Button type="primary" size="large">
              Gradient 3
            </Button>
          </ConfigProvider>
        </Space>
      </div>
    </div>
  );
}
export default Buttons;

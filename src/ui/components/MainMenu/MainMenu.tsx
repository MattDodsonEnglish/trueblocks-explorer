import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  Menu,
} from 'antd';
import {
  BookOutlined,
  CameraOutlined,
  DesktopOutlined,
  FundOutlined,
  PhoneOutlined,
  SettingOutlined,
  UnorderedListOutlined,
} from '@ant-design/icons';

const { SubMenu } = Menu;

export const MainMenu = () => (
  <Menu
    mode="inline"
  >
    <Menu.Item
      icon={<UnorderedListOutlined />}
    >
      <NavLink
        to="/"
      >
        Entities
      </NavLink>
    </Menu.Item>
    <Menu.Item
      icon={<DesktopOutlined />}
    >
      Monitors
    </Menu.Item>
    <Menu.Item
      icon={<BookOutlined />}
    >
      <NavLink
        to="/names"
      >
        Names
      </NavLink>
    </Menu.Item>
    <Menu.Item
      icon={<FundOutlined />}
    >
      Digests
    </Menu.Item>
    <SubMenu
      key="explorer"
      title="Explorer"
      icon={<CameraOutlined />}
    >
      <Menu.Item>
        <NavLink
          to="/blocks"
        >
          Blocks
        </NavLink>
      </Menu.Item>
      <Menu.Item>
        <NavLink
          to="/transactions"
        >
          Transactions
        </NavLink>
      </Menu.Item>
      <Menu.Item>
        <NavLink
          to="/receipts"
        >
          Receipts
        </NavLink>
      </Menu.Item>
      <Menu.Item>
        <NavLink
          to="/logs"
        >
          Logs
        </NavLink>
      </Menu.Item>
      <Menu.Item>
        <NavLink
          to="/traces"
        >
          Traces
        </NavLink>
      </Menu.Item>
    </SubMenu>
    <SubMenu
      key="settings"
      title="Settings"
      icon={<SettingOutlined />}
    >
      <Menu.Item>
        System Status
      </Menu.Item>
      <Menu.Item>
        Tags
      </Menu.Item>
      <Menu.Item>
        Signatures
      </Menu.Item>
      <Menu.Item>
        Caches
      </Menu.Item>
      <Menu.Item>
        Other
      </Menu.Item>
      <Menu.Item>
        Skins
      </Menu.Item>
      <Menu.Item>
        Schemas
      </Menu.Item>
    </SubMenu>
    <Menu.Item
      icon={<PhoneOutlined />}
    >
      <NavLink
        to="/support"
      >
        Support
      </NavLink>
    </Menu.Item>
  </Menu>
);

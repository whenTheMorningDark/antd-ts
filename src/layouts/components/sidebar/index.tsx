import React, { useState, useEffect } from "react";
import "./index.css";
import { Menu } from "antd";
// import propTypes from "prop-types";
import { createFromIconfontCN } from "@ant-design/icons";
import { useHistory, useLocation } from "react-router-dom";
const { SubMenu } = Menu;
import { constRouter, routesType } from "@/config/routes";
import { findParentNode, findTreeNode } from "@/utils/tree";
const IconFont = createFromIconfontCN({
  scriptUrl: "//at.alicdn.com/t/font_2157315_vyjthadixcd.js"
});
console.log(constRouter);

//
const Sidebar: React.FC = () => {
  const history = useHistory();
  const location = useLocation();
  const pathname = location.pathname;
  console.log(pathname);
  // console.log(findTreeNode(constRouter, "path", pathname));
  const currentNode = findTreeNode(constRouter, "path", pathname);
  const currentParent = findParentNode(constRouter, currentNode.id);
  console.log(currentNode);
  // const [defaultSelectedKeys, setDefaultSelectedKeys] = useState<Array<string>>(
  //   [currentNode.path]
  // );
  const [defaultSelectedKeys, setDefaultSelectedKeys] = useState<Array<string>>(
    [""]
  );
  useEffect(() => {
    console.log(currentNode.path, "aaaaaaaaaaaaaaa");
    defaultSelectedKeys.splice(0, 1, currentNode.path);
    setDefaultSelectedKeys(defaultSelectedKeys);
  }, [currentNode.path]);
  console.log(defaultSelectedKeys);
  const [defaultOpenKeys] = useState<Array<string>>([currentParent.path]);
  const toRouteView = (item: routesType): void => {
    history.push(item.path);
  };
  const renderMenu = (routes: routesType[]): React.ReactNode => {
    return routes.map((item) => {
      if (item.childrens) {
        //如果有子节点，继续递归调用，直到没有子节点
        if (!(item.childrens.length === 1 && !item.childrens[0].isShow)) {
          return (
            <SubMenu
              title={item.title}
              key={item.path}
              icon={<IconFont type={item.icon} />}
            >
              {renderMenu(item.childrens)}
            </SubMenu>
          );
        }
      }
      if (item.isShow) {
        return (
          <Menu.Item
            title={item.title}
            key={item.path}
            icon={<IconFont type={item.icon} />}
            onClick={() => {
              // console.log(item);
              toRouteView(item);
            }}
          >
            {item.title}
          </Menu.Item>
        );
      }
      return <React.Fragment key={item.path}>{}</React.Fragment>;
    });
  };
  return (
    <div className="sidebar">
      <Menu
        defaultSelectedKeys={defaultSelectedKeys}
        defaultOpenKeys={defaultOpenKeys}
        mode="inline"
        theme="dark"
        // inlineCollapsed={this.state.collapsed}
      >
        {renderMenu(constRouter)}
      </Menu>
    </div>
  );
};

export default Sidebar;

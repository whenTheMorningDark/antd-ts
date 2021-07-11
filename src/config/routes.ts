import DashBoard from "@views/dashboard";
import cart from "@views/cart";
import open from "@views/open";
import login from "@views/login";
import HotelManager from "@views/Hotel/HotelManager";
export interface routesType {
  path: string;
  name: string;
  title: string;
  isShow: boolean;
  icon: string;
  id: number | string;
  pid: number | string;
  component?: React.FC;
  childrens?: Array<routesType>;
}

export const constRouter: routesType[] = [
  {
    path: "/dashboard",
    name: "dashboard",
    title: "首页",
    component: DashBoard,
    isShow: true,
    icon: "icon-icon-shouye",
    id: 1,
    pid: 0
  },
  {
    path: "/cart",
    name: "cart",
    title: "购物车",
    component: cart,
    isShow: true,
    icon: "icon-icon-shouye",
    id: 2,
    pid: 0
  },
  {
    path: "/a",
    name: "jiudian",
    title: "酒店",
    // component: cart,
    isShow: true,
    icon: "icon-icon-shouye",
    id: 3,
    pid: 0,
    childrens: [
      {
        path: "/Hotel/HotelManager",
        name: "HotelManager",
        title: "酒店管理",
        component: HotelManager,
        isShow: true,
        icon: "icon-icon-shouye",
        id: 4,
        pid: 3
      }
    ]
  }
];

export const whiteRouter: routesType[] = [
  // {
  //   path: "/dashboard",
  //   name: "dashboard",
  //   title: "首页",
  //   component: DashBoard,
  //   isShow: true,
  //   icon: "icon-icon-shouye",
  //   id: 1,
  //   pid: 0
  // },
  {
    path: "/open",
    name: "open",
    title: "打开",
    component: open,
    isShow: true,
    icon: "icon-icon-shouye",
    id: 6,
    pid: 0
  },
  {
    path: "/Login",
    name: "open",
    title: "登录",
    component: login,
    isShow: true,
    icon: "icon-icon-shouye",
    id: 7,
    pid: 0
  }
];

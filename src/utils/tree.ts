import * as _ from "lodash";
interface treeNode {
  id: number | string;
  pid?: number | string;
  children?: Array<treeNode>;
  path: string;
  [key: string]: any;
}
type List<T = any> = Array<treeNode & T>;
/**
 * 找出所有的子节点
 * @param treeData
 * @returns
 */
export function findChildrenTree(treeData: List): List {
  let targetTreeData = _.cloneDeep(treeData);
  const result: List = [];
  while (targetTreeData.length > 0) {
    const node = targetTreeData.shift();
    if (!node.childrens || node.childrens.length === 0) {
      result.push(node);
    }
    if (node.childrens && node.childrens.length > 0) {
      // result.push()
      targetTreeData = [...targetTreeData, ...node.childrens];
    }
  }
  return result;
}

/**
 * 找到某个节点向上的父节点
 * @param arr1
 * @param id
 * @returns
 */
export function findParentNode(arr1: List, id: number | string): treeNode {
  const temp: List = [];
  const forFn = function (arr: List, id: number | string) {
    for (let i = 0; i < arr.length; i++) {
      const item = arr[i];
      if (item.id === id) {
        temp.push(item);
        forFn(arr1, item.pid);
        break;
      } else {
        if (item.childrens) {
          forFn(item.childrens, id);
        }
      }
    }
  };
  forFn(arr1, id);
  return temp.length > 1 ? temp[temp.length - 1] : {};
}
/**
 * 根据某个标识找出当前节点
 * @param data
 * @param key
 * @param targetData
 * @returns
 */
export function findTreeNode(
  data: List,
  key = "id",
  targetData: string
): treeNode {
  let result = {
    id: "",
    pid: "",
    path: ""
  };
  let stack = _.cloneDeep(data);
  while (stack.length) {
    const node = stack.shift();
    if (node[key] === targetData) {
      result = node;
      break;
    }
    if (node.childrens && node.childrens.length > 0) {
      stack = [...stack, ...node.childrens];
    }
  }
  return result;
}

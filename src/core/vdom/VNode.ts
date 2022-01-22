export interface IVNodeData {
  tag: string;
}

/**
 * 虚拟节点
 */
class VNode {
  public isComment = false;

  constructor(
    public tag?: string,
    public data?: IVNodeData,
    public children?: VNode[],
    public text?: string,
  ) {
    console.log('VNode');
  }
}

export function createEmptyVNode(text = '') {
  const node = new VNode();
  node.text = text;
  node.isComment = true;
  return node;
}

export function createTextNode(val: string | number) {
  return new VNode(undefined, undefined, undefined, String(val));
}

export default VNode;

export interface HashedParams {
  innerText: string;
  src?: string;
  href?: string;
}

export interface PathObject {
  /**
   * index: from 0 to n, 0 -> html, 1 -> body, ....,
   */
  idx: number;
  tag: string;
  /**
   * position: order of current element among elements of same type in current container
   */
  position?: number;
  params?: HashedParams;
}

export enum QueryMode {
  Strict,
  Medium,
  Loose,
}

import Vue from './Vue';

export interface IVueOptions {
  el: string | HTMLElement;
  _isComponent?: boolean;
  data?: any;
}

export type IComponent = Vue;

export type IComponentOptions = IVueOptions;

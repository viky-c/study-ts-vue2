import { IVueOptions } from './interface';
import { extend, mergeOptions, warn } from './util';
import { resolveConstructorOptions } from './instance/init';
let uid = 0;
class Vue {
  static version = '__VERSION__';

  public $options: IVueOptions | any | null;

  public $attrs: any = undefined;

  private _uid = uid++;

  private _isVue = true;

  private _renderProxy = this;

  private _self = this;

  private _name = '';

  // private $data = {};

  static util = {
    warn,
    extend,
    mergeOptions,
  };

  constructor(options: IVueOptions) {
    this._init(options);
  }

  public _init(options: IVueOptions) {
    // this.$options = mergeOptions(
    //   resolveConstructorOptions(this.constructor) as any,
    //   options,
    //   this,
    // );
    this.$options = options;
    const _data = options.data;
    if (_data) {
      Object.defineProperty(this, '$data', {
        value: _data,
        enumerable: false,
      });
    }
  }

  public $mount() {
    console.log('$mount');
  }
}

export default Vue;

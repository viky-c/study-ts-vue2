import { IComponent, IComponentOptions, IVueOptions } from '../interface';
import config from '../config';

const strats = config.optionMergeStrategies;
export function mergeOptions(
  parent: Partial<IVueOptions>,
  child: Partial<IComponentOptions>,
  vm?: IComponent,
) {
  const options: Partial<IVueOptions> = {};
  let key: keyof IVueOptions;
  for (key in parent) {
    mergeField(key);
  }
  for (key in child) {
    // if(!Object.prototype.hasOwnProperty(key))
    mergeField(key);
  }
  function mergeField(key: keyof IVueOptions) {
    const strat = strats[key] || undefined;
    options[key] = strat(parent[key], child[key], vm, key);
  }
  return options;
}

// export function mergeField() {}

export default {} as const as IConfig;

export interface IConfig {
  optionMergeStrategies: {
    [key: string]: (...arg: any) => any;
  };
  silent: boolean;
}

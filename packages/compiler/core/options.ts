export interface CompilerOptions {
  miscOptions?: any;
  outputPath?: string;
  swaggerOutputFile?: string;
  nostdlib?: boolean;
  noEmit?: boolean;
  watchForChanges?: boolean;
  serviceCodePath?: string;
}
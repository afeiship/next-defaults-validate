type ValidateFn = (value: any, target: any) => any;
type Validates = Record<string, ValidateFn>;
interface NxStatic {
  defaultsValidate: (target: any, validates: Validates) => any;
}

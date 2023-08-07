type FormControlType = 'text' | 'number' | 'email';
type FormType = 'input' | 'select';

export class BaseModel {
  constructor(
    public type: FormType,
    public name: string,
    public controlType: FormControlType,
    public value?: string,
    public options?: { name: string; value: string }[],
    public required?: boolean,
    public label?: string
  ) {
    this.type = type;
    this.options = options;
    this.value = value;
  }
}

export class InputModel extends BaseModel {
  override type = 'input' as const;
}

export class SelectModel extends BaseModel {
  override type = 'select' as const;
}

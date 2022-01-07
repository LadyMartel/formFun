export class FromResponseAnswer {
  formFieldId: string;
  value: any;
  constructor(formFieldId: string, value: any) {
    this.formFieldId = formFieldId;
    this.value = value;
  }
}

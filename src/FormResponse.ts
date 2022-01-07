import { FromResponseAnswer } from "./FormResponseAnswer";

export class FormResponse {
  formId: string;
  id: string;
  values: FromResponseAnswer[];

  // Stub
  responderId: string;
  createdAt: number;

  constructor(formId: string, id: string, values: FromResponseAnswer[]) {
    this.formId = formId;
    this.id = id;
    this.values = values;
    this.createdAt = Date.now();
  }
}

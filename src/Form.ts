import { FormField } from "./FormField";

let numForms = 0;

export class Form {
  id: string;
  title: string;
  fields: FormField[] = [];
  createdAt: number;
  updatedAt: number;

  constructor(title: string) {
    this.id = numForms.toString();
    numForms++;
    this.title = title;
    this.createdAt = Date.now();
  }

  addField(field: FormField) {
    this.fields.push(field);
  }

  // Can do single edit, bulk edit, or reordering
  updateFields() {
    throw new Error("not implemented");
  }

  deleteFields() {
    throw new Error("not implemented");
  }

  // for debugging purposes
  toString() {
    return `
      ====Form==== \n
      title: ${this.title}
      ${this.fields
        .map((field) => {
          return field.toString() + "\n";
        })
        .join("")}`;
  }

  // what to send to those calling the API
  toJson() {
    throw new Error("not implemented");
  }
}

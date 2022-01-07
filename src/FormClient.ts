import { Form } from "./Form";
import { FormResponse } from "./FormResponse";

/**
 * Call this to interact with API
 */
export class FormsController {
  forms: Form[] = [];
  formResponses: FormResponse[] = [];

  // nothing for now
  // constructor() {}

  createForm() {
    throw new Error("not implemented");
    // return form id, adds to set of forms
  }

  updateForm(id: string) {
    // gets existing form and updates it
    throw new Error("not implemented");
  }

  getForms() {
    // returns all forms
    throw new Error("not implemented");
  }

  viewForm(id: string) {
    // returns a form so you can respond to it
    throw new Error("not implemented");
  }

  // saves form submission (in memory)
  submitFormResponse() {
    throw new Error("not implemented");
  }

  // gets all form responses for a particular form
  getFormResponses(id: string) {
    throw new Error("not implemented");
  }
}

export const FormFieldTypes = {
  Text: "text",
  Email: "email",
  Select: "select",
  Boolean: "boolean",
  File: "file",
};

let numFormFields = 0;

export interface FormFieldProps {
  prompt?: string;
  type?: string;
  nextFieldId?: string;
  required?: boolean;
  options?: any[];
}

interface FieldOption {
  value: string;
  displayName: string;
}

export class FormField {
  /**
   * form which this question belongs to
   */
  formId: string;

  /**
   * Unique id for this FormField
   */
  id: string;

  /**
   *
   */
  prompt: string;
  /**
   * Type of answer to this question.
   */
  type: string;

  /**
   * If it exists, it'll jump to a specific question, if not, continue to next question
   */
  nextFieldId?: string;

  /**
   * If there are set answers for this question, these are the valid answers
   */
  options?: FieldOption[];

  /**
   * If it's required, the form cannot be filled out until this is filled out
   * Currently not supported: questions that can be skipped but also required
   */
  required?: boolean;

  constructor(formId: string, state: FormFieldProps = {}) {
    this.formId = formId;
    this.id = numFormFields.toString();
    numFormFields++;

    const { prompt, type, nextFieldId, required, options } = state;
    this.prompt = prompt;
    this.type = type;
    this.nextFieldId = nextFieldId;
    this.required = required;
    this.options = options;
  }

  validate() {
    // Can use regex to check email
    // check if submitted option is in list of options
    throw new Error("not implemented");
  }

  toString() {
    return (
      `Question #${this.id}: ${this.prompt}${
        this.required ? "(required)" : ""
      }\n
        type: ${this.type}\n
        nextFieldID: ${this.nextFieldId}\n` +
      (this.options?.length > 0
        ? `options: ${this.options.map((e) => e.displayName).join(", ")}`
        : "")
    );
  }
}

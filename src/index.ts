import { Form } from "./Form";
import { FormField, FormFieldTypes } from "./FormField";

const exampleForm = new Form("Create new account");

const emailField = new FormField(exampleForm.id, {
  prompt: "Email",
  type: FormFieldTypes.Email,
});
const passwordField = new FormField(exampleForm.id, {
  prompt: "Password",
  type: FormFieldTypes.Text,
});
const checkbox = new FormField(exampleForm.id, {
  prompt: "Stay signed in",
  type: FormFieldTypes.Boolean,
});

const accountType = new FormField(exampleForm.id, {
  prompt: "Account Type",
  type: FormFieldTypes.Select,
  options: [
    { value: "reader", displayName: "Reader" },
    { value: "author", displayName: "Author" },
    { value: "publisher", displayName: "Publisher" },
  ],
});

exampleForm.addField(emailField);
exampleForm.addField(passwordField);
exampleForm.addField(checkbox);
exampleForm.addField(accountType);

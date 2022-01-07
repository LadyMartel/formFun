I liked the simplicity of Google Forms, where (at least what I noticed from it) it was easy to set branching logic to go to the next section. I took a brief look at [react-jsonschema-form](https://react-jsonschema-form.readthedocs.io/en/latest/) but found it a bit too complex to grok for this proof of concept.

Here are my thoughts on the UI that I've jotted down.

A User who is creating a new form would first enter a title. When they click "create", the form will exist as an empty form with no fields.

When the user selects the (+) button on the page, a dropdown will appear to select what type of form they want to make.

When the user selects a type, a FormField will be created for the form that they are editing. A User can choose what options are available for this FormField and choose to branch to different questions depending on the user's answer.

For example, if you have a question that is "do you have a pet?" if they answer yes, you can move them on to the question that is "how many?", otherwise go to a different question. However, this has limitations, for example if a the question was "do you have any pets?", and you wanted to show a different input for each of the pets' names, then it's not as straight forward to give the form responder the option to add more inputs with each of their pets' names.

I made some objects to model the data. The first thing I needed to differentiate was a Form vs FormResponse. A FormResponse would be tied to a particular Form and the answers would be tied to a particular FormField. FormField represents a single input or question which can be of one of many types specified. I put "required" as a property of each FormFeld. FormResponses submitted missing an answer for a FormField that is required can't be submitted. (Or would come back with validdation errors)

Open Questions

- more complex conditionals, like "any of", "one of", "all of"
- how to implement the logic of "if you filled out any value in this text box now this next field is required". Maybe this could be achieved with a nested structure.
- branching form field that is also required (of the responder goes down only that particular branch)
- multi select or checkboxes

I tried to simplify my mental model of the UI as much as possible to single question, linear progress, so that one question would only show after another. Things like reordering questions or grouping questions together were considered but not built.

This is a really open ended question and it was fun to think about. Regardless of whether or not this was what you were looking for it was fun!

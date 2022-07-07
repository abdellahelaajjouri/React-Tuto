# Inline css Is using style inside of a jsx element But with a different syntax

Background-color backgroundColor, border-color-borderColor
Value need to add single quote
Semi colon --> comma

## Curly braces in react

Curly braces { } are special syntax in JSX. It is used to evaluate a JavaScript expression during compilation. A JavaScript expression can be a variable, function, an object, or any code that resolves into a value.

Let’s take an example.

const greenStyle={color: 'green'}

<Box style={greenStyle} />

which is the same as

<Box style={‌{color: 'green'}} />

### Fast track to convert CSS to JS object

<https://transform.tools/css-to-js>
The above website can let us just past the CSS code and convert to json object

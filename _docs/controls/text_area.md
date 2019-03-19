---
title: Text area
codename: JBTextArea
category: Controls
---

A text area allows users to enter or edit multi-line text.

![]({{site.baseurl}}/images/text_area/text_area_example.png)

## When to use

Use a text area if input is unconstrained and long, or if the newline character is a valid value. Example: commit message or code snippets. 

Do **not** use a text area if:

* Input consists of several words. Use an [input field]({{site.baseurl}}/controls/input_field) instead.
* There is not enough space for a text area, or if input is normally short but can occasionally be long or multi-line. Use an [expandable input field]({{site.baseurl}}/controls/input_field#input-field-types) field instead.
* Values are added one by one. Use a [table]({{site.baseurl}}/controls/table) instead.
* Text is read-only. Use a [textual output]({{site.baseurl}}/controls/text_output) instead.


## How to use

### Label

Follow the rules for the [input field]({{site.baseurl}}/controls/input_field/).

A label is required for all empty text areas. If a text area is prefilled and it’s clear from the context what data it contains, a label can be omitted. For example, the following text area is used to preview file and code templates:
![]({{site.baseurl}}/images/text_area/no_label.png)
*If new file template is added and the text area is empty, the label is required.*

Do **not** put units on the right of the text area.

Do **not** use a [group hader]({{site.baseurl}}/controls/group_header) instead of the text area label. The horizontal 
line is redundant here. Use [context help]({{site.baseurl}}/principles/context_help) to explain the field behavior.
<p class="label incorrect noanchor">Incorrect</p>
![]({{site.baseurl}}/images/text_area/label_incorrect.png)

<p class="label correct noanchor">Correct</p>
![]({{site.baseurl}}/images/text_area/label_correct.png)


### Placeholder, prefilled values and field focus

Follow the rules for the input field: [placeholder]({{site.baseurl}}/controls/input_field#placeholder), [prefilled 
value]({{site.baseurl}}/controls/input_field#prefilled-value), [field focus]({{site.baseurl}}/controls/input_field#field-focus).


### History

If the previous user input should be saved, use <kbd>⌥↑</kbd> and <kbd>⌥↓</kbd> on Mac OS and <kbd>Alt+Up/Down</kbd> on Windows and Linux to navigate through the history. If history is available, add a note at the bottom of the input field: 

![]({{site.baseurl}}/images/text_area/history.png)

Save the current value, so that the user can return to it while navigating through the history.


### Validation

If the user types an invalid value, highlight the text area with red and show an error message in a tooltip. For more details see [Validation errors]({{site.baseurl}}/principles/validation_errors/).

![]({{site.baseurl}}/images/text_area/error.png)



## Size and placement

Recommended sizes:
![]({{site.baseurl}}/images/text_area/sizes.png)  
This is the default size, it can be changed if the dialog is resized.  
**Height**. The minimum text area height is 3 lines ~55px, so the user understands that it’s multi-line. The maximum height is not limited and should be appropriate for the most common values.  
**Width**. The minimum text area width is 270px. It’s inconvenient to use a narrower field due to frequent line breaks. The maximum width is 80 symbols ~600px, otherwise, it’s hard to read the text. 

Size the text area to display an integral number of lines of text:

<table>
    <tr>
        <td> <p class="label incorrect">Incorrect</p> </td>
        <td> <img src="{{site.baseurl}}/images/text_area/size_2.png" style="margin-bottom: -10px; margin-left: 30px"> </td>         
    </tr>
    <tr>
        <td> <p class="label correct" style="margin-top: 10px;">Correct</p> </td>
        <td> <img src="{{site.baseurl}}/images/text_area/size_3.png" style="margin-top: 10px; margin-left: 30px; margin-bottom: -10px"> </td>
    </tr>
</table>


Do **not** resize a text area on input. It will change the position of other controls and they can become hardly discoverable.

If the text is long and does not fit the text area, add [scrollbar]({{site.baseurl}}/controls/scrollbar).

For placement, follow the rules for the [input field]({{site.baseurl}}/controls/input_field).


## Style
Use the same colors as for the [input field]({{site.baseurl}}/controls/input_field/).

Do **not** highlight a text area on selection, only if a validation error occurs.


### History
<p class="noanchor">Background: dialog default theme color</p>  
<p class="noanchor">Font: Windows, IntelliJ — default, Mac OS 2px smaller than default</p>







---
title: Text area
codename: JBTextArea
category: Controls
---

A text area allows users to enter or edit multi-line text.

![]({{site.baseurl}}/images/text_area/text_area_example.png)

## When to use

Use a text area if input is unconstrained and long, or if newline character is a valid input. For example: commit 
message or code snippets. 

Do **not** use text area in the following cases:

* If input consists of several words, use [input field]({{site.baseurl}}/controls/input_field).
* If there is not enough place for the text area, use [expandable input field]({{site
.baseurl}}/controls/input_field#input-field-types). Or if input is usually short, but can be long or multi-line rarely.
* If values are added one by one, use [table]({{site.baseurl}}/controls/table).
* If text is read-only, use [textual output]({{site.baseurl}}/controls/text_output) instead.


## How to use

### Label

Follow the rules for the [input field]({{site.baseurl}}/controls/input_field/).

The label is required for all empty text areas. If text area is **prefilled** and it’s clear from the context what 
appears in text area, the label can be omitted. For example, the text area is used to preview file and code templates:  
![]({{site.baseurl}}/images/text_area/no_label.png)
*If new file template is added and the text area is empty, the label is required.*

Do **not** put the second part of the label or units on the right of the text area.

Do **not** use [group hader]({{site.baseurl}}/controls/group_header) instead of the text area label. The horizontal 
line is redundant here. Use [context help]({{site.baseurl}}/principles/context_help) to explain field behavior.
<p class="label incorrect noanchor">Incorrect</p>
![]({{site.baseurl}}/images/text_area/label_incorrect.png)

<p class="label correct noanchor">Correct</p>
![]({{site.baseurl}}/images/text_area/label_correct.png)


### Placeholder, prefilled values and field focus

Follow the rules for the input field: [placeholder]({{site.baseurl}}/controls/input_field#placeholder), [prefilled 
value]({{site.baseurl}}/controls/input_field#prefilled-value), [field focus]({{site.baseurl}}/controls/input_field#field-focus).


### History

If the previous user input should be preserved, use <kbd>⌥↑</kbd> and <kbd>⌥↓</kbd> on Mac OS and <kbd>Alt+Up/Down</kbd> on Windows and Linux to navigate through the history. If the field gets focus and history is available, add a note on the bottom of the input field:

![]({{site.baseurl}}/images/text_area/history.png)

Preserve the currently entered value, so that user can return back to it while navigating through the history.


### Validation

If the user types in an invalid value, highlight text area with red and show error message in a tooltip. For more details see [Validation errors]({{site.baseurl}}/principles/validation_errors/).

![]({{site.baseurl}}/images/text_area/error.png)



## Size and placement

Recommended sizes:
![]({{site.baseurl}}/images/text_area/sizes.png)  
This is the default sizes, they can be changed if the dialog is resized.  
**Height**. The minimum text area height is 3 lines ~55px, so the user understands that it’s multi-line. The maximum 
height is not limited and should be appropriate for the most common values.  
**Width**. The minimum text area width is 270px. It’s inconvenient to use a narrower field due to the frequent line 
breaks. The maximum width is 80 symbols ~600px, otherwise it’s hard to read the text.

Size text area to display an integral number of lines of text:

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


Do **not** resize text area on input. It will change the position of other controls and they can become 
hard-discoverable.

Avoid horizontal scroll bars on multi-line text boxes. Use vertical scrolling and line wrapping instead:

<table>
    <tr>
        <td> <p class="label incorrect">Incorrect</p> </td>
        <td> <img src="{{site.baseurl}}/images/text_area/size_4.png" style="margin-bottom: -10px; margin-left: 30px"> </td>         
    </tr>
    <tr>
        <td> <p class="label correct" style="margin-top: 10px;">Correct</p> </td>
        <td> <img src="{{site.baseurl}}/images/text_area/size_5.png" style="margin-top: 10px; margin-left: 30px; margin-bottom: -10px"> </td>
    </tr>
</table>

Horizontal scroll bar can be added if text area is for the code snippets or for the formatted input. Use context 
menu to enable soft-wrapping.

<p class="label correct noanchor">Correct</p>
![]({{site.baseurl}}/images/text_area/horizontal_scroll.png)

For placement follow the rules for the [input field]({{site.baseurl}}/controls/input_field).


## Style
Use the same colors as for the [input field]({{site.baseurl}}/controls/input_field/).

Do **not** highlight text area on selection, only if validation error occurs.


### History
<p class="noanchor">Background: dialog default theme color</p>  
<p class="noanchor">Font: Windows, IntelliJ — default;</p>
<p class="noanchor">Mac OS 2px smaller than default</p>
<p class="noanchor">Font color: 787878</p>







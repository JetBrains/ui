---
title: Text area
category: Controls
---

Text Area is a rectangular area that allows users to enter or edit multi-line text using keyboard.

![]({{site.baseurl}}/images/text_area/text_area_example.png)

## When to use

Use Text Area if input is unconstrained and long, or if newline character is a valid input. For example: commit message, code snippets, copyright text, etc.

Do **not** use Text Area in the following cases:

* If input consists of several words, use [Input Field]({{site.baseurl}}/controls/input_field).
* If there is not enough place for the Text Area, use [Expandable input field]({{site.baseurl}}/controls/input_field#input-field-types). Or if input is usually short, but can be long or multi-line rarely.
* If values are added one by one, use [Table]({{site.baseurl}}/controls/table/).
* If text is read-only, use Textual Output instead.

[comment]: <> (TODO: add link to Textual Output)



## How to use

### Label

* Follow the rules for the [Input Field]({{site.baseurl}}/controls/input_field/). If label is on the left, align it with the first input line:

    ![]({{site.baseurl}}/images/text_area/label.png)

* The label is required for all empty Text Areas. If Text Area is **prefilled** and it’s clear from the context what appears in Text Area, the label can be omitted. For example, the Text Area is used to preview file and code templates:

    ![]({{site.baseurl}}/images/text_area/no_label.png)

    If new file template is added and the Text Area is empty, the label is required.

* Do **not** put second part of the label or units on the right of the Text Area.

* Do **not** use Group separator instead of Text Area label. The horizontal line is redundant here:

    ![]({{site.baseurl}}/images/text_area/do_not_label.png)
    *Use Context help to explain field behavior.*


### Placeholder, prefilled values and field focus

Follow the rules for the Input Field: [placeholder]({{site.baseurl}}/controls/input_field#placeholder), [prefilled value]({{site.baseurl}}/controls/input_field#prefilled-value), [field focus]({{site.baseurl}}/controls/input_field#field-focus).


### Size and placement

* Recommended sizes:

    ![]({{site.baseurl}}/images/text_area/size_1.png)

    This is the default sizes, they can be changed if the dialog is resized.

    **Height**. The minimum Text Area height is 3 lines ~55px, so the user understands that it’s multi-line. The maximum height is not limited and should be appropriate for the most common values.

    **Width**. The minimum Text Area width is 270px. It’s inconvenient to use a narrower field due to the frequent line breaks. The maximum width is 80 symbols ~600px, otherwise it’s hard to read the text.

* Size Text Area to display an integral number of lines of text:

    ![]({{site.baseurl}}/images/text_area/size_2.png)

* Do **not** resize Text Area on input. It will change the position of other controls and they can become hard-discoverable.

* Avoid horizontal scroll bars on multi-line text boxes. Use vertical scrolling and line wrapping instead:

    ![]({{site.baseurl}}/images/text_area/size_3.png)

    Horizontal scroll bar can be added if Text Area is for the code snippets or for the formatted input:

    ![]({{site.baseurl}}/images/text_area/horizontal_scroll.png)

    Use context menu to enable soft-wrapping.

* **Placement**. Follow the rules for the [Input Field]({{site.baseurl}}/controls/input_field).


## History

If the previous user input should be preserved, use <kbd>⌥↑</kbd> and <kbd>⌥↓</kbd> on Mac OS and <kbd>Alt+Up/Down</kbd> on Windows and Linux to navigate through the history. If the field gets focus and history is available, add a note on the bottom of the input field:

![]({{site.baseurl}}/images/text_area/history.png)

Preserve the currently entered value, so that user can return back to it while navigating through the history.

If the space is limited, the hint can be removed when user enters new line. Most probably if user entered several lines, they no longer need a history.


### Validation

If user types in an invalid value, highlight text area with red and show error message in a tooltip.

![]({{site.baseurl}}/images/text_area/error.png)

Do not change the values automatically. Do not allow to save changes, while incorrect value is entered. For more details see [Validation errors]({{site.baseurl}}/principles/validation_errors/).


## Style
Use the same colors, fonts and spaces as for the [Input Field]({{site.baseurl}}/controls/input_field/).

Do **not** highlight Text Area on selection, only if validation error occurs.

### Sizes

Recommended sizes for all themes are:

![]({{site.baseurl}}/images/text_area/sizes.png)

### History

<table>
<col width="50%">
<tr>
    <td> <img src="{{site.baseurl}}/images/text_area/style_history.png" style="margin: 0"> </td> 
    <td style="line-height: 24px"> Background: dialog default theme color. <br /> 
         Font: Windows, GTK+, Intellij — default; Mac OS 2px smaller than default.<br /> 
         Font color: <span style="color:#787878">#787878</span>. </td>         
</tr>
</table>







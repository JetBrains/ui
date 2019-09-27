---
title: Input field
codename: JBTextField
category: Controls
---

An input field allows users to enter or edit a text line using the keyboard.
![]({{site.baseurl}}/images/input_field/example.png)


## When to use

Use an input field if it’s not possible to enumerate the most likely values. Otherwise use a [combo
 box]({{site.baseurl}}/controls/combo_box/) or a [drop-down list]({{site.baseurl}}/controls/drop_down).

If input has to be in a specific format, use one of the following controls:

* If the previous user input must be preserved, use a [combo box]({{site.baseurl}}/controls/combo_box/).
* Use a [text area]({{site.baseurl}}/controls/text_area/) for long (commit message) or multi-line (code snippet) input. If place is constrained, use an [expandable input field]({{site.baseurl}}/controls/input_field/#input-field-types).
* Use a [slider]({{site.baseurl}}/controls/slider) if a precise value is not required, or if it’s possible to provide feedback on the effect of setting changes. If place is constrained, use an input field. 
* Use a [search field]({{site.baseurl}}/controls/search/) to input a search query.
* Use [calendar]({{site.baseurl}}/controls/calendar/) to set a date. 
* Use [color box]({{site.baseurl}}/controls/color_box/) to choose a color. 


## How to use

### Label

A label accompanies each input field and indicates the information type.

Labels should be [short and descriptive]({{site.baseurl}}/text/writing_short/).

Write the label either as a noun and end it with a colon: 
![]({{site.baseurl}}/images/input_field/label_noun.png)
Or as a phrase with no ending punctuation:
![]({{site.baseurl}}/images/input_field/label_sentence.png)


Do **not** use labels to tell users what to do:  
![]({{site.baseurl}}/images/input_field/user_action.png)

Use sentence-style capitalization. 

If there are several input fields on a form, it’s recommended to make labels approximately the same length to avoid gaps between labels and fields. For example:
<table>
    <tr>
        <td> <p class="label incorrect">Incorrect</p> </td>
        <td> <img src="{{site.baseurl}}/images/input_field/several_labels_length.png" style="margin-bottom: -10px; margin-left: 30px"> </td>         
    </tr>
    <tr>
        <td> <p class="label correct">Correct</p> </td>
        <td> <img src="{{site.baseurl}}/images/input_field/several_labels_length_1.png" style="margin-left: 30px;"> </td>
    </tr>
</table>

If an input field is disabled, disable the label too:
![]({{site.baseurl}}/images/input_field/label_disabled.png)

Make the label text selectable. The user may want to search for this option on the Internet or to send a question to support. 

Place the label on the left or above the input field. For more details see [Layout]({{site.baseurl}}/principles/layout/#labeled-inputs).


### Placeholder
Placeholder is grey text placed inside an input field. Follow these rules:
* Use sentence-style capitalization. 
* Do **not** use ending punctuation or ellipsis. 
* Hide the placeholder when the user starts typing, not when the input field gets the focus.

To show placeholder text, use `JBTextField.getEmptyText().setText(...)`.

Use the placeholder to indicate that an input field is [optional]({{site.baseurl}}/principles/required_fields/):  
![]({{site.baseurl}}/images/input_field/placeholder_optional.png)

Use the placeholder to show the default value:
![]({{site.baseurl}}/images/input_field/placeholder_default.png)
If the user overwrites the value, it can be restored by removing the new value from the input field or by clicking the "Reset to default" link on the right:
![]({{site.baseurl}}/images/input_field/placeholder_reset.png)

Do **not** use the placeholder to show examples. The user can get the impression that the field is already filled. Provide examples or explanation under the input field (see [Context help]({{site.baseurl}}/principles/context_help/)):
<table>
<col width="200px">
    <tr>
        <td> <p class="label incorrect">Incorrect</p> </td>
        <td> <p class="label correct">Correct</p> </td>
    </tr>
    <tr>
        <td> <img src="{{site.baseurl}}/images/input_field/placeholder_examples.png" style="margin-top: -5px; margin-bottom: 5px;"> </td>
        <td> <img src="{{site.baseurl}}/images/input_field/placeholder_examples_1.png" style="margin-top: -5px; margin-bottom: 5px;"> </td>
    </tr>
</table>
        
Do **not** use the placeholder as the field label. After the field has been filled, it is difficult to understand it’s purpose.  
![]({{site.baseurl}}/images/input_field/placeholder_label.png)



### Prefilled value
Pre-fill the field if it has the default or a frequently used value. Use the default text color for prefilled values:
![]({{site.baseurl}}/images/input_field/prefill.png)

Do **not** prefill with “Unnamed”. It takes time to read it and does not help the user to fill the form. 
![]({{site.baseurl}}/images/input_field/prefill_unnamed.png)

### Field focus
When an input field gets the focus, place the caret at the end of the text:
![]({{site.baseurl}}/images/input_field/focus_end.png)

If users are more likely to re-enter the entire value, select the whole text, when the field gets the focus:
![]({{site.baseurl}}/images/input_field/focus_all.png)


### Input field types

If input text can be long and place is constrained, use an expandable input field `com.intellij.ui.components.fields.ExpandableTextField`.
![]({{site.baseurl}}/images/input_field/expandable_1.png)

If input data is secured, replace it with dots `JPasswordField`:
![]({{site.baseurl}}/images/input_field/password.png)

If there are many predefined values (for example, code snippets, commit author), add completion to the input field `com.intellij.util.textCompletion.TextFieldWithCompletion`:
![]({{site.baseurl}}/images/input_field/completion.png)
An input field with completion looks the same way as a regular input field. When an empty input field gets the focus, show a tooltip after a delay to indicate that code completion is supported:
![]({{site.baseurl}}/images/input_field/completion_tooltip.png)
Show the completion popup when the user starts typing or presses <kbd>Ctrl+Space</kbd>.

Use [built-in buttons]({{site.baseurl}}/controls/built_in_button) to help the user enter data. For example, 
to browse the disk.


### Validation
If the user enters an invalid value, highlight the field with red and show an error message in a tooltip. For more details see [Validation errors]({{site.baseurl}}/principles/validation_errors/).  
![]({{site.baseurl}}/images/input_field/error.png)


## Sizes and placement

Sizes are the same for all themes:
![]({{site.baseurl}}/images/input_field/sizes.png)

### Field width

Choose the width appropriate for the most common values, but not less than 65 px. The field width helps the user understand what value is expected and to make sure that they fill the field correctly.
<table>
    <tr>
        <td> <p class="label incorrect">Incorrect</p> </td>
        <td> <img src="{{site.baseurl}}/images/input_field/size_1.png" style="margin-bottom: -20px; margin-left: 30px"> </td>         
    </tr>
    <tr>
        <td> <p class="label correct" style="margin-top: 10px;">Correct</p> </td>
        <td> <img src="{{site.baseurl}}/images/input_field/size_2.png" style="margin-top: 10px; margin-left: 30px; margin-bottom: -10px"> </td>
    </tr>
    <tr>
        <td> <p class="label incorrect">Incorrect</p> </td>
        <td> <img src="{{site.baseurl}}/images/input_field/size_3.png" style="margin-bottom: -20px; margin-left: 30px"> </td>         
    </tr>
    <tr>
        <td> <p class="label correct" style="margin-top: 10px;">Correct </p> </td>
        <td> <img src="{{site.baseurl}}/images/input_field/size_4.png" style="margin-top: 10px; margin-left: 30px; margin-bottom: 5px;"> </td>
    </tr>
</table>


If input value is longer than the field width, show the beginning of the value when the field becomes inactive:
![]({{site.baseurl}}/images/input_field/size_long_name.png)

### Placement

If the input field depends on another control, for example, a checkbox, follow the rules for [dependent controls]({{site.baseurl}}/principles/layout/#lay-out-dependent-controls). Otherwise, follow the rules for [independent controls]({{site.baseurl}}/principles/layout/#arrange-independent-controls).

![]({{site.baseurl}}/images/input_field/sizes_label.png)

![]({{site.baseurl}}/images/input_field/sizes_button.png)

![]({{site.baseurl}}/images/input_field/sizes_several.png)
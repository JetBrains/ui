---
title: Input Field
category: Controls
order: 1
---

An input field is a rectangular area that allows users to enter or edit one text line using the keyboard.  

![]( {{ site.baseurl }}/images/input_field/example.png)


## When to use

Use an input field if it’s not possible to enumerate less than 15 most likely or valid values. Otherwise use a [Combo Box]( {{ site.baseurl }}/images/input_field/combo_box.xml) or [Drop-down]( {{ site.baseurl }}/images/input_field/drop_down.xml).

If the input has a specific format, select one of the following controls:

<aside class="note sideblock _visible">The current Windows guidelines use sentence capitalization for actions. Some Microsoft products still title-capitalize actions according to the previous guidelines. Mac OS X also title-capitalizes actions. Since IntelliJ IDEs are cross-platform, we use title capitalization as well.</aside>

* If the previous user input should be preserved, use a [Combo Box]( {{ site.baseurl }}/images/input_field/combo_box.xml).

* Use [Text Area]( {{ site.baseurl }}/images/input_field/text_area.xml) if input is a long phrase (e.g. commit message) or multi-line (e.g. code snippet). If place is constrained, use [Expandable input field]( {{ site.baseurl }}/images/input_field/Input_field_types.xml).

* Slider if a precise value does not matter or if it’s possible to provide feedback on the effect of setting changes. If place is constrained, use an  input field.
* [Search Field]( {{ site.baseurl }}/images/input_field/search.xml).
* [Calendar]( {{ site.baseurl }}/images/input_field/calendar.xml).
* [Color Box]( {{ site.baseurl }}/images/input_field/color_box.xml).




## How to use

### Label

The label displays the type of information the field requires. Follow the rules:

* A label accompanies each input field.
* Labels should be [short and descriptive]( {{ site.baseurl }}/images/input_field/concise_text.xml) so the user can quickly scan the form.
* Write the label either as a noun and end the label with a colon:  
    ![]( {{ site.baseurl }}/images/input_field/label_noun.png) 
    Or as a phrase with no ending punctuation:
    ![]( {{ site.baseurl }}/images/input_field/label_sentence.png)

* Do **not** use labels to indicate user actions:  
    ![]( {{ site.baseurl }}/images/input_field/user_action.png)

* Use sentence-style capitalization.

* Place label on the left and align with the text baseline:

    ![]( {{ site.baseurl }}/images/input_field/label_left.png)

    If place is constranted, place label above the input field:

    ![]( {{ site.baseurl }}/images/input_field/label_top.png)

* If an input field is disabled, disable the label:

    ![]( {{ site.baseurl }}/images/input_field/label_disabled.png)

* Make the label text selectable. The user may want to find this option on the Internet or to send question about the option to support.

* If there are several input fields on the form, it’s recommended to make labels approximately the same length to avoid gaps between labels and fields. For example:  
    ![]( {{ site.baseurl }}/images/input_field/several_labels_length.png)  



### <a name="placeholder"></a>Placeholder
Placeholder is a grey text placed inside an input field. Follow the rules:

* Use sentence-style capitalization.
* Do **not** use ending punctuation or ellipsis.
* Hide placeholder when user starts typing, not on input field focus.

The placeholder should be used in the following cases:

1. Use placeholder to indicate that input field is [optional]( {{ site.baseurl }}/images/input_field/required_fields.xml):  

    ![]( {{ site.baseurl }}/images/input_field/placeholder_optional.png)

2. Use placeholder to show inherited default value:  

    ![]( {{ site.baseurl }}/images/input_field/placeholder_default.png)

    If user overwrites value, the value can be reset by removing value from the input field or clicking on *Reset to default* link on the right:

    ![]( {{ site.baseurl }}/images/input_field/placeholder_reset.png)


3. Do **not** use placeholder to show examples. User can decide that the field is already filled. Provide examples or explanation under the input field (see [Context help]( {{ site.baseurl }}/images/input_field/context_help.xml)):

    ![]( {{ site.baseurl }}/images/input_field/placeholder_examples.png)

4. Do **not** use placeholder as field label. When the field is filled, it is difficult to understand what kind of field it is.  

    ![]( {{ site.baseurl }}/images/input_field/placeholder_label.png)



### <a name="prefilled_value"></a>Prefilled value
Prefill field if it has default or frequently used values. Use default text color for prefilled values:

![]( {{ site.baseurl }}/images/input_field/prefill.png)

Do **not** prefill with “Unnamed”. It takes time to read it and does not help user to fill the form.

![]( {{ site.baseurl }}/images/input_field/prefill_unnamed.png)



### Sizes and placement

* Choose width appropriate for the most common values, but not less than 65px. Field width helps user to understand what value is expected and to make sure that they filled the field correctly.

    ![]( {{ site.baseurl }}/images/input_field/size_1.png)

    ![]( {{ site.baseurl }}/images/input_field/size_2.png)

* If input value is longer than field width, show the beginning of the value when field becomes inactive:

    ![]( {{ site.baseurl }}/images/input_field/size_long_name.png)

* Stack multiple input fields vertically:

    ![]( {{ site.baseurl }}/images/input_field/fields_stack.png)

    If space is constrained, the fields can be placed horizontally. It’s not recommended, as it complicates reading. Leave plenty of space between the end of the input field and the label of the next:

    ![]( {{ site.baseurl }}/images/input_field/fields_line.png)

    For alignment with other element see [Elements alignment section]( {{ site.baseurl }}/images/input_field/elements_alignment.xml).

* If there are several input fields in a column, it’s recommended that they are left aligned and have the same width:

    ![]( {{ site.baseurl }}/images/input_field/fields_stack_alignment.png)

    If there are several groups of settings in the form, the fields can be aligned in the groups to avoid big gaps between labels and input fields:

    ![]( {{ site.baseurl }}/images/input_field/fields_stack_alignment_groups.png)


### <a name="field_focus"></a>Field focus
When input field gets focus, put the caret at the end of the text:

![]( {{ site.baseurl }}/images/input_field/focus_end.png)

If users are more likely to reenter the entire value, not edit the existing one, select all the text on input focus:

![]( {{ site.baseurl }}/images/input_field/focus_all.png)



### <a name="input_field_type"></a>Input field types

* If input can be large and place is constrained, use expandable input field:

    ![]( {{ site.baseurl }}/images/input_field/expandable_1.png)

    ![]( {{ site.baseurl }}/images/input_field/expandable_2.png)


* If input data is numeric, follow [Numeric fields]( {{ site.baseurl }}/images/input_field/numeric_field.xml) guidelines.
* If input data is secured, replace it with dots:

    ![]( {{ site.baseurl }}/images/input_field/password.png)

* If there are many predefined values (e.g. code snippets, commit author), add completion to the input field:

    ![]( {{ site.baseurl }}/images/input_field/completion.png)

    Input field with completion looks the same as regular input field. When empty input field gets focus, show tooltip after delay to indicate that code completion is supported:

    ![]( {{ site.baseurl }}/images/input_field/completion_tooltip.png)

    Show completion popup when user starts typing or presses Ctrl+Space.

* Use [Control Buttons]( {{ site.baseurl }}/images/input_field/button.xml) to help user enter data. For example, <inline>![]( {{ site.baseurl }}/images/input_field/browseButton.png)</inline> to browse disk.  



### Validation
If user types in an invalid value, highlight field with red and show error message in a tooltip.

![]( {{ site.baseurl }}/images/input_field/input_field_error.png)

Do not change the values automatically. Do not allow to save changes, while incorrect value is entered. For more details see [Validation errors]( {{ site.baseurl }}/images/input_field/validation_errors.xml).



## Style
### Colors and fonts
Label font: default. Input font: default or Editor font for code snippets.

[comment]: <> (TODO: Add table with colors.)

### Sizes
Sizes are the same for all themes:
![]( {{ site.baseurl }}/images/input_field/sizes.png)


### Spacing

![]( {{ site.baseurl }}/images/input_field/sizes_label.png)

![]( {{ site.baseurl }}/images/input_field/sizes_button.png)

![]( {{ site.baseurl }}/images/input_field/sizes_several.png)

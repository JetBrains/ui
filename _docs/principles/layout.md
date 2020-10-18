---
title: Layout
category: Principles
type: GroupHeader
---

<div class="noanchor">
Arrange UI controls in dialogs according to the rules below to help people locate the necessary settings faster and understand how they are related. <br/><br/>

Independent controls:
<ul>
<li><a href="{{site.baseurl}}/principles/layout/#labeled-input-controls">Labeled input controls:</a> fields, combo boxes, text areas, etc.</li>
<li><a href="{{site.baseurl}}/principles/layout/#checkboxes-and-radio-buttons">Checkboxes and radio buttons</a></li>
<li><a href="{{site.baseurl}}/principles/layout/#buttons-and-links">Buttons and links</a></li> 
<li><a href="{{site.baseurl}}/principles/layout/#lists-trees-and-tables">Lists, trees, tables</a></li>
</ul>

<a href="{{site.baseurl}}/principles/layout/#dependent-controls">Dependent controls</a> — controls that depend on a parent control. <br/><br/>

<a href="{{site.baseurl}}/principles/layout/#group-controls">Group controls</a> to help people locate the necessary settings faster. <br/><br/><br/>

See <a href="{{site.baseurl}}/components/dialog_window">Dialog window</a> for buttons and other controls at the bottom of a dialog.

</div>

## Independent controls


### Labeled input controls 

Labeled input controls are: [input field]({{site.baseurl}}/controls/input_field), [combo box]({{site.baseurl}}/controls/combo_box), [drop-down list]({{site.baseurl}}/controls/drop_down), [text area]({{site.baseurl}}/controls/text_area), and spinner.

By default, put input controls with labels of similar length on different lines and align their input boxes on the left side. 

![]({{site.baseurl}}/images/layout/1_01_input_similar_labels.png)

Do **not** align input boxes on the left side if one label is twice as long as the other one or even longer.

![]({{site.baseurl}}/images/layout/1_02_input_different_labels_incorrect.png)

![]({{site.baseurl}}/images/layout/1_02_input_different_labels_correct.png)

If several related input controls have labels of up to 10 characters and their input boxes are short, organize them in two columns. Do **not** use more than two columns.

![]({{site.baseurl}}/images/layout/1_03_short_inputs.png)

If an input box is long, and the horizontal space is limited, place the label above the box. Otherwise, always put the label and the box on the same line.

![]({{site.baseurl}}/images/layout/1_04_input_top_label.png)


#### Separated by other controls  

If there are two input controls with labels of similar length that are separated from each other by a single control, align their input boxes on the left side.

![]({{site.baseurl}}/images/layout/1_05_separated_by_one.png)

Align only the input boxes of the neighboring input controls. If there're several input controls on a page, and they are separated from each other by two or more other UI elements, do **not** align their input boxes.

![]({{site.baseurl}}/images/layout/1_06_separated_by_two.png)

If input groups are separated by a group of other UI controls, align only the boxes located within one group.

![]({{site.baseurl}}/images/layout/1_07_separated_groups.png)


#### Labels and right borders

<aside class="note sideblock _visible">This alignment is inconsistent with macOS guidelines, but the aim is to maintain consistency in all JetBrains IDEs on all supported platforms.</aside>

Always left-align labels. 

![]({{site.baseurl}}/images/layout/1_08_label_alignment.png)

Align the right borders of input boxes that have a similar length. For alignment, use [built-in icons]({{site.baseurl}}/controls/built_in_button). Do **not** use buttons.

![]({{site.baseurl}}/images/layout/1_09_built_in_button.png)


### Checkboxes and radio buttons

By default, put independent checkboxes and radio button groups on different lines.

![]({{site.baseurl}}/images/layout/2_01_checkbox_radio_column.png)

If there is a group of 2–3 checkboxes with short labels (1–3 words), place them on the same line. The same rule applies to radio buttons. With this alignment, controls form a short sentence making it easier to understand their meaning compared to when they are split into several lines.

![]({{site.baseurl}}/images/layout/2_02_checkbox_radio_line.png)

When there is an input control on one line and a group of checkboxes or radio buttons on the next line, and their labels are of similar length (one is no more that 5 characters longer than the other), align the input box with the checkbox/radio button. 

<p class="noanchor">If one label is much longer than the other, do <b>not</b> align these UI elements.</p>

![]({{site.baseurl}}/images/layout/2_03_align_group_labels.png)

If a checkbox group does not have a label, align it with other independent controls by the left side.

![]({{site.baseurl}}/images/layout/2_03_align_without_group_labels.png)

4 and more checkboxes can be arranged in columns:

* Arrange checkboxes with labels of up to 30 characters in 2 columns.

![]({{site.baseurl}}/images/layout/2_04_checkbox_2_columns.png)

* Arrange checkboxes with labels of up to 15 characters in 3 columns.

![]({{site.baseurl}}/images/layout/2_05_checkbox_3_columns.png)

Do **not** arrange radio buttons from one group in several columns. Splitting a group of radio buttons into two or more columns makes it unclear that all these radio buttons belong to the same setting.

![]({{site.baseurl}}/images/layout/2_06_radio_columns_incorrect.png)


### Buttons and links

Align an independent button or link to the left with other controls. 

![]({{site.baseurl}}/images/layout/3_01_button_column.png)

![]({{site.baseurl}}/images/layout/3_01_link_column.png)

If there are 2–3 buttons or links with labels of up to 30 characters each, place them on one line.

![]({{site.baseurl}}/images/layout/3_02_button_line.png)

Do **not** arrange buttons or links in several columns. Such a layout takes more time to parse visually.

![]({{site.baseurl}}/images/layout/3_03_button_columns.png)


### Lists, trees and tables

Choose a control width such that most of the common values are visible. Take the whole width of the dialog if necessary. 

![]({{site.baseurl}}/images/layout/4_01_table_full_width.png)

If the dialog containing the control is noticeably wider than the control itself, reduce the length of the control.

<p class="noanchor">Do <b>not</b> put other independent controls to the right of a list, tree, or table. They would look like dependent controls in the <a href="{{site.baseurl}}/principles/masterdetail_layout">master-detail layout</a>.</p> 

![]({{site.baseurl}}/images/layout/4_02_table_fixed_width.png)


If there are several lists, trees, or tables in a dialog, make them of the same width.

![]({{site.baseurl}}/images/layout/4_03_aligned_lists.png)


## Dependent controls

<p class="noanchor">Align controls according to the rules below to show that they are related.</p>

Place 2–3 related UI controls on the same line if each control takes up to 30 characters. This way the user needs to read just one line, and it is quicker to see that the controls depend on each other.

![]({{site.baseurl}}/images/layout/5_01_dependent_one_line.png)

<p class="noanchor">In all other cases, place interrelated controls on different lines:</p> 

Main control: **labeled input control**. 

* Align other dependent elements with the left border of the input box.

![]({{site.baseurl}}/images/layout/5_03_dependent_on_field_checkbox.png)

![]({{site.baseurl}}/images/layout/5_03_dependent_on_field_button.png)

* If an input’s label is long or the input box is very short, align by the label and add a horizontal inset.

![]({{site.baseurl}}/images/layout/5_04_dependent_on_field_long_label.png)

Main control: **checkbox** or **radio button**. Align dependent controls by the label. 

![]({{site.baseurl}}/images/layout/5_02_dependent_on_checkbox.png)

When the main control or one of the dependent controls takes the whole width of a panel, left align all elements.

![]({{site.baseurl}}/images/layout/5_05_whole_width_text_area.png)
*The text area is the main control, the button is the dependent control.*

![]({{site.baseurl}}/images/layout/5_06_whole_width_checkbox.png)
*The checkbox is the main control, the table is the dependent control.*

When the main control takes the whole width of a panel, and there is one small dependent control (for example, a drop-down list), place this dependent control to the top-right corner, above the main control.

![]({{site.baseurl}}/images/layout/5_07_whole_width_top_right_corner.png)

See [Master-detail layout]({{site.baseurl}}/principles/masterdetail_layout) for more information on how to lay out controls if they depend on lists or trees.

See the [Inline help text]({{site.baseurl}}/controls/inline_help_text/#placement) and [Tooltip]({{site.baseurl}}/controls/tooltip/#question-mark-icon-for-help-tooltips) articles for details on how to arrange help information in dialogs.

If controls do **not** depend on each other, left-align them all. Otherwise, the user might think that controls are linked.

![]({{site.baseurl}}/images/layout/5_09_incorrect_alignment.png)
*The spinners do not depend on the top checkbox.*


## Group controls

<p class="noanchor">Group controls to help people locate the necessary controls faster.</p>

<p class="noanchor">Use headers or insets to create groups:</p>

If there are several groups of controls in a dialog, and one of the groups contains at least 3–4 controls, use [group headers]({{site.baseurl}}/controls/group_header) in all groups. Label the headers so that they reflect the functionality of controls within groups.

![]({{site.baseurl}}/images/layout/6_01_group_headers.png)
*Group headers are used because there are more than 4 controls in the first group.*

Use **vertical insets** instead of group headers if there are less than 3–4 controls in all groups or it is hard to find clear group names.

<p class="noanchor">Vertical insets also help to break a long list of controls into easily readable pieces. Compare:</p>

<p class="label incorrect">Incorrect</p>

![]({{site.baseurl}}/images/layout/6_02_group_insets_incorrect.png)
*The list of controls is hard to scan quickly because the controls "stick" together.*

<p class="label correct">Correct</p>

![]({{site.baseurl}}/images/layout/6_02_group_insets_correct.png)
*Scanning a list of controls becomes easier when vertical insets are added between the groups of controls.*

Do not create groups when there are only 1–3 controls on a panel.

<p class="label incorrect">Incorrect</p>

![]({{site.baseurl}}/images/layout/6_03_group_incorrect.png)
*Each group has less than 3 controls. Group headers only add noise in this case because control labels are enough to understand their purpose.*

<p class="label correct">Correct</p>

![]({{site.baseurl}}/images/layout/6_03_group_correct.png)

Treat groups with extra care and make sure that elements within a group are actually related. An unnecessary inset may create a false impression that the controls are grouped. This complicates the UI and might cause confusion.

<p class="label incorrect">Incorrect</p>

![]({{site.baseurl}}/images/layout/6_04_inset_incorrect.png)
*The first checkbox depends on the combo box which is shown with the horizontal inset. However, the checkboxes appear grouped because they are closer.*

<p class="label correct">Correct</p>

![]({{site.baseurl}}/images/layout/6_04_inset_correct.png)
*The first checkbox is closer to its main control and it is easier to see that the combo box and the checkbox are related.*

Horizontal insets also matter for grouping controls.

<p class="label incorrect">Incorrect</p>

![]({{site.baseurl}}/images/layout/6_05_hor_inset_incorrect.png)
*The checkboxes and the "Length" fields look independent because the horizontal inset between them is bigger than the vertical inset below the second checkbox.*

<p class="label correct">Better</p>

![]({{site.baseurl}}/images/layout/6_05_hor_inset_better.png)
*With a smaller horizontal and bigger vertical insets, the checkboxes and the "Length" fields look related. However, it could be made better if the repeating word “Separator” appears only once.* 

<p class="label correct">Correct</p>

![]({{site.baseurl}}/images/layout/6_05_hor_inset_correct.png)
*Correct grouping and no duplicates help understanding the UI quicker.*


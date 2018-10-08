---
title: Layout
category: Principles
---

Arrange UI controls correctly to help people locate the necessary settings faster and understand how they are related.
<br><br>
This article describes how to arrange:

* [Independent controls](#arrange-independent-controls)

  * [Labeled inputs:](#labeled-inputs) fields, combo boxes, spinners

  * [Buttons, checkboxes, radio buttons](#buttons-checkboxes-and-radio-buttons) 

  * [Lists, trees, tables](#lists-trees-and-tables)

* [Dependent controls](#lay-out-dependent-controls)
* [Groups of controls](#group-controls-with-headers-or-insets)

For [links]({{site.baseurl}}/controls/link), use combo box layouts for dropdown-links and button layouts for button-links.


## Column layout
* Lay out UI controls in columns. Use 1 – 4 columns. Do not use more than 4 columns: it is likely that such layout would not fit into a panel. 

![]({{site.baseurl}}/images/layout/columns-example-with-2.png)
*An example with 2 columns*

* Combine different column layouts in a single panel if necessary:

![]({{site.baseurl}}/images/layout/columns-combined.png)

How many columns to use depends on a set of controls to be laid out. Read below for how to arrange particular kinds of controls.


## Arrange independent controls

### Labeled inputs

Labeled inputs are input fields, spinners, and combo boxes (both editable and non-editable).

* If there are at least 2 labeled inputs on nearby lines and their labels have similar length, arrange them in **2 columns** — put labels into the first column and inputs into the second one:

![]({{site.baseurl}}/images/layout/2-column-fields.png)

* Align the left borders in groups of inputs in the following way:

  If all labels are similar in length, left-align inputs across all groups:

![]({{site.baseurl}}/images/layout/2-column-groups-aligned.png)

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;If labels length in groups differs noticeably, left-align only inside groups:

![]({{site.baseurl}}/images/layout/2-column-groups-not-aligned.png)

* Align the right borders for inputs with similar length. 

   To make inputs with control buttons right-aligned, do not use control buttons. Use [inputs with built-in icons]({{site.baseurl}}/controls/button#control-button) instead:

![]({{site.baseurl}}/images/layout/right-alignment-incorrect.png)

![]({{site.baseurl}}/images/layout/right-alignment-correct.png)

* Always left-align the labels. This alignment is inconsistent with Mac OS, but the aim here is consistency throughout the JetBrains IDEs across all supported platforms:

![]({{site.baseurl}}/images/layout/labels-left-align.png)

* Put both a label and an input into **1 column** in the following cases:

  * If labels differ considerably in length.
  
  ![]({{site.baseurl}}/images/layout/2-column-alignment-wrong.png)
  *It is hard to connect the shorter label and its input.*
  
  ![]({{site.baseurl}}/images/layout/2-column-alignment-right.png)
  *Better to have non-aligned inputs than a disconnected label.*
  
  * If labeled inputs do not appear on nearby lines:
  
  ![]({{site.baseurl}}/images/layout/1-column-fields-and-checkboxes.png)
  
  * If a labeled input might have a long string of text and appears in a narrow panel, e.g. a [popup]({{site.baseurl}}/components/popup). In this case, place the label above the input and make the input take the whole width of the panel:
  
  ![]({{site.baseurl}}/images/layout/1-column-combobox.png)

* Arrange in **4 columns** if there are two labeled inputs with the following properties:
  * labels are no longer than 10 characters, 
  * common values for inputs are short.
<br><br>
  Use only when space is limited:

![]({{site.baseurl}}/images/layout/4-column-fields-one-line.png)
*Leave plenty of space between the end of the first input and the label of the next one.*


### Buttons, checkboxes and radio buttons

* The default layout is **1 column**: 

![]({{site.baseurl}}/images/layout/1-column-checkboxes.png)
![]({{site.baseurl}}/images/layout/1-column-radios.png)

* If there are 2–3 checkboxes, radio buttons or buttons with labels no longer than 30 characters, arrange them in **a line in 1 column**:

![]({{site.baseurl}}/images/layout/1-column-1-row-radios.png)

* Do not arrange radio buttons and buttons in more than 1 column.

![]({{site.baseurl}}/images/layout/2-column-radios-incorrect.png)

* If there are 6 and more checkboxes, do one of the following: 
  * If labels are no longer than 30 characters, arrange them in **2 columns**:
  
  ![]({{site.baseurl}}/images/layout/2-column-checkboxes.png)
  
  * If labels are no longer than 15 characters, arrange them in **3 columns**:
  
  ![]({{site.baseurl}}/images/layout/3-column-checkboxes.png)
  
  * Or try [grouping](#group-controls-with-headers-or-insets) them.

For instructions on how to arrange buttons or checkboxes at the bottom of a modal dialog, see [Dialog window]({{site.baseurl}}/components/dialog_window).


### Lists, trees and tables

* If a table, list or tree has to take the whole width of the containing panel to make its contents visible, put it in **1 column**:

![]({{site.baseurl}}/images/layout/1-column-table-full-length.png)

* If the panel is noticeably wider than the content of a table, list or tree, fix the control's width and leave the space to the right of it empty:

![]({{site.baseurl}}/images/layout/1-column-table-fixed.png)

* Do **not** put independent controls to the second column if there is an empty space to the right of a list, tree or table. Controls in the second column usually depend on the selection in a list. 


## Lay out dependent controls
Use the correct alignment to show that controls are related.
<br><br>
* Generally, align dependent controls in several lines. 
  
  * For labeled inputs, align by the input's left border:
  
  ![]({{site.baseurl}}/images/layout/align-field.png)
  
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;If a label is long or the input is very short, align by the label and add a horizontal inset:
  
  ![]({{site.baseurl}}/images/layout/align-field-long-label.png)
  
  * For checkboxes and radio buttons, align with their label: 
  
  ![]({{site.baseurl}}/images/layout/align-checkbox.png)

  * If the depending control takes the whole width of a panel, align by the main control's left border:
  
  ![]({{site.baseurl}}/images/layout/align-wide-component.png)

* If there is a small number of controls and their labels and inputs are short, align in one line. This way the user needs to read just one line and it is quicker to see that the controls are dependent:
  
![]({{site.baseurl}}/images/layout/line-combo.png)
  
![]({{site.baseurl}}/images/layout/line-buttons.png)
  
![]({{site.baseurl}}/images/layout/line-checkbox-radio.png)
  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Make sure that labels of all controls and inputs lie on the same baseline:

![]({{site.baseurl}}/images/layout/line-checkbox-radio-undeline.png)

* If the main control takes the whole width of a panel, a dependent drop-down link can be placed in the top-right corner:

![]({{site.baseurl}}/images/layout/align-wide-component-top-right.png)

* Align context hints according to the rules in the [Context help]({{site.baseurl}}/principles/context_help) article:

![]({{site.baseurl}}/images/layout/align-hint.png)

* If the controls are not dependent, left-align them all. Otherwise, the user might think that controls are dependent:

![]({{site.baseurl}}/images/layout/align-incorrect.png)
*The spinners do not depend on the top checkbox. However, it looks like they do because their labels are aligned.*

![]({{site.baseurl}}/images/layout/align-incorrect-corrected.png)
*Left-aligned controls do not look dependent. Also, the labels are quicker to read with the repeating words "Grid lines" moved to the group header.*

For laying out controls dependent on a list, tree or table, see [Master-detail layouts]({{site.baseurl}}/principles/master_detail_layout).


## Group controls with headers or insets

Group controls to help people locate the necessary controls faster.
<br><br>
Groups can be made with headers or with insets:

* Use **[group headers]({{site.baseurl}}/components/collapsible_group_header)** if there are at least 3–4 controls in one of the groups and all groups can be clearly labeled according to their purpose. 

  Avoid group names like "General" or "Options" because they do not tell the purpose of a group. See more on that in the [Writing short and clear text]({{site.baseurl}}/text/writing_short) article.

![]({{site.baseurl}}/images/layout/group-headers.png)
*Use group headers because there are more than 4 controls in the first group.*

* Use **vertical insets** instead of group headers if there are less than 3–4 controls in all groups or it is hard to find clear group names.

  Vertical insets also help to break a long list of controls into easily readable pieces. Compare:

<p class="label incorrect">Incorrect</p>

![]({{site.baseurl}}/images/layout/group-insets-incorrect.png)
*The list of controls is hard to scan quickly because the controls "stick" together.*

<p class="label correct">Correct</p>

![]({{site.baseurl}}/images/layout/group-insets-correct.png)
*Scanning a list of controls becomes easier when vertical insets are added between groups of controls.*

* Do not create groups when there are just 1–3 controls on a panel:

<p class="label incorrect">Incorrect</p>

![]({{site.baseurl}}/images/layout/group-headers-incorrect.png)
*Each group has less than 3 controls. Group headers only add noise in this case because control labels are enough to understand their purpose.*

<p class="label correct">Correct</p>

![]({{site.baseurl}}/images/layout/group-headers-correct.png)

* Ensure that there are no accidental groups. Sometimes controls are automatically laid out so that an unexpected inset creates a false group. False groups hinder understanding the UI.

<p class="label incorrect">Incorrect</p>

![]({{site.baseurl}}/images/layout/group-chb-incorrect.png)
*The first checkbox depends on the combo box which is shown with the horizontal inset. However, the checkboxes appear grouped because they are closer.*

<p class="label correct">Correct</p>

![]({{site.baseurl}}/images/layout/group-chb-correct.png)
*The first checkbox is closer to its main control and it is easier to see that the combo box and the checkbox are related.*

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Horizontal insets also matter for grouping controls:

<p class="label incorrect">Incorrect</p>

![]({{site.baseurl}}/images/layout/group-length-incorrect.png)
*The checkboxes and the "Length" fields are connected but look independent because the horizontal inset between them is bigger than the vertical inset below the second checkbox.*

<p class="label correct">Better</p>

![]({{site.baseurl}}/images/layout/group-length-better.png)
*With a smaller horizontal and bigger vertical insets, the checkboxes and the "Length" fields look related. However, it could be made better if the repeating word "Separator" appears only once.* 

<p class="label correct">Correct</p>

![]({{site.baseurl}}/images/layout/group-length-correct.png)
*Correct grouping and no duplicates facilitate understanding the UI.*
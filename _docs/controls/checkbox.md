---
title: Checkbox
category: Controls
---

Сheckbox is used to choose between two mutually exclusive states such as yes/no.

![]({{site.baseurl}}/images/checkbox/checkbox_example.png)

## When to use

Use checkbox for:
* Yes/no choices.
* Select several objects from the group.

Do **not** use Checkbox in the following cases:

* If only one option from the list can be selected, use a [Radio Button]({{site.baseurl}}/controls/radio_button).
* If two states of a setting are not completely opposite as "Yes/No", use two radio buttons and label them accordingly:
    <p class="label incorrect">Incorrect</p>
    ![]({{site.baseurl}}/images/checkbox/when_to_use_incorrect.png)

    <p class="label correct">Correct</p>
    ![]({{site.baseurl}}/images/checkbox/when_to_use_correct.png)
*"Before" and "after" are opposite, but not as "yes" and "no." One checkbox does not indicate which option will be the opposite.*

## How to use

### Label

* A label accompanies each checkbox and appears after the checkbox:
![]({{site.baseurl}}/images/checkbox/label_verbs_correct.png)

* Use sentence-style capitalization.
* Labels should be short and intelligible and written as a phrase or an imperative sentence with no ending punctuation:
    <p class="label incorrect">Incorrect</p> 
    ![]({{site.baseurl}}/images/checkbox/label_short_incorrect.png)
    
    <p class="label correct">Correct</p> 
    ![]({{site.baseurl}}/images/checkbox/label_short_correct.png)

* If a label is long, move a part of the label to the second line and align the checkbox with the first line of the label. If the label is too long, [shorten it]({{site.baseurl}}/text/writing_short).
Do not write labels over more than two lines:
![]({{site.baseurl}}/images/checkbox/label_twoline.png)

* Remove verbs that explain the function of a checkbox.
  Verbs such as "allow" are extra because are already expressed by the checkbox. The “on” state of a checkbox means its feature is allowed:
    <p class="label incorrect">Incorrect</p>
    ![]({{site.baseurl}}/images/checkbox/label_verbs_incorrect.png)

    <p class="label correct">Correct</p>
    ![]({{site.baseurl}}/images/checkbox/label_verbs_correct.png)
* A label describes the checked state of the checkbox. Checkbox is the answer “yes”, do not use negation in labels:
    <p class="label incorrect">Incorrect</p>
    ![]({{site.baseurl}}/images/checkbox/label_answeryes_incorrect.png)

    <p class="label correct">Correct</p>
    ![]({{site.baseurl}}/images/checkbox/label_answeryes_correct.png)
*Exception: "Don’t show again" checkbox label.*

* Remove duplicate words at the beginning of labels as described in [recommendation for writing]({{site.baseurl}}/text/writing_short). The repeating part of the sentence can be used in the group header:
    <p class="label incorrect">Incorrect</p>
    ![]({{site.baseurl}}/images/checkbox/label_repeats_incorrect.png)

    <p class="label correct">Correct</p>
    ![]({{site.baseurl}}/images/checkbox/label_repeats_correct.png)

* A group of checkboxes may not have a header but it is advisable to add one. The group header makes finding a necessary setting faster:
![]({{site.baseurl}}/images/checkbox/label_header.png)

### Indeterminate checkbox

If the options are grouped, the parent checkbox shows the status of the entire group of children. The parent checkbox has an indeterminate state if all children are not in the same state. Typically, indeterminate checkboxes are used in trees:
![]({{site.baseurl}}/images/checkbox/indeterminate_tree.png)
Clicking on the parent checkbox in an indeterminate state will change the state of the entire group to "On" with the first click and "Off" with a second click.

An indeterminate checkbox can also show the download status of a remote repository:
![]({{site.baseurl}}/images/checkbox/indeterminate_status.png)
*Repositories “tools-base” and “contrib” are loaded. When loading is finished, the indeterminate checkbox will be replaced with the checked checkbox, if there are commits, or an unchecked checkbox if there are no commits.*

### Placement

* In usual cases checkboxes are grouped by vertical space and left-aligned:
![]({{site.baseurl}}/images/checkbox/placement_vertical.png)
* Align depending elements with checkbox label:
![]({{site.baseurl}}/images/checkbox/placement_align.png)
* If space is constrained, align the group of 2-3 checkboxes horizontally:
![]({{site.baseurl}}/images/checkbox/placement_horizontally.png)
* If the group contains many checkboxes, arrange them in two columns to save vertical space:
![]({{site.baseurl}}/images/checkbox/placement_two_columns.png)
* Use gaps to divide groups of checkboxes into subgroups:
![]({{site.baseurl}}/images/checkbox/placement_gap.png)

  The first items in each group define group contents and help finding a group of settings faster, similar to group headers.
* A list of checkboxes is easier to read if it contains up to 10 checkboxes. If there are more than 10 checkboxes in a list, arrange them in two columns or divide them into subgroups to make it easier to read.
* A stand alone checkbox is left-aligned with elements above and below it:
![]({{site.baseurl}}/images/checkbox/placement_standalone.png)
When a checkbox depends on the element it follows, the following alignments can be used:

    ![]({{site.baseurl}}/images/checkbox/placement_standalone_textbox.png)
    *If a preceding input element has a short label, left-align the checkbox with the element.*

    ![]({{site.baseurl}}/images/checkbox/placement_standalone_longlabel.png)
    *If the label is long or the element itself is narrow, use an indent.*

    ![]({{site.baseurl}}/images/checkbox/placement_standalone_line.png)
    *If a checkbox label is short, the checkbox can be placed on the same line with an element.*

    ![]({{site.baseurl}}/images/checkbox/placement_standalone_dialog.png)
    *At the bottom of a dialog, a checkbox can be aligned with buttons.*

* Checkboxes can be used in trees. For more details see [Trees]({{site.baseurl}}/components/trees).

## Style
### Colors and fonts

Label font: default.


Mac:
![]({{site.baseurl}}/images/checkbox/style_mac.png)
![]({{site.baseurl}}/images/checkbox/style_macG.png)
Darcula:
![]({{site.baseurl}}/images/checkbox/style_darcula.png)
Windows:
![]({{site.baseurl}}/images/checkbox/style_win.png)

### Sizes
The checkboxes have a permanent and unchangeable size, it cannot become bigger or smaller.

Mac:
![]({{site.baseurl}}/images/checkbox/size_mac.png)
Darcula:
![]({{site.baseurl}}/images/checkbox/size_darcula.png)
Windows:
![]({{site.baseurl}}/images/checkbox/size_win.png)

### Spacing

* Label:
![]({{site.baseurl}}/images/checkbox/spacing_label.png)

* Horizontal alignment with label:
Mac:
![]({{site.baseurl}}/images/checkbox/spacing_horizontal_mac.png)
Darcula:
![]({{site.baseurl}}/images/checkbox/spacing_horizontal_darcula.png)
Windows:
![]({{site.baseurl}}/images/checkbox/spacing_horizontal_win.png)

* Two-line label:
![]({{site.baseurl}}/images/checkbox/spacing_twoline.png)

* Vertical group:
![]({{site.baseurl}}/images/checkbox/spacing_vertical.png)

* Horizontal group:
![]({{site.baseurl}}/images/checkbox/spacing_horizontal_group.png)

* Subgroup:
![]({{site.baseurl}}/images/checkbox/spacing_subgroup.png)

* The distance between columns is at least 35 px. The longer the checkboxes labels are, the bigger the distance between the columns should be:
![]({{site.baseurl}}/images/checkbox/placement_two_columns.png)

* Other controls:
![]({{site.baseurl}}/images/checkbox/spacing_combobox.png)
![]({{site.baseurl}}/images/checkbox/spacing_longlabel.png)
![]({{site.baseurl}}/images/checkbox/spacing_line.png)

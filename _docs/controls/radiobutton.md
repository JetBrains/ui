---
title: Radiobutton
category: Controls
order: 4
---

Radiobutton is used to choose one option from several mutually exclusive options.
<br/>![]( {{ site.baseurl }}/images/radiobutton/two_radiobutton.png)


Radio buttons are used for selecting
* objects,
* attributes or states,
* modifications of default behavior (settings).


Use radio buttons for choice of two or more mutually exclusive options.
In other cases:
* Use [checkboxes]( {{ site.baseurl }}/controls/checkbox/) if the user can select multiple options.
* If there are only two mutually exclusive options, combine them into one checkbox. For example, use the "I agree" checkbox instead of the two radiobuttons for "I agree" and "I do not agree".
* Use the slider to select from a number range.


## Guidelines
* A radio button selects only one option from several
* Clicking on body of mark selects/removes radio button.
* A group of radio buttons always has a preceding label or a group header that explains what the options are for:
<br/>![]( {{ site.baseurl }}/images/radiobutton/radiobutton_header.png)
* The group of 2-3 radio buttons can be aligned horizontally.
* A group of radio buttons is best to contain from two to five options. Use [a combobox]( {{ site.baseurl }}/controls/combobox/) if the number of options is more than five, the screen space is limited, or the setting is rarely used. (If a layout combines various UI elements for one setting, a combobox can be used for options even if their number is less than five.)
<br/>![]( {{ site.baseurl }}/images/radiobutton/radiobutton_combobox.png)
* Labels
    * Radio button is the answer "yes", so do not use negation in labels.
    * Use sentence-style capitalization.
    * Learn recommendations for [UI text]( {{ site.baseurl }}/principles/UI_text/).


## Mac OS default
![]( {{ site.baseurl }}/images/radiobutton/mac_os_radiobutton.png)

## Darcula 
![]( {{ site.baseurl }}/images/radiobutton/darcula_radiobutton.png)

## Windows 10

![]( {{ site.baseurl }}/images/radiobutton/win_radiobutton.png)
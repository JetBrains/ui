---
title: Combo box
category: Controls
order: 2
---

A combo box is a combination of a drop-down list and an input field, thus allowing users to specify custom choices.  
![]( {{ site.baseurl }}/images/combobox/combobox_example.png)  
Use combo box if:
* The possible choices are unconstrained, but it's possible to enumerate the most likely choices. If not, then use an [input field]( {{ site.baseurl }}/controls/input_field/) instead.
* The elements are **things** (nouns) or **states** (adjectives). If you need to provide a menu of commands (verbs), use an [action menu]( {{ site.baseurl }} /controls/action_menu/) instead.
* The previous user input should be preserved:  
![]( {{ site.baseurl }}/images/combobox/combobox_previous_input.png)
* There are other combo boxes on the window (for consistency).
* There is not enough space for bigger controls (e.g. for slider).

## Guidelines
Follow guidelines for [drop-down]( {{ site.baseurl }}/controls/dropdown/) and also the following principles:
* Clicking on an arrow button in combo box should open its combo box list. Clicking on any other combo box area should turn on the input mode.
* Display a representative default selection.
* If a user types in an item already in the list, or types in a few characters that match the first characters of an item in the list, that item is highlighted if the list is opened.  
![]( {{ site.baseurl }}/images/combobox/combobox_typed_item.png) 
* If user enters too long item, truncate it, do not resize combo box.
* If a user types in an invalid value, highlight field with red and show error message and supported range in tooltip. Do not allow to save changes.
![]( {{ site.baseurl }}/images/combobox/combobox_error.png) 

## Mac OS default 
![]( {{ site.baseurl }}/images/combobox/mac_os_combobox.png)

## IntelliJ, Darcula 
Sizing and spacing should be the same for Intellij as for Darcula.
![]( {{ site.baseurl }}/images/combobox/darcula_combobox.png)

## Windows 10
![]( {{ site.baseurl }}/images/combobox/windows_combobox.png)
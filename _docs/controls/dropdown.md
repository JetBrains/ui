---
title: Drop-down
category: Controls
order: 3
---

A drop-down list is a list of predefined values. Custom values are not supported.  
![]( {{ site.baseurl }}/images/dropdown/dropdown_example.png)  
Use drop-down list if:
* The possible choices are constrained.
* The number of choices is between 3 and 15. If less than 3 use [radio button]( {{ site.baseurl }}/controls/radio_button/), if more than 15 use [combo box]( {{ site.baseurl }}/controls/combobox/), [input field]( {{ site.baseurl }}/controls/input_field/), [slider]( {{ site.baseurl }}/controls/slider/) or [list box](/controls/list_box/).
* The elements are **things** (nouns) or **states** (adjectives). If you need to provide a menu of commands (verbs), use an [action menu]( {{ site.baseurl }} /controls/action_menu/) instead.
* There are other drop-down lists on the window (for consistency).
* There is not enough space for bigger controls (e.g. for slider).

## Guidelines
The basic principles that should be followed when using drop-down:
* The drop-down items should be nouns or adjectives (not verbs).
* Number of elements is between 3 and 15.
* Clicking anywhere in drop-down should open its drop-down list.
* Drop-down width:
    * Choose a width appropriate for the longest data, but not less than the minimum for a particular theme (see below). 
    * Ensure that drop-downs have the same width if there are several drop-downs in a column.
    
    [comment]: <> (Add link to Layout section.)
    
* Drop-down list length: limit list length only if there is not enough space to show the full list, try to eliminate unnecessary vertical scrolling.
* Use title-style capitalization for the elements in a drop-down list.
* Sort list items in a logical order:  
    * group related options,  
    * place most common options first or use alphabetical order (always if number of items is more than 8).      
* Do not assign special meanings to specific numeric or string values (e.g. blank string). Use meta-options in pointy brackets instead.  
![]( {{ site.baseurl }}/images/dropdown/meta-option.png)
* If possible use previews in the list items:  
![]( {{ site.baseurl }}/images/dropdown/font-preview.png)
* Label: 
    * Write label as word or sentence. In first case end label with a colon, in second use no ending punctuation:  
    ![]( {{ site.baseurl }}/images/dropdown/labels.png)
    * Use sentence-style capitalization.
    
    [comment]: <> (Add link to Labels section.)

## Mac OS default 
In Mac OS default theme drop-down has a double-arrow indicator and displays a checkmark to the left of the currently selected value when open.   
![]( {{ site.baseurl }}/images/dropdown/mac_os_dropdown.png)

When drop-down is opened, selected value should stay at the same position. 
By default show the whole drop-down list. If there is not enough space, then add the arrow icon at the bottom of the list and scroll through the list by hovering over it:
![]( {{ site.baseurl }}/images/dropdown/mac_os_dropdown_opened.png)

## IntelliJ, Darcula 
Sizing and spacing should be the same for Intellij as for Darcula.
![]( {{ site.baseurl }}/images/dropdown/darcula_dropdown.png)

## Windows 10
![]( {{ site.baseurl }}/images/dropdown/windows_dropdown.png)
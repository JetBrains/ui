---
title: Drop-down
category: Controls
order: 3
---

A drop-down list is a list of predefined values. Custom values are not supported. 

<img style="margin-left: 20px;" src=" {{ site.baseurl }}/images/dropdown/dropdown_example.png">

Use drop-down list if:
* The possible choices are constrained.
* The number of choices is between 3 and 15. If less than 3 use [radio button]( {{ site.baseurl }}/controls/radio_button/), if more than 15 use [combobox]( {{ site.baseurl }}/controls/combobox/), [input field]( {{ site.baseurl }}/controls/input_field/), [slider]( {{ site.baseurl }}/controls/slider/) or [list box](/controls/list_box/).
* The elements are **things** (nouns) or **states** (adjectives). If you need to provide a menu of commands (verbs), use an [action menu]( {{ site.baseurl }} /controls/action_menu/) instead.
* There are other drop-down lists on the window (for consistency).
* There is not enough space for bigger controls (e.g. for slider).

## Guidelines
* The drop-down items should be nouns or adjectives (not verbs).
* Number of elements is between 3 and 15.
* Clicking anywhere in drop-down should open its drop-down list.
* Sort list items in a logical order:  
    * group related options,  
    * place most common options first,  
    * use alphabetical order.      
    
  Lists with more than 10 items should be sorted alphabetically to make items easier to find.
* Do not assign special meanings to specific numeric or string values (e.g. blank string). Use meta-options in pointy brackets instead.  
![]( {{ site.baseurl }}/images/dropdown/meta-option.png)

* If possible use previews in the list items:  
![]( {{ site.baseurl }}/images/dropdown/font-preview.png)

* Recommended width (link to layout) ??? 
* Drop-down list length ???

### Labels

## Mac OS default 
In Mac OS default theme drop-down has a double-arrow indicator and displays a checkmark to the left of the currently selected value when open.   
<br />  
![]( {{ site.baseurl }}/images/dropdown/mac_os_dropdown.png)
<br /> 

## Darcula 
![]( {{ site.baseurl }}/images/dropdown/darcula_dropdown.png)

## Windows 10

![]( {{ site.baseurl }}/images/dropdown/windows_dropdown.png)
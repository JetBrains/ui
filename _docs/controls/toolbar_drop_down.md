---
title: Toolbar drop-down list
codename: ComboBoxButton
category: Controls
type: Subpage
subpageOf: Toolbar
---


A toolbar drop-down list is a type of button that appears on a horizontal toolbar and shows a list of choices on clicking it.
![]({{site.baseurl}}/images/toolbar_dropdown/example.png)


## When to use

Use toolbar drop-down if a single option should be selected.

If the choices are objects or states.

To select values that are controlled by the toolbar button on the right. 

![]({{site.baseurl}}/images/toolbar_dropdown/toolbar_main.png)

To filter values or change the appearance in the control below:

![]({{site.baseurl}}/images/toolbar_dropdown/toolbar_filter.png)


Use a [toolbar drop-down button]({{site.baseurl}}/controls/icon_button/#04) instead of a drop-down list in the following cases:

* If there is a list of actions:

	![]({{site.baseurl}}/images/toolbar_dropdown/menu_button.png)

* The options are secondary and the user won’t change them in most cases.

* Multi-selection is required, for example to group by several attributes.


Do **not** use toolbar drop-down in dialogs, use the [drop-down list]({{site.baseurl}}/controls/drop_down/) instead.

<table>
<col width="60%">
  <tr>
      <td> <p class="label incorrect">Incorrect</p> </td>
      <td> <p class="label correct">Correct</p> </td>
  </tr>
  <tr>
      <td> <img src="{{site.baseurl}}/images/toolbar_dropdown/settings_incorrect.png" style="margin-top: 0px; 
      margin-bottom: 5px;"> </td>
      <td> <img src="{{site.baseurl}}/images/toolbar_dropdown/settings_correct.png" style="margin-top: 0px; margin-bottom:
       5px;"> </td>
  </tr>
</table> 

## How to use

Do **not** add a label to the toolbar drop-down.

For the default value follow the rules for the [drop-down list]({{site.baseurl}}/controls/drop_down/#default-value).

Add separators between the toolbar drop-down and icons:	
![]({{site.baseurl}}/images/toolbar_dropdown/diff.png)
If a drop-down is controlled by buttons, add a border, as separators will break the connection between the controlling icons and the drop-down:
![]({{site.baseurl}}/images/toolbar_dropdown/toolbar_main.png)

The toolbar drop-down does not get the focus. Highlight it on hover the same way as toolbar icons.
![]({{site.baseurl}}/images/toolbar_dropdown/hover.png)

### Menu

#### Control 

Open the drop-down menu on clicking anywhere on a drop-down list.
Open the menu down by default. If there is not enough space, open the menu up.

Select the first option when the menu opens. 

Move the selection in the menu on pressing the Up and Down arrows or on hovering the cursor over the item.

Filter items in the list on typing:

![]({{site.baseurl}}/images/toolbar_dropdown/search.png)

Close the menu if the user selects an item, clicks outside the menu, presses the Esc key or switches to another app.

Allow single-click activation using mouse: click on a drop-down, the drop-down opens, select an item by hovering, close the drop-down with the new item selected by releasing the mouse button.


#### Menu items

Follow the rules for the [drop-down list]({{site.baseurl}}/controls/drop_down/#menu-items).

If it’s necessary to configure options in a toolbar drop-down list, add customization actions at the top or at the bottom of the list and separate them with a line. Use title case capitalization for actions.

![]({{site.baseurl}}/images/toolbar_dropdown/customize.png)

A toolbar drop-down list can have submenus.

### Submenu

A submenu is a menu item that shows a list of nested items. A submenu includes a triangular indicator that distinguishes it from other menu items.

Use items submenus to group related options and to show hierarchy:	![]({{site.baseurl}}/images/toolbar_dropdown/submenu_example.png)

Show the submenu list on hovering over an item.

If the selection moves with the Up and Down arrow keys, show the submenu list on pressing the Right arrow or the Enter key.

Avoid submenus inside submenus. Submenus hide choices too deep and are difficult to navigate.

## Sizes and placement

Toolbar drop-down sizes are the same for all themes.

![]({{site.baseurl}}/images/toolbar_dropdown/toolbar_sizes.png)


The width changes depending on the selected value to save space if the value is short.

![]({{site.baseurl}}/images/toolbar_dropdown/width.png)

For menu sizes see [Drop-down menu]({{site.baseurl}}/controls/drop_down/#menu-1).
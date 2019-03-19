---
title: Toolbar button
category: Controls
type: Subpage
subpageOf: Toolbar
---

A toolbar button is an icon that appears on a toolbar. 

![]({{site.baseurl}}/images/toolbar_button/example.png)



## Types

There are three types of toolbar buttons:

* An action button triggers an action immediately on clicking it, e.g. the Open button.

* A toggle button switches the state on clicking it, e.g. a button to show and hide warnings in the output tree.
	
![]({{site.baseurl}}/images/toolbar_button/toggle.png)

* A drop-down button has an arrow icon in the bottom right corner and opens a menu with actions or checkboxes. Use 
[menu list]({{site.baseurl}}/controls/menu_list) guidelines for drop-down buttons.

![]({{site.baseurl}}/images/toolbar_button/drop-down.png)


## When to use
For actions users perform most often. Rely on usage statistics. 

If an action is new and it seems to be useful, add it to the corresponding toolbar. Remove it after several releases if it’s not popular, used by less than ~5% of users compared to the most frequently clicked button on this toolbar.

If an action is rather popular but there is no icon that conveys this action clearly, use the main menu or context menu instead. For the most popular actions, it makes sense to design a new icon.


## How to use

Provide a recognizable icon. Use an [existing icon]({{site.baseurl}}/resources/icons_list) or create a new one using 
[icon guidelines]({{site.baseurl}}/principles/icons).

Provide a short and descriptive name for a toolbar button. Show a tooltip with the button name on mouse hover. 
Include a shortcut if there is one. See [Context help]({{site.baseurl}}/principles/context_help) for details.

![]({{site.baseurl}}/images/toolbar_button/tooltip.png)

Highlight a toolbar button on mouse hover. Highlight a toolbar button with a brighter color on clicking it.

* Toggle buttons remains highlighted when they are in the switched on mode. Toggled on buttons do not change color on
 hover.

* Drop-down buttons remain highlighted while the menu is opened.

![]({{site.baseurl}}/images/toolbar_button/states.png)

If an action is not available in this context, disable the corresponding button and gray out the icon. For toolbar drop-down buttons, disable the arrow icon as well. Do **not** highlight a disabled icon on mouse hover. 

## Sizes and placement

Icons size is 16x16 px, icon selection is 22x22 px.

For guidelines on the space between toolbar buttons see [Toolbar]({{site.baseurl}}/controls/toolbar).

<!--
## Style

<table>
 <col width="50%">
 <tr class="table-line">
     <td> Hovered </td>
     <td> ActionButton.hoverBackground<br/>
          ActionButton.hoverBorderColor
     </td>
 </tr>
 <tr class="table-line">
     <td> Background </td>
     <td> ActionButton.pressedBackground<br/>
          ActionButton.pressedBorderColor
     </td>
 </tr>
<table/>
-->
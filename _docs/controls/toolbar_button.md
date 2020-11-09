---
title: Icon button
codename: ActionButton
category: Controls
type: Subpage
subpageOf: Toolbar
---

A toolbar icon button is an icon that appears on a toolbar. 

![]({{site.baseurl}}/images/toolbar_button/example.png)



## Types
<p class="noanchor">There are three types of toolbar icon buttons:</p>

An action button triggers an action immediately on clicking it, e.g. the Open button.

A toggle button switches the state on clicking it, e.g. a button to show and hide warnings in the output tree.	
![]({{site.baseurl}}/images/toolbar_button/toggle.png)

A drop-down button has an arrow icon in the bottom right corner and opens a menu with actions or checkboxes. Use 
[menu list]({{site.baseurl}}/controls/menu_list) guidelines for drop-down buttons.
![]({{site.baseurl}}/images/toolbar_button/drop-down.png)


## When to use

Follow the rules for [toolbar]({{site.baseurl}}/controls/toolbar/#what-items-to-add-on-toolbar).

## How to use

Provide a recognizable icon. Use an [existing icon]({{site.baseurl}}/resources/icons_list) or create a new one using 
[icon guidelines]({{site.baseurl}}/principles/icons).

Provide a short and descriptive name for a toolbar icon button. Show a tooltip with the button name on mouse hover. 
Include a shortcut if there is one. See [Context help]({{site.baseurl}}/principles/context_help) for details.

![]({{site.baseurl}}/images/toolbar_button/tooltip.png)

Highlight a toolbar icon button on mouse hover. Highlight a toolbar icon button with a brighter color on clicking it.

* Toggle buttons remains highlighted when they are in the switched on mode. Toggled on buttons do not change color on
 hover.

* Drop-down buttons remain highlighted while the menu is opened.

![]({{site.baseurl}}/images/toolbar_button/states.png)

If an action is not available in this context, disable the corresponding button and gray out the icon. For toolbar drop-down buttons, disable the arrow icon as well. Do **not** highlight a disabled icon on mouse hover. 

## Sizes and placement

Icons size is 16x16 px, icon selection is 22x22 px.

For guidelines on the space between toolbar icon buttons see [Toolbar]({{site.baseurl}}/controls/toolbar).

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
</table>
-->
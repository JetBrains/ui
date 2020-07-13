---
title: Toolbar
category: Controls
type: GroupHeader
---

A toolbar provides quick access to frequently used actions and filters. It appears in dialogs, pop-ups, tool windows, lists, trees, and tables.

![]({{site.baseurl}}/images/toolbar/example.png)

## Toolbar items

The following controls can appear on a toolbar:

* [Toolbar icon button]({{site.baseurl}}/controls/toolbar_button): action, toggle, drop-down or split button.

* [Toolbar drop-down list]({{site.baseurl}}/controls/toolbar_drop_down)

* [Search field]({{site.baseurl}}/controls/search_field)

* [Button]({{site.baseurl}}/controls/button)

* Separator

* Label

* Chevron

![]({{site.baseurl}}/images/toolbar/items.png)

## What items to add on toolbar
    
Put only the most frequently used commands on the toolbar. Rely on usage statistics if it’s available.    

<p class="noanchor">If an action is new and it seems to be useful, add it to the corresponding toolbar. Remove it after several releases if it’s not popular which means it’s used by less than ~5% of users who use this toolbar.</p>

Do **not** put unpopular or well-known commands, like Copy and Paste on the toolbar. Use the [main menu]({{site.baseurl}}/components/main_menu) or the [context menu]({{site.baseurl}}/components/context_menu) for such commands. 

It’s **not** recommended to add more items than the default toolbar length. Otherwise, the items will be hidden and it will be hard to discover them. 

![]({{site.baseurl}}/images/toolbar/width_correct.png)

Left align items on a horizontal toolbar and top align on a vertical toolbar. 

Group related toolbar icon buttons and separate groups with lines. If there are several unrelated icons do **not** add separators after each icon. 

![]({{site.baseurl}}/images/toolbar/group.png)

Label group of icons if it helps to make the icons more clear and if it’s needed to promote the icons. The icons group becomes more visible with the label.


Arrange items inside groups by the frequency of use, from left to right from top to bottom. Rely on statistics.

It is recommended to arrange groups in the following order unless it contradicts the usage statistics. If it does, arrange groups by the frequency of use.
![]({{site.baseurl}}/images/toolbar/tool_window.png)

The less frequently used commands can be right aligned.

![]({{site.baseurl}}/images/toolbar/right_aligned.png)

Do **not** put two toolbars next to each other. One toolbar should be enough for the most popular actions.
<table>
<col width="60%">
  <tr>
      <td> <p class="label incorrect">Incorrect</p> </td>
      <td> <p class="label correct">Correct</p> </td>
  </tr>
  <tr>
      <td> <img src="{{site.baseurl}}/images/toolbar/toolbars_2.png" style="margin-top: 0px; 
      margin-bottom: 5px;"> </td>
      <td> <img src="{{site.baseurl}}/images/toolbar/toolbars_1.png" style="margin-top: 0px; margin-bottom:
       5px;"> </td>
  </tr>
</table> 

Make every toolbar action available from the [main menu]({{site.baseurl}}/components/main_menu) or the [context menu]({{site.baseurl}}/components/context_menu). Toolbars are customizable and can be hidden, so commands should be available from other places as well.

If the default component size changes and there is not enough space for items on a toolbar, hide them under the chevron.

![]({{site.baseurl}}/images/toolbar/chevron.png)

## Visibility and customization

Provide the ability to hide the toolbar in the main window via the toolbar context menu.

![]({{site.baseurl}}/images/toolbar/hide.png)

Provide commands for invoking the toolbar. Use the main menu for the main window toolbars. Use the pane view settings for toolbars in tool windows.

![]({{site.baseurl}}/images/toolbar/reveal.png)

Provide the ability to customize toolbars in the main window. To do this, add the toolbar to the list on the Settings > Appearance & Behavior > Menus and Toolbar page and open it using the "Customize Toolbar..." action from the toolbar context menu.

![]({{site.baseurl}}/images/toolbar/customize.png)

## Sizes and placement

The toolbar can be vertical or horizontal.

![]({{site.baseurl}}/images/toolbar/placement.png)

By default, place the toolbar at the top of the area. 
![]({{site.baseurl}}/images/toolbar/placement_top.png)
**Exceptions**  
Place the toolbar on the left in horizontal tool windows if horizontal space is not limited. A horizontal toolbar will be too wide and will occupy lots of space:
![]({{site.baseurl}}/images/toolbar/placement_left.png)
Place the toolbar on the right if it’s not the first toolbar in the pane and it’s rarely used.![]({{site.baseurl}}/images/toolbar/placement_right.png)

Place the toolbar at the bottom on Mac OS, and on the right on Windows and Linux in [tables]({{site.baseurl}}/controls/table).
![]({{site.baseurl}}/images/toolbar/table_mac.png)
*Mac OS*

![]({{site.baseurl}}/images/toolbar/table_win.png)
*Windows*

The toolbar width is limited by the width of the element it belongs to. For example, by the width of the tool window or the list part in a master-detail layout.
<table>
<col width="60%">
  <tr>
      <td> <p class="label incorrect">Incorrect</p> </td>
      <td> <p class="label correct">Correct</p> </td>
  </tr>
  <tr>
      <td> <img src="{{site.baseurl}}/images/toolbar/width_incorrect.png" style="margin-top: 0px; 
      margin-bottom: 5px;"> </td>
      <td> <img src="{{site.baseurl}}/images/toolbar/width_correct.png" style="margin-top: 0px; margin-bottom:
       5px;"> </td>
  </tr>
</table> 


Toolbar sizes are the same for all themes:

![]({{site.baseurl}}/images/toolbar/sizes.png)


![]({{site.baseurl}}/images/toolbar/sizes_under_list.png)

The toolbar items sizes change together with the application font size proportionally.

![]({{site.baseurl}}/images/toolbar/font_size.png)

## Style

![]({{site.baseurl}}/images/toolbar/style.png)

Separate the toolbar from the content with a line from all four sides if it appears in a tool window or a table:
<table>
<col width="60%">
  <tr>
      <td> <p class="label incorrect">Incorrect</p> </td>
      <td> <p class="label correct">Correct</p> </td>
  </tr>
  <tr>
      <td> <img src="{{site.baseurl}}/images/toolbar/style_incorrect.png" style="margin-top: 0px; 
      margin-bottom: 5px;"> </td>
      <td> <img src="{{site.baseurl}}/images/toolbar/style_correct.png" style="margin-top: 0px; margin-bottom:
       5px;"> </td>
  </tr>
</table> 

Do **not** separate a toolbar with lines if it appears above the list:

![]({{site.baseurl}}/images/toolbar/customize.png)




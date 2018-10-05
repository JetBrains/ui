---
title: Toggle button
category: Controls
---
The toggle button is used to switch between On and Off states.

![]({{site.baseurl}}/images/toggle_button/example.png)

## When to use

Use the toggle button to switch the state of an item in search results:
    ![]({{site.baseurl}}/images/toggle_button/example_se.png)


Do not use the toggle button for items in dialogs and menus. Instead, use a checkbox in dialogs and a checkmark in menus:
    ![]({{site.baseurl}}/images/toggle_button/when_to_use_dialog.png)
    ![]({{site.baseurl}}/images/toggle_button/when_to_use_menu.png)


## How to use

### Label
* The toggle button in search results should duplicate the option from the settings or the menu. Label and capitalization should be the same as on the option label:
    ![]({{site.baseurl}}/images/toggle_button/label_checkbox.png)
    ![]({{site.baseurl}}/images/toggle_button/label_checkbox_se.png)
    Do not make a setting available only from search results. See [Discoverability]({{site.baseurl}}/principles/Discoverability) for details.
* If the setting is in a tree or menu, use the toggle button label to specify where the setting is located:
    ![]({{site.baseurl}}/images/toggle_button/label_tree.png)
*Setting in a tree.*
    ![]({{site.baseurl}}/images/toggle_button/label_tree_se.png)
*The same setting in search results. Separate tree levels with a colon.*
    ![]({{site.baseurl}}/images/toggle_button/label_menu.png)
*Setting in the main menu.*
    ![]({{site.baseurl}}/images/toggle_button/label_menu_se.png)
*The same setting in search results. Separate the first menu level with a vertical bar, and separate others with a colon.*
    Refer to [Checkbox]({{site.baseurl}}/controls/checkbox) and [Menu]({{site.baseurl}}/components/main_menu) for writing checkbox labels and menu labels.
* Do not add the word "On" or "Off" to the item name, since the state description is already in the toggle button.


### Control
The toggle button changes state when it is clicked with the mouse or when Enter is pressed on the item line.


## Style

<table>
<col width="21%">
<col width="22%">
<col width="22%">
<col width="22%">
<col width="22%">
    <tr>
        <td>  </td>
        <td style="margin-left: 20px"> Mac OS, IntelliJ </td>
        <td> Windows </td>
        <td> Darcula </td>
    </tr>
    <tr>
        <td> <p style="color: #999999; margin-top: -5px;"> On </p></td>
        <td> <img src="{{site.baseurl}}/images/toggle_button/on_mac.png" style="margin: -5px 0 0 0"></td>
        <td> <img src="{{site.baseurl}}/images/toggle_button/on_win.png" style="margin: -5px 0 0 0"></td>
        <td> <img src="{{site.baseurl}}/images/toggle_button/on_dark.png" style="margin: -5px 0 0 0"></td>
    </tr>
    <tr>
        <td> <p style="color: #999999; margin-top: -5px;"> Off </p></td>
        <td> <img src="{{site.baseurl}}/images/toggle_button/off_mac.png" style="margin: -5px 0 0 0"></td>
        <td> <img src="{{site.baseurl}}/images/toggle_button/off_win.png" style="margin: -5px 0 0 0"></td>
        <td> <img src="{{site.baseurl}}/images/toggle_button/off_dark.png" style="margin: -5px 0 0 0"></td>
    </tr>
</table>


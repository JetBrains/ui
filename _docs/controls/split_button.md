---
title: Split button
type: Subpage
subpageOf: Button
category: Controls
---

The Split button is a button which has two parts — the main action on the left and a control button which shows a dropdown with less common actions on the right.

![]({{site.baseurl}}/images/split_button/button-and-dropdown-menu.png)

## When to use

Use the split button:

* When more than 2 related actions are possible but the space is limited and/or packed:
For example, it is useful for the Commit actions group in the Commit dialog:
![]({{site.baseurl}}/images/split_button/button-and-dropdown-menu.png)

   The Split button is not useful in the Replace popup, since not all actions are related, for example Open in Find Window is not related to the main action. Such actions are hard to find in the drop-down menu:

   <p class="label incorrect">Incorrect</p>
   ![]({{site.baseurl}}/images/split_button/not-related-incorrect.png)

   <p class="label correct">Correct</p>
   ![]({{site.baseurl}}/images/split_button/not-related.png)

   In the Adjust Code Style dialog only 1 related action is possible and it does not save a lot of space:
   <p class="label incorrect">Incorrect</p>
   ![]({{site.baseurl}}/images/split_button/space-not-limited-incorrect.png)

   <p class="label correct">Correct</p>
   ![]({{site.baseurl}}/images/split_button/space-not-limited.png)

* To hide actions which are dangerous and uncommon. Dangerous means an action can destroy users’ data and cannot be easily undone. It is less possible to accidentally click an action hidden in a menu.  It is recommended to hide even a single related uncommon dangerous action. 
For example, Force Push can override remote commits from other authors and should not be easily available:
![]({{site.baseurl}}/images/split_button/dangerous.png)

   If an action is dangerous but common, do not hide it under the split button, use simple buttons. An action should follow the [principles for dangerous actions’]({{site.baseurl}}/principles/dangerous_actions/) behavior.

Do **not** use the Split Button in other cases, use simple [Buttons]({{site.baseurl}}/controls/button/) instead. 

## How to use

### Main action 

<table>
  <col width="150 px">      
  <tr>
    <td><p style="margin-top:10px">Click</p></td>
    <td><ul><li>Invoke the main action</li></ul></td>
  </tr>
  <tr>
    <td><p style="margin-top:10px">Hover</p></td>
    <td>
         <ul><li>Show a tooltip with shortcuts after a delay (delay for tooltips is configured in Appearance & Behavior > Appearance > Tooltip initial delay):
                <img src="{{site.baseurl}}/images/split_button/tooltip-button.png" style="margin-top: 30px"></li></ul>   
    </td>
  </tr>
</table>


### Control button

<table>
  <col width="150 px">      
  <tr>
    <td><p style="margin-top:10px">Click</p></td>
    <td>
        <ul>
            <li>Show a dropdown menu with secondary actions</li>
            <li>Hide the menu on clicking outside the menu, or on the second click on the right part of the button</li>
        </ul>
    </td>
  </tr>
  <tr>
    <td><p style="margin-top:10px">Hover</p></td>
    <td>
        <ul>
            <li>Show a tooltip after delay</li> 
            <li>
                The tooltip must not overlap the dropdown menu. Do not show a tooltip under the menu, show it on the opposite side of the button:
                <p class="label correct">Correct</p>
                <img src="{{site.baseurl}}/images/split_button/tooltip-correct.png" style="margin-top: 30px">                
                <p class="label incorrect">Incorrect</p>
                <img src="{{site.baseurl}}/images/split_button/tooltip-incorrect.png" style="margin-top: 30px">                
            </li>
        </ul>
    </td>
  </tr>
</table>


### Dropdown menu 

Place actions related to the main button’s action in the dropdown menu.

![]({{site.baseurl}}/images/split_button/dropdown-menu.png)

Do **not** duplicate the main action in the dropdown menu, otherwise it is confusing how to trigger the main action — with the button or from the menu.

### Reduce split button to simple action buttons

The Split button can be reduced to simple action buttons which are layed out automatically next to each other. This is controlled by the following option in settings:

_Appearance & Behavior > Appearance > Merge buttons in dialogs_

For example, the Commit button reduced to its components (the option is disabled) looks like the following:

![]({{site.baseurl}}/images/split_button/reduced.png)

## Placement  
Follow the rules for the [simple button]({{site.baseurl}}/controls/button/#placement).

## Keyboard navigation & shortcuts

Trigger the **main** action when the [default]({{site.baseurl}}/controls/button/#default) button shortcut is pressed if the split button is the default one.

Open the dropdown menu with the first menu item selected on <kbd>Alt+Shift+Enter</kbd>. 

Do **not** show the dropdown menu when the button gains focus.

### Focus on the button

<table>
  <col width="200 px">      
  <tr>
    <td><p style="margin-top:10px"><kbd>Enter \ Ctrl+Enter</kbd></p></td>
    <td><ul><li>Invoke the default button action</li></ul></td>
  </tr>
  <tr>
    <td><p style="margin-top:10px"><kbd>Space</kbd></p></td>
    <td><ul><li>Invoke the main action</li></ul></td>
  </tr>
  <tr>
    <td><p style="margin-top:10px"><kbd>Arrow Down</kbd></p></td>
    <td><ul><li>Show the dropdown menu with secondary actions and move focus to the first item in the menu</li></ul></td>
  </tr>
  <tr>
    <td><p style="margin-top:10px"><kbd>Tab \ Shift + Tab</kbd></p></td>
    <td><ul><li>Move focus to the control next to the split button and hide the drop-down menu</li></ul></td>
  </tr>
</table>


### Focus in the drop-down menu

<table>
  <col width="200 px">      
  <tr>
    <td><p style="margin-top:10px"><kbd>Enter \ Space</kbd></p></td>
    <td><ul><li>Invoke the selected action</li></ul></td>
  </tr>
  <tr>
    <td><p style="margin-top:10px"><kbd>Arrow Down \ Up</kbd></p></td>
    <td>
        <ul>
            <li>Navigate through the elements</li> 
            <li>Pressing Up on the top element moves the focus to the bottom element</li>
            <li>Pressing Down on the bottom element moves the focus to the top element</li>
        </ul>
    </td>
  </tr>
  <tr>
    <td><p style="margin-top:10px"><kbd>Esc</kbd></p></td>
    <td><ul><li>Close the popup and move the focus to the split button</li></ul></td>
  </tr>
</table>


## Style

#### Button

Basic styles (enabled, disabled, default, pressed) are the same as for simple buttons for both parts of the split button.

<table>
  <col width="200 px">      
  <col width="200 px">      
  <tr>
    <td><p style="margin-top:10px">Windows:</p></td>
    <td><p style="margin-top:10px">Mac:</p></td>
    <td><p style="margin-top:10px">Darcula:</p></td>
  </tr>
  <tr>
    <td><img src="{{site.baseurl}}/images/split_button/win-button.png" style="margin-top: 15px; margin-left: 0px;"></td>
    <td><img src="{{site.baseurl}}/images/split_button/mac.png" style="margin-top: 15px; margin-left: 0px;"></td>
    <td><img src="{{site.baseurl}}/images/split_button/darcula.png" style="margin-top: 15px; margin-left: 0px;"></td>
  </tr>
</table>


#### Menu

* Increase line height in the dropdown menu to lessen the chance of choosing the wrong menu item by mistake.

* Leave 2px around the separator inactive to lessen the chance of choosing the wrong menu item by mistake:
![]({{site.baseurl}}/images/split_button/selected.png)

* Align the dropdown with the button left border:
![]({{site.baseurl}}/images/split_button/alignment.png)

### Sizes

#### Button

The width of the split button equals to the width of the main button (follow the rules of the [simple button]({{site.baseurl}}/controls/button/#style)) plus the width of the drop-down button. 

<table>
  <col width="200 px">      
  <col width="200 px">      
  <tr>
    <td><p style="margin-top:10px">Windows:</p></td>
    <td><p style="margin-top:10px">Mac:</p></td>
    <td><p style="margin-top:10px">Darcula:</p></td>
  </tr>
  <tr>
    <td><img src="{{site.baseurl}}/images/split_button/win-button-size.png" style="margin-top: 10px; margin-left: 0px;"></td>
    <td><img src="{{site.baseurl}}/images/split_button/mac-sizes.png" style="margin-top: 10px; margin-left: 0px;"></td>
    <td><img src="{{site.baseurl}}/images/split_button/darcula-sizes.png" style="margin-top: 10px; margin-left: 0px;"></td>
  </tr>
</table>


A different width for the split button makes it easier to understand that this button is different from other buttons in the dialog.

The Split button height is the same as for the [simple button]({{site.baseurl}}/controls/button/#style).

#### Drop-down menu

Follow the rules for  menus with regard to sizes, colors, fonts and spacing.

Menu item height and spacing between the menu and the button:

![]({{site.baseurl}}/images/split_button/button-and-dropdown-sizes.png)




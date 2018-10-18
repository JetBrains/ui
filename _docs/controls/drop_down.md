---
title: Drop-down list
category: Controls
---

A drop-down list is a type of button that shows a list of choices on clicking it. A drop-down list allows selecting one option.

A drop-down list can appear in dialogs and [toolbars](#toolbar-drop-down).

![]({{site.baseurl}}/images/dropdown/example.png)

## When to use

Use a drop-down list if: 

* A single option should be selected.

* The possible choices are objects or states.
    
    ![]({{site.baseurl}}/images/dropdown/output_level.png)
   		
* The number of choices is more than 4. 
   
* The screen space is limited, so there is not enough room for radio buttons.
   
* The default value is recommended for the most users. A drop-down is a good way to hide unpopular alternatives.

    ![]({{site.baseurl}}/images/dropdown/antialiasing.png)
    *“Subpixels” is the best choice for most users.*
    
* If there are other drop-downs in the same window and these options are not more important than others. A list of radio buttons is more noticeable than the drop-down.

* If a layout combines various UI elements for one setting, use a drop-down even if there are 4 options or less:

    ![]({{site.baseurl}}/images/dropdown/complex_layout.png)
    
    
### When not to use

* If multiple selections are possible, use checkboxes.

* If there is a list of actions, use a menu or a split button:

    ![]({{site.baseurl}}/images/dropdown/menu_button.png)	

* If there are 4 options or less, use radio buttons. 
	
    ![]({{site.baseurl}}/images/dropdown/radio_buttons.png)

* If users may need to enter a value that not currently in the list, use a combo box.

    ![]({{site.baseurl}}/images/dropdown/font_size.png)



## How to use

### Label

Follow the rules for the [Input Field]({{site.baseurl}}/controls/input_field/#label).

![]({{site.baseurl}}/images/dropdown/labels.png)


### Default value

Select the most likely or the safest value by default.

![]({{site.baseurl}}/images/dropdown/imports.png)
*The safest value is “Ask”, the behavior will not be unexpected to the user.*

Do **not** use an empty value as the default value. If no values are added to a drop-down yet, replace it with a button to add values.

<table>
<col width="60%">
    <tr>
        <td> <p class="label incorrect">Incorrect</p> </td>
        <td> <p class="label correct">Correct</p> </td>
    </tr>
    <tr>
        <td> <img src="{{site.baseurl}}/images/dropdown/empty.png" style="margin-top: 0px; margin-bottom: 5px;"> </td>
        <td> <img src="{{site.baseurl}}/images/dropdown/button.png" style="margin-top: 0px; margin-bottom: 5px;"> </td>
    </tr>
</table>
        

## Menu

### Control 

* A drop-down menu opens on clicking the drop-down button anywhere or pressing the Down key when the drop-down is focused.
    
    The menu opens down by default. If there is not enough space, the menu opens up.

* When the menu opens, the default option (displayed when the menu is closed) is selected. 

* Move the selection in the menu on pressing Up and Down arrows when an item is hovered. On hover the cursor over the item just move selection, do not update the value.


* Filter items in the list on typing:
    
    ![]({{site.baseurl}}/images/dropdown/filter.png)
    
* The menu remains opened until the user selects an item, clicks outside the menu, presses the <kbd>Esc</kbd> key or 
switches to another app.


### Menu items

* Use sentence-style capitalization for each menu item.
  	
  ![]({{site.baseurl}}/images/dropdown/browser.png)
  
* Avoid repeating words in drop-down list items. Move repeating words to the label or after the drop-down.
  	
    ![]({{site.baseurl}}/images/dropdown/refresh_changes.png)
  
  
* Sort items in one of the following orders:
  
    * Logical order, for example in a spatial relationship:
        
        ![]({{site.baseurl}}/images/dropdown/order_logical.png)
          
    * Alphabetical or numeric order if the options are equivalent to make it easier to find items:
    
        ![]({{site.baseurl}}/images/dropdown/order_alphabetical.png)
        
    * Place the most common options first. If there are more than 10 options, separate the most popular options with a line:
    
        ![]({{site.baseurl}}/images/dropdown/order_popular.png)
        
* Group related options, add a separator and group header if possible:
  
  ![]({{site.baseurl}}/images/dropdown/group.png)
  
* If it’s necessary to configure options in a drop-down list, add customization actions at the top or at the bottom of the drop-down and separate them with a line. Use title-case capitalization for actions.

    ![]({{site.baseurl}}/images/dropdown/customize.png)
  
  If a [control button]({{site.baseurl}}/controls/button/#control-button) is available for an action, e.g. the browse button, use it instead of an action in the menu.
  
    ![]({{site.baseurl}}/images/dropdown/control_button.png)
  
  If there are more than 2 actions, put them under the gear icon on the right, so that the menu is not overloaded:
  
  ![]({{site.baseurl}}/images/dropdown/scheme.png)
  
* Enclose meta-options in pointy brackets and place meta-options at the beginning or at the end if they are secondary.
  
  ![]({{site.baseurl}}/images/dropdown/run_tests.png)
  *\<Choose per test\> is a meta-options because it’s not a  real runner.*
  
  Do **not** assign special meanings to numeric or string values, use meta-options instead. It can be unclear that 0 or an empty string are used to disable an option.
  
  <table>
  <col width="53%">
      <tr>
          <td> <p class="label incorrect">Incorrect</p> </td>
          <td> <p class="label correct">Correct</p> </td>
      </tr>
      <tr>
          <td> <img src="{{site.baseurl}}/images/dropdown/version_incorrect.png" style="margin-top: 0px; 
          margin-bottom: -10px;"> </td>
          <td> <img src="{{site.baseurl}}/images/dropdown/version_correct.png" style="margin-top: 0px; margin-bottom:
           -10px;"> </td>
      </tr>
  </table>
  <p style="margin-top: -25px"><img><em>In the incorrect example empty string is used to set \<Same as language level\>,
   which is unclear.</em></p>
  
  
  Replace the \<None\> option with a checkbox if it does not make the layout more complex:
  
  <p class="label incorrect">Incorrect</p>
  ![]({{site.baseurl}}/images/dropdown/none_incorrect.png)
  
  <p class="label correct">Correct</p>
  ![]({{site.baseurl}}/images/dropdown/none_correct.png)
  
* Preview list items with images/dropdown if they are associated with well-known icons. Use formatting for a list of fonts. It will help users make a choice.
  
  ![]({{site.baseurl}}/images/dropdown/preview.png)
  	 	
  
* Use **bold** font to show default values, <font color="#2600FF">blue</font> font for values changed from the default,
 and <font color="#787878">grey</font> font to add a hint.
  
  ![]({{site.baseurl}}/images/dropdown/blue_text.png)	
  *Default and Darcula are bundled schemes, Default is blue because it’s customized.*
  
  
  ![]({{site.baseurl}}/images/dropdown/grey_text.png)
  
  
## Submenu

A submenu is a menu item that shows a list of nested items. A submenu includes a triangular indicator that distinguishes it from other menu items.

There are two types of submenus:

### Items submenu

* Use items submenus to group related options and to show hierarchy:
	
	![]({{site.baseurl}}/images/dropdown/submenu_example.png)
	
	If the number of options is not more than ~5, use a tree view instead: 
	
	![]({{site.baseurl}}/images/dropdown/submenu_hierarchy.png)
	
* Do **not** use submenus to hide less popular options. Submenus are difficult to navigate. Place the most popular options on top and use a scroll instead.
  <table>
  <col width="60%">
      <tr>
          <td> <p class="label incorrect">Incorrect</p> </td>
          <td> <p class="label correct">Correct</p> </td>
      </tr>
      <tr>
          <td> <img src="{{site.baseurl}}/images/dropdown/submenu_incorrect.png" style="margin-top: 0px; 
          margin-bottom: 5px;"> </td>
          <td> <img src="{{site.baseurl}}/images/dropdown/submenu_correct.png" style="margin-top: 0px; margin-bottom:
           5px;"> </td>
      </tr>
  </table>

* Show a submenu list on hovering over the item.
    
    If the selection moves with the Up and Down arrow keys, show the submenu list on pressing the Right arrow or Enter key.



### Actions submenu

* Use an actions submenu to show actions related to the item:
    
    ![]({{site.baseurl}}/images/dropdown/submenu_actions.png)	

* Show a submenu list on clicking the triangular icon. 
    
    If the selection moves with the Up and Down arrow keys, show the submenu list on pressing the Right arrow or Enter key.

Avoid submenus inside submenus. Submenus hide choices too deeply and are difficult to navigate.


## Toolbar drop-down

A drop-down can also appear on a horizontal toolbar. Separate it with the lines from the icons:

![]({{site.baseurl}}/images/dropdown/toolbar_other.png)

Use the toolbar drop-down:

* To select values that are controlled by the toolbar button on the right, as on the example above. In this case add 
a border, as separators will break the connection between icons and drop-down. 

    ![]({{site.baseurl}}/images/dropdown/toolbar_main.png)
    
* To filter values or change the appearance in the control below:

    ![]({{site.baseurl}}/images/dropdown/toolbar_filter.png)

Use an icon with the drop-down list <img src="{{site.baseurl}}/images/dropdown/gear.png" style="display: inline-block;
 margin: 0 10px 0 10px"> instead of a drop-down in the following cases:
* The options are secondary and the user won’t change them in most cases.
* Multi-selection is required, for example when group by several attributes.

For more details on an icon with a drop-down list see [Toolbar]({{site.baseurl}}/controls/toolbar/).


## Style and sizes

<table>
<col width="27%">
<col width="27%">
<col width="27%">
    <tr>
        <td style="margin-left: 20px"> Mac OS </td>
        <td> Windows </td>
        <td> Darcula </td>
        <td> IntelliJ </td>
    </tr>
    <tr>
        <td> <img src="{{site.baseurl}}/images/dropdown/mac_os.png" style="margin: -5px 0 0 0"></td>
        <td> <img src="{{site.baseurl}}/images/dropdown/win.png" style="margin: -5px 0 0 0"></td>
        <td> <img src="{{site.baseurl}}/images/dropdown/darcula.png" style="margin: -5px 0 0 0"></td>
        <td> <img src="{{site.baseurl}}/images/dropdown/intellij.png" style="margin: -5px 0 0 0"></td>
    </tr>
</table>

Toolbar drop-down sizes are the same for all themes.
![]({{site.baseurl}}/images/dropdown/toolbar_sizes.png)

### Width

* A dropdown width is fixed in dialogs. The width changes depending on the selected value on the toolbar to save space if the value is short.

    ![]({{site.baseurl}}/images/dropdown/width.png)
    
* A drop-down width should be enough to fit the longest option plus 20px, but not less than 72px.
	
    ![]({{site.baseurl}}/images/dropdown/width_sizes.png)
    
* Try to make multiple stacked drop-downs the same width within a view. For more details see [Layout]({{site.baseurl}}/principles/layout/).


### Menu
	
* The width of a drop-down menu can either equal the drop-down control width, or be wider to fit longer items.

    ![]({{site.baseurl}}/images/dropdown/menu_width.png)	
	
* Choose a list length that eliminates unnecessary vertical scrolling. The minimum height of the list with scrolling is 200px. Expand the list to 600px if space is not constrained and the list does not hide meaningful information under it, e.g. the information that can be important to make a choice.

    ![]({{site.baseurl}}/images/dropdown/menu_height.png)
    
For sizes inside the menu list see [Menu list layout]({{site.baseurl}}/controls/menu_list) article.

### Spacing

Follow the rules for the [Input Field]({{site.baseurl}}/controls/input_field/).
---
title: Drop-down list
category: Controls
type: Draft
---

A drop-down list is a type of button that shows a list of choices on clicking it. A drop-down list allows selecting one option.

A drop-down list can appear in dialogs and [toolbars](#toolbar-drop-down).

![]({{site.baseurl}}/images/.png)

## When to use

Use a drop-down list if: 

* A single option should be selected.

* The possible choices are objects or states.
   		
* The number of choices is between 4 and 15. 
  
    ![]({{site.baseurl}}/images/.png)
   
  **Exception**: a drop-down where users can add values can contain more than 15 values, e.g. the Run Configurations drop-down.
   
* The screen space is limited, so there is not enough room for radio buttons.
   
* The default value is recommended for the most users. A drop-down is a good way to hide unpopular alternatives.

    ![]({{site.baseurl}}/images/.png)
    *“Subpixels” is the best choice for most users.*
    
* If there are other drop-downs in the same window and these options are not more important than others. A list of radio buttons is more noticeable than the drop-down.

* If a layout combines various UI elements for one setting, use a drop-down even if there are 4 options or less:

    ![]({{site.baseurl}}/images/.png)
    
    
### When not to use

* If multiple selections are possible, use checkboxes.

* If there is a list of actions, use a menu or a split button:

    ![]({{site.baseurl}}/images/.png)	

* If there are 4 options or less, use radio buttons. 
	
    ![]({{site.baseurl}}/images/.png)

* If there are more than 15 options and users may need to enter a value that not currently in the list, use a combo box.

    ![]({{site.baseurl}}/images/.png)



## How to use

### Label

Follow the rules for the [Input Field]({{site.baseurl}}/controls/input_field/#label).

![]({{site.baseurl}}/images/.png)


### Default value

Select the most likely or the safest value by default.

![]({{site.baseurl}}/images/.png)
*The safest value is “Ask”, the behavior will not be unexpected to the user.*

Do **not** use an empty value as the default value. If no values are added to a drop-down yet, replace it with a button to add values.

<table>
<col width="200px">
    <tr>
        <td> <p class="label incorrect">Incorrect</p> </td>
        <td> <p class="label correct">Correct</p> </td>
    </tr>
    <tr>
        <td> <img src="{{site.baseurl}}/images/.png" style="margin-top: -5px; margin-bottom: 5px;"> </td>
        <td> <img src="{{site.baseurl}}/images/.png" style="margin-top: -5px; margin-bottom: 5px;"> </td>
    </tr>
</table>
        

## Menu

### Control 

* A drop-down menu opens on clicking the drop-down button anywhere or pressing the Down key when the drop-down is focused.
    The menu opens down by default. If there is not enough space, the menu opens up.

* When the menu opens, the default option (displayed when the menu is closed) is selected. 

* Move the selection in the menu on pressing Up and Down arrows when an item is hovered.

* Filter items in the list on typing:
    
    ![]({{site.baseurl}}/images/.png)
    
    For more details on search, see the Search section.
    
* The menu remains opened until the user selects an item, clicks outside the menu, presses the Esc key or switches to another app.

### Menu items

* Use sentence-style capitalization for each menu item.
  	
  ![]({{site.baseurl}}/images/.png)
  
* Avoid repeating words in drop-down list items. Move repeating words to the label or after the drop-down.
  	
    ![]({{site.baseurl}}/images/.png)
  	*Place the word “minutes” after the drop-down list.*
  
  
* Sort items in one of the following orders:
  
    * Logical order, for example in a spatial relationship:
        
        ![]({{site.baseurl}}/images/.png)
          
    * Alphabetical or numeric order if the options are equivalent to make it easier to find items:
    
        ![]({{site.baseurl}}/images/.png)
        
    * Place the most common options first. If there are more than 10 options, separate the most popular options with a line:
    
        ![]({{site.baseurl}}/images/.png)
        
* Group related options, add a separator and group header if possible:
  
  ![]({{site.baseurl}}/images/.png)
  
* If it’s necessary to configure options in a drop-down list, add customization actions at the top or at the bottom of the drop-down and separate them with a line. Use title-case capitalization for actions.

    ![]({{site.baseurl}}/images/.png)
  
  If a [control button]({{site.baseurl}}/controls/button/#control-button) is available for an action, e.g. the browse button, use it instead of an action in the menu.
  
    ![]({{site.baseurl}}/images/.png)
  
  If there are more than 2 actions, put them under the gear icon on the right, so that the menu is not overloaded:
  
  ![]({{site.baseurl}}/images/.png)
  
* Enclose meta-options in pointy brackets and place meta-options at the beginning or at the end if they are secondary.
  
  ![]({{site.baseurl}}/images/.png)
  *\<Choose per test\> is a meta-options because it’s not a  real runner.*
  
  Do **not** assign special meanings to numeric or string values, use meta-options instead. It can be unclear that 0 or an empty string are used to disable an option.
  
  <table>
  <col width="200px">
      <tr>
          <td> <p class="label incorrect">Incorrect</p> </td>
          <td> <p class="label correct">Correct</p> </td>
      </tr>
      <tr>
          <td> <img src="{{site.baseurl}}/images/.png" style="margin-top: -5px; margin-bottom: 5px;"> </td>
          <td> <img src="{{site.baseurl}}/images/.png" style="margin-top: -5px; margin-bottom: 5px;"> </td>
      </tr>
  </table>
  <img + em>In the incorrect example empty string is used to set <Same as language level>, which is unclear.</img + em>
  
  
  Replace the \<None\> option with a checkbox if it does not make the layout more complex:
  
  <p class="label incorrect">Incorrect</p>
  ![]({{site.baseurl}}/images/.png)
  
  <p class="label correct">Correct</p>
  ![]({{site.baseurl}}/images/.png)
  
* Preview list items with images if they are associated with well-known icons. Use formatting for a list of fonts. It will help users make a choice.
  
  ![]({{site.baseurl}}/images/.png)
  	 	
  
* Use bold font to show default values, blue font for values changed from the default, and grey font to add a hint.
  
  ![]({{site.baseurl}}/images/.png)	
  *Default and Darcula are bundled schemes, Default is blue because it’s customized.*
  
  
  ![]({{site.baseurl}}/images/.png)
  
  
## Submenu

A submenu is a menu item that shows a list of nested items. A submenu includes a triangular indicator that distinguishes it from other menu items.
There are two types of submenus:

### Items submenu

* Use items submenus to group related options and to show hierarchy:
	
	![]({{site.baseurl}}/images/.png)
	
	If the number of options is not more than ~5, use a tree view instead: 
	
* Do **not** use submenus to hide less popular options. Submenus are difficult to navigate. Place the most popular options on top and use a scroll instead.
  <table>
  <col width="200px">
      <tr>
          <td> <p class="label incorrect">Incorrect</p> </td>
          <td> <p class="label correct">Correct</p> </td>
      </tr>
      <tr>
          <td> <img src="{{site.baseurl}}/images/.png" style="margin-top: -5px; margin-bottom: 5px;"> </td>
          <td> <img src="{{site.baseurl}}/images/.png" style="margin-top: -5px; margin-bottom: 5px;"> </td>
      </tr>
  </table>

* Show a submenu list on hovering over the item.
    
    If the selection moves with the Up and Down arrow keys, show the submenu list on pressing the Right arrow or Enter key.



### Actions submenu

* Use an actions submenu to show actions related to the item:
    
    ![]({{site.baseurl}}/images/.png)	

* Show a submenu list on clicking the triangular icon. 
    
    If the selection moves with the Up and Down arrow keys, show the submenu list on pressing the Right arrow or Enter key.

Avoid submenus inside submenus. Submenus hide choices too deeply and are difficult to navigate.


## Toolbar drop-down

A drop-down can also appear on a horizontal toolbar. A toolbar drop-down height is 22px for all OSs so it fits the toolbar. The toolbar drop-down appearance is the same as a regular drop-down for all OSs, except for Mac OS:

![]({{site.baseurl}}/images/.png)
*Mac OS toolbar drop-down. The blue icon is replaced with a grey one to look less bright on the toolbar.* 

Use the toolbar drop-down:

* To select values that are controlled by the toolbar button on the right, as on the example above. 

* To filter values or change the appearance in the control below:

    ![]({{site.baseurl}}/images/.png)
	*Toolbar drop-down filters values in the table.*

Use an icon with the drop-down list  instead of a drop-down in the following cases:
* The options are secondary and the user won’t change them in most cases.
* Multi-selection is required, for example when group by several attributes.

For more details on an icon with a drop-down list see [Toolbar]({{site.baseurl}}/components/toolbar/).


## Sizes

* A drop-down width should be enough to fit the longest option plus 20px, but not less than 72px.
	
    ![]({{site.baseurl}}/images/.png)

* A dropdown width is fixed in dialogs. The width changes depending on the selected value on the toolbar to save space if the value is short.

    ![]({{site.baseurl}}/images/.png)

	
* The width of a drop-down menu can either equal the drop-down control width, or be wider to fit longer items.

    ![]({{site.baseurl}}/images/.png)	
	
* Choose a list length that eliminates unnecessary vertical scrolling. The minimum height of the list with scrolling is 200px. Expand the list to 600px if space is not constrained and the list does not hide meaningful information under it, e.g. the information that can be important to make a choice.

    ![]({{site.baseurl}}/images/.png)
    
* Try to make multiple stacked drop-downs the same width within a view. For more details see [Layout]({{site.baseurl}}/principles/layout/).

## Style


---
title: Drop-down list
codename: ComboBox
category: Controls
---

A drop-down list is a type of button that appears in dialogs. It shows a list of choices on clicking it and allows selecting one option.

![]({{site.baseurl}}/images/drop_down/example.png)


## When to use

Use a drop-down list if: 

* A single option should be selected.

* The possible choices are objects or states.
    
    ![]({{site.baseurl}}/images/drop_down/output_level.png)
   		
* The number of choices is more than 4. 
   
* The screen space is limited, so there is not enough room for radio buttons.
   
* The default value is recommended for the most users. A drop-down is a good way to hide unpopular alternatives.

    ![]({{site.baseurl}}/images/drop_down/antialiasing.png)
    *“Subpixels” is the best choice for most users.*
    
* If there are other drop-downs in the same window and these options are not more important than others. A list of radio buttons is more noticeable than the drop-down.

* If a layout combines various UI elements for one setting, use a drop-down even if there are 4 options or less:

    ![]({{site.baseurl}}/images/drop_down/complex_layout.png)
    
    
### When not to use

If multiple selections are possible, use checkboxes.

If there is a list of actions, use a menu or a split button:

![]({{site.baseurl}}/images/drop_down/menu_button.png)	

If there are 4 options or less, use radio buttons. 

![]({{site.baseurl}}/images/drop_down/radio_buttons.png)

If users may need to enter a value that not currently in the list, use a combo box.

![]({{site.baseurl}}/images/combo_box/font_size.png)

If a drop-down appears on a toolbar, use [toolbar drop-down]({{site.baseurl}}/controls/toolbar_drop_down/) instead.
![]({{site.baseurl}}/images/toolbar_dropdown/toolbar_main.png)



## How to use

### Label

Follow the rules for the [input field]({{site.baseurl}}/controls/input_field/#label).

![]({{site.baseurl}}/images/drop_down/labels.png)


### Default value

Select the most likely or the safest value by default.
![]({{site.baseurl}}/images/drop_down/imports.png)
*The safest value is “Ask”, the behavior will not be unexpected to the user.*

Do **not** use an empty value as the default value. If no values are added to a drop-down yet, replace it with a button to add values.

<table>
<col width="60%">
    <tr>
        <td> <p class="label incorrect">Incorrect</p> </td>
        <td> <p class="label correct">Correct</p> </td>
    </tr>
    <tr>
        <td> <img src="{{site.baseurl}}/images/drop_down/empty.png" style="margin-top: 0px; margin-bottom: 5px;"> </td>
        <td> <img src="{{site.baseurl}}/images/drop_down/button.png" style="margin-top: 0px; margin-bottom: 5px;"> </td>
    </tr>
</table>
        

## Menu

### Control 

A drop-down menu opens on clicking the drop-down button anywhere or pressing the Down key when the drop-down is 
focused.      
The menu opens down by default. If there is not enough space, the menu opens up.

When the menu opens, the default option (displayed when the menu is closed) is selected. 

Move the selection in the menu on pressing Up and Down arrows when an item is hovered. On hover the cursor over the item just move selection, do not update the value.


<!-- * Filter items in the list on typing:
    
    ![]({{site.baseurl}}/images/drop_down/filter.png)
-->

The menu remains opened until the user selects an item, clicks outside the menu, presses the <kbd>Esc</kbd> key or 
switches to another app.


### Menu items

Use sentence-style capitalization for each menu item.
  	
![]({{site.baseurl}}/images/drop_down/browser.png)
  
Avoid repeating words in drop-down list items. Move repeating words to the label or after the drop-down.
  	
![]({{site.baseurl}}/images/drop_down/refresh_changes.png)
  
  
Sort items in one of the following orders:
  
* Logical order, for example in a spatial relationship:
        
    ![]({{site.baseurl}}/images/drop_down/order_logical.png)
          
* Alphabetical or numeric order if the options are equivalent to make it easier to find items:
    
    ![]({{site.baseurl}}/images/drop_down/order_alphabetical.png)
        
* Place the most common options first. If there are more than 10 options, separate the most popular options with a line:
    
    ![]({{site.baseurl}}/images/drop_down/order_popular.png)
        
Group related options, add a separator and group header if possible:
  
![]({{site.baseurl}}/images/drop_down/group.png)
  
If there are actions related to the drop-down, put them under the gear icon on the right:
  
![]({{site.baseurl}}/images/drop_down/scheme.png)
  
Enclose meta-options in pointy brackets and place meta-options at the beginning or at the end if they are secondary.
![]({{site.baseurl}}/images/drop_down/run_tests.png)
*\<Choose per test\> is a meta-options because it’s not a  real runner.*
Do **not** assign special meanings to numeric or string values, use meta-options instead. It can be unclear that 0 or an empty string are used to disable an option.
  
  <table>
  <col width="53%">
      <tr>
          <td> <p class="label incorrect">Incorrect</p> </td>
          <td> <p class="label correct">Correct</p> </td>
      </tr>
      <tr>
          <td> <img src="{{site.baseurl}}/images/drop_down/version_incorrect.png" style="margin-top: 0px; 
          margin-bottom: -10px;"> </td>
          <td> <img src="{{site.baseurl}}/images/drop_down/version_correct.png" style="margin-top: 0px; margin-bottom:
           -10px;"> </td>
      </tr>
  </table>
  <p style="margin-top: -25px" class="noanchor"><img><em>In the incorrect example empty string is used to set &lt;Same 
  as language level&gt;, which is unclear.</em></p>  
  <p class="noanchor">Replace the &lt;None&gt; option with a checkbox if it does not make the layout more complex:</p>
  
  <p class="label incorrect noanchor">Incorrect</p>
  ![]({{site.baseurl}}/images/drop_down/none_incorrect.png)
  
  <p class="label correct noanchor">Correct</p>
  ![]({{site.baseurl}}/images/drop_down/none_correct.png)
  

Preview list items with images if they are associated with well-known icons. Use formatting for a list of fonts. It will help users make a choice.
  
![]({{site.baseurl}}/images/drop_down/preview.png)

  
Use **bold** font to show default values, <font color="#2600FF">blue</font> font for values changed from the default,
 and <font color="#787878">grey</font> font to add a hint.  
![]({{site.baseurl}}/images/drop_down/blue_text.png)	
*Default and Darcula are bundled schemes, Default is blue because it’s customized.*
  
  
![]({{site.baseurl}}/images/drop_down/grey_text.png)

Submenus are not supported for the drop-down list. Use a tree view instead: 
![]({{site.baseurl}}/images/drop_down/hierarchy.png)
  
  
## Sizes and placement

### Width

A drop-down width is fixed and does not change depending on the selected value.

![]({{site.baseurl}}/images/drop_down/width.png)
    
A drop-down width should be enough to fit the longest option plus 20px, but not less than 72px.
	
![]({{site.baseurl}}/images/drop_down/width_sizes.png)


### Menu
	
The width of a drop-down menu can either equal the drop-down control width, or be wider to fit longer items.

![]({{site.baseurl}}/images/drop_down/menu_width.png)	
	
Choose a list length that eliminates unnecessary vertical scrolling. The minimum height of the list with scrolling is 200px. Expand the list to 600px if space is not constrained and the list does not hide meaningful information under it, e.g. the information that can be important to make a choice.

![]({{site.baseurl}}/images/drop_down/menu_height.png)
    
For sizes inside the menu list see [Menu list]({{site.baseurl}}/controls/menu_list).

### Placement

Follow the rules for the [input field]({{site.baseurl}}/controls/input_field/).


## Style

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
        <td> <img src="{{site.baseurl}}/images/drop_down/mac_os.png" style="margin: -5px 0 0 0"></td>
        <td> <img src="{{site.baseurl}}/images/drop_down/win.png" style="margin: -5px 0 0 0"></td>
        <td> <img src="{{site.baseurl}}/images/drop_down/darcula.png" style="margin: -5px 0 0 0"></td>
        <td> <img src="{{site.baseurl}}/images/drop_down/intellij.png" style="margin: -5px 0 0 0"></td>
    </tr>
</table>



---
title: Combo box
codename: ComboBox setEditable(true)
category: Controls
---

A combo box combines a [drop-down list]({{site.baseurl}}/controls/drop-down) and an [input field](({{site.baseurl}}/controls/input_field), allowing the user to select a value from the list or enter a custom value.

![]({{site.baseurl}}/images/combo_box/example.png)

IntelliJ platform ComboBox component `com.intellij.openapi.ui.ComboBox` extends the Swing JComboBox component, so use the Swing API. To make combo box editable call:

<div class="code-block__wrapper">{% highlight java %}
ComboBox setEditable(true)
{% endhighlight %}</div>




## When to use

Use a combo box if:

* The user needs to select a value or enter a custom value.

    ![]({{site.baseurl}}/images/combo_box/font_size.png)

* The possible choices are objects or states.


* The user may need to return to previous values. For example, save previously entered paths, so the user can quickly 
select them later:

    ![]({{site.baseurl}}/images/combo_box/maven.png)
    

### When not to use

If the number of options is finite, and there’s no need to enter custom values. In this case, use a [drop-down list]({{site.baseurl}}/controls/drop_down) or [radio buttons]({{site.baseurl}}/controls/radio_button).

If it’s not possible to list the most likely choices. In this case, use an [input field]({{site
.baseurl}}/controls/input_field) instead.
 
![]({{site.baseurl}}/images/input_field/prefill.png)

If the list is big and the user knows what value they need and won’t review the list. In this case, use an input field with completion.

![]({{site.baseurl}}/images/input_field/completion.png)


## How to use

For the [label]({{site.baseurl}}/controls/drop_down/#label) and the [default value]({{site.baseurl}}/controls/drop_down/#default-value) apply the same rules as for the
 [drop-down list]({{site.baseurl}}/controls/drop_down).

If there are no values in the list initially, replace the combo box with an input field. This way users won't waste their time clicking the empty combo box to find out that there are no options available.

<table>
<col width="55%">
    <tr>
        <td> <p class="label incorrect">Incorrect</p> </td>
        <td> <p class="label correct">Correct</p> </td>
    </tr>
    <tr>
        <td> <img src="{{site.baseurl}}/images/combo_box/empty.png" style="margin-top: 0px; margin-bottom: 5px;"> </td>
        <td> <img src="{{site.baseurl}}/images/combo_box/replace_with_iput_field.png" style="margin-top: 0px; margin-bottom: 5px;"> </td>
    </tr>
</table>
Replace the input field with a combo box after a value has been entered and confirmed.


### Menu

#### Control

Open the combo box menu on clicking the arrow button on the right or pressing the Down key when the combo box is 
focused.  
The menu opens down by default. If there is not enough space, the menu opens up.

When the menu opens, select the element that was shown in the closed combo box. If a custom value is entered, then 
do not select a value in the list.

Move the selection in the menu and update the value in the combo box on pressing the Up and Down arrow keys. On 
mouse hover, move the selection to an item the cursor is pointing to, and, update the value on clicking the mouse button or pressing Enter.
  
The menu remains opened until the user clicks the item in the list, presses Enter or Esc, clicks outside the menu, 
or switches to another app.


#### Menu items

The menu list contains predefined or the most likely options. Follow the rules for [drop-down menu items]({{site.baseurl}}/controls/drop_down/#menu-items).

If the user needs to return to previous inputs, add such values to the end of the list on clicking confirmation button in the dialog.

![]({{site.baseurl}}/images/combo_box/maven.png)

Use [control buttons]({{site.baseurl}}/controls/button/#control-button) to add values or expand the combo box, e.g. the browse button.

![]({{site.baseurl}}/images/combo_box/control_button.png)


## Validation

If the user enters an invalid value, highlight the combo box with red and show an error message in a tooltip. For 
more details see [Validation errors]({{site.baseurl}}/principles/validation_errors).

![]({{site.baseurl}}/images/combo_box/validation.png)


## Sizes and placement

Follow the [drop-down guidelines]({{site.baseurl}}/controls/drop_down/#sizes-and-placement).

## Style

<table>
<col width="28%">
<col width="28%">
<col width="28%">
    <tr>
        <td style="margin-left: 20px"> Mac OS </td>
        <td> Windows </td>
        <td> Darcula </td>
        <td> IntelliJ </td>
    </tr>
    <tr>
        <td> <img src="{{site.baseurl}}/images/combo_box/mac.png" style="margin: -5px 0 0 0"></td>
        <td> <img src="{{site.baseurl}}/images/combo_box/win.png" style="margin: -5px 0 0 0"></td>
        <td> <img src="{{site.baseurl}}/images/combo_box/darcula.png" style="margin: -5px 0 0 0"></td>
        <td> <img src="{{site.baseurl}}/images/combo_box/intellij.png" style="margin: -5px 0 0 0"></td>
    </tr>
</table>
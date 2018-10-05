---
title: Numeric fields
category: Principles
---

Select the required control for numeric field depending on type of the data. Use: 
* [radio button]({{site.baseurl}}/controls/radio_button/) if number of choices is less than 3;
* [dropdown]({{site.baseurl}}/controls/dropdown/) if the possible number of choices is between 3 and 15 and choices are constrained;
* [combo box]({{site.baseurl}}/controls/combobox/) if also unconstrained input is needed;
* [input field]({{site.baseurl}}/controls/input_field/) if number of valid values is greater than 15 and specific value is required;
* [slider]({{site.baseurl}}/controls/slider/) if number of choices is more than 4. Also if specific value does not matter (e.g. delay in milliseconds) or it's possible to provide feedback on the effect of setting changes.

For more details see the controls pages linked above.

## How to use
* In numeric input fields, combo boxes and sliders provide ability to use up and down arrow keys to increase value by constant step.

* Ensure that the length of control accommodates the length of the expected input: 
    <table>
    <col width="62%">
        <tr>
            <td> <p class="label incorrect">Incorrect</p> </td>
            <td> <p class="label correct">Correct</p> </td>
        </tr>
        <tr>
            <td> <img src="{{site.baseurl}}/images/numeric_fields/control_length_incorrect.png" style="margin-top: -5px; margin-bottom: 5px;"> </td>
            <td> <img src="{{site.baseurl}}/images/numeric_fields/control_length_correct.png" style="margin-top: -5px; margin-bottom: 5px;"> </td>
        </tr>
    </table>


* Select the most convenient unit:
    <table>
        <tr>
            <td> <p class="label incorrect">Incorrect</p> </td>
            <td> <p class="label correct">Correct</p> </td>
        </tr>
        <tr>
            <td> <img src="{{site.baseurl}}/images/numeric_fields/unit_incorrect.png" style="margin-top: -5px; margin-bottom: 5px;"> </td>
            <td> <img src="{{site.baseurl}}/images/numeric_fields/unit_correct.png" style="margin-top: -5px; margin-bottom: 5px;"> </td>
        </tr>
    </table>

* Do not abbreviate units if there is enough space. An exception can be a slider.
![]({{site.baseurl}}/images/numeric_fields/unit_text.png)

* If one unit is used for all items, label the units after the field.
![]({{site.baseurl}}/images/numeric_fields/one_unit.png)
If several units are used, label the units inside the field.
![]({{site.baseurl}}/images/numeric_fields/multi_unit.png)

* Do **not** assign special meanings to specific numeric or string values. Use meta-options instead.
    <table>
        <tr>
            <td> <p class="label incorrect">Incorrect</p> </td>
            <td> <p class="label correct">Correct</p> </td>
        </tr>
        <tr>
            <td> <img src="{{site.baseurl}}/images/numeric_fields/meta_option_incorrect.png" style="margin-top: -5px; margin-bottom: 5px;"> </td>
            <td> <img src="{{site.baseurl}}/images/numeric_fields/meta_option_correct.png" style="margin-top: -5px;"> <em style="margin-bottom: 5px;">To set “Same as language level” empty string should be entered.</em>  </td>
        </tr>
    </table>


* If invalid value is entered, highlight field with red and show error message and supported range in tooltip.  
![]({{site.baseurl}}/images/numeric_fields/error.png)
Do not change values automatically. Do not allow to close dialog, while incorrect value is entered. For more details see [Validation errors]({{site.baseurl}}/principles/validation_errors/).

* Do not use spinner.   
![]({{site.baseurl}}/images/numeric_fields/spinner.png)
Spinner is good if it's needed to change parameter to 1-3 points using mouse. As IntelliJ IDEA users usually use keyboard, spinner button just clutters the screen.




  




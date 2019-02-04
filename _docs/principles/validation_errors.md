---
title: Validation errors
category: Principles
order: 4
---

Validation is the process of checking the values ​​specified by the user, and displaying the errors that are found.

An error can appear in a **tooltip**:

  ![]({{site.baseurl}}/images/validation/example_tooltip.png)

Or **inline**, above the confirmation buttons:

![]({{site.baseurl}}/images/validation/example_inline.png)

## Principles

Always try not to let the user enter invalid data. To achieve this:
1. Use controls that are constrained to valid values. For example, use a combo box or a slider instead of the input field.


2. Limit the characters users can enter. For example, if only numbers are supported in a field, and this is obvious to the user, ignore input of letters instead of showing an error:
  ![]({{site.baseurl}}/images/validation/port_correct.png)
  If it’s not obvious that only numbers can be entered, allow to enter any sign and perform validation.
  ![]({{site.baseurl}}/images/validation/font_error.png)

3. Provide a default value if possible. Even if the user decides to change the default value, it gives a clue on the expected input format.

4. Write instructions and examples on how to fill a form using [Context Help]({{site.baseurl}}/principles/context_help/).

If it’s not possible to limit input, try to show an error as soon as possible so that the user can quickly return and fix it.

## Validation types and usage

There are three types of validation:

<table>
<col width="25%">
<col width="50%">
<col width="20%">
<th class="table-line"> Validation type </th>
<th class="table-line"> What to validate </th>
<th class="table-line"> Format </th>
<tr class="table-line">
    <td> Immediately on input </td>
    <td> Characters.<br /><br />
         Maximum input size or value.
    </td>
    <td> Tooltip </td>
</tr>
<tr class="table-line">
    <td> On focus loss </td>
    <td> Minimum input size or value.<br /><br />  
         Values that can be checked only when the full value is entered, e.g. existing file name.
    </td>
    <td> Tooltip </td>
</tr>
<tr>
    <td> On sending the form </td>
    <td> Empty required fields.<br /><br />  
         Value or a set of values if validation is slow or attempts are limited, e.g. due to connection to a remote server.  
    </td>
    <td> Tooltip or inline </td>
</tr>
</table>

The details on how and when to use each type of validation are provided below.

### 1. Immediately on input

**When to use**: If a non-allowed character is entered, or the maximum input size or value is exceeded.

**How it works**: The field is highlighted with red and the error appears in the tooltip.

![]({{site.baseurl}}/images/validation/create_class.png)
*Non-allowed symbol entered.*

![]({{site.baseurl}}/images/validation/port_error.png)
*If the maximum value is exceeded, specify what values are allowed (e.g. a range for numeric values, or the number of symbols).*

Hide the error when the incorrect symbol is deleted.
<br><br>
**Implementation**: 
<div class="code-block__wrapper">{% highlight java %}// Fields initializers
private JTextField myPort = new JTextField();
private static final String MESSAGE = "The port number should be between 0 and 65535.";

// Components initialization
new ComponentValidator(project).withValidator(v -> {
  String pt = myPort.getText();
  if (StringUtil.isNotEmpty(pt)) {
    try {
      int portValue = Integer.parseInt(pt);
      if (portValue >= 0 && portValue <= 65535) {
        v.updateInfo(null);
      }
      else {
        v.updateInfo(new ValidationInfo(MESSAGE, myPort));
      }
    }
    catch (NumberFormatException nfe) {
      v.updateInfo(new ValidationInfo(MESSAGE, myPort));
    }
  }
  else {
    v.updateInfo(null);
  }
}).installOn(myPort);

myPort.getDocument().addDocumentListener(new DocumentAdapter() {
  @Override
  protected void textChanged(@NotNull DocumentEvent e) {
    ComponentValidator.getInstance(myPort).ifPresent(v -> v.revalidate());
  }
});{% endhighlight %}</div>



### 2. On focus loss

**When to use**: If the value that was entered is too short or small, or if a non-allowed value is entered.
       
  Do **not** validate empty fields on focus loss. Users should be able to fill the form in a random order, so do not interrupt them.

**How it works**: Validation is triggered immediately after focus loss if the field has been filled. If an error is detected, the field is highlighted in light-red. The focus does not return to the field automatically.

![]({{site.baseurl}}/images/validation/focus_loss.png)

The error tooltip appears when the invalid field gets focus or on hover of the field.
Hide the field highlighting and the tooltip when the user fixes the invalid value:

![]({{site.baseurl}}/images/validation/fix_error.png)

When the focus is returned to the field with error, the validation is the same as immediate on input validation.

**Implementation**: Add `andStartOnFocusLost()` call on `ComponentValidator` before installing it on a component:
<div class="code-block__wrapper">{% highlight java %}new ComponentValidator(getDisposable()).withValidator(...).
    andStartOnFocusLost().installOn(component);{% endhighlight %}</div>

### 3. On sending the form

**When to use**:

* For empty required fields in complex forms:
    * Forms with more than 3 input fields or combo boxes.
    * Forms with at least one control (checkbox, table, etc.) besides an input field and a combo box.  
  
    If a form is complex, always enable the “OK” button. Otherwise, it can be hard to understand what should be done to complete the form.
  
    If a form is simple, just disable the confirmation button until all required fields have been filled:

    ![]({{site.baseurl}}/images/validation/simple_dialog.png)    

* If validation is slow or attempts are limited, e.g. due to connection to a remote server.

**How to use**: Validation is performed when the user clicks the confirmation button, e.g. the “OK” button. 

* If it’s possible to determine the fields with errors, highlight all these fields, move the focus to the first invalid field, put the cursor to the end of the line and show the tooltip.

    ![]({{site.baseurl}}/images/validation/complex_dialog.png)

    Hide the tooltip and the red highlighting when the user starts editing the invalid value or entering symbols into the empty required field.
    
    Show the error tooltip for the next field when it gets the focus, hover or the user clicks the “OK” button one more time. 

* If it’s not possible to determine the fields with errors, show the error message inline under the fields:

    ![]({{site.baseurl}}/images/validation/example_inline.png)

    An inline error only appears on clicking the confirmation button. The dialog is resized to fit the error message. Do not leave an empty space for the error in advance.
    
    Make the error message selectable. The user may want to find this message on the Internet or to send a question about the option to support.
    
    **Implementation**: By default `DialogWrapper` disables "OK" button until all fields that participate in validation 
    become valid. Explicitly enable "OK" button for each input field:

<div class="code-block__wrapper">{% highlight java %}new ValidationInfo("The host cannot be reached.", myHostField)
.withOkEnabled();{% endhighlight %}</div>
  
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`ValidationInfo` for messages in inline area is created with null component:  
  
  <div class="code-block__wrapper">{% highlight java %} new ValidationInfo("The host cannot be reached. Check the address and 
     credentials.");{% endhighlight %}</div>

## Tooltip

An error tooltip appears in two cases:

1. If the field with an error gets focus:

	![]({{site.baseurl}}/images/validation/example_tooltip.png)

    If the field loses focus, hide the tooltip and highlight the field with light-red:

	![]({{site.baseurl}}/images/validation/incorrect_symbol_non_focused.png)


2. On hover over the field or the element with an error:
	
	![]({{site.baseurl}}/images/validation/incorrect_symbol_hover.png)
	
	![]({{site.baseurl}}/images/validation/table_hover.png)
	
Show the tooltip above the field and move it 40px right, so that the controls above it are not overlapped. 
If there is an important info above the field, the tooltip can be shown on the right.

Always use field highlighting and a tooltip instead of an inline error in the dialog if it’s possible to determine which field is invalid. 
A tooltip is preferable because it appears in the context and the form layout does not change.

Make the message in tooltip selectable. The user may want to find this message on the Internet or to send a question about the option to support.


## Error message text

An error message describes the problem and provides the way to solve it if it’s not clear from the problem description. 

![]({{site.baseurl}}/images/validation/message_short.png)
*It’s clear how to fix the error from the error description.*

![]({{site.baseurl}}/images/validation/message_long.png)
*The way to solve the problem is provided.*

Describe the problem in terms of target users’ actions or goals, not in terms of the program’s architecture.

<table>
    <tr>
        <td> <p class="label incorrect">Incorrect</p> </td>
        <td> <span style="display: inline-block; font-weight: 600; margin-left: 50px; margin-top: 20px">Invalid Git Executable. Error running "git.exe". File not found: "git.exe".</span></td>         
    </tr>
    <tr>
        <td> <p class="label correct">Correct</p> </td>
        <td> <span style="display: inline-block; font-weight: 600; margin-left: 50px; margin-top: 20px"> Cannot run "git.exe". The file is not found. </span></td>
    </tr>
</table>

Provide specific names, locations, and values of the objects involved:

<table>
    <tr>
        <td> <p class="label incorrect">Incorrect</p> </td>
        <td> <img src="{{site.baseurl}}/images/validation/message_unclear.png" style="margin: -8px -10px 30px 50px;"> </td>         
    </tr>
    <tr>
        <td> <p class="label correct">Correct</p> </td>
        <td> <img src="{{site.baseurl}}/images/validation/message_clear.png" style="margin: -8px -10px 0px 50px;"> </td>
    </tr>
</table>



End the error message with a period (for details see [Punctuation]({{site.baseurl}}/text/punctuation/)).
 
The error message should be short and descriptive. See [Writing short and clear text]({{site.baseurl}}/text/writing_short/)).
 
Examples of common errors the and corresponding error messages:  

<table>
<col width="25%">
<col width="50%">
<th class="table-line"> Error type </th>
<th class="table-line"> Error message </th>
<tr class="table-line">
    <td> Empty required field </td>
    <td> Specify the port number. </td>
</tr>
<tr class="table-line">
    <td> Incorrect symbol </td>
    <td> “/” is not an allowed symbol. </td>
</tr>
<tr class="table-line">
    <td> Incorrect value </td>
    <td> The port number should be between XXX and XXXX.<br /><br />  
         The file name should be at least 4 symbols. <br /><br /> 
         The name is already in use. <br /><br />
         The user name or password is incorrect.
    </td>
</tr>
<tr class="table-line">
    <td> Incorrect format </td>
    <td> The email format should be xxx@xxx.com. </td>
</tr>
<tr>
    <td> Missing file </td>
    <td> The file is not found. </td>
</tr>
</table>

Use encouraging tone:

<table>
<col width="40%">
<col width="50%">
<th class="table-line"> Use </th>
<th class="table-line"> Do not use </th>
<tr class="table-line">
    <td> Problem </td>
    <td> Error, failure </td>
</tr>
<tr class="table-line">
    <td> Unable </td>
    <td> Failed to </td>
</tr>
<tr class="table-line">
    <td> Incorrect </td>
    <td> Illegal, invalid, bad </td>
</tr>
<tr>
    <td> Should be </td>
    <td> Must </td>
</tr>
</table>


## UI elements with validation errors

### Input field

![]({{site.baseurl}}/images/validation/example_tooltip.png)

Add a red light bulb on the right side of the input field if an action to fix the error is available:

![]({{site.baseurl}}/images/validation/input_field_bulb.png)

### Combo box

![]({{site.baseurl}}/images/validation/combo_box.png) 

### Tables and lists

![]({{site.baseurl}}/images/validation/table.png)

When the field in a table loses focus, highlight the text in red and show an error tooltip on mouse hover or when the line gets focus:
![]({{site.baseurl}}/images/validation/table_hover.png)
**Implementation**:
<div class="code-block__wrapper">{% highlight java %}JTextField cellEditor = new JTextField();
cellEditor.putClientProperty(DarculaUIUtil.COMPACT_PROPERTY, Boolean.TRUE);
cellEditor.getDocument().addDocumentListener(new DocumentAdapter() {
    @Override
    protected void textChanged(@NotNull DocumentEvent e) {
      Object op = cellEditor.getText().contains(".") ? "error": null;
      cellEditor.putClientProperty("JComponent.outline", op);
    }
});

TableColumn col0 = table.getColumnModel().getColumn(0);
col0.setCellEditor(new DefaultCellEditor(cellEditor));
col0.setCellRenderer(new DefaultTableCellRenderer() {
    @Override
    public Dimension getPreferredSize() {
      Dimension size = super.getPreferredSize();
      Dimension editorSize = cellEditor.getPreferredSize();
      size.height = Math.max(size.height, editorSize.height);
      return size;
    }
});
{% endhighlight %}</div>

### Multi-page dialog
   
If validation in a multi-page form can be performed only on clicking the confirmation button, then:
* Use red highlighting for navigation elements such as tabs, menu and list items for areas that contain errors so that the user can quickly locate the error. 
* Open the first page with an error or stay on the opened page if it has errors on clicking the confirmation button. 

![]({{site.baseurl}}/images/validation/multipage1.png)
*The Scopes page is the first page with an error, so open it on clicking the “OK” button. However, if the Path Variable page is open and the user clicks the confirmation button, stay on this page as it contains an error.*

If there are several items on one page (e.g. errors in several Live Templates), color all invalid tree items in red and navigate to the first invalid item or stay on the opened one if it has errors:

![]({{site.baseurl}}/images/validation/multipage2.png)


## Warning

![]({{site.baseurl}}/images/validation/warning.png)

A warning informs the user that something is configured incorrectly, but does not prevent them from applying the changes.

A warning can appear on input, focus loss, or on reopening a filled form. For example, make the empty field Target name as warning on reopening:

![]({{site.baseurl}}/images/validation/warning_dialog.png)

The warning can be shown:

* In a tooltip for a specific field. Follow the rules for [the error tooltip](#tooltip). 

    There is an extra configuration in `ValidiationInfo` class which turns it into a warning
    info:
<div class="code-block__wrapper">{% highlight java %}new ValidationInfo("Target name is not specified.", myNameField)
.asWarning();{% endhighlight %}</div>

* On the form under the controls. Show the message with the yellow warning icon.

    ![]({{site.baseurl}}/images/validation/warning_inline.png)

* On the Problems page in complex multi-page dialogs. Show warnings and fix options:

    ![]({{site.baseurl}}/images/validation/problems.png)
    *Problems page in the Project Structure dialog.*
    
    Mark all navigation elements for areas that contain warnings with yellow icons. 
    
    Update the problems counter when a problem is detected. When all problems have been fixed, do not show the “Problems” tab.
    
    On a particular page, highlight the element that contains a warning in yellow. On selection or mouse hover, show a tooltip with a warning message:

    ![]({{site.baseurl}}/images/validation/artifacts.png)
    


## Avoid mistakes

* Do not show an error in a message box. Users are pulled out of the context, they need to close the dialog and locate the invalid field.

    ![]({{site.baseurl}}/images/validation/message_box.png)
    
  
* Do not allow to click "OK" button if a form contains empty required fields. For this, the Cancel button should be used, and the OK button should be disabled. Otherwise, if users accidentally leave the field empty, they can expect that the value was entered correctly.
    
    ![]({{site.baseurl}}/images/validation/wildcard.png)

* Do not show error message inside the empty required field. It looks like a prefilled field, not like an error message. 
    
    ![]({{site.baseurl}}/images/validation/goto_line.png)

* Do not underline the field label. It looks like a spell error and poorly visible.
    
    ![]({{site.baseurl}}/images/validation/underline.png)
    
* Do not shake a form and show an error with a delay. A shaking form is distracting and time-consuming. 
    
    ![]({{site.baseurl}}/images/validation/new_class.png)

* Do not show an error immediately after opening a form. It distracts the user from filling the form.

    ![]({{site.baseurl}}/images/validation/add_tfs.png)

* Do not allow to submit the form with the error. When the form is opened again, the value is reset, so users don’t know
 if they entered incorrect data.

    ![]({{site.baseurl}}/images/validation/save.png)




## Insets and colors

![]({{site.baseurl}}/images/validation/tooltip_insets.png)

![]({{site.baseurl}}/images/validation/dialog_insets.png)

### Error colors
<table>
<col width="20%">
<col width="20%">
<col width="20%">
<col width="20%">
<th class="table-line"> </th>
<th class="table-line"> Mac OS </th>
<th class="table-line"> Windows </th>
<th class="table-line"> IntelliJ </th>
<th class="table-line"> Darcula </th>
<tr class="table-line">
    <td> Tooltip background </td>
    <td> #F5E6E7 </td>
    <td> #F5E6E7 </td>
    <td> #F5E6E7 </td>
    <td> #593D41 </td>
</tr>
<tr class="table-line">
    <td> Tooltip border </td>
    <td> #E0A8A9 </td>
    <td> #E0A8A9 </td>
    <td> #E0A8A9 </td>
    <td> #73454B </td>
</tr>
<tr class="table-line">
    <td> Focused field highlighting </td>
    <td> #F53B3B, op. 50% </td>
    <td> #F57D7D </td>
    <td> #E53E4D </td>
    <td> #8B3C3C </td>
</tr>
<tr class="table-line">
    <td> Not focused field highlighting </td>
    <td> #F7BCBC, op. 50% </td>
    <td> #EECACA </td>
    <td> #EBBCBC </td>
    <td> #725252 </td>
</tr>
<tr class="table-line">
    <td> Error text color </td>
    <td> #FF0000 </td>
    <td> #FF0000 </td>
    <td> #FF0000 </td>
    <td> #FF5261 </td>
</tr>
</table>



### Warning colors

<table>
<col width="20%">
<col width="20%">
<col width="20%">
<col width="20%">
<th class="table-line"> </th>
<th class="table-line"> Mac OS </th>
<th class="table-line"> Windows, IntelliJ </th>
<th class="table-line"> Darcula </th>
<tr class="table-line">
    <td> Tooltip background </td>
    <td> #F5F0E6 </td>
    <td> #F5F0E6 </td>
    <td> #594E32 </td>
</tr>
<tr class="table-line">
    <td> Tooltip border </td>
    <td> #E0CEA8 </td>
    <td> #E0CEA8 </td>
    <td> #78550B </td>
</tr>
<tr class="table-line">
    <td> Focused field highlighting </td>
    <td> #EEB23E, op. 50% </td>
    <td> #E1A336 </td>
    <td> #AD7A0F </td>
</tr>
<tr class="table-line">
    <td> Not focused field highlighting </td>
    <td> #FFDC92, op. 50% </td>
    <td> #EAD2A1 </td>
    <td> #6F531F </td>
</tr>
<tr class="table-line">
    <td> Warning text color </td>
    <td> #E77D00 </td>
    <td> #E77D00 </td>
    <td> #DC9B2F </td>
</tr>
</table>










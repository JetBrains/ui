---
title: Built-in button
type: Subpage
subpageOf: Button
category: Controls
---

A built-in button is an icon placed inside an input control.
![]({{site.baseurl}}/images/built_in_button/input_browse.png)


## How to use

Place the built-in button inside the input control. Do **not** place the built-in button on the right of a control:
![]({{site.baseurl}}/images/built_in_button/outside.png)

To place a button inside a text field, use the `com.intellij.ui.components.fields.ExtendableTextField` class and
its `addExtension` method.

The shortcut for a built-in button is <kbd>Shift+Enter</kbd>.


## Types

### Browse
A browse button opens a dialog with the disk, a tree view or a table of values. 
Use a control with the browse icon for a file/folder path selected from the disk.
![]({{site.baseurl}}/images/built_in_button/input_browse.png)

An input field with browse button:
<div class="code-block__wrapper">{% highlight java %}com.intellij.openapi.ui.TextFieldWithBrowseButton
{% endhighlight %}</div> 

A combo box with browse button:
<div class="code-block__wrapper">{% highlight java %}ExtendableTextComponent.Extension browseExtension =
  ExtendableTextComponent.Extension.create(AllIcons.General.OpenDisk, AllIcons.General.OpenDiskHover,
                                         "Open file", () -> System.out.println("Browse file clicked"));

ComboBox<String> eComboBox = new ComboBox<>(STRING_VALUES);
eComboBox.setEditable(true);
eComboBox.setEditor(new BasicComboBoxEditor(){
  @Override
  protected JTextField createEditorComponent() {
    ExtendableTextField ecbEditor = new ExtendableTextField();
    ecbEditor.addExtension(browseExtension);
    ecbEditor.setBorder(null);
    return ecbEditor;
  }
});
{% endhighlight %}</div>

Do **not** place the button on the right of the control.
![]({{site.baseurl}}/images/built_in_button/browse_buttons.png)

### Expand field
If input text can be long and place is constrained, use built-in button to expand the control (`com.intellij.ui.components.fields.ExpandableTextField`):
![]({{site.baseurl}}/images/input_field/expandable_1.png)
![]({{site.baseurl}}/images/input_field/expandable_2.png)

Do **not** use the Show Viewer button instead. 
![]({{site.baseurl}}/images/built_in_button/input_expand.png)


### List values
Use a control with the table icon to select from the list of classes, methods or environment variables:
![]({{site.baseurl}}/images/built_in_button/input_table.png)

Use a combo box instead of the Variables button. This icon works as a combo box.
![]({{site.baseurl}}/images/built_in_button/variables_combobox.png)


### Add value
The Plus button works the same way as the Browse button, the only difference is that the selected value is added, instead of overwriting the existing one. Place the plus icon inside the control.
![]({{site.baseurl}}/images/built_in_button/plus.png)

### Copy, Info
<p></p>
<table>
<col width="130px">
    <tr>
        <td> <img src="{{site.baseurl}}/images/built_in_button/copy_button.png" style="margin-top: -5px"></td>
        <td> Do not use the Copy button, the content can be selected and copied using the Cmd/Ctrl+C shortcut or the context menu. </td>
    </tr>
    <tr>
        <td> <img src="{{site.baseurl}}/images/built_in_button/info_button.png" style="margin-top: -5px"></td>
        <td> Do not use the info button to open an external link. Use <a href="{{site.baseurl}}/principles/context_help">context help</a> instead.</td>
    </tr>
</table>
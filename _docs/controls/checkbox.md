---
title: Checkbox
codename: JCheckBox or JBCheckBox
category: Controls
---

![]({{site.baseurl}}/images/checkbox/checkbox_example.png)

## When to use

Use checkboxes for yes/no choices or for selecting several items in a group.

Do **not** use checkboxes if:
* Only one option in a group can be selected. Use a [radio button group]({{site.baseurl}}/controls/radio_button) instead.
* The behavior in the “off” state is unclear from the checkbox label. Use two radio buttons instead and label them accordingly.
![]({{site.baseurl}}/images/checkbox/when_to_use.png)
*With the checkbox, it is unclear how the setting works if it’s unchecked. With radio buttons, both states are labeled clearly.*


## How to use

### Label

A label accompanies each checkbox and is placed next to it.
![]({{site.baseurl}}/images/checkbox/checkbox_label.png)

If a label is long, split it into two lines. Use HTML formatting for that.
![]({{site.baseurl}}/images/checkbox/label_twoline.png)
<p class="noanchor" style="margin-top: -20px;"></p>
<div class="code-block__wrapper">{% highlight java %}
JCheckBox checkBox = new JCheckBox(
    "<html>Insert selected suggestion by  pressing space, dot,<br/>" +
    "or other context-dependent keys</html>");
{% endhighlight %}</div>

Avoid labels that take more than two lines. See recommendations on writing concise labels below.

If a checkbox appears in a table, place the label into the column header and do not repeat it on every row.
![]({{site.baseurl}}/images/checkbox/checkbox_table.png)
**Implementation**: Checkboxes are rendered in tables with `BooleanTableCellRenderer` and edited with `DefaultCellEditor(JCheckBox)` implementation. For any column that should be rendered as a checkbox, set both a renderer and editor for consistency. The type of data in the correspondent column of the `Table` model should either be `Boolean` or `String` containing `true` or `false`.

<div class="code-block__wrapper">{% highlight java %}
TableColumn col = table.getColumnModel().getColumn(...);
col.setCellEditor(JBTable.createBooleanEditor());
col.setCellRenderer(new BooleanTableCellRender());
{% endhighlight %}</div>


### Writing guidelines

Use sentence-style capitalization. 

Do not use ending punctuation.

Use the imperative form of verbs.
![]({{site.baseurl}}/images/checkbox/label_short.png)

Do not use negation in labels as it complicates understanding.  
**Exception**: "Do not show again" checkbox.
![]({{site.baseurl}}/images/checkbox/label_answeryes.png)

Make labels short and intelligible — see [Writing short and clear]({{site.baseurl}}/text/writing_short).


### Three-state checkbox

In a group of options, use the parent checkbox to show the status of its children.
![]({{site.baseurl}}/images/checkbox/indeterminate_checkbox.png)
*The parent checkbox in checked, indeterminate and unchecked states*
**Implementation**: The three-state checkbox is represented by the `ThreeStateCheckBox` class which represents its state with the `ThreeStateCheckBox.State` enum containing `SELECTED, NOT_SELECTED, DONT_CARE` states.

When the user clicks an indeterminate checkbox for the first time, the whole group becomes checked. The second click unchecks the whole group.

An indeterminate checkbox can also show the download status. An example with a remote repository:
![]({{site.baseurl}}/images/checkbox/indeterminate_status.png)
*Repositories “tools-base” and “contrib” are being loaded. When loading is finished, the indeterminate checkbox will be replaced with the checked checkbox if there are commits, or an unchecked checkbox if there are no commits.*
**Implementation**: In a table, the three-state checkbox is represented by `ThreeStateCheckBoxRenderer` that provides both `TableCellRenderer` and `TableEditor`. It accepts `Boolean` type in the column being supplied by the `TableModel` and becomes `DONT_CARE` when the value in the cell is null. Otherwise it becomes `SELECTED` for `Boolean.TRUE`, and `NOT_SELECTED` for `Boolean.FALSE`.


## Placement

If a checkbox depends on another control, e.g. an input field, follow the rules for [dependent controls]({{site.baseurl}}/principles/layout/#dependent-controls). Otherwise, follow the rules for [independent controls]({{site.baseurl}}/principles/layout/#independent-controls).

<!--
### Colors
<p class="noanchor"> The color keys can be used only in a UI theme plugin. </p>

<table>
 <col width="50%">
      <tr class="table-line">
         <td> Unchecked background </td>
         <td> Checkbox.Background.Default <br/>
              Checkbox.Background.Default.Dark </td>
     </tr>
     <tr class="table-line">
         <td> Checked background </td>
         <td> Checkbox.Background.Selected <br/>
              Checkbox.Background.Selected.Dark
         </td>
     </tr>
     <tr class="table-line">
         <td> Disabled background </td>
         <td> Checkbox.Background.Disabled <br/>
              Checkbox.Background.Disabled.Dark
         </td>
     </tr>
     <tr class="table-line">
         <td> Unchecked border </td>
         <td> Checkbox.Border.Default <br/>
              Checkbox.Border.Default.Dark 
         </td>
     </tr>
     <tr class="table-line">
         <td> Checked border </td>
         <td> Checkbox.Border.Selected <br/>
              Checkbox.Border.Selected.Dark 
         </td>
     </tr> 
     <tr class="table-line">
         <td> Disabled border </td>
         <td> Checkbox.Border.Disabled <br/>
              Checkbox.Border.Disabled.Dark 
         </td>
     </tr>
     <tr class="table-line">
          <td> Focused inner 1px border for unchecked state </td>
          <td> Checkbox.Focus.Thin.Default <br/>
               Checkbox.Focus.Thin.Default.Dark 
          </td>
      </tr>
      <tr class="table-line">
          <td> Focused inner 1px border for checked state </td>
          <td> Checkbox.Focus.Thin.Selected <br/>
               Checkbox.Focus.Thin.Selected.Dark
          </td>
      </tr>
      <tr class="table-line">
          <td> Focused outer 2px border </td>
          <td> Checkbox.Focus.Wide <br/>
               Checkbox.Focus.Wide.Dark
          </td>
      </tr>
      <tr class="table-line">
          <td> Checkmark fill </td>
          <td> Checkbox.Foreground.Selected <br/>
               Checkbox.Foreground.Selected.Dark 
          </td>
      </tr>
      <tr>
          <td> Disabled checkmark fill </td>
          <td> Checkbox.Foreground.Disabled <br/>
               Checkbox.Foreground.Disabled.Dark
          </td>
      </tr>             
</table>
-->
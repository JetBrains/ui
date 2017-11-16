---
title: Table
category: Controls
---

![]({{site.baseurl}}/images/table/table.png)

## When to use

Use Tables to display, enter or edit uniform sets of data or options. For example: VCS > Git > Show History, Settings > Appearence & Behavior > Path Variables,  Settings > Appearence & Behavior > File Colors. 

Use Tables:

* To compare data in the set, for example, in File Colors table it is convenient to compare file colors with one another and make sure that they are distinguishable:
   
    ![]({{site.baseurl}}/images/table/fileColors.png) 
* To search by all parameters in the data set, for example, in File History table it is possible to quickly scan table by date, author or commit message.
    
    ![]({{site.baseurl}}/images/table/history.png)
    

Do **not** use tables: 

* For hierarchical structures, use Tree View instead.
* When there are more than 4 options per entry, use Master-Detail layout instead. 
* When at least one of the options requires a multi-line control, for example, Text Area in Editor > Copyright > Copyright Profiles, use Master-Detail layout instead:

  ![]({{site.baseurl}}/images/table/master-detail.png)
  
## How to use

### Label

* The label is optional for tables.
* Add label if it is not clear from the dialog title or table header what is in the table. For example, table to configure filters for import and completion per-scope:

 ![]({{site.baseurl}}/images/table/label.png)

* Avoid label if it duplicates dialog title or table header. For example, there is no need in the label in JavaScript > Libraries table since Settings page title and the table context make it clear what is in the table:
 
 ![]({{site.baseurl}}/images/table/label-header.png)

* Add label if the control above can be mistaken for a table header:
 
 ![]({{site.baseurl}}/images/table/bytecode-version.png)
 
* Do **not** add label to explain the table behavior, use context help instead:
  
  <p class="label incorrect">Incorrect</p>
  
  ![]({{site.baseurl}}/images/table/label-help-header.png)
    
  <p class="label correct">Correct</p>
  
  ![]({{site.baseurl}}/images/table/label-help.png)
   
* Follow the rules for the Input Field:

  * The label should be short and descriptive.
  * Write label as a noun and end label with a colon.
  * Use sentence-style capitalization. 
  * If table is disabled, disable the label.
  * Make label text selectable.
 
* Always put label on top of the table.
* Do **not** use Group separator instead of Table label. The horizontal line is redundant here:

  <p class="label incorrect">Incorrect</p>
  
  ![]({{site.baseurl}}/images/table/label-group-incorrect.png)
    
  <p class="label correct">Correct</p>
  
  ![]({{site.baseurl}}/images/table/label.png)
  
### Header

The table header is a row at the top of the table that helps identify the rows below each of the headers. Follow the rules:

* Add header to the table if data in the table is not descriptive or ambiguous. For example, in Environment Variables table header is required, since it can be unclear from the content what is exactly in each column:

  <p class="label correct">Correct</p>
  
  ![]({{site.baseurl}}/images/table/header-needed-correct.png)
    
  <p class="label incorrect">Incorrect</p>
  
  ![]({{site.baseurl}}/images/table/header-needed-incorrect.png)
  
  Do **not** use header if all columns in the table have self-descriptive content, for example, names, dates, color previews, etc. For example, header in the File History is redundant:
  
  <p class="label correct">Correct</p>
  
  ![]({{site.baseurl}}/images/table/history.png)
    
   <p class="label incorrect">Incorrect</p>
  
  ![]({{site.baseurl}}/images/table/history-header-redundant.png)
  
* The labels in the header should be short and descriptive. Try to avoid headers which are too long for the content in the rows below. [How to write texts]({{site.baseurl}}/text/writing_short/).
* Write headers as nouns.
* Use title-style capitalization. 
* Fix header when scrolling the table. Header provides useful context on columns and should not be hidden.
* Align header with the content in the column below:

  ![]({{site.baseurl}}/images/table/fileColorsAlignment.png)
  

### Placeholder
Table placeholder is shown when there is no data yet in the table. Always put meaningful text here, do **not** put “Nothing to show”.

![]({{site.baseurl}}/images/table/empty-incorrect.png)

It is better to add reason why the table is empty and action to make table not empty:

![]({{site.baseurl}}/images/table/empty-correct.png)

Read more about [empty states]({{site.baseurl}}/principles/empty_state/).

### Toolbar

Add [toolbar]({{site.baseurl}}/controls/toolbar/) to provide actions which manipulate data in the table (add, remove, import, etc.):

![]({{site.baseurl}}/images/table/too-long-line.png)

### Sizes and placement

* Choose column width appropriate for the most common values, but no less than 65 px. Too wide for content columns make it harder to read the data between columns in the table.

  <p class="label correct">Correct</p>
  
  ![]({{site.baseurl}}/images/table/fileColors.png)
    
  <p class="label incorrect">Incorrect</p>
  
  ![]({{site.baseurl}}/images/table/fileColorsTooWide.png)
  
* Minimum table width is 350px. If after columns width adjustment table becomes too narrow add space to the last column on the right.
* Add space to the last column on the right if table loses right alignment with other tables next to it.
* If content doesn’t fit cell width, cut the text by the right border:
  
  ![]({{site.baseurl}}/images/table/too-long-line.png)

  Do **not** replace the end of the cell text with ellipsis, ellipsis can be confused with the content. Also ellipsis can form separate redundant column when content of the majority of the cells in one column doesn’t fit the width. 

  Do **not** add fade away gradient for cut out text, gradient adds to many shades to the text in the table and they attract attention.

* Do **not** put vertically distributed elements (for example, diagrams distributed between table rows or column of checkboxes) in the middle of the table, those elements are obstacles for easy scanning of the rows of data:

  <p class="label incorrect">Incorrect</p>
  
  ![]({{site.baseurl}}/images/table/history-graph-incorrect.png)
  
  place them closer to the sides instead:

  <p class="label correct">Correct</p>
  
  ![]({{site.baseurl}}/images/table/history.png)
  
* Right align numbers when it is useful to compare them by their length:

  ![]({{site.baseurl}}/images/table/leftAlignNumbers.png)

  Left align all the other content.
 
 
### Zebra striping and inner borders

Zebra striping is alternate highlighting of lines or rows in data tables or forms.

Use stripes:

* If there is a distinction in the data set that should be visible. For example, current branch is different from other branches thus highlighted differently:

  ![]({{site.baseurl}}/images/table/history-zebra.png)

Do **not** use stripes:  
* In a simple data set as guides to track content between columns. The alternating backgrounds create two distinct layers of focus in the tables when there is no difference between the alternating rows of information.

  <p class="label incorrect">Incorrect</p>
  
  ![]({{site.baseurl}}/images/table/table-zebra-incorrect.png)
  
  Default line height, [proper column width](#sizes-and-placement) and highlighting row on hover should provide enough guidance to track content. For example, the same table without stripes, with bigger line height and adjusted column width: 
  
  <p class="label correct">Correct</p>
  
  ![]({{site.baseurl}}/images/table/table.png)
  
  Bigger distance between groups of related information can also help in tracking content. Line height between groups should be increased by 4px for each group level.
  
  For example, File History table grouped by commit author and date:
  
  ![]({{site.baseurl}}/images/table/history-grouped.png)
  
Do **not** add borders between rows or columns, they add unnecessary noise to the table:

  <p class="label incorrect">Incorrect</p>
  
  ![]({{site.baseurl}}/images/table/inner-borders-incorrect.png)

  <p class="label correct">Correct</p>
  
  ![]({{site.baseurl}}/images/table/inner-borders.png)
  
### Interaction

* Highlight hovered row to assist in tracking content between columns:

  ![]({{site.baseurl}}/images/table/hover.png)
* Change background to the active selection for the selected row when table is focused:

  ![]({{site.baseurl}}/images/table/selection-active.png)
  
  And to inactive selection when focus is in other element:
 
  ![]({{site.baseurl}}/images/table/selection-inactive.png)
  
  Do **not** leave active selection color in the table when focus in some other element. It is otherwise confusing which element is currently active.

* Columns in the tables should be resizable to allow users set comfortable column width. Change mouse cursor to “Horizontal Resize” when hovering rectangular area between columns. Area is defined by table height and by 2px padding around columns divider. This makes it clear that columns can be resized even in a table without header:

  ![]({{site.baseurl}}/images/table/resize.png)

  Double click with “Horizontal Resize” cursor should auto resize the column to fit the content.

* If column sorting is available, display a sorted state in the column header. If the user clicks on a column that is already sorted, reverse the sort order and rotate the sort icon:

  ![]({{site.baseurl}}/images/table/sorting.png)
  
  Add sorting to the table if default sorting by one column may be insufficient to scan the data set. For example, in the table above it is useful to sort both by path and encoding to quickly find all paths with specific encoding or to find specific path in sorted list.
* If columns can be reordered change cursor to “Hand” on table header hover and allow to change the order by dragging the table header.
  
  In tables without header show drag icon on top of the column on hover:

  ![]({{site.baseurl}}/images/table/history-drag.png)
  
  Change cursor to “Hand” on drag icon hover:
  
  ![]({{site.baseurl}}/images/table/history-drag-cursor.png)
  
  Allow to drag column when cursor in anywhere over it.
  
  This makes it clear that columns can be dragged even if there is no header in the table.

* In disabled table grey out text, disable controls and interaction:

  ![]({{site.baseurl}}/images/table/disabled.png)

### Editing values  
If data in the cell is editable or configurable:

* Allow inplace editing of the content if data in the cell is text. If inplace editing is available it should be possible to invoke it on mouse click:

  ![]({{site.baseurl}}/images/table/inline-edit.png)
  
  Line with edited cell should be selected. Edited cell should have borders and their color should be the same as color for [Input field]({{site.baseurl}}/controls/input_field/) borders.
  
* Allow inplace editing for paths and add Browse button to the cell: 

  ![]({{site.baseurl}}/images/table/inline-edit-path.png)
 
* Show separate dialog for data which is not text, for example, color chooser for colors.
* Do **not** show separate dialog for editing simple data rows without compound preview (example of compound preview can be found in Editor > Language Injections). For example, there is no need in separate dialog in Appearance & Behaviour > Path Variables table, all editing could be done inplace.
* If it’s possible to enumerate less than 15 most likely or valid variants show combobox-like configurable with arrow-down icon and popup on click:

  ![]({{site.baseurl}}/images/table/combo.png)
  
  Show combo icon only on hover or when corresponding line is selected. A lot of arrows in one column form their own information layers and distract.
 
* If there are more than 15 variants show completion popup.
* Do **not** use full size combobox inside tables. It looks inconsistent and has too much details for the table, simple dropdown icon with variants popup is enough.
 
  <p class="label incorrect">Incorrect</p>
  
  ![]({{site.baseurl}}/images/table/combo-incorrect.png)

## Style  
### Sizes
<table>
<col width="60%">
<tr>
    <td> <p style="color: #999999; margin-left: 20px;">
         Column width (not including scrollbar)</p> </td>    
    <td> min 65  </td>         
</tr>

<tr>
    <td> <p style="color: #999999; margin-left: 20px;">
         Table width </p> </td>    
    <td> min 350 </td>         
</tr>

<tr>
    <td> <p style="color: #999999; margin-left: 20px;">
        Row height</p> </td>    
    <td> font size * 1,8 
         (default: 22)
    </td>         
</tr>
<tr>
    <td> <p style="color: #999999; margin-left: 20px;">
        Header height</p> </td>    
    <td> font size * 2,1 
         (default: 25)
    </td>         
</tr>
</table>

### Spacing
<table>
<col width="40%">
<tr>
    <td> <p style="color: #999999; margin-left: 20px;  margin-top: 30px;"> Label </p></td>    
    <td> <img src="{{site.baseurl}}/images/table/bytecode-version-mes.png" style="margin-left: 30px;">  </td>         
</tr>

<tr>
    <td> <p style="color: #999999; margin-left: 20px;  margin-top: 30px;">Column content </p></td>    
    <td> <img src="{{site.baseurl}}/images/table/columnMes.png" style="margin-bottom: 9px; margin-left: 40px;"> </td>         
</tr>

<tr>
    <td> <p style="color: #999999; margin-left: 20px; margin-top: 30px;"> Combo icon </p></td>    
    <td> <img src="{{site.baseurl}}/images/table/combo-mes.png" style="margin-bottom: 9px; margin-left: 40px;"> </td>         
</tr>
<tr>
    <td> <p style="color: #999999; margin-left: 20px; margin-top: 30px;"> Sorted column </p></td>    
    <td> <img src="{{site.baseurl}}/images/table/sorted-mes.png" style="margin-bottom: 9px; margin-left: 40px;"> </td>         
</tr>
</table>





 
  
  
  
  




  


  
 




  


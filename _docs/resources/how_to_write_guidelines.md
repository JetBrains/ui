---
title: How to write guidelines
category: Resources
---

This page describes the workflow and basic rules of writing articles for IntelliJ IDEA UI Guidelines.

## Workflow

Follow these steps if you want to add a new article to the guidelines:
1. Write an article in the Google doc.
2. Share the Google doc with designers team, so they can review and comment the document.
3. When all comments are resolved, send the Google doc to tech writers for grammar review. [Create ticket](https://youtrack.jetbrains.com/newIssue?project=DOC&clearDraft=true&c=Type+Task&c=Assignee+Anna.Gasparyan&c=Subsystem+IntelliJ+IDEA) in YouTrack project “Documentation”, subsystem “IntelliJ IDEA”, auto-assigned to Anna Gasparyan.
4. After the review, the article can be add to the official guidelines. Follow the instructions on [https://github.com/JetBrains/ui](https://github.com/JetBrains/ui).
4. Contact developers to add Code Snippets to the article.

## Text

The text should be short and clear. Follow the rules:

### Grammar

<table style="font-size:16px">
<col width="50%">
<tr>
    <td> Use present tense.</td>
    <td style="font-style:italic"> A progress bar <font color="#18B04B">informs </font> user about the progress of a lengthy operation. </td>
</tr>
<tr>
    <td> Write in the active voice. </td>
    <td style="font-style:italic"> Progress bar <font color="#FF001B">is shown</font>.<br /> Progress bar <font color="#18B04B">appears</font>. </td>
</tr>
<tr>
    <td> Avoid unnecessary modal verbs. </td>
    <td style="font-style:italic"> Label <font color="#FF001B">should use</font> sentence-style capitalization.<br /> <font color="#18B04B">Use</font> sentence capitalization in labels. </td>
</tr>
<tr>
    <td> Use imperatives. </td>
    <td style="font-style:italic"><font color="#FF001B">The cursor changes</font> to the pointing hand.<br /> <font color="#18B04B">Change the cursor</font> to the pointing hand. </td>
</tr>
<tr>
    <td> Do not address the reader. </td>
    <td style="font-style:italic"> Use combobox if..., Follow guidelines... </td>
</tr>
<tr>
    <td> When describing user behavior, write: </td>
    <td style="font-style:italic"> A <font color="#18B04B"> user looks </font> forward to what will appear after completion. </td>
</tr>
<tr>
    <td> Avoid bracketed text, it complicates reading. If information is important — put it in a new sentence, if not — remove it. </td>
    <td style="font-style:italic">Provide a header <font color="#FF001B">(bold)</font> for each progress. <br /> Provide a <font color="#18B04B">bold</font> header for each progress. </td>
</tr>
</table>


### Contents

* Omit common introductory phrases.

* Write one idea per sentence.

* Split the text to subsections and short paragraphs.

* When giving a recommendation, explain why it is useful.  
    * Bad: *If a process is started by a user, provide a notification when the process finishes*.  
    * Good: *If a process is started by a user, provide a notification when the process finishes. This way the user, if switched to another task while waiting for a process to finish, would know they can return back and see the results*.

*  Add links if you refer to other sections. Links should be descriptive, do not use *Click here* links.

### Word-level recommendations

<table style="font-size:16px">
<col width="50%">
<tr>
    <td> <i>Would be</i> — use <i>is</i> instead, when possible. </td>
    <td style="font-style:italic"> Displaying indicator <font color="#FF001B">would be</font> distracting.<br />Displaying indicator <font color="#18B04B">is</font> distracting. </td>
</tr>
<tr>
    <td> <i>Then</i> — omit if possible. </td>
    <td style="font-style:italic"> If a process is started by the user, <font color="#FF001B">then</font>. provide notification.</td>
</tr>
<tr>
    <td> <i>He/she</i> — replace with <i>they</i>. </td>
    <td style="font-style:italic"> If a process lasts less than 1 second, the user won’t be able to read the process name and showing it would just distract <font color="#18B04B">them</font>.</td>
</tr>
<tr>
    <td> Select a word with <b>bold</b> to emphasise or with <i>italic</i> to quote. </td>
</tr>
</table>


## Structure

The article structure can vary depending on whether control, component or principle is described. The general recommendations are provided below.

### Introduction paragraph

In the first paragraph describe a control, component or principle and provide an illustration. If there are different types of the control, describe all of them.

Provide a code snippet:

<div class="code-block__wrapper">#Code Snippet example
layerB.borderRadius = 45
</div>

If the code snippet is too big, put it at the end of the article and provide a link.

### When to use
<aside class="note sideblock _visible">Use tips for links to additional materials, sources, useful facts and examples.</aside>
Describe when to use the control or when to apply the principle.

If the control is often used incorrectly, then describe cases when the control should not be used.

### How to use

Provide guidelines on how to use the control, component or principle. For control it can be: how the control behaves, wording and labeling, general recommendations on sizes, how group of controls looks and works, how to use the control with other controls and other specific recommendations.

Use bulleted lists when the order of points does not matter, and numbered list when they do.

### Style

Use bulleted lists when the order of points does not matter, and numbered list when they do.

Describe common properties in the following format:

Font-style: System  
Font-size: 13px

Provide images with insets and colors (see “Images” section below).

## Images

Illustrate all statements with interface examples. Use **default Mac OS** or **Windows** theme as the main themes for illustrations. Add a section with examples for Darcula theme in the Google doc, but do not move it to the official guidelines.

Provide an image description ends with colon before the image:
![]({{site.baseurl}}/images/how_to_write_guidelines/example_1.png)

Or under the image without period at the end:

![]({{site.baseurl}}/images/how_to_write_guidelines/example_1.png)
*Image description*

Several not wide images can be placed in two or three columns:
![]({{site.baseurl}}/images/how_to_write_guidelines/example_2.png)

If there is a set of images that illustrates the sequence of states, place them horizontally or vertically and link with an arrow:
![]({{site.baseurl}}/images/how_to_write_guidelines/example_3.png)

If there is a common mistake in UI, provide Correct/Incorrect images:
![]({{site.baseurl}}/images/how_to_write_guidelines/corret_incorrect.png)

The “Correct/Incorrect” can be placed above the image or on the left:
![]({{site.baseurl}}/images/how_to_write_guidelines/correct_incorrect_vertical.png)

If there is one image and it’s not big, cross out the image with 1px line instead of “Incorrect” header:
![]({{site.baseurl}}/images/how_to_write_guidelines/incorrect.png)

Use html to add Correct/Incorrect label:
<div class="code-block__wrapper">< p class="label incorrect">Incorrect</p>
</div>

![]({{site.baseurl}}/images/how_to_write_guidelines/correct_incorrect_sizes.png)

Save all images in two sizes: example.png and example@2x.png.


### Callouts

All text on images should be horizontally oriented.

Font-style: Gotham Book  
Font-size: 14px  
Line height: 20px  
Max width: 300px  
Color:  <span style="color:#999999">#999999</span>  

Place callouts around the image at a distance of at least 30px:
![]({{site.baseurl}}/images/how_to_write_guidelines/callout_1.png)

Or use leader lines to sign specific items on the image:
![]({{site.baseurl}}/images/how_to_write_guidelines/callout_2.png)

**Leader line** is 1px line, color: <span style="color:#000000">#000000</span> op. 0.3.

Line is vertical or horizontal. It can be bent once if there is not enough space for the text. Do not intersect lines.

Leave 1px between the line and the element to which it refers or place line over the element:
![]({{site.baseurl}}/images/how_to_write_guidelines/leader_lines_1.png)

Lines go beyond the image by 20px:
![]({{site.baseurl}}/images/how_to_write_guidelines/leader_lines_2.png)

Text position:
![]({{site.baseurl}}/images/how_to_write_guidelines/leader_lines_3.png)

If line is horizontal, center it with the first comment line.

### Colors, insets and sizes

Use the Hex Code format to specify colors:
![]({{site.baseurl}}/images/how_to_write_guidelines/colors.png)

Use colored rectangles to specify sizes inside the element and lines to specify external sizes:
![]({{site.baseurl}}/images/how_to_write_guidelines/insets.png)

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span style="line-height:2;">Main rectangle: <span style="color:#DA769D">#DA769D</span> op. 0.4.  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Secondary rectangle: <span style="color:#6D9AE6">#6D9AE6</span> op. 0.4.  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Text and line: <span style="color:#BD136B">#BD136B</span>, <span style="color:#0054C0">#0054C0</span>.   
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Distance between image and line, between line and text is 5px.  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Align all sizes on the right.  
</span>
<br>

Use line to show that text is aligned with an element:
![]({{site.baseurl}}/images/how_to_write_guidelines/alignment.png)   

Specify the element sizes in the following format:
![]({{site.baseurl}}/images/how_to_write_guidelines/sizes.png)

For text labels, specify insets from the bounding box:

![]({{site.baseurl}}/images/how_to_write_guidelines/boundingBox.png)

![]({{site.baseurl}}/images/how_to_write_guidelines/insetsText.png)

Parameters for regular labels that make bounding boxes in Sketch the same size as in Java (already used in Sketch libraries symbols):
<span style="line-height:2;">   
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; *Mac OS X*: SF UI Text Medium / 13 size / –0.1 character spacing / 16 line spacing  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; *Windows*: Segoe UI Regular / 12 size / 16 line spacing    
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; *Linux*: Ubuntu Regular / 15 size / 18 line spacing  
</span>

If unsure about a bounding box size for other font sizes, check with UI Inspector.  
<br>

If there are many properties for different themes, put them in the table:
![]({{site.baseurl}}/images/how_to_write_guidelines/themes.png)

## Code snippet
<div class="code-block__wrapper">#Code Snippet example
layerB.borderRadius = 45
</div>





---
title: Tooltip
category: Controls
type: Subpage
subpageOf: Context help
---

A tooltip shows an action name or provides useful information about an action or a setting.

![]({{site.baseurl}}/images/tooltip/01_top_pic.png)

## When to use

There are three types of tooltips:

<table>
<col width="45%">
  <tr>
    <td>
        <strong>Action </strong><br/>
        Shows an action name or label for&nbsp;icons and unlabeled controls, and&nbsp;a&nbsp;shortcut if available
    </td>
    <td>
        <img src="{{site.baseurl}}/images/tooltip/02_regular_tooltip.png" />
    </td>
  </tr>
  <tr>
    <td>
        <strong>Action help </strong><br/>
        Shows help text for icons and unlabeled controls in addition to&nbsp;an&nbsp;action name or label
    </td>
    <td>
        <img src="{{site.baseurl}}/images/tooltip/03_action_help_tooltip.png" />
    </td>
  </tr>
  <tr>
    <td>
        <strong>Help</strong><br/>
        Shows help text for all other controls
    </td>
    <td>
        <img src="{{site.baseurl}}/images/tooltip/03_help_tooltip.png" />
    </td>
  </tr>
</table>


All icons and unlabeled controls should have an **Action** or an **Action help** tooltip.

Use **Action help** and **Help** tooltips according to the [Context help]({{site.baseurl}}/principles/context_help) rules.

## How to use

### Required and optional information

Always show the required information in a tooltip:

<table>
<col width="330 px">
  <th class="table-line"> Tooltip </th>
  <th class="table-line"> Required info </th>
  <th class="table-line"> Optional </th>
  <tr class="table-line">
    <td>
        Action <br/>
        <img src="{{site.baseurl}}/images/tooltip/08_regular_tooltip.png" style="margin-left: -14px; margin-top: 10px"/>
    </td>
    <td>
        Action name
    </td>
    <td>
        Shortcut
    </td>
  </tr>
  <tr class="table-line">
    <td>
        Action help <br/>
        <img src="{{site.baseurl}}/images/tooltip/08_toolbar_help_tooltip.png" style="margin-left: -14px; margin-top: 10px"/>
    </td>
    <td>
        Action name <br/>
        Help text
    </td>
    <td>
        Shortcut <br/>
        Link
    </td>
  </tr>
  <tr>
    <td>
        Help <br/>
        <img src="{{site.baseurl}}/images/tooltip/08_help_tooltip.png" style="margin-left: -14px; margin-top: 10px"/>
    </td>
    <td>
        Help text <br/>
        <span style="color: #999999">No action name or label because it is already shown in&nbsp;the UI.</span>
    </td>
    <td>
        Shortcut <br/>
        Link
    </td>
  </tr>
</table>


<p class="noanchor"><strong>Implementation</strong></p>

<p class="noanchor">Action</p>

<div class="code-block__wrapper">{% highlight java %}
new HelpTooltip().setTitle("Commit").setShortcut("⌘K").installOn(component);
{% endhighlight %}</div>

<p class="noanchor">Action help</p>

<div class="code-block__wrapper">{% highlight java %}
new HelpTooltip().setTitle("Switch Task").setDescription("Tasks are stored locally only. Connect your issue tracker to link your commits with the corresponding issues.").setShortcut("⌥⇧T").setLink("Managing tasks", ()->{}).installOn(component);
{% endhighlight %}</div>

<p class="noanchor">Help</p>

<div class="code-block__wrapper">{% highlight java %}
new HelpTooltip().setDescription("Useful when moving constants (static final fields) to an enum type in cases when the enum type has a constructor with one parameter of the suitable type.").setShortcut("⌘M").setLink("Example", ()->{}).installOn(component);
{% endhighlight %}</div>

<p class="noanchor"><br/></p>

Show a shortcut if an action or a setting has one. Do not show a single shortcut in a tooltip.

![]({{site.baseurl}}/images/tooltip/09_tooltip_only_incorrect.png)

Provide a link to a source that can further explain the action or the setting. A link can navigate to a place in the IDE or to an external help article.

<table>
  <tr>
    <td>
        <img src="{{site.baseurl}}/images/tooltip/10_tooltip_local_link.png" style="margin: 10px 0 0 6px"/>
    </td>
    <td>
        <img src="{{site.baseurl}}/images/tooltip/10_tooltip_ext_link.png" style="margin: 10px 0 0 6px"/>
    </td>
  </tr>
  <tr>
    <td style="padding-top: 0">
        <span style="color: #999999; margin-left: 20px">Local link</span>
    </td>
    <td style="padding-top: 0">
        <span style="color: #999999; margin-left: 20px">External link</span>
    </td>
  </tr>
</table>


Do not show just an action name and a link to a help article. Provide help text so that the user does not need to switch to a web browser. 

![]({{site.baseurl}}/images/tooltip/11_link_only_incorrect.png)

### Text length and formatting

The text width in an action tooltip is not limited. The text width in a help tooltip is limited by 250 px.

Show no more than 10 lines of help text. If the text does not fit, leave only the essential information and add a link to a help article.

<p class="label incorrect">Incorrect</p>

![]({{site.baseurl}}/images/tooltip/tooltip_long_text_incorrect.png)

<p class="label correct">Correct</p>

![]({{site.baseurl}}/images/tooltip/tooltip_long_text_correct.png)

Text style formatting:

* Avoid using style formatting in the help text. Usually, the text is short and no bold or italics are needed.
<p class="label incorrect">Incorrect</p>
![]({{site.baseurl}}/images/tooltip/tooltip_no_styling_incorrect.png)

<p class="label correct">Correct</p>
![]({{site.baseurl}}/images/tooltip/tooltip_no_styling_correct.png)

* Use formatting for code, console commands or parameters. Use HTML tags. Enclosing the text in `<html></html>` tags is not needed.
![]({{site.baseurl}}/images/tooltip/tooltip_code_styling.png)
*Editor breadcrumbs*

* Action name, shortcut and link do not allow HTML tagging.

If the help text is longer than 5 lines, separate the text into paragraphs with the `<p>` tag. The `<p>` tag adds vertical space between paragraphs to visually separate them. Do not use the `<br/>` tag as it does not add space.

![]({{site.baseurl}}/images/tooltip/12_tooltip_paragraph.png)

<div class="code-block__wrapper">{% highlight java %}
String LONG_TEXT1 = "A new overloading method will be created with the new parameter added to this method definition.<p/>The method with the old signature will be kept and the call to the new method will be added to it. The necessary value or expression will be passed to the new method call.";

new HelpTooltip().setDescription(*LONG*_TEXT).installOn(component);
{% endhighlight %}</div>


### Writing guidelines

Make the help text [short and informative]({{site.baseurl}}/text/writing_short).

In a help tooltip, do not repeat an action or a setting name in the text.

![]({{site.baseurl}}/images/tooltip/13_tooltip_dont_repeat_setting.png)

### Question mark icon for help tooltips

Always use the help tooltip with the question mark icon. Without the icon, it is unclear which component has help information.

Always place the question mark icon to the right of the corresponding UI component.

<p class="noanchor">Examples with different controls:</p>

<p class="noanchor" style="margin-left: 20px">Checkbox</p>

![]({{site.baseurl}}/images/tooltip/04_question_icon_tooltip.png)

<p class="noanchor" style="margin-left: 20px">Tree item</p> 

![]({{site.baseurl}}/images/tooltip/05_question_icon_tree.png)

<p class="noanchor" style="margin-left: 20px">Combo box</p>

![]({{site.baseurl}}/images/tooltip/14_placement_labeled_input.png)

<p class="noanchor" style="margin-left: 20px">Group header</p>

![]({{site.baseurl}}/images/tooltip/15_placement_group_header.png)

<p class="noanchor" style="margin-left: 20px">Settings breadcrumbs</p>

![]({{site.baseurl}}/images/tooltip/16_placement_settings_header.png)

<p class="noanchor" style="margin-left: 20px">Stand-alone button not at the bottom of a dialog</p>

![]({{site.baseurl}}/images/tooltip/07_help_tooltip_button.png)

<p class="noanchor" style="margin-left: 20px"><strong>Exception:</strong> do not use the help tooltip with buttons at a dialog’s bottom. Put the information into the help article that is opened with the question mark button in the bottom left corner.</p>

<p class="label incorrect">Incorrect</p>

![]({{site.baseurl}}/images/tooltip/06_help_tooltip_button_incorrect.png)

## Style

<img src="{{site.baseurl}}/images/tooltip/tooltip_style.png" style="margin-left: 0">

## Control’s built-in behavior 

All tooltips appear on hover (not on click), including the help tooltip with the question mark icon.

All tooltips are hidden when the mouse cursor leaves the area that triggers the tooltip. 

If the mouse cursor stays in the tooltip trigger area, tooltips are also hidden after a timeout specified in the table below.

<table>
<col width="115 px">
<col width="225 px">
  <tr class="table-line">
    <td>
        <strong>Tooltip</strong>
    </td>
    <td>
        <strong>Appears after</strong>
    </td>
    <td>
        <strong>Hides after</strong> <br/>
        <span style="color: #999999">If cursor is in the tooltip trigger area</span>
    </td>
  </tr>
  <tr>
    <td>
        Action
    </td>
    <td>
        300 milliseconds <br/>
        <span style="color: #999999">ide.tooltip.initialReshowDelay registry key </span>
    </td>
    <td>
        10 seconds <br/>
        <span style="color: #999999">ide.helptooltip.regular.dismissDelay</span>
    </td>
  </tr>
  <tr>
    <td>
        Action help
    </td>
    <td>
    </td>
    <td>
        30 seconds <br/>
        <span style="color: #999999">ide.helptooltip.full.dismissDelay</span>
    </td>
  </tr>
  <tr>
    <td>
        Help
    </td>
    <td>
    </td>
    <td>
        Never hides
    </td>
  </tr>
</table>


If a tooltip has a link, it is possible to move the mouse cursor over the tooltip. The tooltip does not close automatically when the cursor is over it.

Tooltips are positioned automatically depending on the mouse cursor location.


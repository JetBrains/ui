---
title: Context help
category: Controls
type: GroupHeader
---

Use context help to briefly explain how a functionality works if it is not clear from the UI and the application behavior. Provide full description of the functionality in [product web help](https://www.jetbrains.com/help/idea/).

There are three ways to show context help:
* in a [help tooltip]({{site.baseurl}}/controls/tooltip)
* as [inline help text]({{site.baseurl}}/controls/inline_help_text)
* in an [empty state]({{site.baseurl}}/principles/empty_state)

<p class="noanchor">This article explains when to use the first two. For when to use the empty state, see the <a href="{{site.baseurl}}/principles/empty_state">Empty state</a>.</p> 


## Inline text or a tooltip

Use **inline help text** in settings dialogs:
* Settings are rarely changed. Users may forget what a setting does when they use it the next time, so it makes sense to provide additional information straight away.
* Settings dialogs are usually not constrained in space. In most cases it is possible to fit in a help text.

![]({{site.baseurl}}/images/context_help/09_use_inline_help_text.png)

Use a **help tooltip** if:
* A dialog is often used. The more often a person uses an interface, the more likely they are to remember what each option does. 

![]({{site.baseurl}}/images/context_help/10_use_help_tooltip.png)
*A refactoring dialog is used more often than a settings dialog. A help tooltip is less distracting than an inline help text.*

* There is no space for an inline text.
<img src="{{site.baseurl}}/images/context_help/11_no_space_in_settings.png" style="margin-top: 10px; margin-bottom: 60px">

* The control that needs explanation is an icon or does not have a label.
![]({{site.baseurl}}/images/tooltip/03_action_help_tooltip.png)


## When to use context help

Explain complex behavior that a short action or a setting name cannot convey clearly.

<img src="{{site.baseurl}}/images/tooltip/04_question_icon_tooltip.png" style="margin-top: 30px; margin-left: 30px">

<img src="{{site.baseurl}}/images/inline_help_text/02_text_size.png" style="margin-top: 30px; margin-bottom: 60px; margin-left: 30px">

Explain IDE-specific entities.

<img src="{{site.baseurl}}/images/context_help/01_IDE_specific.png" style="margin-top: 30px; margin-bottom: 60px; margin-left: 30px">

Provide input format requirements and examples.

<img src="{{site.baseurl}}/images/context_help/02_formatting_example.png" style="margin-top: 30px; margin-bottom: 60px; margin-left: 30px">

Suggest alternative ways.

<img src="{{site.baseurl}}/images/context_help/03_alternative_ways.png" style="margin-top: 30px; margin-bottom: 60px; margin-left: 30px">

Warn about possible problems.

<img src="{{site.baseurl}}/images/context_help/04_possible_problems.png" style="margin-top: 30px; margin-bottom: 60px; margin-left: 30px">

Explain limitations.

<img src="{{site.baseurl}}/images/context_help/05_limitations.png" style="margin-top: 30px; margin-bottom: 60px; margin-left: 30px">

Provide quick navigation to related settings.

<img src="{{site.baseurl}}/images/inline_help_text/04_link_internal.png" style="margin-top: 30px; margin-bottom: 60px; margin-left: 30px">


## When not to use

Do not use context help to explain how the user interface works. If you need to explain that, consider redesigning the UI.

<p class="label incorrect">Incorrect</p>

![]({{site.baseurl}}/images/context_help/06_explain_how_ui_works.png)

Do not explain common actions and entities. Show a regular tooltip with an action name and shortcut in this case.

<table>

  <tr>
    <td>
        <p class="label incorrect">Incorrect</p>
    </td>
    <td>
        <p class="label correct">Correct</p>
    </td>
  </tr>
  <tr>
    <td>
          <img src="{{site.baseurl}}/images/context_help/07_explain_obvious_incorrect.png" />
    </td>
    <td>
        <img src="{{site.baseurl}}/images/context_help/07_explain_obvious_correct.png" />
    </td>
  </tr>
</table>


Do not explain each option. Too many help icons or too much inline text make a dialog cluttered and harder to navigate visually. If all options need to be explained, consider rewriting the labels to make them clearer. 

<p class="label incorrect">Incorrect</p>
![]({{site.baseurl}}/images/context_help/08_explain_all_options.png)

## How to use

See [Inline help text]({{site.baseurl}}/controls/inline_help_text) and [Tooltip]({{site.baseurl}}/controls/tooltip).


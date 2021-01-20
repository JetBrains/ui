---
title: Got It tooltip
codename: com.intellij.ui.GotItTooltip
category: Controls
---

A Got It tooltip informs users about a new or changed feature and gives basic information about it.

![]({{site.baseurl}}/images/got_it_tooltip/01_got_it_example.png)

## When to use

Point to small UI controls that can be missed among other information in the screen.

![]({{site.baseurl}}/images/got_it_tooltip/02_new_feature.png)
*After method or parameter names are edited, the Inplace Refactoring icon appears.*

![]({{site.baseurl}}/images/got_it_tooltip/03_new_plugin.png)
*After the "Code With Me" plugin is installed, a drop-down menu appears on the toolbar.*

Explain behavior that is not clear from the UI.

![]({{site.baseurl}}/images/got_it_tooltip/04_explain_how_to_use.png)
*When extracting a method, users can change only the method name in the blue box. The tooltip explains where to change the order of parameters in the parentheses and other properties of a method.*

Suggest keyboard interactions.

![]({{site.baseurl}}/images/got_it_tooltip/05_suggest_keyboard_actions.png)
*The inlay with options after the blue box is a new control. The tooltip explains how to use it with the keyboard.*

Explain how to revert to the old UI in case of significant UI changes.

![]({{site.baseurl}}/images/got_it_tooltip/06_suggest_rollback.png)
*The tooltip explains how to revert to a new experimental UI. Only users who switched to the new UI can see it.*

Do **not** use the tooltip if there is no space to attach it. Instead, use a [banner]({{site.baseurl}}/controls/banner) in a dialog or a [notification]({{site.baseurl}}/controls/toast) in the main window.

![]({{site.baseurl}}/images/got_it_tooltip/07_got_it_banner.png)

![]({{site.baseurl}}/images/got_it_tooltip/08_got_it_notification.png)


## How to use

![]({{site.baseurl}}/images/got_it_tooltip/09_required_and_optional_information.png)

Always add the body text.

Add a header if the body text is 2 lines and more. A short header can quickly explain what this tooltip is about.

![]({{site.baseurl}}/images/got_it_tooltip/10_header.png)

Add a shortcut, if the tooltip describes a single action that has a shortcut.

![]({{site.baseurl}}/images/got_it_tooltip/11_shortcut.png)

Implementation:
<div class="code-block__wrapper">{% highlight java %}
val GOT_IT_TEXT = "Learn the most useful shortcuts and essential IDE features interactively";
val shortcut = ...;
val tooltip = GotItTooltip("ide.features.trainer", GOT_IT_TEXT, project)
              .withHeader("IDE features trainer");
              .withShortcut(shortcut);
{% endhighlight %}</div>


### Link
Add a local link if users might want to revert changes in a feature or configure it.

![]({{site.baseurl}}/images/got_it_tooltip/12_link_action.png)

<div class="code-block__wrapper">{% highlight java %}
new GotItTooltip("some.id", "Show output result in the editor", project)
    .withLink("Disable for all files", this::actionMethodReference);
{% endhighlight %}</div>


Add an external link if there is a help source that can further explain the functionality.

![]({{site.baseurl}}/images/got_it_tooltip/13_link_help.png)

<div class="code-block__wrapper">{% highlight java %}
new GotItTooltip("some.id", GOT_IT_TEXT, project)
    .withBrowserLink("How to use", URL("https://www.jetbrains.com/howtouse"));
{% endhighlight %}</div>

Do <b>not</b> add more than one link.


### Text length and formatting

Show no more than 5 lines of body text. If the text does not fit, leave only the essential information and add a link to a help article.

Use sentence case both for the header and body text, and follow the [punctuation rules]({{site.baseurl}}/text/punctuation).

Make the help text [short and descriptive]({{site.baseurl}}/text/writing_short).

Avoid using style formatting. It makes the tooltip harder to read.
<table>
<col width="50%">
  <tr>
    <td> 
        <p class="label incorrect" style="margin-top: 0">Incorrect</p>
        <img style="margin-left: 0; margin-bottom: 0;" src="{{site.baseurl}}/images/got_it_tooltip/14_formatting_incorrect.png" />
    </td>
    <td> 
        <p class="label correct" style="margin-top: 0">Correct</p>
        <img style="margin-left: 0; margin-bottom: 0;" src="{{site.baseurl}}/images/got_it_tooltip/14_formatting_correct.png" />
    </td>
  </tr>
</table>


### Location

Do **not** cover the information the user is currently working with.

<p class="label incorrect">Incorrect</p>
![]({{site.baseurl}}/images/got_it_tooltip/15_location_incorrect.png)

<p class="label correct">Correct</p>
![]({{site.baseurl}}/images/got_it_tooltip/15_location_correct.png)

<p class="noanchor">
<b>Implementation.</b> See four predefined point providers in the <code>GotItTooltip</code> class. 
</p>
<div class="code-block__wrapper">{% highlight java %}
new GotItTooltip("some.id", "You can rename usages", project)
    .show(gutterComponent, GotItTooltip.TOP_MIDDLE)
{% endhighlight %}</div>


### Timeout

Consider adding a timeout if:
* The text is no longer than 10 words.
* The tooltip appears at the place at which the user is currently looking.
* There is no link in the tooltip.

![]({{site.baseurl}}/images/got_it_tooltip/05_suggest_keyboard_actions.png)
*The Got It tooltip has a timeout because the text is short, the user has just started the Rename refactoring, and is very likely looking at this place.*

<p class="noanchor">
Note that adding a timeout automatically hides the Got It button.<br/><br/>

<b>Implementation.</b> Default timeout duration is 5 seconds. A custom duration can be set:
</p>
<div class="code-block__wrapper">{% highlight java %}
new GotItTooltip("refactorings", "Press Tab to show options", project)
    .withTimeout(3000)
{% endhighlight %}</div>


### Versioning

If a tooltip appears automatically after the IDE starts, tie it to the IDE version. Due to the technical limitations, tooltip counters might be reset when the IDE version is updated, and the users might see the same tooltips again.

If a tooltip is triggered by an action or plugin installation, do not tie them to the current IDE version. In this case, users might miss a tooltip if they are using this functionality or plugin for the first time in the next IDE version.


## Built-in behavior

By default, a tooltip is shown only once per user.

The tooltip disappears when:
* Esc is pressed
* User clicks any place outside the tooltip

The default timeout duration is 5 seconds.

If several tooltips appear on application start, they are shown one by one.

Text width is 280 px by default. The tooltip width adjusts automatically to make the right margin 16 px.

![]({{site.baseurl}}/images/got_it_tooltip/16_width_custom.png)

![]({{site.baseurl}}/images/got_it_tooltip/17_width_adjusted.png)

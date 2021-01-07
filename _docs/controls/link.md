---
title: Link
codename: ActionLink, DropDownLink
category: Controls
---
![]({{site.baseurl}}/images/link/adjust-colors.png)

## When to use

Use a regular link for navigation between pages of the same window.   
![]({{site.baseurl}}/images/link/deployment-server.png)
*This option is in the Settings dialog. “Configure servers” opens another page of the same dialog.*
![]({{site.baseurl}}/images/link/color-scheme-by-scope.png)
*Do not use a button to navigate to another page of the same window.*    

Use an external link for navigation to web resources. See below for the [external link icon]({{site.baseurl}}/controls/link/#external-link-icon).
![]({{site.baseurl}}/images/link/BOM.png)

Use a regular or [drop-down link]({{site.baseurl}}/controls/link/#drop-down-link) for secondary actions in packed or small UI areas.
![]({{site.baseurl}}/images/link/reset-link.png)
*The "Reset" action is a link for two reasons: <br>1) the action appears only when the default value in the field is changed and reverting to a&nbsp;default is considered a rare scenario; <br>2) a lightweight link fits better than a button in this busy layout.*

Do **not** use links for primary actions or when a UI is not constrained. Use a [button]({{site.baseurl}}/controls/button/) or a [drop-down list]({{site.baseurl}}/controls/drop_down/) instead. These controls can be selected from the keyboard and are bigger and easier to click.
<p class="label incorrect">Incorrect</p> ![]({{site.baseurl}}/images/link/adroid-sdk-incorrect.png)        
<p class="label correct">Correct</p> ![]({{site.baseurl}}/images/link/adroid-sdk-correct.png)
*Even though the “Edit” action is not primary, there is plenty of space to place a button.*


## How to use

### Writing guidelines

Use sentence capitalization.
 
Add an ellipsis to a button-link if it opens another UI area where input is possible. See examples for the [Button]({{site.baseurl}}/controls/button/#button_ellipsis).

Do not use words like “navigate” or “click here”. A link already implies navigation or clicking:
![]({{site.baseurl}}/images/link/proxy-settings.png)
![]({{site.baseurl}}/images/link/download-drivers.png)

When possible, replace “Learn more” and other generic phrases with more informative ones.
![]({{site.baseurl}}/images/link/closure-linter.png)


### Link as a part of text
A link can be a part of a checkbox or radio button label or of any stand-alone text, like text in an [empty state]({{site.baseurl}}/principles/empty_state/) or in [context help]({{site.baseurl}}/principles/context_help/):
![]({{site.baseurl}}/images/link/use-color-scheme-font.png)
![]({{site.baseurl}}/images/link/learn-what-is-logged.png)
Make a link the minimum phrase that is enough to understand what will happen without reading the whole text:
![]({{site.baseurl}}/images/link/long-link.png)
*"What is logged" is enough to understand what information will be opened.*


### Link in a tree or table    
Use a link as a secondary action for some items of a tree or table:
![]({{site.baseurl}}/images/link/JSHint.png) 

If an action is needed for all items of a tree or table: 
* Add an [icon button]({{site.baseurl}}/controls/icon_button/) to a toolbar. 
* For a list of choices, add a separate table column of drop-down cells (see [Table]({{site.baseurl}}/controls/table/#editing-values/)).
* If a link in every tree or table line has meaningful formatting, leave it:
![]({{site.baseurl}}/images/link/multirepo-push.png)
*Links in the “Push Commits” window have the format that helps understand the relation between them: “[remote repository] : [branch]”. Moving these links elsewhere would break this meaning.*


### External link icon
Always add the arrow icon for an external link. The icon shows that the user will switch to a browser and lose the current context.
![]({{site.baseurl}}/images/link/BOM.png)

<div class="code-block__wrapper">{% highlight java %}ActionLink externalLink = new ActionLink("External link", event -> {
    BrowserUtil.browse("http://google.com");
});
externalLink.setExternalLinkIcon();{% endhighlight %}</div>

An exception is a help topic link in [empty states]({{site.baseurl}}/principles/empty_state/). The help icon already hints that this is an external help resource so the arrow icon is unnecessary.
![]({{site.baseurl}}/images/link/database-tw-segment.png)


### Drop-down link

Drop-down links show a [context menu]({{site.baseurl}}/components/context_menu/) or a [popup]({{site.baseurl}}/components/popup/). Use `com.intellij.ui.components.DropDownLink` to implement a drop-down link.
![]({{site.baseurl}}/images/link/commit-configure.png)
![]({{site.baseurl}}/images/link/live-templates.png)


## Placement
Lay out button-links as buttons and dropdown-links as combo boxes. See [Layout]({{site.baseurl}}/principles/layout).


## Built-in behavior
A focused link is activated from the keyboard with <kbd>Space</kbd>.


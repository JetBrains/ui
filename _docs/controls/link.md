---
title: Link
codename: ActionLink, DropDownLink
category: Controls
---
![]({{site.baseurl}}/images/link/01_example.png)

## When to use

Use a regular link for navigation between pages of the same window.   
![]({{site.baseurl}}/images/link/02_deployment_server.png)
*This option is in the Settings dialog. “Configure servers” opens another page of the same dialog.*
![]({{site.baseurl}}/images/link/03_manage_scopes.png)
*Do not use a button to navigate to another page of the same window.*    

Use an external link for navigation to web resources. See below for the [external link icon]({{site.baseurl}}/controls/link/#external-link-icon).
![]({{site.baseurl}}/images/link/04_external_link.png)

Use a regular or [drop-down link]({{site.baseurl}}/controls/link/#drop-down-link) for secondary actions in packed or small UI areas.
![]({{site.baseurl}}/images/link/05_action_regular_link.png)
*The "Reset" action is a link for two reasons: (1) The action appears only when the default value in the field is changed and reverting to a&nbsp;default is considered a rare scenario. (2) A lightweight link fits better than a button in this busy layout.*

![]({{site.baseurl}}/images/link/06_action_dropdown.png)
*The "Modify options" drop-down link fits into the top right corner of a busy layout.*

<p class="noanchor">
Do <b>not</b> use links for primary actions or when a UI is not constrained. Use a <a href="{{site.baseurl}}/controls/button/">button</a> or a <a href="{{site.baseurl}}/controls/drop_down/">drop-down list</a> instead. These controls can be selected from the keyboard and are bigger and easier to click.</p>
![]({{site.baseurl}}/images/link/07_android_sdk.png)


## How to use

### Writing guidelines

Use sentence capitalization.
 
Add an ellipsis to a button-link if it opens another UI area where input is possible. See examples for the [Button]({{site.baseurl}}/controls/button/#button_ellipsis).

Do not use words like “navigate” or “click here”. A link already implies navigation or clicking.
![]({{site.baseurl}}/images/link/08_writing_1.png)

When possible, replace “Learn more” and other generic phrases with more informative ones.
![]({{site.baseurl}}/images/link/08_writing_2.png)


### Link as a part of text
A link can be a part of a checkbox or radio button label or of any stand-alone text, like text in an [empty state]({{site.baseurl}}/principles/empty_state/) or in [context help]({{site.baseurl}}/principles/context_help/).
![]({{site.baseurl}}/images/link/09_part_of_text_1.png)

Make a link the minimum phrase that is enough to understand what will happen without reading the whole text.
![]({{site.baseurl}}/images/link/09_part_of_text_2.png)


### Link in a tree or table    
Use a link as a secondary action for some items of a tree or table.
![]({{site.baseurl}}/images/link/10_tree.png) 

If an action is needed for all items of a tree or table: 
* Add an [icon button]({{site.baseurl}}/controls/icon_button/) to a toolbar. 
* For a list of choices, add a separate table column of drop-down cells (see [Table]({{site.baseurl}}/controls/table/#editing-values)).
* If a link in every tree or table line has meaningful formatting, leave it:
![]({{site.baseurl}}/images/link/11_table.png)
*Links in the “Push Commits” window have the format that helps understand the relation between them: “[remote repository] : [branch]”. Moving these links elsewhere would break this meaning.*


### External link icon
Always add the arrow icon for an external link. The icon shows that the user will switch to a browser and lose the current context.
![]({{site.baseurl}}/images/link/04_external_link.png)
<div class="code-block__wrapper">{% highlight java %}ActionLink externalLink = new ActionLink("External link", event -> {
    BrowserUtil.browse("http://google.com");
});
externalLink.setExternalLinkIcon();{% endhighlight %}</div>

An exception is a help topic link in [empty states]({{site.baseurl}}/principles/empty_state/). The help icon already hints that this is an external help resource so the arrow icon is unnecessary.
![]({{site.baseurl}}/images/link/12_external_link_no_icon.png)


### Drop-down link

Drop-down links show a [context menu]({{site.baseurl}}/controls/context_menu/) or a [popup]({{site.baseurl}}/components/popup/). Use `com.intellij.ui.components.DropDownLink` to implement a drop-down link.
![]({{site.baseurl}}/images/link/13_drop_down_links.png)


## Placement
Lay out button-links as buttons and dropdown-links as combo boxes. See [Layout]({{site.baseurl}}/principles/layout).


## Built-in behavior
A focused link is activated from the keyboard with <kbd>Space</kbd>.


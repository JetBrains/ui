---
title: Tabs
codename: JBTabbedPane
category: Controls
---

Tabs organize content in dialogs by grouping similar UI controls.

![]({{site.baseurl}}/images/tabs/01_example.png)

In code editors, tabs are created with another component — [JBEditorTabs](https://github.com/JetBrains/intellij-community/blob/master/platform/platform-api/src/com/intellij/ui/tabs/impl/JBEditorTabs.java). It supports extended functionality like icons, closeable, and draggable tabs. Do **not** use this component in dialogs.

In tool windows, tabs are generated automatically. See [Tool window]({{site.baseurl}}/components/tool_window).


## When to use

Follow the rules in [Groups of controls]({{site.baseurl}}/principles/groups_of_controls).


## How to use

Use title capitalization for tab labels.

Make the label short, preferably no more than 3 words. Avoid generic words, such as "General" or “Advanced”. See [Writing short and clear]({{site.baseurl}}/text/writing_short/#04).

![]({{site.baseurl}}/images/tabs/02_naming.png)

Place the most frequently used content in first tabs. Tabs that do not fit allotted screen space automatically hide under the dropdown component. (It is better to add no more than 8 tabs but this number is not limited.)

![]({{site.baseurl}}/images/tabs/03_hidden_tabs.png)

Always place tabs on top. It is possible to place them at other sides of the content — bottom, left, or right — but such placement is extremely rare and might confuse users.

Do not remove or disable a tab when its function is unavailable. Explain why a tab’s content is unavailable in the body of the tab.


## Placement

Make sure the border of the tab reaches the edges of the area tabs occupy.

<p class="label incorrect"> Incorrect </p>

<img src="{{site.baseurl}}/images/tabs/04_layout_border_incorrect.png" style="margin-left: -20px" />

<p class="label correct"> Correct </p>

<img src="{{site.baseurl}}/images/tabs/04_layout_border_correct.png" style="margin-left: -20px" />

Do **not** surround the tab content area with a visible border.

<p class="label incorrect"> Incorrect </p>

<img src="{{site.baseurl}}/images/tabs/05_bordered.png" style="margin-left: -20px" />

Avoid placing independent content groups under the tabs area.

<p class="label incorrect"> Incorrect </p>

<img src="{{site.baseurl}}/images/tabs/06_layout_content_under.png" style="margin-left: -20px" />

When there are other UI controls above tabs, separate them with a vertical indent.

<img src="{{site.baseurl}}/images/tabs/07_inset.png" style="margin-left: -20px" />


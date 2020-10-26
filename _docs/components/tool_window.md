---
title: Tool window
category: Components
---

A tool window is a pane inside the main IDE window. For information about tool windows, see [IntelliJ IDEA Web Help](https://www.jetbrains.com/help/idea/tool-windows.html). For information about implementing tool windows, see [IntelliJ Platform SDK DevGuide](https://jetbrains.org/intellij/sdk/docs/user_interface_components/tool_windows.html).

<img style="margin-left: 0;" src="{{site.baseurl}}/images/tool_window/example.png">


## When to use

Use the tool window to show a large amount of information that the user needs while working side-by-side with the editor or other tool windows. For example, viewing the project structure, running and debugging an application, and viewing git log.

If the amount of information is small, show it in the editor, main toolbar, status bar or popup. For example, show version control changes on the editor gutter, breadcrumbs in the main toolbar, current branch and file details in the status bar, quick doc in a popup.

If the user does not need the information from the main window to complete an operation, show the content in the popup or dialog window. For example, Search Everywhere popup, Settings dialog.


## Tool window structure

![]({{site.baseurl}}/images/tool_window/structure.png)


## How to use

Give the tool window a name:
* The name should be [short and descriptive]({{site.baseurl}}/text/writing_short/), preferably not longer than two words.
* Use title-case capitalization.

Show the tool window name in the tool window button and header. If there are tabs in the tool window header, add a colon after the tool window name. Otherwise, do not add it.

![]({{site.baseurl}}/images/tool_window/pull_requests.png)

Add an icon for the tool window. The icon is 13px x 13px, grey and monochromatic. See how to create icons in the [icons guidelines]({{site.baseurl}}/principles/icons/).

<p class="noanchor"> <b>Exception:</b> Problems and Event Log icons change color and show the current status.</p>

Select the tool window orientation depending on the content. Vertical tool windows work better for trees, for example, Project, Structure, or Maven tool windows. Horizontal tool windows work better for tables, wide content or master-detail panels, for example, Git Log, Terminal, or Problems.

Do **not** show the tool window button if the tool window is not relevant to the current project configuration. For example, do not show the Maven tool window for a project without Maven configuration files.

Do **not** show the tool window button if the tool window has no content. For example, do not show the Find tool window before search is invoked.

Add a toolbar for [frequently used actions and filters]({{site.baseurl}}/controls/toolbar/#what-items-to-add-on-toolbar). Use a horizontal toolbar for vertical tool windows and a vertical toolbar for horizontal tool windows. For more details see the [toolbar guidelines]({{site.baseurl}}/controls/toolbar/#sizes-and-placement).

Put tool window viewing mode settings under the gear icon in the header. If there is no toolbar, put other options under the gear icon as well. For example, see the gear icon in the Project tool window.

Add tabs if all the information does not fit in one tab or refers to similar instances, like run sessions, history for files, find results. The tabs for entities should be closable.

![]({{site.baseurl}}/images/tool_window/git.png)
*Separate tabs are added for each file history.*

![]({{site.baseurl}}/images/tool_window/find.png)
*Separate tabs are added for different search queries.*


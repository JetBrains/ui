---
title: Progress indicators
category: Controls
type: GroupHeader
---

Progress indicators inform users about an ongoing operation. There are three types of indicators:

* [Loader]({{site.baseurl}}/controls/loader)
* [Progress text]({{site.baseurl}}/controls/progress_text)
* [Progress bar]({{site.baseurl}}/controls/progress_bar)


## Which indicator to use

If an operation lasts for less than a second in most cases, do not show any progress indicator. Progress indicators for a short operation are distracting.

If the user has to wait until a process completes to continue working with the app, show a progress bar in a modal dialog.

![]({{site.baseurl}}/images/progress_indicators/progress_dialog.png)

If the progress is non-modal, select progress indicator based on where it appears.

* [Input field, combo box, drop-down](#input-field-combo-box-drop-down)

* [Search field](#search-field)

* [Tree, list, tool window](#tree-list-tool-window)

* [Breadcrumb and dialog label](#breadcrumb-and-dialog-label)

* [Settings dialog](#settings-dialog)

* [Empty state](#empty-state)

* [Main window](#main-window)

### Input field, combo box, drop-down

Place the loader inside an input field on the right to show that the field content is being loaded or checked. 

![]({{site.baseurl}}/images/progress_indicators/combo_box_loader.png)

### Search field

Place the loader on the right to show that search is being performed.

![]({{site.baseurl}}/images/progress_indicators/search_field_loader.png)

### Tree, list, tool window

If each tree node loads independently and it’s important to know the current state of each node, show the loader instead of the node icon:

![]({{site.baseurl}}/images/progress_indicators/tree_loader_icon.png)

If nodes do not have icons, or icons can’t be replaced for some reason, show progress text after the node’s label: 

![]({{site.baseurl}}/images/progress_indicators/tree_text.png)

If the loader applies to the whole content, place it in the top right corner: 

![]({{site.baseurl}}/images/progress_indicators/tree_loader_corner.png)

If processes start simultaneously and have the same execution time, place the loader in the top right corner of the area. For example, in the Push dialog repositories are loaded at the same time. Loaders in each line will blink at the same time and will look distracting.

![]({{site.baseurl}}/images/progress_indicators/tree_loader_push.png)

If the top right corner of the area is taken with content and there is no space for the loader, show the progress bar
 at the top of the tool window.  
For example, the VCS Log tool window has a progress bar at the top when the content is loading or during searching.

![]({{site.baseurl}}/images/progress_indicators/progress_tool_window.png)

### Breadcrumb and dialog label

Place the loader after breadcrumbs or a dialog label to show that the page is being loaded:

![]({{site.baseurl}}/images/progress_indicators/breadcrumb_loader.png)


### Settings dialog

If some settings or configurations take a significant time to load, it’s preferable to reserve space for a progress bar. For example, show a progress bar while installing a plugin:

![]({{site.baseurl}}/images/progress_indicators/settings_loader.png)


### Empty state
If the state is empty, show progress text. For example, in search dialogs, and the details panel in settings or tool windows:

![]({{site.baseurl}}/images/progress_indicators/empty_state_text.png)

Show one more progress indicator, e.g. a loader like on the example above, if loading continues when some data is already displayed.

If a process takes longer than 4 seconds, provide [process details]({{site.baseurl}}/controls/progress_text#details), e
.g. the time left or 
passed, work units 
like the current step, to indicate that the process is being performed and is not hanging: 

![]({{site.baseurl}}/images/progress_indicators/empty_state_details.png)

If it’s not possible to provide progress details, show the loader to indicate that a long process is not frozen:

![]({{site.baseurl}}/images/progress_indicators/empty_state_loader.png)


### Main window

If a process is long and can run in the background, show the progress bar in the main window in the [status bar]({{site.baseurl}}/components/status_bar):

![]({{site.baseurl}}/images/progress_indicators/status_bar_progress.png)	

Or in a non-modal dialog:

![]({{site.baseurl}}/images/progress_bar/tasks_dialog.png)
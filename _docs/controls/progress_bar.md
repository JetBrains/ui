---
title: Progress bar
codename: JProgressBar
category: Controls
type: Subpage
subpageOf: Progress indicators
---

A progress bar informs users about the progress of a lengthy operation. 

![]({{site.baseurl}}/images/progress_bar/determinate_example.png)

## When to use

Follow the rules for [progress indicators]({{site.baseurl}}/controls/progress_indicators).


## How to use

### Types

Use **determinate** progress bar, if the process duration is known:

![]({{site.baseurl}}/images/progress_bar/determinate_example.png)

Otherwise, use **indeterminate** progress bar:

![]({{site.baseurl}}/images/progress_bar/indeterminate_example.png)

If an indeterminate process reaches a point where its duration can be determined, switch to a determinate progress bar. For example:

![]({{site.baseurl}}/images/progress_bar/progress_bar_indeterminate.png)

![]({{site.baseurl}}/images/progress_bar/progress_bar_determinate.png)


### Process name and details

A progress bar can have a process name and process details. For wording, follow the rules for [progress text]({{site
.baseurl}}/controls/progress_text).

#### Process name

Place a process name above the progress bar:

![]({{site.baseurl}}/images/progress_bar/label_above.png)

If the vertical space is limited, place the process name with a colon on the left:

![]({{site.baseurl}}/images/progress_bar/label_left.png)

If there are several processes in a group, add a bold header. The header is a noun.

![]({{site.baseurl}}/images/progress_bar/several_progresses.png)

Do **not** show a process name for inline processes:

![]({{site.baseurl}}/images/progress_bar/tool_window.png)


#### Process details

Place process details under the progress bar in one line:

![]({{site.baseurl}}/images/progress_bar/comment.png)

The length of the comment is limited by the progress bar:

![]({{site.baseurl}}/images/progress_bar/comment_long.png)

If space is limited,  show percentage completed:

![]({{site.baseurl}}/images/progress_bar/horizontaly.png)


#### In dialog

Use a process name as a dialog header, capitalize the title and remove ellipsis. Process details appear above the progress bar:

![]({{site.baseurl}}/images/progress_bar/dialog.png)

#### In status bar

Place a process name under the progress bar in the Status bar:

![]({{site.baseurl}}/images/progress_bar/status_bar.png)




### Process status

If a process consists of substeps that can fail but do not terminate the process, then use green and red colors to show the intermediate status. For example, show the status of the running tests:

![]({{site.baseurl}}/images/progress_bar/progress_color.png)

Do **not** color progress bar to show the final result of the task, use [notifications]({{site.baseurl}}/principles/notifications/). In case of success, show notification for the user-initiated tasks, in case of failure — for all tasks.


### Process control

Provide the Cancel button in the progress dialog if the process can be interrupted (see [Loading Project dialog]({{site.baseurl}}/controls/progress_bar/#in-dialog)). Use the Stop button if interrupting does not return the environment to its previous state.

Use the Stop icon if there are several processes running at the same time in one dialog or there is not enough space for the button (e.g. [Status bar]({{site.baseurl}}/controls/progress_bar/#in-status-bar)):

![]({{site.baseurl}}/images/progress_bar/tasks_dialog.png)

Always place the Stop icon on the right next to the progress bar. On hover over the Stop icon, show the “Stop” or “Cancel” comment under the progress bar instead of process details:

![]({{site.baseurl}}/images/progress_bar/hover_stop_icon.png)

If the process takes a long time and can prevent the user from performing tasks, provide an option to pause a process using the Pause button or the Pause icon. Replace process details with the “Pause” comment on hover over the Pause icon:

![]({{site.baseurl}}/images/progress_bar/pause.png)

It is **not** recommended providing an option to pause the process. It is preferable, that the process runs in a background and does not interfere with a user. 

If a user pauses the process, show “Paused” under the progress bar. Replace the Pause icon with Resume, show “Resume” under the progress bar and when hovered over the Resume button: 

![]({{site.baseurl}}/images/progress_bar/resume.png)

Hide the progress bar as soon as the process completes. 


## Sizes and placement

The progress form and sizes are the same in all themes.

![]({{site.baseurl}}/images/progress_bar/sizes.png)


## Style

<!--The process name font size is default, the progress details font size is 2 pt smaller for Mac OS themes and default for Windows and Linux themes. The process name color is default, details color — <span style="color:#787878">#787878</span>.-->

![]({{site.baseurl}}/images/progress_bar/colors.png)





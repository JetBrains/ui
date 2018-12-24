---
title: Progress bar
category: Controls
type: Subpage
subpageOf: Progress indicators
---

A progress bar informs users about the progress of a lengthy operation.

## When to use

1. Use progress bar if the space is not constrained. If space is limited, such as in a text field or near a control, use a [loader]({{site.baseurl}}/controls/loader/) or [progress text]({{site.baseurl}}/controls/progress_text/).

2. If the operation lasts more than **1 seconds** or has unpredictable duration, it is preferably to show progress bar as it provides more information about the process than other progress indicators.

    If the operation lasts less than a second, do not show any progress indicator. Displaying any progress indicator for a short duration would be distracting.

    If the operation lasts less than 4 seconds , show progress bar, [loader]({{site.baseurl}}/controls/loader/) or [progress text]({{site.baseurl}}/controls/progress_text/) depending on the available space.

    ![]({{site.baseurl}}/images/progress_bar/time_line.png)

3. Show determinate progress bar, if the operation has a defined duration and it is useful to know how much time left to wait. For example user is likely to work with other tasks during the waiting period or is looking forward to what will appear after completion.

4. If intermediate failures (e.g. failed tests) or hangs have a practical value for the user, then use progress bar with the information about the current work being performed (e.g. the currently indexed file).

5. Show progress in the Status bar for operations that run in the background, e.g. Updating indices:

    ![]({{site.baseurl}}/images/progress_bar/modeless_progress.png)



## How to use

1. Use **determinate** progress bar, if the process duration is known:

    ![]({{site.baseurl}}/images/progress_bar/determinate_example.png)

    Otherwise use **indeterminate** progress bar:

    ![]({{site.baseurl}}/images/progress_bar/indetermintae_example.png)

    If an indeterminate process reaches a point where its duration can be determined, switch to a determinate progress bar:

    ![]({{site.baseurl}}/images/progress_bar/progress_bar_indeterminate.png)

    ![]({{site.baseurl}}/images/progress_bar/progress_bar_determinate.png)


2. Hide the progress bar as soon as process completes.

3. Use sentence-style capitalization for progress bar label and comment.

4. **Progress bar label**

    Use process name as progress bar label. The progress label should remain unchanged. If it is clear from the context what process is running, then the label can be omitted (e.g. for progress bars in Tool windows).

    **Position**

    Place label over the progress bar:

    ![]({{site.baseurl}}/images/progress_bar/progress_bar_label_above.png)

    If the vertical space is limited, the progress label with a colon can be placed on the left:

    ![]({{site.baseurl}}/images/progress_bar/progress_bar_label_left.png)

    **Wording**

    If there is one process, then start the label with a verb in progressive form, e.g. *Updating indices, Committing changes*, etc.

    If there are several processes in the group, then provide a **bold** header and label each progress. Header is a verb in progressive form, progress labels are nouns.

    ![]({{site.baseurl}}/images/progress_bar/progress_bar_wording_example.png)


    Do **not** use ellipsis at the end of the progress bar label.

5. **Progress bar comment**

    Under the progress bar provide the progress details in one line:

    ![]({{site.baseurl}}/images/progress_bar/progress_bar_comment.png)

    The length of the comment is limited by the length of the progress bar:

    ![]({{site.baseurl}}/images/progress_bar/progress_bar_comment_long.png)

    The process comment can be **unit of time** (preferably): time left or **unit of work**: current step, currently processed file, number of processed files/amount of information, percentage completed, etc.

    Use **time units** for determinate processes if:

    * The remaining time can be confidently predict.
    * User is looking forward to what will appear after completion.
    * User is likely to work with other tasks during the waiting period.

    Round up the first time unit to one of the numeric anchors: 1, 2, 3, 5, 10, 15, 20 and 30. For example, if 7 minutes 50 seconds remaining, then show “About 10 minutes left”. If less than 5 seconds left, show “About 5 seconds left” until the end of the process.

    Use **work units** for determinate and indeterminate processes if:

    * The remaining time is unpredictable.
    * Intermediate steps will help the user to understand why the process lasts so long or hangs.

        ![]({{site.baseurl}}/images/progress_bar/progress_bar_determinate.png)

    * If space is limited show percentage completed:

        ![]({{site.baseurl}}/images/progress_bar/horizontaly.png)

    **When not to provide comment**

    Do not provide comments that are meaningless for the user, for example:

    ![]({{site.baseurl}}/images/progress_bar/progress_bar_text_incorrect.png)


    **Wording**

    To show the time left use “About XX minutes left” format. To report the current step use a verb in progressive form with an ellipsis at the end.

6. **Progress bar status**

    If the process consists of the substeps that can fail and do not terminate the process, then use green and red colors to show the intermediate status. For example, show the status of the running tests:

    ![]({{site.baseurl}}/images/progress_bar/progress_color.png)

    Do **not** color progress bar to show the final result of a task, use [notifications]({{site.baseurl}}/principles/notifications/). If the process finishes hide the progress bar. In case of success show notification for the user-initiated tasks, in case of failure — for all tasks.

7. **Modal progress bar**

    If progress appears in the dialog box, then use progress name as dialog header. Progress bar comment appears above the progress bar:

    ![]({{site.baseurl}}/images/progress_bar/progress_bar_label_dialog.png)

    Show progress in the dialog box if user should wait until the process is completed to continue working with the app.

8. **Modeless progress bar**

    Show the progress bar modeless, if the process can run in background. For example, background processes in the Status bar (link):

    ![]({{site.baseurl}}/images/progress_bar/background_process.png)

    Modeless progress bar in the VCS Log tool window on refresh:

    ![]({{site.baseurl}}/images/progress_bar/vcs_log.png)

9. **Process control**

    Provide a Cancel button in the progress dialog, if the process can be interrupted (see _Loading Project_ dialog above). Use a Stop button if interrupting does not return the environment to its previous state.

    Use the Stop icon, if there are several processes at the same time in one dialog or there is not enough space for the button (e.g. Status bar):

    ![]({{site.baseurl}}/images/progress_bar/tasks_dialog.png)

    Always place the Stop icon on the right next to the progress bar. On hover over the Stop icon make it darker and show “Stop” or “Cancel” comment under the progress bar:

    ![]({{site.baseurl}}/images/progress_bar/hover_stop_icon.png)

    If the process takes a long time and can prevent user from performing the tasks, then provide an option to pause a process using a Pause button or Pause icon:

    ![]({{site.baseurl}}/images/progress_bar/pause.png)

    It is **not** recommended to provide an option to pause the process. It is preferable, that the process runs in the background and does not interfere with the user.

    If the user has paused the process, then change the Pause button label to Resume or Pause icon to Resume icon, add “Paused” comment:

    ![]({{site.baseurl}}/images/progress_bar/resume.png)

## Insets, colors and fonts

The progress form and sizes are the same in all themes.

![]({{site.baseurl}}/images/progress_bar/progress_bar_colors.png)

Progress bar label font size is default, progress step and substep font size is 2 pt smaller for Mac OS themes and default for Windows and Linux themes. Progress label and step color are default, substep color — <span style="color:#787878">#787878</span>.

![]({{site.baseurl}}/images/progress_bar/progress_bar_size.png)

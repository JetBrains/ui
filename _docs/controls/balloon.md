---
title: Balloon
type: Subpage
subpageOf: Notifications
category: Controls
---

Balloon notifications inform users of the events or system states related to a project or IDE.

![]({{site.baseurl}}/images/balloon/01_example.png)


## When to Use

Use a balloon notification if:
* There is no need to point to a particular context or location in the interface.
* User action is recommended but not required immediately.

<p class="noanchor">
In other cases, choose another <a href="{{site.baseurl}}/controls/notifications">notification type</a>.
</p>

## How to Use

### Message severity

#### Error
Use to inform of a critical event or state that might disrupt the user's experience.

![]({{site.baseurl}}/images/balloon/02_error.png)

#### Warning
Use in case of an event or state that might slow the user's work down or require an action to fix the IDE settings.

![]({{site.baseurl}}/images/balloon/03_warning.png)

#### Information
Use to suggest optimizations for the IDE settings and notify on the results of a process that is not tied to any tool window.

![]({{site.baseurl}}/images/balloon/04_information.png)

#### Information about a certain plugin

Use to show a plugin-related suggestion. 

Add the plugin’s icon to indicate that the notification relates to a particular plugin. Use a 16×16 svg icon.

![]({{site.baseurl}}/images/balloon/05_information_plugin.png)


### Sticky or Timed

By default, choose a **sticky** balloon. Sticky notifications stay on screen until the user clicks a link in the message or closes the notification manually. This behaviour is preferable as it guarantees the user will not miss the notification.

Use a **timed** notification when the message is informational, and missing it will not affect the user’s workflow. Timed notifications stay on screen for 10 seconds and then disappear. They can be viewed later in the Event Log.


### Title

Briefly describe the event and the context in which it occurred, e.g. a particular plugin or library, VCS, a run/debug configuration, etc.

[Write short and clear]({{site.baseurl}}/text/writing_short) as the title should fit in one line.

Use  sentence case and follow the [punctuation rules]({{site.baseurl}}/text/punctuation).

If the message fits well in one sentence and does not require a separate title, choose either a title or a body:
* Use title-only message when it’s short and fits in one line:

![]({{site.baseurl}}/images/balloon/03_warning.png)

* Use only body text when the message fits in two lines and the title would duplicate its meaning, fully or partially:

<p class='label incorrect'> Incorrect </p>

![]({{site.baseurl}}/images/balloon/06_only_text_incorrect.png)

<p class='label correct'> Correct</p>

![]({{site.baseurl}}/images/balloon/06_only_text_correct.png)


### Body

Provide the details on the event or system state to help users decide what to do next:
* What is the cause or trigger.
* What are the consequences.
* What exactly is affected: files, libraries, versions, plugins, etc.

Note that only the first line of the body text is visible by default. The rest of the message is only visible when expanded with an arrow icon. Make the beginning of the text most informative.

<img src="{{site.baseurl}}/images/balloon/07_expandable.png" style="margin-left: -6px">


### Actions

Add actions to help users take the next steps: fix a problem, view relevant information, configure settings, etc.

If the notification is informational and there is a possibility it might appear too often, add the "Don’t ask again" action:

![]({{site.baseurl}}/images/balloon/04_information.png)

Preferable number of actions is two, as it is easier for the user to choose.

If a set of more than 2 actions will be useful for the user, place the primary action first, and hide the others under the "More actions" dropdown:

![]({{site.baseurl}}/images/balloon/08_dropdown.png)

If the notification reports an error or warning, always provide an action to help users fix the problem:

![]({{site.baseurl}}/images/balloon/02_error.png)

If no actions are available, provide more details in the body text, e.g. how to fix the error or what is the warning/error cause:

<p class='label incorrect'> Incorrect </p>

![]({{site.baseurl}}/images/balloon/09_error_incorrect.png)

<p class='label correct'>Correct</p>

![]({{site.baseurl}}/images/balloon/09_error_correct.png)


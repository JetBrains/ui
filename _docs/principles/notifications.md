---
title: Notifications
category: Principles
type: GroupHeader
---

Notifications inform users about the status of user or system initiated operations. They can have different actions depending on the message.

There are four types of notifications:

- [Alert]({{site.baseurl}}/principles/alert)
- [Banner]({{site.baseurl}}/principles/banner)
- [Toast]({{site.baseurl}}/principles/toast)
- [Tool window balloon]({{site.baseurl}}/principles/tool_window_balloon)

## What notification to use

Consider two factors when deciding which notification type to use.

**User action** 

<p class="noanchor"> Are the users required to address the notification before they can proceed with current tasks?</p>
  - Required immediately
  - Required, but not immediately
  - Not required

**Context of trigger**
  
<p class="noanchor"> What initiated the notification? Does the initiation point to a particular context or location?</p>
  - File tab
  - Tool windows
  - Other

Use the following table to determine which notification to use based on the two factors:

<table>
  <col width="25%">
  <col width="auto">
  <col width="auto">
  <col width="40%">
  <th class="table-line">User action</th>
  <th class="table-line">Context</th>
  <th class="table-line">Type</th>
  <th class="table-line">Examples</th>
  <tr class="table-line">
    <td>Required immediately 
    </td>
    <td>All
    </td>
    <td>Alerts
    </td>
    <td>
      Confirm Restart<br/><br/>
      Opening projects in new window<br/><br/>
      When trying to rename a method, but a conflict is found<br/><br/>
      Need a dependency before using a feature<br/><br/>
   </td>
  </tr>
  <tr class="table-line">
    <td>Required, but not immediately</td>
    <td>File tabs</td>
    <td>Banners</td>
    <td>
      Configuring SDK for your project<br/><br/>
      Requiring a Gradle sync for tools to work properly<br/><br/>
    </td>
    </tr>
  <tr class="table-line">
    <td>Not required</td>
    <td>Tool windows</td>
    <td>Tool Window balloons</td>
    <td>
      Status of task completion<br/><br/>
      When Find Usages is invoked on a method, use a tool window balloon to show the feedback since the results will be found in the Find tool window<br/><br/>
    </td>
  </tr>
  <tr class="table-line">
    <td></td>
    <td>All but file tabs or tool windows</td>
    <td>Sticky toasts</td>
    <td>
      IDE and Plugin Updates
    </td>
  </tr>
  <tr class="table-line">
    <td></td>
    <td></td>
    <td>Timed toasts</td>
    <td>
      Module imported<br/><br/>
      Framework detection
    </td>
  </tr>
</table>

**Exception**: If the action is highly recommended, consider using Banners across all files for visibility instead of Sticky toast.

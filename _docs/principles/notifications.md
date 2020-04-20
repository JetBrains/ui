---
title: Notifications
category: Principles
---

Notifications inform users about the status of user or system initiated operations. They can have different actions depending on the message.

There are four types of notifications:

- [Alerts]({{site.baseurl}}/components/alert)
- [Banners]()
- [Toasts]()
- [Tool window balloons]()

## What notification to use

There are two factors to consider when deciding which notification type to use.

#### 1. User action 

Are the users required to address the notification before they can proceed with current tasks?
  - Required immediately
  - Required, but not immediately
  - Not required

#### 2. Context of trigger

What initiated the notification? Does the initiation point to a particular context or location?
  - File tab
  - Tool windows
  - Other

After determining these factors for your scenario, use the following table to determine which notification to use:

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

**Note**: As an exception for Sticky Toasts, if your scenario is a highly recommended action, consider using Banners across all files for visibility

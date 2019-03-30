---
title: Empty state
category: Principles
---

Provide instructions in an empty UI area on how to fill it with data. Instructions help users understand what the area is for and how to work with it.  
Empty UI areas described here are: 
* [Tool window, list, tree or table](#tool-windows-lists-trees-and-tables)
* [Details area in a master-detail layout](#master-detail-layout)
* Empty search results — TBD


## Tool windows, lists, trees and&nbsp;tables
Instructional text for these UI areas consists of three parts:  
![]({{site.baseurl}}/images/empty_state/database-tw-callouts.png) 


### 1. Reason why empty

Required part that explains the current state and what the area is for.

The general pattern is “_No [entity] added._”
* At the end of the text explaining the reason, add the action that needs to be performed to fill the area. This shows that the UI area can be filled by the user and not by an external system. If _added, created, configured_ or other such verbs act as synonyms in a particular case, use the verb _added_ for consistency.
* End the reason text with a dot.
![]({{site.baseurl}}/images/empty_state/libraries-before-after.png)
*Avoid ”Nothing to show” as it is not informative.*

The reason can be elaborated:  
![]({{site.baseurl}}/images/empty_state/tasks-before-launch.png) 
*“Tasks to run before launch” better explains what the area is for than just “Tasks”.*


The reason should be clear to users:  
![]({{site.baseurl}}/images/empty_state/sql-dialect-before.png) 
*The word mapping introduces a new entity while there are already two in the table header — path and SQL dialect. In the instructions, it is better to use already existing entities to connect them to what users see on the screen.*
![]({{site.baseurl}}/images/empty_state/sql-dialect-after.png)
*The word “individual” is used in contrast with the project SQL dialect above the table. The verb specified is used instead of added because, in the table, SQL dialects are not added but selected from a drop-down list in the SQL Dialect column.*


### 2. Actions to fill the area

This is a required part that makes it easier to understand which action to start with, instead of searching for the appropriate icon on the toolbar. It also educates about the shortcut for this action.

Use one or two actions. Three or more actions would make it harder to choose what to start from. 
![]({{site.baseurl}}/images/empty_state/maven-tw.png) 
*Instructions with two actions.*

Pattern: “[Action link] [(Shortcut)]”. Do not add a full stop after an action. If there are two actions, put a comma between them.

Use sentence style for an action. This is against the general recommendation but here an action appears as part of a paragraph and title-capitalization would disrupt reading.

Wording: 
* Avoid words that describe physical actions like _press_ or _click_ — they are obvious from how the link works. 
* Avoid saying _add new_. Just use _add_ because all that is added is new in the context of an empty UI area. 

If an action opens a menu, open it at the same position where it would be opened with the corresponding toolbar button. This would explain which toolbar icon opens the menu.

If an action that fills an empty area cannot be tied to a link, explain users what to do. Treat the explanation text as a usual text, both in terms of wording and syntax:
![]({{site.baseurl}}/images/empty_state/todo-tw.png) 
*TODO items are actually detected not by the word “TODO” in a comment but by the regex pattern specified in the settings. The instruction text should be formatted as “...write [first pattern from settings] in a source code comment” to account for a rare case when the default pattern has been redefined.*


### 3. Help topic

<p class="noanchor">Optional part.</p>

**For tool windows**, provide a link to a help topic if any that explains the concept and the whole set of functionality behind it, like a “Getting started” topic. Add the question mark icon in the beginning:
![]({{site.baseurl}}/images/empty_state/database-tw-segment.png) 

**For tables, trees and lists**, provide instructions according to [these rules]({{site.baseurl}}/principles/context_help). Show instructional text as a help tooltip or as an inline text. Smaller UI areas rarely require an in-depth explanation compared to complex tool windows. A short help text should be enough and it does not require switching contexts.
![]({{site.baseurl}}/images/empty_state/todo-filters-incorrect.png) 
*Do not use a help topic link in a table and UI areas other than tool windows.* 
![]({{site.baseurl}}/images/empty_state/todo-filters-correct.png) 
*Place an inline help text under the table. See the Context help topic for where to show help for other UI elements and layouts.*


## Master-detail layout
Instructional text for the detail area in a master-detail layout has only the action part.  
The detail area is filled when an item is selected in the master part. This behavior is obvious and mustn’t be explained — the reason why the area is empty is not needed.  
The action is an obvious one but it serves as a visual marker to where the settings for the selected item are found.  
The help topic, if needed, can be provided in the master area.

The general pattern for the action is “_Select_ [entity] _to configure_”.

The master area is usually a list or a tree, and, if empty, its instructional text should follow the guidelines for lists and trees.

![]({{site.baseurl}}/images/empty_state/app-servers.png) 

![]({{site.baseurl}}/images/empty_state/run-configs.png) 
*The “Add Java application configuration” link is a shortcut to creating a new configuration instead of clicking the + button in the toolbar. See more on actions below.*


## Sizes and placement
Minimum text width is 40 characters. If an area is too narrow to show the minimum text width, show text in area fields, and if no fields are left, under the area borders.

Use non-breaking spaces in an action name and shortcut, so it is not split into two lines.

The text is center-aligned. If possible, the center for the help topic link should be calculated with an 11 px inset on the left. This helps visually align the help link with the lines above it.
![]({{site.baseurl}}/images/empty_state/database-tw-markup1.png) 

Fields and vertical spaces:
![]({{site.baseurl}}/images/empty_state/database-tw-markup2.png)

The text should wrap when a UI area’s width changes:
![]({{site.baseurl}}/images/empty_state/database-tw-horizontal.png)
![]({{site.baseurl}}/images/empty_state/database-tw.png)


## Style

The link should not be underlined.

In Darcula:
![]({{site.baseurl}}/images/empty_state/database-tw-darcula.png)



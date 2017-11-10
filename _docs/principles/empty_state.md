---
title: Empty State
category: Principles
---

Always provide instructions in an empty UI area on how to make it not empty. Instructions help users understand what the area is for and how to work with it.
Empty UI areas described here are: 
* [Tool window, list, tree or table](#tool-windows-lists-trees-and-tables)
* [Detail area in a master-detail layout](#master-detail-layout)
* Empty search results — TBD

[comment]: <> (TODO: add link to Textual Output)

## Tool windows, lists, trees and tables
Instructions text for these UI areas has three parts:  
![]({{site.baseurl}}/images/empty_state/database-tw-callouts.png) 

How to use these parts:

### 1. Reason why empty
* Required part. The reason explains what the area is for and the current state of the area.
* General pattern is “_No [entity] added._”
  * The verb: in the end of the reason text, write the action that is needed to fill the UI area. It shows that the UI area can be filled by the user and not by an external system. If _added, created, configured_ or other such verbs are synonyms in a particular case, prefer the verb _added_ for consistency.
  * End the reason text with a dot.
![]({{site.baseurl}}/images/empty_state/libraries-before-after.png)
*Avoid ”Nothing to show”, not informative.*


* The entity can be elaborated:
![]({{site.baseurl}}/images/empty_state/tasks-before-launch.png) 
*“Tasks to run before launch” better explains what the area is for than just “Tasks”.* 


* The entity should be clear to users:  
![]({{site.baseurl}}/images/empty_state/sql-dialect-before.png) 
*The word mapping introduces a new entity while there are already two in the table header — path and SQL dialect. In the instructions, it is better to use already existing entities to connect them to what users see on the screen.*
![]({{site.baseurl}}/images/empty_state/sql-dialect-after.png)
*The word “individual” is used in contrast with the project SQL dialect above the table. The verb specified is used instead of added because, in the table, SQL dialects are not added but selected from a drop-down list in the SQL Dialect column.*


### 2. Actions to make the area not empty
* Required part. Makes easier to understand what action to start with, compared to searching for a necessary icon on a toolbar. Educates about a shortcut.
* Use one or two actions. Three and more would make it harder to choose what to start from. 
![]({{site.baseurl}}/images/empty_state/maven-tw.png) 
*Instructions with two actions.*

* Pattern: “[Action link] [(Shortcut)]”. Do not add a dot after an action. If two actions, put a comma between them.

* Use sentence style for an action. This is against the general recommendation but here an action appears as a part of a text paragraph and title-capitalization would disrupt reading.

* Wording: 
  * Avoid words that describe physical actions like _press_ and _click_ — they are already understood from how the link element works. 
  * Avoid “_add new_”. Use just add because all that is added is new in the context of an empty UI area. 

* If an action opens a popup, open it at the same position where it would be opened with a corresponding toolbar button. This would explain what toolbar icon opens the popup.

* If an action that fills an empty area cannot be tied to a link, explain what to do. Treat the explanation text as a usual text, both for wording and syntax:
![]({{site.baseurl}}/images/empty_state/todo-tw.png) 
*TODO items are actually detected not by the word “TODO” in a comment but by the regexp pattern specified in the settings. The instruction text should be formatted as “...write [first pattern from settings] in a source code comment” to account for a rare case when the default pattern has been redefined.*


### 3. Help topic
* Optional part. 

* **For tool windows**, provide if there is a help topic that explains the concept and the whole set of functionality behind it, like a “Getting started” topic. Show as a link to the topic with the question mark icon in the beginning:
![]({{site.baseurl}}/images/empty_state/database-tw-segment.png) 

* **For tables, trees and lists**, provide according to [these rules]({{site.baseurl}}/principles/context_help). Show as a help tooltip or as an inline text. Compared to complex tool windows, smaller UI areas rarely require in-depth explanation. A short help text should be enough and it does not require switching contexts.
![]({{site.baseurl}}/images/empty_state/todo-filters-incorrect.png) 
*Do not use a help topic link in a table and UI areas other than tool windows.* 
![]({{site.baseurl}}/images/empty_state/todo-filters-correct.png) 
*Place an inline help text under the table. See the Context help topic for where to show help for other UI elements and layouts.*





## Master-detail layout
* Instructions text for the detail area in a master-detail layout has only the action part.  

   The detail area is filled when an item is selected in the master part. This behavior is too familiar to be explained — the reason why the area is empty is not needed.
     
   The action is an obvious one but it serves as a visual marker to where settings for the selected item appear.
   
   The help topic, if needed, can be provided in the master area.
   
* The general pattern for the action is “_Select_ [entity] _to configure_”.
 
* The master area is usually a list or a tree, and if empty, its instructions text should follow the guidelines for lists and trees.

![]({{site.baseurl}}/images/empty_state/app-servers.png) 

![]({{site.baseurl}}/images/empty_state/run-configs.png) 
*The link “Add Java application configuration” is a shortcut to creating a new configuration instead of clicking the + button in the toolbar. See more on actions below.*


## Layout and colors
* Minimum text width — 40 characters. If an area is too narrow to show the minimum text width, show text in area fields. And if no fields left, then under area borders.

* Use non-breaking spaces in an action name and shortcut, so it does not break in two lines.

* Grey text color <span style="color:#999999">#999999</span>, both for light themes and Darcula.

* The link should be the non-underlined kind (see example of such link in the Settings dialog, the topmost node “Appearance & Behavior”).

* The text is center-aligned. If possible, the center for the help topic link should be calculated with an 11 px inset on the left. This helps visually aligning the help link with the lines above it.
![]({{site.baseurl}}/images/empty_state/database-tw-markup1.png) 

* Fields and vertical spaces:
![]({{site.baseurl}}/images/empty_state/database-tw-markup2.png)

* The text should wrap when a UI area’s width changes:
![]({{site.baseurl}}/images/empty_state/database-tw-horizontal.png)
![]({{site.baseurl}}/images/empty_state/database-tw.png)

In Darcula:
![]({{site.baseurl}}/images/empty_state/database-tw-darcula.png)



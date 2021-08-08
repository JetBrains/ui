---
title: Inspections
category: Text
---

![]({{site.baseurl}}/images/inspections/main.png)
*Inspections configuration on Editor > Inspections settings page or in Configure Inspections dialog.*

Inspection names, descriptions, and editor messages should be short and descriptive. Follow the rules for [short and clear texts]({{site.baseurl}}/text/writing_short/) and [punctuation]({{site.baseurl}}/text/punctuation) in addition to rules described below.

### Group Names

Use the names of technologies and frameworks as titles for inspection groups, for example, Ant, Android, Java.

### Inspection Names

Limit a name by ~50 symbols so that it fits the line in the list of inspections in settings.

An inspection name should reflect the code problem that this inspection detects, for example:![]({{site.baseurl}}/images/inspections/correct.png)

Do not just describe the type of code that is being checked:

![]({{site.baseurl}}/images/inspections/not-a-problem.png)

When describing a problem, prefer adjectives to complex nouns:

![]({{site.baseurl}}/images/inspections/noun2.png)

![]({{site.baseurl}}/images/inspections/noun.png)

Do not repeat the group titles in the inspection name:

![]({{site.baseurl}}/images/inspections/group.png)

Do not use the word "problems" or other words that describe how inspections function in general (i.e. “check”, “inspection”, or “issue”). An inspection is supposed to check code for problems, so mentioning it in its name is not needed.

![]({{site.baseurl}}/images/inspections/problem.png)

Do not use the words "warning" and “error” in inspection names. Such a name will become incorrect and misleading if the inspection severity level change.

![]({{site.baseurl}}/images/inspections/warning.png)

Do not use parentheses in inspection names. All supporting information can be moved to inspection descriptions.

![]({{site.baseurl}}/images/inspections/parens.png)

If an inspection is powered by a third-party code quality tool, use the name of this tool in the inspection name.

![]({{site.baseurl}}/images/inspections/third-party.png)

### Descriptions

Start descriptions with a verb, e.g. “Reports”. Use “Run” for external tools. Do not begin a description with "This inspection".
![]({{site.baseurl}}/images/inspections/start.png)

Provide details, such as:

* A quick-fix if applicable:
  ![]({{site.baseurl}}/images/inspections/quick-fix.png)

* A link to the language or framework docs explaining the correct usage of the syntax or feature, if applicable.
  ![]({{site.baseurl}}/images/inspections/link.png)

* Two code samples: the code with a problem and the code that bypasses this problem. By comparing the good code and the bad code, users can work out what causes the problem and how to avoid it.
  For example, for "Java | Probable bugs | 'equals()' called on array" adding such an example helps to understand the inspection quicker:
  ![]({{site.baseurl}}/images/inspections\example.png)

* Information from external validators.
  Prefer separating inspections so that a user can control them individually.
  If it is not possible, list all problems that an inspection can detect:
  ![]({{site.baseurl}}/images/inspections/multiple.png)

Be very specific about the code problems that an inspection can detect:
![]({{site.baseurl}}/images/inspections/vague.png)

Remove unnecessary words:

* Do not duplicate an inspection’s name in its description.

* Inspections highlight code problems, it's their primary functionality. Don't explain it in descriptions:
  ![]({{site.baseurl}}/images/inspections/purpuse.png)

For text formatting, see [Description text]({{site.baseurl}}/controls/description_text/#text).


### Editor messages

Describe the problem in the highlighted code in the current context.

![]({{site.baseurl}}/images/inspections/editor-error-message.png)
*For example, Unresolved reference inspection provides the exact reference name which is unresolved.*

Use single quotes for the highlighted piece of code if it is referenced in the error message.

If a quick-fix is not available, describe in more detail a way to resolve the problem:

![]({{site.baseurl}}/images/inspections/editor-error-message-detail.png)

### Quick-fixes

Describe the action that fixes the problem. For wording, follow the rules for [buttons]({{site.baseurl}}/controls/button/#label) and [menu actions]({{site.baseurl}}/controls/menu/).

Use single quotes for the referenced piece of code.

![]({{site.baseurl}}/images/inspections/quick-fix-menu.png)

### Capitalization

Use [sentence case]({{site.baseurl}}/text/capitalization/#sentence) for everything: 
* Inspection names and descriptions
* Names of inspection groups and subgroups in settings
* Inspection texts in editor tooltips and quick-fixes 


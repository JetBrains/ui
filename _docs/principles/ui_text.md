---
title: UI text
category: Principles
order: 2
---
## Writing Informative Texts
User interfaces are text for the most part. A good user interface has high quality texts. A high quality text is an informative text. Compared to pictures, text transmits much less information: all we see is letters that we read from left to right, from top to bottom. To efficiently pass information through this low-resolution medium, the text should contain only the most useful information, that is, be as informative as possible.
<br/>There are two ways to increase text informativity: to reduce useless text and to increase the amount of useful information.
<br/>To reduce noise, we remove and reduce uninformative words and phrases and duplicating text. To increase information, we translate from tech language to human and write for newcomers.

### Remove Uninformative Words and Phrases
Several categories of words and phrases can be removed from text with no harm to the meaning:
* **Generic** words like _general_, _advanced_, and _options_.
<br/> _General and Options here do not add useful information and are better to be removed._
<br/>![]( {{ site.baseurl }}/images/ui_text/generic_words.png)
<br/>True, it is not always possible to just remove a generic word. When it cannot be removed, try to use a more informative label instead, tell the purpose of UI controls under the label.
* **Complex verb phrases**. A command or option with only one active verb is easier to understand:
<br/>![]( {{ site.baseurl }}/images/ui_text/сomplex_verb.png)
* **Addressing the user**. A user interface usually addresses the user, so referring to the user explicitly is not necessary:
<br/> _You can import your settings from a previous version of IntelliJ IDEA.
<br/>↓
<br/>Import settings from a previous version of IntelliJ IDEA.
<br/>To configure automatic update settings, see the Updates dialog of your IDE Settings.
<br/>↓
<br/>Configure automatic updates in Updates settings._
<br/>In the last example, the verb see is also extra as there is already the verb configure that carries the meaning of this phrase.
* **Objects and actions obvious from context**
    *The purpose of the checkbox is to enable some sort of function or mode so the word “functionality” is extra here.
 <br/>![]( {{ site.baseurl }}/images/ui_text/context1.png)
    * All you can do with the clipboard is to keep and retrieve information from it so the infinitive to keep is implying the obvious here and can be removed.
 <br/>![]( {{ site.baseurl }}/images/ui_text/context2.png)
    * Text boxes are made for input so giving an explicit instruction specify is not necessary.
<br/>![]( {{ site.baseurl }}/images/ui_text/context3.png)

### Remove Duplicates
To get rid of duplicates, remove the repeating word from the text and put it in the beginning:
<br/>![]( {{ site.baseurl }}/images/ui_text/duplicates.png)
<br/>Putting the meaningful part in the beginning not only makes the text lighter, it also allows people to quickly find what they need by scanning the first words in each block of interface.
Duplicates in meaning should also be removed:
* The meaning help improve is duplicated by want to help make IntelliJ IDEA better. The message also suffers from a number of uninformative words — please, I, if you do not add useful information, click is obvious from the context (you cannot do much with a link other than click). The more... link is uninformative, it does not tell readers what they will find behind it.
<br/>![]( {{ site.baseurl }}/images/ui_text/duplicates2.png)
* When the meaningless words and phrases are removed, the message becomes much shorter and easier to read. The wording Allow sending in this context is appropriate as this is a one-time action where the user literally allows the application to do something. The more… link renamed to Terms and conditions now explains what is behind it and why the user should click it.
<br/>![]( {{ site.baseurl }}/images/ui_text/duplicates3.png)

### Translate from Tech Language to Human
When you develop a feature and know how it works, it is too easy to describe it from the implementation point of view:
<br/>**_Indent options for the file are overwritten by Automatic indent options detector (indent size=2)._**
<br/>A person not familiar with implementation details will not know what the Automatic indent options detector is, why file’s indent options have been overwritten and what indent size=2 implies. Translated to the “human” language, the message means:
<br/>**_The indent size for this file is 2 spaces instead of 4._**

### Write for Newcomers
A “newcomer” is a person who sees the user interface for the first time. What would you think if you saw these options for the first time:
* Enable File Colors seems to disable the other two options when turned off. But it does not.
<br/>![]( {{ site.baseurl }}/images/ui_text/newcomers1.png)
* It is possible to think that on refers to the checkboxes which rises a question: how the action behaves when both checkboxes are on.
<br/>![]( {{ site.baseurl }}/images/ui_text/newcomers2.png)
* What would smart Home and End keys do? What would they do if they are not smart?
<br/>![]( {{ site.baseurl }}/images/ui_text/newcomers3.png)

Writing for newcomers helps to evaluate UI texts with a fresh look and find what might be unclear and ambiguous. With that in mind, the texts above can be rewritten:
* The common part use in is also removed from the options, rephrased and put in the beginning.
<br/>![]( {{ site.baseurl }}/images/ui_text/newcomers4.png)


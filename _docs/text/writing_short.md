---
title: Writing Short and Clear Text
category: Text
---

Texts in user interfaces should be short and clear. Short texts save reading time. Clear texts lead to fewer mistakes. Editing methods described below can help with that.

## Use simple constructions 
* Use simple verb forms. Prefer present tense.
* Use simple sentences: one idea per sentence.
* Avoid passive voice.


This way the same meaning can be expressed with less words. Compare:

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_Those resources that are available locally_ <span style="font-size:large;">→</span> _Local resources_ 

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_Maven has to use_ <span style="font-size:large;">→</span> _Maven uses_

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_The use of a secure connection is required_ <span style="font-size:large;">→</span> _Use secure connection_


## Remove or elaborate generic words 
* Words like general, advanced, and options do not add useful information and can be removed with no harm to the meaning: 
![]({{site.baseurl}}/images/writing_short/generic-general.png)
![]({{site.baseurl}}/images/writing_short/generic-options.png)
*No meaning is lost after removing group headers "General" and "Options".*


* Some generic words cannot be removed. They can appear in actionable elements like buttons, checkboxes or links. Or removing a group header could break a dialog layout. In such cases, use a more informative label instead:
![]({{site.baseurl}}/images/writing_short/generic-renamed-link.png)
*The link "Learn more" does not explain what useful information could be there for the user to click it.*


## Remove obvious objects and actions 
* Remove verbs that explain the function of a UI control:
![]({{site.baseurl}}/images/writing_short/obvious-specify.png)
*Text boxes are made for input — an explicit instruction "specify" duplicates the meaning expressed by the text field. Additional information can be given under the field — see [Context help]({{site.baseurl}}/principles/context_help).* 


<table>
<col width="59%">
<tr>
    <td> <img src="{{site.baseurl}}/images/writing_short/obvious-prefer.png" style="margin-bottom: 9px; margin-left: 40px;">
         <p style="color: #999999; font-size: small; margin-left: 40px;">
         A selected radio button means its option is "preferred".</p> </td>    
    <td> <img src="{{site.baseurl}}/images/writing_short/obvious-allow.png" style="margin-bottom: 9px;">
         <p style="color: #999999; font-size: small; margin-left: 20px;">
         A checked checkbox means its feature <br>is "allowed". </p> </td>         
</tr>
</table>

* Remove words with a meaning that is already expressed in the label:

<table>
<col width="59%">
<tr>
    <td> <img src="{{site.baseurl}}/images/writing_short/obvious-contents.png" style="margin-bottom: 9px; margin-left: 40px;">
         <p style="color: #999999; font-size: small; margin-left: 40px;">
         The clipboard’s purpose is to keep information so the infinitive "to keep" is implying the obvious and can be removed.</p> </td>    
    <td> <img src="{{site.baseurl}}/images/writing_short/obvious-functionality.png" style="margin-bottom: 9px;">
         <p style="color: #999999; font-size: small; margin-left: 20px;">
         The word “functionality” is already implied by "Drag’n’Drop" and can be removed. </p> </td>         
</tr>
</table>


## Do not address the user
A user interface is for a person who uses it. Addressing this person is unnecessary because they by default perceive the text they see as for them:
![]({{site.baseurl}}/images/writing_short/addressing1.png)


![]({{site.baseurl}}/images/writing_short/addressing2.png)
*The whole phrase after the comma is not needed because its meaning is already expressed by the verb "configure".*


## Remove duplicates
* If the repeating word appears in element labels, move it to the beginning. Finding a setting becomes faster as you scan only meaningful words:
![]({{site.baseurl}}/images/writing_short/duplicates.png)


* Remove duplicates in meaning:
![]({{site.baseurl}}/images/writing_short/help-improve-notification.png)

<table>
<col width="30%">
<col width="30%">
<th> Before </th>
<th> After </th>
<tr>
    <td> Help improve IntelliJ IDEA <span style="color:#cc4700;"> by&nbsp;sending anonymous usage statistics to JetBrains s.r.o. </span> </td>
    <td> Help improve IntelliJ IDEA </td>
    <td> <font color="#999999"> The purpose of the header is to attract attention. The&nbsp;shorter and clearer header does that better. </font> </td>
</tr>
<tr>
    <td> <span style="color:#cc4700;"> if you want to help make IntelliJ IDEA better </span> </td>
    <td> Allow sending anonymous usage statistics to JetBrains s.r.o. </td>
    <td> <font color="#999999"> “Help make IntelliJ IDEA better” is already expressed in the message header. The body text now explains how the user can do that. </font> </td>
</tr>
<tr>
    <td> <span style="color:#cc4700;"> more... </span> </td>
    <td> Terms and conditions </td>
    <td> <font color="#999999">The link more... does not tell what is behind it — unclear for the user why to click it.</font></td>
</tr>
</table>

<table>
<col width="30%">
<th> Removed </th>
<tr>
    <td> <span style="color:#cc4700;"> click I agree</span> </td>
    <td> <span style="color:#999999;"> The verb "click" is obvious from context: you cannot do much with a link other than click. </span> </td>
</tr>
<tr>
    <td> <span style="color:#cc4700;"> click...&nbsp;I&nbsp;don’t agree otherwise </span> </td>
    <td> <span style="color:#999999;"> The link "I don’t agree" duplicates the notification “Close” button which appears on hover. </span> </td>
</tr>
<tr>
    <td> <img src="{{site.baseurl}}/images/writing_short/notificationInfo.png" width="24" height="24"> </td>
    <td> <span style="color:#999999;"> The icon is not needed because the message is purely informative, not an error or a warning. Texts are information by default, there is no need to specify that meaning explicitly. </span> </td>
</tr>
</table>


## Translate from tech to human
When you make a feature, you know how it works from the inside and can describe it from the implementation point of view: 
![]({{site.baseurl}}/images/writing_short/indent-options-before.png)


A person not familiar with implementation details won’t know what the Automatic indent options detector is, why file’s indent options have been overwritten and what indent size=2 means. Translated to the “human” language, the message reads: 
![]({{site.baseurl}}/images/writing_short/indent-options-after.png)
 
 
Always write UI text from a user’s perspective. Avoid technical terms, jargon and descriptions of inner logic that a user might not know.

 
## Write for first-time users
After writing a UI text, imagine seeing it for the first time and try to understand what might be unclear or confusing. Then correct if necessary.

![]({{site.baseurl}}/images/writing_short/first-time-file-colors-before.png)
*For a first-time user, Enable File Colors enables or disables the other two options (but it does not).*

![]({{site.baseurl}}/images/writing_short/first-time-file-colors-after.png)
*Rewritten: now all options are equal.*


More examples:

![]({{site.baseurl}}/images/writing_short/first-time-auto-insert.png) *Before: The title can be read as “Auto-insert when only one checkbox is on” making you ask how does it work when both checkboxes are on. After: Replacing choice with completion option makes the title unambiguous.*|![]({{site.baseurl}}/images/writing_short/first-time-smart-keys.png)*Before: What do smart Home and End keys do? What do they do if they are not smart? After: Added text explains what the options do so that the reader can make an informed choice.*


## Examples
![]({{site.baseurl}}/images/writing_short/project-structure.png)

<table>
<col width="30%">
<col width="30%">
<th> Before </th>
<th> After </th>
<tr>
    <td> <span style="color:#cc4700;">Project</span> name <br><span style="color:#cc4700;">Project</span> SDK <br><span style="color:#cc4700;">Project</span> language level </td>
    <td> Project name <br>SDK <br>Language level </td>
    <td> <span style="color:#999999;"> "Project" can be left only for the first field. All others will be understood as project settings because they appear in the same group of UI elements. </span> </td>
</tr>
<tr>
    <td> This path <span style="color:#cc4700;">is used</span> to store </td>
    <td> This path stores </td>
    <td> <span style="color:#999999;"> Simple verb form </span> </td>
</tr>
<tr>
    <td> store <span style="color:#cc4700;">all</span> project compilation <span style="color:#cc4700;">results</span> </td>
    <td> stores project compilation output </td>
    <td> <span style="color:#999999;"> “all” is extra because it is implied by default. “results” is another word for “output” — having different words for the same meaning complicates understanding. </span> </td>
</tr>
<tr>
    <td> A directory corresponding to each module <span style="color:#cc4700;">is created</span> under this path. This directory contains <span style="color:#cc4700;">two</span> subdirectories... </td>
    <td> It has a separate directory for each module, with the Production and Test subdirectories. </td>
    <td> <span style="color:#999999;"> “is created” is not relevant to the meaning of this phrase. “two” is obvious from context: you see that there are two subdirectories because only two are named. </span> </td>
</tr>
</table>

<table>
<col width="60%">
<th> Moved </th>
<tr>
    <td> <span style="color:#cc4700;">This</span> [field name] <span style="color:#cc4700;">is default for all project modules. A module specific</span> [field name] <span style="color:#cc4700;">can be configured for each of the modules is required.</span> </td>
    <td> <span style="color:#999999;"> This phrase is repeated for all fields. Can be shown only once at the bottom of the dialog.</span> </td>
</tr>
</table>


<br>
<br>
<br>
![]({{site.baseurl}}/images/writing_short/offline-mode.png)

 
<table>
<col width="30%">
<col width="30%">
<th> Before </th>
<th> After </th>
<tr>
    <td> <span style="color:#cc4700;">visits the</span> remote repositories <span style="color:#cc4700;">and</span> checks for&nbsp;updates </td>
    <td> checks remote repositories for updates </td>
    <td> <span style="color:#999999;"> “Checks” already includes the meaning of&nbsp;“visits”. </span> </td>
</tr>
<tr>
    <td> <span style="color:#cc4700;">When you switch to</span> offline mode </td>
    <td> In the offline mode </td>
    <td> <span style="color:#999999;"> The action “switched” is not relevant for the meaning of this phrase. Also, an unnecessary reference to the user — “you”. </span> </td>
</tr>
<tr>
    <td> Maven <span style="color:#cc4700;">has to</span> use </td>
    <td> Maven uses </td>
    <td> <span style="color:#999999;"> Not relevant that a technology must do something, enough to say it just works this&nbsp;way. </span> </td>
</tr>
<tr>
    <td> <span style="color:#cc4700;">those</span> resources <span style="color:#cc4700;">that are&nbsp;available</span> locally  </td>
    <td> local resources </td>
    <td>  </td>
</tr>
<tr>
    <td> reports <span style="color:#cc4700;">about the problems</span> if something is missing  </td>
    <td> reports if something is&nbsp;missing </td>
    <td>  </td>
</tr>
</table>

<table>
<col width="35%">
<th> Removed </th>
<tr>
    <td> <span style="color:#cc4700;">The offline mode is helpful when you need to work offline</span> </td>
    <td> <span style="color:#999999;"> The phrase does not explain when the offline mode is helpful. It should either be elaborated or removed. </span> </td>
</tr>
<tr>
    <td> <span style="color:#cc4700;"> or when your network connection is slow </span> </td> 
    <td> <span style="color:#999999;"> Only one of possible uses for the offline mode and an obvious one. Can be removed for a more concise text. </span> </td>
</tr>
</table>

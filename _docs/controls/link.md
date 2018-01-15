---
title: Link
category: Controls
---
![]({{site.baseurl}}/images/link/adjust-colors.png)

## When to use

Use links for:

1. **Local navigation** between pages of the same window. If a link opens another window, it is an action — refer to “Secondary actions” below.

    ![]({{site.baseurl}}/images/link/deployment-server.png)
    
    <p style="color: #999999; font-size: 13px; line-height: 23px; margin-top: -24px; margin-left: 20px; margin-bottom: 30px">This option is in the Settings dialog. “Configure servers” opens another page of this dialog.</p>

    ![]({{site.baseurl}}/images/link/color-scheme-by-scope.png)
    *Do not use a button to navigate to another page of a dialog.*    

2. **External navigation** to web resources. External links are accompanied by an arrow icon. It shows that the user will switch to a browser and lose the current context. 

    ![]({{site.baseurl}}/images/link/BOM.png)

    An exception is a help topic link in [empty states]({{site.baseurl}}/principles/empty_state/). The help icon already hints that this is an external help resource:

    ![]({{site.baseurl}}/images/link/database-tw-segment.png)

3. **Secondary actions** in packed or small UI areas. 
   
   <p style="margin-top: 16px"><b>Two types of action links </b></p>
   
   * _Button-links_ produce an immediate action or open a new window. They appear as a stand-alone element or inside regular text: 
        
        ![]({{site.baseurl}}/images/link/setup-sdk.png)
                
        ![]({{site.baseurl}}/images/link/add-java-application.png)
        
   * _Drop-down links_ show a [context menu]({{site.baseurl}}/components/context_menu/) or a [popup]({{site.baseurl}}/components/popup/) menu. They only appear as a stand-alone element:
        
        ![]({{site.baseurl}}/images/link/commit-configure.png)
        
        ![]({{site.baseurl}}/images/link/live-templates.png)
        
   **Usage examples**
   
   <table > 
       <col width="400 px">      
       <tr>
           <td> <img src="{{site.baseurl}}/images/link/reset-link.png" style="margin-top: 4px"> </td>
           <td> <p style="color: #999999; font-size: 13px; line-height: 23px">The "Reset" action is a link for two reasons: <br>1) the action appears only when the default value in the field is changed and reverting to a&nbsp;default is considered a rare scenario; <br>2) a lightweight link fits better than a button in this busy layout. </p> </td>                
       </tr>
       <tr>
            <td> <img src="{{site.baseurl}}/images/link/notification.png" style="margin-top: 4px"> </td>
            <td> <p style="color: #999999; font-size: 13px; line-height: 23px">In global notifications, actions are made links because the area is small and buttons would take too much space and attract unnecessary attention. </p> </td>                
        </tr>  
       </table>  
   
   

   **When not to use**
   
   When an action is primary or when a UI is not constrained, use a [button]({{site.baseurl}}/controls/button/) or a [drop-down list]({{site.baseurl}}/controls/drop_down/) instead. These controls can be selected from the keyboard, are bigger and easier to click and more common for a desktop UI.

   <p class="label incorrect">Incorrect</p>
        
   ![]({{site.baseurl}}/images/link/adroid-sdk-incorrect.png)
        
   <p class="label correct">Correct</p>
        
   ![]({{site.baseurl}}/images/link/adroid-sdk-correct.png)
   *Even though the “Edit” action is not primary, there is plenty of space to place a button.*

4. **Disclosure** of additional text. Use this pattern only for secondary information when the screen space is constrained. For disclosure of additional UI components in a dialog, use a [collapsible group header]({{site.baseurl}}/components/collapsible_group_header/).

    ![]({{site.baseurl}}/images/link/tooltip-disclosure.png)

    
    

## Placement

A link can appear as:

* An individual element, as in the examples above. In this case, links usually appear on the right of or below a UI element they relate to.

* A part of a checkbox or radio button label or of any stand-alone text, like text in an [empty state]({{site.baseurl}}/principles/empty_state/) or in [context help]({{site.baseurl}}/principles/context_help/):

    ![]({{site.baseurl}}/images/link/use-color-scheme-font.png)
    
    ![]({{site.baseurl}}/images/link/learn-what-is-logged.png)

    Make a link the minimum phrase that is enough to understand what will happen without reading the whole text:
    
    ![]({{site.baseurl}}/images/link/long-link.png)
    *"What is logged" is enough to understand what information will be opened.*
    
* In some but not all items of a tree or table:

    ![]({{site.baseurl}}/images/link/JSHint.png) 

    If a link appears in all items of a tree or table: 
    * If this is a button-link, use a toolbar button instead. 
    * If a drop-down link, use a separate table column of drop-down cells instead (see the Editing Values section in [Table]({{site.baseurl}}/controls/table/)).
    * If moving a link to a separate table column breaks meaningful formatting, leave as is:
        
        ![]({{site.baseurl}}/images/link/multirepo-push.png)
        *Links in the “Push Commits” window tree have format “[remote repository] : [branch]”. Moving these links to two separate columns would break formatting that is meaningful here: it helps understanding the relation between the two links. In such case, it is better to leave repeating links in the same column.*


## Wording

* Capitalization and ellipsis:

    <table style="line-height: 180%; font-size: 80%">
    <col width="220 px">
    <col width="200 px">
    <tr>
        <td> Navigation link <br>Drop-down link <br> Button-link inside text </td>        
        <td> Sentence capitalization <br>No ellipsis</td>
        <td> <img src="{{site.baseurl}}/images/link/button-link-sentence.png" style="margin-top: 4px"> </td>
    </tr>
    <tr>
        <td> Stand-alone button-link <br><p style="color: #999999; line-height: 140%; margin-top: 2px">Works as a lightweight button and follows the same rules. </p> </td>
        <td> Title capitalization <br>Ellipsis if input is required </td>
        <td> <img src="{{site.baseurl}}/images/link/button-link-title.png" style="margin-top: 4px"> </td>
    </tr>    
    </table>  




* Do not use words like “navigate” or “click here”. A link implies navigation or clicking:

    ![]({{site.baseurl}}/images/link/proxy-settings.png)

    ![]({{site.baseurl}}/images/link/download-drivers.png)

* When possible, replace “Learn more” and other generic phrases with more informative ones:

    ![]({{site.baseurl}}/images/link/closure-linter.png)


## Spacing
<table>
<col width="150px">
<tr>
    <td> External link </td>
    <td> <img src="{{site.baseurl}}/images/link/inset-external-link.png" style="margin-left: 17px; margin-top: 4px"> </td>
</tr>
<tr>
    <td> <p style="margin-top: 30px"> Drop-down link </p> </td>
    <td> <img src="{{site.baseurl}}/images/link/inset-drop-down-link.png" style="margin-left: 0px; margin-top: 0px"> </td>
</tr>
<tr>
    <td> <p style="margin-top: 16px"> Horizontal insets </p>  </td>
    <td> <img src="{{site.baseurl}}/images/link/inset-link-after.png" style="margin-left: 17px; margin-top: 0px">
         <img src="{{site.baseurl}}/images/link/insets-tree.png" style="margin-left: 17px; margin-top: 0px"> 
    </td>
</tr>
<tr>
    <td> Vertical inset </td>
    <td> <img src="{{site.baseurl}}/images/link/inset-link-below.png" style="margin-left: 0px; margin-top: 4px"> </td>
</tr>

    
</table>
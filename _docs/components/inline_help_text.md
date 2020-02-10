---
title: Inline help text
category: Controls
type: Subpage
subpageOf: Context help

---
Inline help text provides useful information about a setting.

![]({{site.baseurl}}/images/inline_help_text/01_header_pic.png)

## When to use

Follow the rules for [context help]({{site.baseurl}}/principles/context_help).

## How to use 

### Text length and formatting

Show no more than 5 lines of help text not to clutter the screen. Note that the text width is limited to 70 characters. 

![]({{site.baseurl}}/images/inline_help_text/02_text_size.png)

Show more than 5 lines only when a text cannot be shortened for legal purposes.

![]({{site.baseurl}}/images/inline_help_text/03_text_size_long.png)

<p class="noanchor"><strong>Implementation</strong></p>

<div class="code-block__wrapper">{% highlight java %}
JCheckBox checkBox = new JCheckBox("Send usage statistics when using EAP versions");

JPanel panel = UI.PanelFactory.panel(checkBox).

   withComment("<p>Help JetBrains improve its products by sending anonymous data about features and plugins used, hardware and software configuration, statistics on types of files, number of files per project, etc.</p>
  <br/>
  <p>Please note that this will not include personal data or any sensitive information, such as source code, file names, etc. The data sent complies with the <a href=\"http://jetbrains.com\">JetBrains Privacy Policy</a></p>").

   createPanel();

{% endhighlight %}</div>


Provide a link to the corresponding help article or to a place in the IDE where the related settings can be found. Place the link at the end of the text where possible so that it does not disrupt reading.

![]({{site.baseurl}}/images/inline_help_text/04_link_external.png)
*External link*

![]({{site.baseurl}}/images/inline_help_text/04_link_internal.png)
*Local link*

Text style formatting:
* Avoid text highlighting. Usually, the help text is short and no bold or italics is needed. 
![]({{site.baseurl}}/images/inline_help_text/inline_text_no_styling.png)

* Use formatting for code, console commands or parameters. Use HTML tags. Enclosing text in `<html></html>` tags is not needed.
![]({{site.baseurl}}/images/inline_help_text/inline_text_parameter_styling.png)

Avoid using brackets.

![]({{site.baseurl}}/images/inline_help_text/05_no_brackets.png)

### Writing guidelines

Make help text [short and informative]({{site.baseurl}}/text/writing_short). 

Do not repeat the setting name in the help text.

![]({{site.baseurl}}/images/inline_help_text/06_inline_text_dont_repeat_setting.png)


## Placement

### Labeled input, button, checkbox, or radio button

Labeled inputs are fields, combo boxes, or text areas.

Place the help text to the right of a labeled input, checkbox, or radio button if all of the following applies:
* The space to the right is empty.
* The help text has 1–5 words, not counting articles and prepositions.
* The control label has 1–5 words.

![]({{site.baseurl}}/images/inline_help_text/07_right_inputs.png)

<div class="code-block__wrapper">{% highlight java %}
JPanel p = UI.PanelFactory.grid().splitColumns().
 add(UI.PanelFactory.panel(new JComboBox<>(new String [] {"Default", "Non default"})).
   withLabel("Plugin update policy:").withComment("Ignore by Maven 3+").moveCommentRight()).
 add(UI.PanelFactory.panel(new JTextField()).withLabel("Thread count:").withComment("-T option").moveCommentRight()).
 createPanel();
{% endhighlight %}</div>

![]({{site.baseurl}}/images/inline_help_text/08_right_checkboxes.png)

<div class="code-block__wrapper">{% highlight java %}
JCheckBox cb1 = new JCheckBox("Build project automatically");
JCheckBox cb2 = new JCheckBox("Compile independent modules in parallel");
JPanel p2 = UI.PanelFactory.grid().
 add(UI.PanelFactory.panel(cb1).resizeX(false).withComment("Works while not running / debugging").moveCommentRight()).
 add(UI.PanelFactory.panel(cb2).resizeX(false).withComment("May require larger heap size").moveCommentRight()).
createPanel();
{% endhighlight %}</div>

![]({{site.baseurl}}/images/inline_help_text/09_right_button.png)

Otherwise, place the help text under the UI control.

![]({{site.baseurl}}/images/inline_help_text/10_under_field.png)

<div class="code-block__wrapper">{% highlight java %}
TextFieldWithBrowseButton tfbb = new TextFieldWithBrowseButton(e -> System.out.println("JTextField browse button pressed"));
JPanel p = UI.PanelFactory.panel(tfbb).
 withLabel("Default directory:").withComment("Preselected in \"Open ...\" and \"New | Project\" dialogs");
{% endhighlight %}</div>

If there is no space under the UI control, use the [help tooltip]({{site.baseurl}}/controls/tooltip#question-mark-icon-for-help-tooltips) with the question mark icon for labeled inputs, checkboxes and radio buttons. For buttons, use the help tooltip without the icon. 


### List, tree or table

If the help text applies to a whole list, tree, or table, place it under the control.

![]({{site.baseurl}}/images/inline_help_text/11_under_table.png)

<div class="code-block__wrapper">{% highlight java %}
JTable table = createTable(); // Actual table creation
JBScrollPane pane = new JBScrollPane(table);
pane.setPreferredSize(JBUI.size(400, 300));
pane.putClientProperty(UIUtil.KEEP_BORDER_SIDES, SideBorder.ALL);
JPanel panel = UI.PanelFactory.panel(pane).
 withComment("&lt;Project&gt; is content roots of all modules, all immediate descendants<br/>of the projects base directory, and .idea directory contents”).resizeY(true).createPanel();
{% endhighlight %}</div>

If it applies to a single list, tree or table item: 
* If the help text has 1–10 words, place it to the right of the item. 
![]({{site.baseurl}}/images/inline_help_text/12_tree_inline_help_text.png)

* If the text is longer than 10 words:

<p class="noanchor" style="margin-left: 20px">For a list or tree in the master part, place the text into the detail part.</p> 
![]({{site.baseurl}}/images/inline_help_text/13_master-detail_help_text.png)

<p class="noanchor" style="margin-left: 20px">If the case with the master-detail layout above does not apply, use the <a href="{{site.baseurl}}/controls/tooltip/#question-mark-icon-for-help-tooltips">help tooltip</a> with the question mark icon.</p> 
![]({{site.baseurl}}/images/tooltip/05_question_icon_tree.png)


### Group of controls

If the help text applies to several UI controls, place it at the bottom of the group. 

![]({{site.baseurl}}/images/inline_help_text/14_under_group.png)

<p class="noanchor"><strong>Implementation</strong></p>

<p class="noanchor">Use <code>IdeaTitledBorder</code> as the border for panels that need title and possibly the gray line on the right of the title:</p>

<div class="code-block__wrapper">{% highlight java %}
String INNER_COMMENT = "<p>By default IntelliJ IDEA uses Gradle to build the project and run the tasks.</p>"+
   "<br style=\"font-size: 8;\"/><p>In a pure Java/Kotlin project, building and running by means of IDE might be faster, thanks to optimizations. Note, that the IDE doesn't support all Gradle plugins and the project might not be built correctly with some of them.</p>";
 JPanel innerGrid = UI.PanelFactory.grid().splitColumns().
 add(UI.PanelFactory.panel(new JComboBox<>(new String [] {"IntelliJ IDEA", "Gradle"})).resizeX(false).withLabel("Build and run with:")).
 add(UI.PanelFactory.panel(new JComboBox<>(new String [] {"IntelliJ IDEA", "Gradle"})).resizeX(false).withLabel("Run tests with:")).
 createPanel();
JPanel panel = UI.PanelFactory.panel(innerGrid).withComment(INNER_COMMENT).createPanel();
panel.setBorder(IdeBorderFactory.createTitledBorder("Build and Run"));
{% endhighlight %}</div>

<p class="noanchor">You can find more examples in the <code>ComponentPanelTestAction</code> implementation or the <i>Show Standard Panels</i> action.</p>


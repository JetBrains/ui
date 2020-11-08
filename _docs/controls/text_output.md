---
title: Text output
codename: TBD
category: Controls
---

Description text provides explanatory information about a set of settings or a single item in a list or tree.

![]({{site.baseurl}}/images/text_output/01_example.png)


## When to Use

Use description text to:

* Show details about items in a list or tree:

![]({{site.baseurl}}/images/text_output/02_use_in_tree.png)

* Describe a group of settings:

<img src="{{site.baseurl}}/images/text_output/03_use_in_settings.png" style="margin-top: -20px; margin-left: -12px"/>


## How to Use

### Text

Follow general rules in [Writing short and clear]({{site.baseurl}}/text/writing_short/) and [Punctuation]({{site.baseurl}}/text/punctuation).

Use the default text style for plain text. Increase line height by 3px from the default value.

Use [H4 bold]({{site.baseurl}}/principles/typography) (Default bold) for headings or to highlight important words:

![]({{site.baseurl}}/images/text_output/04_bold_header.png)

Use the editor font to highlight code snippets:

![]({{site.baseurl}}/images/text_output/05_editor_font.png)

Use bullets for lists:

![]({{site.baseurl}}/images/text_output/06_bullets.png)

Limit the width of the line to 70–80 symbols, as it is not convenient to read very long lines:

<p class='label incorrect'>Incorrect</p>

![]({{site.baseurl}}/images/text_output/07_width_incorrect.png)

<p class='label correct'>Correct</p>

![]({{site.baseurl}}/images/text_output/07_width_correct.png)

If the text does not fit, add a scrollbar:

![]({{site.baseurl}}/images/text_output/08_scroll.png)


### Appearance

Do not add borders around description text. Use the panel color for the background.

<table style="margin-bottom: 0">
  <tr>
    <td> 
        <p class="label incorrect" style="margin-top: 0; margin-bottom: 10px"> Incorrect </p>
        <img src="{{site.baseurl}}/images/text_output/09_frame_incorrect.png" /> 
    </td>   
    <td> 
        <p class="label correct" style="margin-top: 0; margin-bottom: 10px"> Correct </p>
        <img src="{{site.baseurl}}/images/text_output/09_frame_correct.png" /> 
    </td>
  </tr>
</table>

For [links]({{site.baseurl}}/controls/link), use the default link color: `Link.activeForeground`. Underline links on hover:

![]({{site.baseurl}}/images/text_output/10_link.png)


### Insets

<p class="noanchor">Separate the text from the surroundings with insets.</p>

Use a 12px horizontal inset if the description text’s area has other elements:

![]({{site.baseurl}}/images/text_output/11_insets_12.png)

Increase inset up to 20px if the description text is the only element:

![]({{site.baseurl}}/images/text_output/11_insets_20.png)


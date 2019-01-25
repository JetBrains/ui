---
title: Loader
category: Controls
type: Subpage
subpageOf: Progress indicators
---

A loader informs users about performing a lengthy operation.


## When to use

Follow the rules for [progress indicators]({{site.baseurl}}/controls/progress_indicators).
 
 
## How to use

The loader form and sizes are the same in all themes. Use the default 16x16 loader in all cases.

<div class="code-block__wrapper">{% highlight java %}
JLabel label = new JLabel("Loading...", new AnimatedIcon.Default(), SwingConstants.LEFT)
{% endhighlight %}</div> 

   
A loader may have a label if the process is long and the loader is shown in an empty area. In this case, use a [progress text]({{site.baseurl}}/controls/progress_text) as the label:  
![]({{site.baseurl}}/images/loader/loader_with_progress_text.png)

Remove the loader as soon as the process completes.


## Placement

<table>

<col width="150px">

<tr>
    <td> <p style="margin-top: 16px"> <span style="color: #999999"> Inside a field </span> </p>  </td>
    <td> <img src="{{site.baseurl}}/images/loader/placement_field.png" style="margin-left: 17px; margin-top: 0px"> </td>
</tr>

<tr>
    <td> <p style="margin-top: 16px"> <span style="color: #999999"> In a corner </span> </p>  </td>
    <td> <img src="{{site.baseurl}}/images/loader/placement_corner.png" style="margin-left: 17px; margin-top: 0px">
    </td>
</tr>

<tr>
    <td> <p style="margin-top: 16px"> <span style="color: #999999"> Next to an item </span> </p>  </td>
    <td> <img src="{{site.baseurl}}/images/loader/placement_item.png" style="margin-left: 17px; margin-top: 0px"> </td>
</tr>

<tr>
    <td> <p style="margin-top: 16px"> <span style="color: #999999"> Before a progress text </span> </p>  </td>
    <td> <img src="{{site.baseurl}}/images/loader/placement_progress_text.png" style="margin-left: 17px; margin-top: 0px">
    </td>
</tr> 

</table>  





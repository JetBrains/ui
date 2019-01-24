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
1. The loader form and sizes are the same in all themes. Use the default 16x16 loader in all cases.

<div class="code-block__wrapper">{% highlight java %}
JLabel label = new JLabel("Loading...", new AnimatedIcon.Default(), SwingConstants.LEFT)
{% endhighlight %}</div> 

   
2. A loader may have a label if the process is long and the loader is shown in an empty area. In this case, use a [progress text]({{site.baseurl}}/controls/progress_text) as the label:  
![]({{site.baseurl}}/images/loader/loader_with_progress_text.png)

3. Remove the loader as soon as the process completes.


## Placement

* Inside a field:
![]({{site.baseurl}}/images/loader/placement_field.png)

* In a corner:
![]({{site.baseurl}}/images/loader/placement_corner.png)

* Next to an item:
![]({{site.baseurl}}/images/loader/placement_item.png)
  
* Before a progress text:
![]({{site.baseurl}}/images/loader/placement_progress_text.png)
  




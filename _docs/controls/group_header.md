---
title: Group header
codename: TitledSeparator
category: Controls
---

A group header clearly labels a group of UI controls.

![]({{site.baseurl}}/images/group_header/01_group_header.png)


## When to use

Follow the rules in [Groups of controls]({{site.baseurl}}/principles/groups_of_controls).

Do **not** use group headers when each group contains 3 controls and less. Separate with [vertical insets]({{site.baseurl}}/principles/layout/#organize-with-insets) instead.

<p class="label incorrect"> Incorrect </p>

![]({{site.baseurl}}/images/layout/6_03_group_incorrect.png)
*Each group has less than 3 controls. Group headers only add noise in this case because control labels are enough to understand their purpose.*

<p class="label correct"> Correct </p>

![]({{site.baseurl}}/images/layout/6_03_group_correct.png)


## How to use

Use title capitalization for the label.

Make the label short, preferably no more than 4 words. Avoid generic words, such as "General" or “Options”. See [Writing short and clear]({{site.baseurl}}/text/writing_short/#04).

If a group contains rarely used or advanced settings, use a **collapsible group header** and collapse it by default.

![]({{site.baseurl}}/images//group_header/02_collapsed_header.png)





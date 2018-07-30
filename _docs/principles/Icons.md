---
title: Icons
category: Principles
---

Follow these guidelines to create a new icon or redesign an existing one for IntelliJ-based products.

## Style
A common style unites several icons into a set and makes them recognizable.

Use a flat geometric icon style with straight corners and edges. Flat icons remain legible even in small sizes.

<table>
<col width="30%">
<col width="30%">
<tr>
    <td> <p class="label incorrect">Incorrect</p> <br /><img src="{{site.baseurl}}/images/icons/style_pin_3d.png"> </td>
    <td> <p class="label correct">Correct</p> <br /><img src="{{site.baseurl}}/images/icons/style_pin_flat.png"> </td>
</tr>
<tr> 
    <td colspan="2">
        <p style="color: #999999; font-size: 13px; margin-top: -40px; margin-left: 20px">Use flat shapes instead of complex 3d forms.</p> 
    </td>
</tr>
</table>

<table>
<col width="30%">
<col width="30%">
<tr>
    <td> <p class="label incorrect">Incorrect</p> <br /><img src="{{site.baseurl}}/images/icons/style_folder_round.png"> </td>
    <td> <p class="label correct">Correct</p> <br /><img src="{{site.baseurl}}/images/icons/style_folder_straigt.png"> </td>
</tr>
<tr> 
    <td colspan="2">
        <p style="color: #999999; font-size: 13px; margin-top: -40px; margin-left: 20px">Use straight corners and lines instead of curves. It’s recommended to use 45° and 90° angles,<br />or 30° and 60° where possible.</p> 
    </td>
</tr>
</table>

Icons should be as simple as possible without losing their meaning. Clean and simple icons ensure readability and reduce visual clutter.
<table>
<col width="30%">
<col width="30%">
<tr>
    <td> <p class="label incorrect">Incorrect</p> <br /><img src="{{site.baseurl}}/images/icons/style_soft_wrap_detailed.png"> </td>
    <td> <p class="label correct">Correct</p> <br /><img src="{{site.baseurl}}/images/icons/style_soft_wrap_simple.png"> </td>
</tr>
<tr> 
    <td colspan="2">
        <p style="color: #999999; font-size: 13px; margin-top: -40px; margin-left: 20px">Reduced the icon to its minimal form, without losing its meaning.</p> 
    </td>
</tr>
</table>


## Grid and size
Basically, icons fit into a square artboard. Leave a transparent padding around the perimeter. For default 16px icons, the transparent border is 1px, so the icon’s visible part should be inside the 14px x 14px area.

![]({{site.baseurl}}/images/icons/grid.png)
*14px x 14px is the area where the visible part <br/> of the icon should fit for an 16px icon.*

Content should only go beyond the borders if a [modifier](#modifier) is added, or if additional visual weight is required.

Sizes for other icon sizes can be found in the table below:

<table>
<col width="30%">
<col width="30%">
<col width="30%">
<th> Icon Type </th>
<th> Icons Size </th>
<th> Transparent Border </th>
<tr>
    <td> Gutter, status bar </td>
    <td> 12px x 12px </td>
    <td> — </td>
</tr>
<tr>
    <td> Tool window </td>
    <td> 13px x 13px </td>
    <td> — </td>
</tr>
<tr>
    <td> <span style="font-weight: bold"> Default </span>: toolbar icons, project tree, etc. </td>
    <td> 16px x 16px </td>
    <td> 1px, except for modifier </td>
</tr>
<tr>
    <td> Dialogs </td>
    <td> 32px x 32px </td>
    <td> 2px </td>
</tr>
<tr>
    <td> Logo app icon </td>
    <td> 32px x 32px <br /> 64px x 64px <br /> 128px x 128px <br /> 256px x 256px <br /> 512px x 512px </td>
    <td> — </td>
</tr>
</table>


## Basic shapes
Use basic shapes to build icons, such as squares, circles and rectangles. Using a grid and basic shapes ensures consistent visual proportions and placement.

<table>
<col width="30%">
<col width="30%">
<tr>
    <td> <img src="{{site.baseurl}}/images/icons/shape_square.png"> <em> Square 12px x 12px </em></td>
    <td> <img src="{{site.baseurl}}/images/icons/shape_circle.png"> <em> Circle 14px </em></td>
</tr>
<tr>
    <td> <img src="{{site.baseurl}}/images/icons/shape_rect_horizontal.png"> <em> Horizontal rectangle 10px x 14px</em></td>
    <td> <img src="{{site.baseurl}}/images/icons/shape_rect_vertical.png"> <em> Vertical rectangle 14px x 10px </em></td>
</tr>
</table>

Make sure that icons have the same visual weight. The more filled an icon is, the less space it needs. Following this rule, circles, rhombuses, triangles and other non-square shapes should have larger height and width to be optically balanced with square figures.

![]({{site.baseurl}}/images/icons/shapes_weight_1.png)
*Make the circle diameter 2px bigger than square icons’ height to compensate the visual weight.*

Icons with more details should occupy more space.

![]({{site.baseurl}}/images/icons/shapes_weight_2.png)
*The eye icon is less detailed and occupies less space than a more complex scissors icon.*

Icon weight can often take priority over the basic shape sizing. For more examples on visual weight compensation, see [Optical Effects in User Interfaces](https://medium.muz.li/optical-effects-9fca82b4cd9a). 


## Stroke

Use a 2px stroke as the main drawing line. Consistent line weight makes icons cohesive.

<table>
<col width="30%">
<col width="30%">
<tr>
    <td> <img src="{{site.baseurl}}/images/icons/stroke_download.png">
         <em> Use consistent stroke width.</em> </td>
    <td> <img src="{{site.baseurl}}/images/icons/stroke_calc.png"> 
         <em> A thinner stroke can be used for subtle tweaks to the&nbsp;legibility of an icon and for optical correction.</em> </td>
</tr>
</table>

Align pixels on the X and Y axis and round to the nearest whole pixel, or 0.5px if it’s not possible to align to integer pixels. Aligning icons off the pixel grid will make the icon blurry when it’s rasterized.

<table>
<col width="30%">
<col width="30%">
<tr>
    <td> <p class="label incorrect">Incorrect</p> <br /> <img src="{{site.baseurl}}/images/icons/stroke_pixels_incorrect.png">
         <em> If an icon is positioned off pixels, <br /> it becomes blurry when rasterized.</em> </td>
    <td> <p class="label correct">Correct</p> <br /> <img src="{{site.baseurl}}/images/icons/stroke_pixels_correct.png"> 
         <em> Position stokes on integer pixels where possible.</em> </td>
</tr>
</table>

Use the 30°, 45° and 60° angles for diagonal lines as they look sharper than diagonals with other angles.

<aside class="note sideblock _visible">To check what an icon will look like when rasterized use the View > Canvas > Show Pixels on Zoom option <kbd>Ctrl+P</kbd> in Sketch, View > Pixel Preview <kbd>Alt+Ctrl+Y</kbd> in Illustrator.</aside>

Round shapes, small details and some letters cannot be aligned to the pixel grid. Make sure that the significant pixels have sufficient saturation.

Reduce the number of anchors, as they increase the size of the image and takes longer to process it.

<table>
<col width="30%">
<col width="30%">
<tr>
    <td> <p class="label incorrect">Incorrect</p> <br /> <img src="{{site.baseurl}}/images/icons/stroke_anchors_incorrect.png">
         <em> Unneeded anchors are added.</em> </td>
    <td>  <p class="label correct">Correct</p> <br /> <img src="{{site.baseurl}}/images/icons/stroke_anchors_correct.png"> 
         <em> Use the minimum number of anchors.</em> </td>
</tr>
</table>


## Modifier
A modifier is a small shape added over the base icon.

* The default modifier position is the bottom right corner. If the base shape is badly recognizable with a modifier in the bottom right corner, or if several modifiers are needed, the modifier can be placed in other corners.

  <table>
  <col width="30%">
  <col width="30%">
  <tr>
      <td> <img src="{{site.baseurl}}/images/icons/modifier_search.png">
           <em> Place the modifier in the left corner <br/> if the base shape is badly recognizable <br/> with the modifier in the right corner.</em> </td>
      <td> <img src="{{site.baseurl}}/images/icons/modifier_parameter.png"> 
           <em> Place the modifier in the left corner <br/> if there are several modifiers.</em> </td>
  </tr>
  </table>
	
* A modifier size is from 6px to 9px, depending on the shape weight.  Leave a 1-2px spacing between the modifier and the main shape, to make the modifier clearly visible.

  ![]({{site.baseurl}}/images/icons/modifier_size.png)
  *Modifier sizes*


## Arrows
General rules for arrows: arrowhead is a filled triangle with a 90° pointing angle, a 2px body ends in a square stroke. An arrow’s orientation is horizontal, vertical, 45° or round. 

![]({{site.baseurl}}/images/icons/arrows_basic.png)
*Basic arrow icons*

Unfilled arrowhead can be used if there is only one arrow on an icon to reduce excessive visual weight, for example, for navigation arrows, such as back and forward, up and down.


<table>
<col width="30%">
<col width="30%">
<tr>
    <td> <img src="{{site.baseurl}}/images/icons/arrow_filled.png">
         <em> 90° arrowhead and 2px square stroke body.</em> </td>
    <td> <img src="{{site.baseurl}}/images/icons/arrow_unfilled.png"> 
         <em> Back arrow with unfilled arrowhead to compensate visual weight.</em> </td>
</tr>
</table>


<p class="label incorrect">Incorrect</p>	
![]({{site.baseurl}}/images/icons/arrows_incorrect.png)
*Do **not** use other arrow styles, for example unfilled arrows or arrows with thinned tails.*


## Color
Do not use color as the only differentiator between icons (except for the [Noun icon](#noun-icons)) because some people do not distinguish colors. Make sure that icons are easily distinguishable by their shape. 

Do not use gradients or shadows.

### Action icons

An action icon is an icon that triggers an action. It usually appears on toolbars and in dialogs. There are 5 colors in the actions icons palette.

![]({{site.baseurl}}/images/icons/colors_actions_palette.png)
*Action icons palette*

Use these colors according to the following rules:
1. By default, action icons are grey and monochromatic:
    ![]({{site.baseurl}}/images/icons/colors_actions_grey.png)

2. If an icon falls into one of the categories below, use the corresponding color:

    <table>
        <col width="45%">
        <col width="15%">
        <col width="45%">
        <tr>
            <td> <span style="font-weight: bold"> Green </span> <br/> Positive actions: run, create <br /><img src="{{site.baseurl}}/images/icons/colors_actions_green.png" style="margin-left:0px; margin-top:40px"> </td>
            <td></td>
            <td> <span style="font-weight: bold"> Red </span> <br/> Destructive actions: stop, remove, force <br /><img src="{{site.baseurl}}/images/icons/colors_actions_red.png" style="margin-left:0px; margin-top:40px"> </td>
        </tr>
        <tr>
            <td> <span style="font-weight: bold"> Blue </span> <br/> Accent color to highlight popular icons based on usage statistics, highlight small elements in complex icons <br /><img src="{{site.baseurl}}/images/icons/colors_actions_blue.png" style="margin-left:0px; margin-top:40px"> </td>
            <td></td>    
            <td> <span style="font-weight: bold"> Yellow </span> <br/> Warning actions: attract attention to the places (e.g. code) that can be optimized or improved <br /><img src="{{site.baseurl}}/images/icons/colors_actions_yellow.png" style="margin-left:0px; margin-top:40px"> </td>
        </tr>
    </table>


3. Preserve colors in icons combinations. If an icon is colored in its full size, it should have the same color when reduced. 
    ![]({{site.baseurl}}/images/icons/colors_actions_modifier.png)
	
4. Use green and red colors for paired icons. Color helps distinguish between similar icons faster.
    ![]({{site.baseurl}}/images/icons/colors_actions_pair.png) 
	
5. Use grey color for tool window icons. Icons are placed on the perimeter of the IDE, so they should not attract too much attention and distract users. 
    ![]({{site.baseurl}}/images/icons/colors_toolbuttons.png)
    
    
### Status icons

Color is a great way to provide status information. Use status icons that are already present in the IDE repository:

![]({{site.baseurl}}/images/icons/colors_status.png)

If you need a new icon, color it according to its semantics. Make sure that the status icons are easily distinguishable by their form, as many colorblind people find it difficult to distinguish between red and green.


### Noun icons

A noun icon is an icon that appears in the tree view to mark different file types. It helps to locate items in the list faster and does not trigger an action.

The palette for noun icons is wider, because there are lots of icons in one set:
![]({{site.baseurl}}/images/icons/colors_nouns_palette.png)
*Noun icons palette*

Use colors without opacity for small elements, like modifiers. 
![]({{site.baseurl}}/images/icons/colors_nouns_modifier.png)


Use colors with 70% opacity for medium size elements that occupy about half of an icon, like file type icons:
![]({{site.baseurl}}/images/icons/colors_nouns_file.png)


Use 60% opacity for big parts, like folder icons:
![]({{site.baseurl}}/images/icons/colors_nouns_folder.png)

Select colors for new icons based on existing colors and users’ habits.


## Export Icons

<aside class="note sideblock _visible">Install the <a href="https://www.sketchapp.com/extensions/plugins/svgo-compressor/">Svgo-compressor plugin</a> in Sketch to optimize icons before save.</aside>

Use the SVG format for icons files. Use camelCase capitalization for icon names:
<div class="code-block__wrapper">iconName.svg</div>

If an icon is not the same in the dark theme, then also create:

<div class="code-block__wrapper">iconName_dark.svg</div>






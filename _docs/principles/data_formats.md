---
title: Data formats
category: Principles
---

## Numbers
<p class="noanchor"><br /></p>
<table>
<col width="30%">
<col width="25%">
<th class="table-line"></th>
<th class="table-line"> Example </th>
<th class="table-line"> When and how to use </th>
<tr class="table-line">
    <td>Numbers</td>
    <td>4,255,165.00</td>
    <td>Space is not limited, e.g. Settings dialog
        <p style="margin: -10px 0 -30px -20px"><img src="{{site.baseurl}}/images/data_formats/numbers.png" /></p>
    </td>
</tr>
<tr class="table-line">
    <td>Numbers short</td>
    <td>10.5k<br />
        3.3M
    </td>
    <td>Space is limited, e.g. in table or lists</td>
</tr>
<tr class="table-line">
    <td>Percentage</td>
    <td>13%</td>
    <td></td>
</tr>
<tr class="table-line">
    <td>Ratios</td>
    <td>3 of 10</td>
    <td></td>
</tr>
<tr class="table-line">
    <td>Ratios short</td>
    <td>3/10</td>
    <td>Space is limited, e.g. in table or lists</td>
</tr>
<tr>
    <td>Currency</td>
    <td>$10</td>
    <td></td>
  </tr>
</table>
<aside class="sideblock note">If there is a space between the number and the unit, use a non-breaking space.</aside>

## Date and time

By default, the date and time formats are taken from the system settings. The format can be changed on the Settings > Appearance & Behavior > System Settings > Date Formats page.

See the table below to understand in which cases to show date and time.

<table>
<col width="30%">
<col width="25%">
<th class="table-line"></th>
<th class="table-line"> Example </th>
<th class="table-line"> When and how to use </th>
<tr class="table-line">
    <td>Date</td>
    <td>Today<br />
        05 Jan<br />
        05 Jan 2017
    </td>
    <td>Omit the time for events if the exact time does not matter, e.g. Annotate panel<br /><br />
        Use <i>Today</i> and <i>Yesterday</i> for the last two days, use exact date for all other days<br /><br /> 
        Do <b>not</b> show the year if it’s within the current calendar year
    </td>
</tr>
<tr class="table-line">
    <td>Date and time</td>
    <td>Today, 14:04<br />
        05 Jan, 14:04<br />
        05 Jan 2019, 14:04
    </td>
    <td>When it is important to know the exact sequence of actions, e.g. Version Control Log</td>
</tr>
<tr class="table-line">
    <td>Time</td>
    <td>22:49</td>
    <td>Omit date if the event happened today and it’s clear from the context</td>
</tr>
<tr class="table-line">
    <td>Date and day of week</td>
    <td>Tuesday, 30 August</td>
    <td>Use as headers in timelines, e.g. Event Log. The day of the week helps to quickly understand how long ago was the event<br /><br />
        Use <i>Today</i> and <i>Yesterday</i> for the last two days, use exact date for all other days 
    </td>
</tr>
<tr>
    <td>Approximate time</td>
   <td>A moment ago<br />
       10 minutes ago<br />
       2 hours ago
    </td>
    <td>Use for a single event that happened recently, e.g in the Status bar
        <p style="margin: -10px 0 -20px -20px"><img src="{{site.baseurl}}/images/data_formats/approximate.png" /></p>
        Do <b>not</b> use in tables as it’s harder to compare<br /><br />
        If more than 12 hours have passed since the event, use Date format
    </td>
</tr>
</table>

![]({{site.baseurl}}/images/data_formats/vcs_log.png)
*Version Control Log (in IntelliJ IDEA incorrect format is used at the moment)*

![]({{site.baseurl}}/images/data_formats/event_log.png)
*Event Log*

## Duration

<table>
<col width="30%">
<col width="25%">
<th class="table-line"></th>
<th class="table-line"> Example </th>
<th class="table-line"> When and how to use </th>
<tr class="table-line">
    <td>Period</td>
    <td>10 milliseconds<br />
        10 seconds<br />
        10 minutes<br />
        1 hour
    </td>
    <td>Space is not limited, e.g. Settings dialog
        <p style="margin: -10px 0 -20px -20px"><img src="{{site.baseurl}}/images/data_formats/period.png" /></p>
    </td>
</tr>
<tr class="table-line">
    <td>Time-lapse</td>
    <td>1 h 30 m 30 s<br />    
        1 h 30 m 30.035 s<br />        
        1 h<br />
        1 h 0 m 30 s<br />
        1 m 30 s<br />
        05 Jan 2019, 14:04
    </td>
    <td>Use for changing duration. Select units depending on the process type. E.g. Unit tests usually run less than a minute, so show only seconds and milliseconds. Build tasks usually run more than a minute, so show minutes and seconds.<br /><br />
        Omit hours and seconds that do not provide additional data
</td>
</tr>
<tr>
    <td>Time-lapse condensed <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO 8601 standard</a></td>
    <td>1:30:01.350</td>
    <td>Use when space is limited or to describe a range, e.g. 1:30:01.350 – 1:30:02.350 </td>
</tr>
</table>


![]({{site.baseurl}}/images/data_formats/run.png)

## Quantities of data

Use decimal numeral system.

<table>
<col width="120px">
<col width="60px">
<tr class="table-line">
    <td>bits</td>
    <td>10 bits</td>
</tr>
<tr class="table-line">
    <td>bytes</td>
    <td>10 B</td>
</tr>
<tr class="table-line">
    <td>kilobytes</td>
    <td>10 KB</td>
</tr>
<tr class="table-line">
    <td>megabytes</td>
    <td>10 MB</td>
</tr>
<tr class="table-line">
    <td>gigabytes</td>
    <td>10 GB</td>
</tr>
<tr>
    <td>terabytes</td>
    <td>10 TB</td>
</tr>
</table>

![]({{site.baseurl}}/images/data_formats/tree.png)


## Units

All numeric values should be given a unit or clearly labeled if they do not have suitable units, e.g. counters.

![]({{site.baseurl}}/images/data_formats/period.png)

![]({{site.baseurl}}/images/data_formats/no_units.png)

Select the most convenient units.

<table>
<col width="60%">
  <tr>
      <td> <p class="label incorrect">Incorrect</p> </td>
      <td> <p class="label correct">Correct</p> </td>
  </tr>
  <tr>
      <td> <img src="{{site.baseurl}}/images/data_formats/connection_incorrect.png" style="margin-top: 0px; 
      margin-bottom: 5px;"> </td>
      <td> <img src="{{site.baseurl}}/images/data_formats/connection_correct.png" style="margin-top: 0px; margin-bottom:
       5px;"> </td>
  </tr>
</table>

Place units after the input field.

<table>
<col width="60%">
  <tr>
      <td> <p class="label incorrect">Incorrect</p> </td>
      <td> <p class="label correct">Correct</p> </td>
  </tr>
  <tr>
      <td> <img src="{{site.baseurl}}/images/data_formats/caret_incorrect.png" style="margin-top: 0px; 
      margin-bottom: 5px;"> </td>
      <td> <img src="{{site.baseurl}}/images/data_formats/caret_correct.png" style="margin-top: 0px; margin-bottom:
       5px;"> </td>
  </tr>
</table>



## Tables

<p class="noanchor">Use the rules below to make it easier to compare numbers in one column.</p>

Right-align numeric values.
![]({{site.baseurl}}/images/data_formats/table.png)

Include the unit in the column header if all values share the same unit. Convert each number to use the same unit. If it’s not possible, e.g. the scatter of numbers is too large, include the unit with each value.

<table>
<col width="60%">
  <tr>
      <td> <p class="label incorrect">Incorrect</p> </td>
      <td> <p class="label correct">Correct</p> </td>
  </tr>
  <tr>
      <td> <img src="{{site.baseurl}}/images/data_formats/table_units_incorrect.png" style="margin-top: 0px; 
      margin-bottom: 5px;"> </td>
      <td> <img src="{{site.baseurl}}/images/data_formats/table_units_correct.png" style="margin-top: 0px; margin-bottom:
       5px;"> </td>
  </tr>
</table>


Be consistent with the precision of the significand.

<table>
<col width="60%">
  <tr>
      <td> <p class="label incorrect">Incorrect</p> </td>
      <td> <p class="label correct">Correct</p> </td>
  </tr>
  <tr>
      <td> <img src="{{site.baseurl}}/images/data_formats/precision_incorrect.png" style="margin-top: 0px; 
      margin-bottom: 5px;"> </td>
      <td> <img src="{{site.baseurl}}/images/data_formats/precision_correct.png" style="margin-top: 0px; margin-bottom:
       5px;"> </td>
  </tr>
</table>
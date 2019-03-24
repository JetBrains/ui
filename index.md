---
title: IntelliJ Platform UI Guidelines
---

IntelliJ platform UI guidelines is a collection of recommendations for designers and developers to follow when creating user interfaces for IntelliJ Platform based IDEs and plugins. 

<div class="separator"></div>

<div class="toc-mainpage__container">
    {% assign categories = "Controls, Components, Principles, Text, Resources" | split: ", " %}
    {% assign grouped = site.docs | group_by: 'category' %}
        {% for category in categories %}
            {% for group in grouped %}     
                {% if category == group.name %}      
                    {% assign items = group.items | sort %}
                
                        <div class="toc-section">
                            <div class="list-header"> {{ group.name }} </div>
                            <ul>                    
                                {% for item in items %}        
                                    {% if item.type == "GroupHeader" %}
                                        <li> <a href="{{ site.baseurl }}{{ item.url }}">{{ item.title }}</a> </li>                                
                                        
                                        {% assign subpages = group.items | where:"subpageOf", item.title %}                                
                                        {% for subpage in subpages %}
                                            {% if item.type == "Draft" %}
                                                <li class="subpage draft"> 
                                                    {{ subpage.title }} 
                                                </li>
                                            {% else %}
                                                <li class="subpage">                                        
                                                    <a href="{{ site.baseurl }}{{ subpage.url }}">{{ subpage.title }}</a>
                                                </li>
                                            {% endif %}
                                        {% endfor %}
                            
                                    {% elsif item.type == "Subpage" %}
            
                                    {% else %}
                                        {% if item.type == "Draft" %}
                                            <li class="draft"> {{ item.title }} </li>
                                        {% else %}
                                            <li> <a href="{{ site.baseurl }}{{ item.url }}">{{ item.title }}</a> </li>
                                        {% endif %}
                                        
                                    {% endif %}        
                                {% endfor %}
                            </ul>
                        </div>
                  
                  {% endif %}                  
            {% endfor %}
        {% endfor %}
</div>

<div class="separator"></div>

The guide aims at: 
* Making the UI of all IntelliJ Platform based products consistent. This means applying the same visual design, ensuring consistent behaviour of common elements of the interface – from the input fields to the layout.
* Helping programmers quickly find answers to the UI-related questions.
* Providing programmers and new members of the designers team with the basics of usability and GUI design principles adopted by IDEA designers.

If you are working on the UI, please follow the guide. We hope that the guide will help to avoid minor mistakes and will let programmers and designers be on the same wavelength.
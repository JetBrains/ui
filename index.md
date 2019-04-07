---

---

<p class="noanchor mainpage-header">IntelliJ Platform UI&nbsp;Guidelines</p>
<p class="noanchor">When working on an IntelliJ Platform based IDE or a plugin, use these guidelines to&nbsp;create consistent and usable user interfaces.</p>
<p class="noanchor" style="font-size: 15px; margin-bottom: 60px">This is a work in progress. If you encounter bugs or require help, please <a href="https://github.com/JetBrains/ui/issues">contact us</a>.</p>

<div class="toc-mainpage__container">
    {% assign categories = "Controls, Components, Principles, Text, Resources" | split: ", " %}
    {% assign grouped = site.docs | group_by: 'category' %}
        {% for category in categories %}
            {% for group in grouped %}     
                {% if category == group.name %}      
                    {% assign items = group.items | sort: 'title' %}
                
                        <div class="toc-section">
                            <div class="list-header"> {{ group.name }} </div>
                            <ul>                    
                                {% for item in items %}        
                                    {% if item.type == "GroupHeader" %}
                                        {% if item.draft %}
                                            <li class="groupheader draft"> {{ item.title }} </li>
                                        {% else %}
                                            <li class="groupheader"> 
                                                <a href="{{ site.baseurl }}{{ item.url }}">{{ item.title }}</a> 
                                            </li>                                
                                        {% endif %}
                                        {% assign subpages = group.items | where:"subpageOf", item.title %}                                
                                        {% for subpage in subpages %}
                                            {% if subpage.draft %}
                                                <li class="subpage draft"> {{ subpage.title }} </li>
                                            {% else %}
                                                <li class="subpage">                                        
                                                    <a href="{{ site.baseurl }}{{ subpage.url }}">{{ subpage.title }}</a>
                                                </li>
                                            {% endif %}
                                        {% endfor %}
                            
                                    {% elsif item.type == "Subpage" %}
            
                                    {% else %}
                                        {% if item.draft %}
                                            <li class="draft"> {{ item.title }} </li>
                                        {% else %}
                                            <li> 
                                                <a href="{{ site.baseurl }}{{ item.url }}">{{ item.title }}</a> 
                                            </li>
                                        {% endif %}
                                        
                                    {% endif %}        
                                {% endfor %}
                            </ul>
                        </div>
                  
                  {% endif %}                  
            {% endfor %}
        {% endfor %}
</div>
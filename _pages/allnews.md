---
title: "News"
layout: textlay
excerpt: "Wilcox Lab @ University of Washington"
sitemap: false
permalink: /allnews.html
---

# News

{% for article in site.data.news %}

<p>{{ article.date }} <br>
<em>{{ article.headline }}</em></p>
{% endfor %}

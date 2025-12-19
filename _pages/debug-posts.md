---
layout: page
permalink: /debug-posts/
title: "Debug posts"
---

{% for post in site.posts %}
- {{ post.title }} – {{ post.date }}
{% endfor %}
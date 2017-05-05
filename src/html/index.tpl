{% extends "./layout/_main.tpl" %}

{% set title = pages.index.title %}

{% block content %}

  <div class="l-grid">

    <div class="l-grid_span12 l-grid_span8@bp20">
      <div class="l-search">
        {% include "partials/_search.tpl" %}
        {% include "partials/_result.tpl" %}
      </div>
    </div>

    <div class="l-grid_span12 l-grid_span4@bp20">
      2
    </div>

  </div>

{% endblock %}

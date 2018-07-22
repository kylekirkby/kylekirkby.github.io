---
layout: post
title:  Easy Bootstrap 3 Collapse panels in Jekyll
date:   2018-07-20 13:00:00
description: |-
  In this blog I cover how to generate a bootstrap3 collapse panel set from a Jekyll data file written in YAML.
categories:
- jekyll
tags:
- jekyll
- bootstrap3
- includes
- html
- data files
image:
  name: bootstrap-collapses.png
  path: /assets/images/bootstrap-collapses.png
---

When you are creating a static jekyll website sometimes you may want to add a Bootstrap Collapse section for FAQ's or other generic content. This can get messy if you are doing it in HTML and not dynamically building them using a Jekyll data file. I will go through how to create an faq section using Bootstrap Collapse panels from a `faq.yml` Jekyll data file located in the \_data folder.

So firstly you want to make sure you have included the Bootstrap CSS/JS libraries. If you have not already done so, either download these files and include locally or link to a CDN (content delivery network) hosting these files.

## Boostrap3 CSS

Include this snippet in the `<head>` of your Jekyll layout/include. See [this tutorial]() for a better way of managing CSS in Jekyll sites..

**CDN**

```html
<!-- Latest compiled and minified CSS -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
```

**Local**
```html
<!-- Bootstrap 3 CSS -->
<link rel="stylesheet" href="/path/to/css/bootstrap.min.css">
```

## Boostrap3 Javascript

Include this snippet before the closing `</body>` tag in your Jekyll layout/include. See [this tutorial]() for an an easier way to manage JS in Jekyll sites.

**CDN**

```html
<!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
<!-- Latest compiled and minified JavaScript -->
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
```

**Local**
```html
<!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
<!-- Include all compiled plugins (below), or include individual files as needed -->
<script src="/path/to/js/bootstrap.min.js"></script>
```

## The Data File
Jekyll uses data files which are located in the `_data/` folder in the root fo your Jekyll site. These can be JSON/YAML but in this tutorial we are going to write the faq in YAML. Create a data file for your collapse panels content in the \_data folder e.g   `_data/faq.yml`.

**_data/faq.yml**
```yaml
- id: question1
  title: Why is the sky blue?
  text: |-
    Why not?
- id: question2
  title: What is the meaning of __Life, The Universe and Everything__?
  text: |-
    42
- id: question3
  title: When was the first computer built?
  text: |-
    The first computer dates back to **Adam** and **Eve**. It was an Apple with limited memory, just one byte. And then everything crashed.
- id: question4
  title: How can we get people to use their brain?
  text: |-
    Maybe if we start telling people the **brain** is an app they will start using it.
- id: question5
  title: What should Trump build the wall with?
  text: |-
    They should build the wall with Hillary's emails because nobody can get over them.
- id: question6
  title: What happens when you get a Fax in an office in 2018?
  text: |-
    We just got a fax. At work. We didn't know we had a fax machine. The entire department just stared at it. I poked it with a stick.
```

In the above YAML file we have a multiple panels described using and `id`, `title` and `text`. The ID will be used for the HTML ID attribute of our Bootstrap3 panels. THe title is for the panel heading and the text is the body of the panel; this text will be markdown so we can add links/lists to the panel body too.

## The Jekyll Include
You are probably already familiar with Jekyll includes. These are files that can be included in your pages/posts using `{{ "{%" }} include filename.html param="newParam" %}`. We will create a collapses.html include, which should be added to the \_includes folder, that we will supply our data file to as a parameter.

```html
<div class="panel-group" id="accordion">
  {{ "{%" }} for panel in include.data-file %}
    <div class="panel panel-default">
      <div class="panel-heading">
        <a data-toggle="collapse" data-parent="#accordion">
          {{ "{{"}} panel.title }}
        </a>
      </div>
      <div id="{{panel.id}}" class="panel-collapse collapse {% if forloop.index == 1 %}in{% endif %}">
        <div class="panel-body">
          {{ "{{"}} panel.text | markdownify }}
        </div>
      </div>
    </div>
  {{ "{%" }} endfor %}
</div>
```

You can retreive parameters by using the `include.` hash which will give you any parameter you pass in under `include.param_name`.

## The Output Page
Now you just need to add the following liquid to generate your Bootstrap3 Collapses from a YAML file.

```yaml

{{ "{%" }}  include collapses.html data-file=site.data.faq %}

```
You should now see multiple Bootstrap collapses outputted on your page, generated from a simple YAML file and Jekyll include. 

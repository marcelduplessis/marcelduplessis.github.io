---
permalink: /
title: " "
layout: single
author_profile: true
header:
  overlay_image: coas-short.gif
  overlay_filter: 0
  caption: "Credit: Hector Torres @ JPL-NASA"
---

## About me

I am a physical oceanographer in the [Department of Marine Sciences](https://www.gu.se/en/marina-vetenskaper) at the University of Gothenburg, where I study how storms, eddies, and other fine-scale ocean–atmosphere interactions move heat, moisture, and carbon dioxide between the atmosphere, ocean surface, and deep ocean. I completed my PhD in physical oceanography at the University of Cape Town and Southern Ocean Carbon Climate Observatory, followed by a Marie Skłodowska-Curie Fellowship in Sweden that focused on autonomous observations and air–sea exchange in the Southern Ocean. Now, I lead a research group supported by a Swedish Research Council Establishment Grant and an ERC Starting Grant (SOFIA), combining autonomous ocean robotics, satellite observations, and high-resolution coupled models to reveal how fine-scale processes shape Southern Ocean heat and CO₂ uptake.

## My Approach

I combine data collected by autonomous ocean robotics, satellite observations and numerical ocean–atmosphere models, my team and I investigate how short-term weather patterns influence climate variations over years to decades.

**In situ ocean and atmosphere observations** \\
Much of my research uses measurements of ocean and atmosphere properies obtained from autonomous ocean platforms such as profiling gliders, surface uncrewed vehicles, and profiling floats. These platforms, developed and deployed over the last few decades, have shown to be highly useful in revealing the high-frequency nature of ocean and atmospheric variability, and their interactions and implicitons for air-sea exchange. 

<div class="gallery">
  <img src="images/seaglider.jpg" alt="SG">
  <img src="images/ctd.jpg" alt="CTD">
  <img src="images/sailbuoy.jpeg" alt="SB">
  <img src="images/wave-glider.jpg" alt="WG">
  <br>
</div>

The pictures above show several of the autonomous platforms that I use in my research. The Seaglider (top left), Wave Glider (top right), and Sailbuoy (bottom left) are the three I work mostly with, from sensor integration, deployment/retrieval and piloting experience. A fundamnetally important tool used for ocean research is the CTD. The bottom right photo is from one of our deployments in the Southern Ocean during the SO-CHIC field campaign. Photo credits: Louise Biddle (Seaglider) and Pedro Monteiro (Wave Glider), Timo Hecken (Sailbuoy).

I have been fortunate to be able to deploy these autonomous platforms far out into the ocean on [several research expiditions](https://marcelduplessis.github.io/fieldwork/), with my first experience to the Southern Ocean and Antarctica during my honours year at the University of Cape Town. To date I have participated in seven research expeditions on several world class vessels. I am hugely grateful to those who have provided the opportunity for me to build my career as a sea going oceanographer.

**3D Modelling** \\
For my ERC SOFIA project, I will bring new expertise in 3D modelling capabilities by analysing the [Global, Coupled Ocean-Atmosphere Simulation with Kilometer-Scale Resolution](https://www.nas.nasa.gov/SC21/research/project16.html) run and hosted by JPL-NASA. This is a unique, first-of-its-kind simulation in its resolution that will be used to reveal the role of high-frequency processes in shaping ocean heat uptake.

<div class="team-row" style="display: flex; flex-wrap: wrap; gap: 1.5rem; margin-top: 1.0rem;">
  <div class="team-member" style="flex: 1 1 250px; text-align: center;">
    <video src="/images/coas-wind-ocean.mp4"
           style="width: 100%; max-width: 100%;
                  border-radius: 0;
                  object-fit: cover;
                  border: 1px solid #ccc; padding: 4px; box-sizing: border-box;"
           autoplay muted loop playsinline>
    </video>
    <p style="text-align: center; font-size: 0.7rem;">A visualization of strong polar winds interacting with a highly dynamic and energetic ocean surface. Source: Hector Torres @ JPL-NASA</p>
  </div>
</div>

## Recent Updates

<ul class="recent-posts">
  {% for post in site.posts limit:3 %}
    <li>
      <a href="{{ post.url | relative_url }}">{{ post.title }}</a><br>
      <small>{{ post.date | date: "%Y-%m-%d" }}</small><br>
      <small>{{ post.excerpt | markdownify }}</small>
    </li>
  {% endfor %}
</ul>

## Research interests
`Air-sea interactions`; `Submesoscale dynamics`; `Mid-latitude cylones`; `Ocean heat and CO2 uptake`; `Autonomous ocean observations`

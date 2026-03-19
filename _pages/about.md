---
permalink: /
title: " "
layout: single
author_profile: true
# header:
#   overlay_image: coas-img.png
#   overlay_filter: 0
#   caption: "Credit: Hector Torres @ JPL-NASA"
---
  
# About

I am a physical oceanographer at the [Department of Marine Sciences](https://www.gu.se/en/marina-vetenskaper), University of Gothenburg. I lead a research team interested in the physical processes governing the exchange of heat, moisture, and carbon dioxide between the ocean and atmosphere. We focus on how ocean dynamics of scales 1-100 km and rapdily evolving atmospheric weather systems control the exchange of these climate-critical properties across the air-sea interface and into the ocean interior. Our goal is to advance our understanding of the factors that regulate our changing climate.

Our research is supported by a Swedish Research Council Establishment Grant (2025-2028), an ERC Starting Grant (SOFIA, 2026-2031), and a Carl Tryggers Foundation Equipment Grant (2026-2028). You can read more about our newly funded [SOFIA project](https://www.gu.se/en/news/erc-starting-grant-to-research-on-southern-oceans-critical-climate-function) and the [Swedish Research Council project](https://www.gu.se/en/research/how-understanding-storms-reduces-southern-ocean-heat-and-co2-uptake-uncertainty). Please get in touch if you are interested in collaborating or joining our team.

<!-- I completed my PhD in physical oceanography at the University of Cape Town and Southern Ocean Carbon Climate Observatory, followed by a Marie Skłodowska-Curie Fellowship in Sweden that focused on autonomous observations and air–sea exchange in the Southern Ocean. Now, -->

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

## My Approach

Our key approach is to integrate observations from autonomous ocean robots, research vessels, and satellites with high-resolution coupled models and state-of-the-art reanalysis products provided by global weather centers.

**In situ ocean and atmosphere observations** \\
Much of our research uses measurements of ocean and atmosphere variables taken from autonomous ocean platforms such as profiling gliders and floats, surface uncrewed vehicles, and research vessels. This allows us to study the high-frequency nature of ocean and atmospheric variability, and their interactions and implicitons for air-sea exchange. 

<div class="gallery">
  <img src="images/seaglider.jpg" alt="SG">
  <img src="images/ctd.jpg" alt="CTD">
  <img src="images/sailbuoy.jpeg" alt="SB">
  <img src="images/wave-glider.jpg" alt="WG">
  <br>
</div>

The above pictures show the autonomous platforms we use in our research, including the Seaglider (top left), Wave Glider (bottom right), and Sailbuoy (top left). The top right picture illustrates a fundamnetally important tool used for ocean research: the CTD. This photo was taken during the SO-CHIC Southern Ocean field campaign. Photo credits: Louise Biddle (Seaglider) and Pedro Monteiro (Wave Glider), Timo Hecken (Sailbuoy).

I have been fortunate to be able to deploy these autonomous platforms far out into the ocean on [several research expiditions](https://marcelduplessis.github.io/fieldwork/), with my first experience to the Southern Ocean and Antarctica during my honours year at the University of Cape Town. To date I have participated in seven research expeditions on several world class vessels. I am hugely grateful to those who have provided the opportunity for me to build my career as a sea going oceanographer.

**3D Modelling** \\
For the SOFIA project, we will explore new modelling capabilities by examining the [Coupled Ocean-Atmosphere Simulation with Kilometer-Scale Resolution](https://www.nas.nasa.gov/SC21/research/project16.html) hosted by JPL-NASA. This is a unique, first-of-its-kind simulation in its resolution that we hope will reveal the role of high-frequency processes in shaping ocean heat uptake.

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

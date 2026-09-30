---
title: 'A small, local-first publishing stack'
slug: 'a-small-local-first-publishing-stack'
description: 'Why Markdown, Git, and static generation remain an unusually durable combination for personal publishing.'
date: 2026-07-12
tags: [Code, Publishing]
cover: /images/covers/local.svg
coverAlt: 'A network of small green points connected by thin lines'
draft: false
featured: false
---

The most important property of a personal publishing system is not how quickly it can be assembled. It is how gracefully it survives a change of tools.

## Files are an interface

Markdown is ordinary enough to open almost anywhere. Git gives those files memory. A static generator turns them into a fast public artifact without changing where the originals live.

That separation is healthy:

| Layer        | Responsibility              |
| ------------ | --------------------------- |
| Markdown     | durable content             |
| Git          | history and collaboration   |
| Astro        | presentation and validation |
| GitHub Pages | delivery                    |

## Two ways in

Local files are excellent for structural changes and long editing sessions. A browser CMS is better when the only device nearby is a phone. Both should write to the same repository, so convenience never creates a second source of truth.

## Boring is a feature

Systems become durable when their critical path is made of replaceable pieces. If one editor disappears, the files remain. If one host changes direction, the generated site can move. The result is not technologically timid; it is operationally calm.

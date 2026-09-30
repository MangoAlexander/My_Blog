---
title: 'Designing for the return visit'
slug: 'designing-for-the-return-visit'
description: 'A good personal site is not a launch event. It is a place whose structure makes returning feel natural.'
date: 2026-09-18
updated: 2026-09-21
tags: [Design, Craft]
cover: /images/covers/return.svg
coverAlt: 'A warm red circle crossing a field of fine horizontal lines'
draft: false
featured: true
---

Most websites are judged in the moment they appear. A personal site has a different job: it should become more useful—and more recognizably yours—each time you return to it.

That changes the design question. Instead of asking how a page can make the strongest first impression, ask what will make the tenth visit feel calm, legible, and rewarding.

## Build a place, not a launch

Launch language treats a site as a finished object. A garden is a better model. Paths become clearer through use. Some corners grow dense; others are pruned. The identity of the whole comes from repeated, modest acts of care.

This is why a durable homepage needs more than a list of recent posts. It should reveal a pattern of attention: the long essay beside the small note, an active project beside the book currently being read.

## Let the structure remember

Good information architecture is a kind of memory. Archives preserve sequence. Tags reveal recurring interests. A now page records a moment without pretending it is permanent.

The underlying files matter too. Plain text, descriptive names, and Git history make the work portable. A publishing system should leave your ideas more accessible than it found them.

```ts title="src/utils/content.ts"
const published = entries
  .filter((entry) => !entry.data.draft)
  .sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
```

## Make maintenance inviting

Friction compounds. If changing a sentence requires a terminal, three commands, and a particular laptop, fewer sentences will be improved. The best authoring flow is the one available when the thought is alive.

That does not mean hiding the underlying system. It means giving the same content two doors: a comfortable browser editor for ordinary days, and local files for deeper work.

The site then becomes less like a portfolio assembled for review and more like a studio with the door slightly open.

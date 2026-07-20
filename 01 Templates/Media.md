<%* 
// 1. Read the temporary filename to determine the medium
let tempName = tp.file.title.toLowerCase();
let med = "Book"; // Default fallback
if (tempName.includes("film")) med = "Film";
if (tempName.includes("series")) med = "Series";
if (tempName.includes("audiobook")) med = "Audiobook";
if (tempName.includes("game")) med = "Game";
if (tempName.includes("album")) med = "Album";
if (tempName.includes("video")) med = "Video";

// 2. Immediately rename the file to something unique (e.g., Book-202607211345)
// This frees up the temporary name so your dashboard links never break!
await tp.file.rename("New " + med + " - " + tp.date.now("YYYYMMDDHHmmss"));
-%>
---
type: media
medium: <% med %>
status: New
rating:
cover:
source:
topics: []
aliases: []
tags:
---

> **Cover** accepts a direct image URL or a local image path/link such as `[[Attachments/poster.jpg]]`. Put an IMDb, Goodreads, Audible, Wikipedia, or other webpage URL in **Source**.

> Use these canonical values by convention:
> Medium — `Film`, `Series`, `Book`, `Audiobook`, `Game`, `Album`, `Video`;
> Status — `New`, `In Progress`, `Finished`, `Dropped`.

## Why it is here

## Notes / review

## Links

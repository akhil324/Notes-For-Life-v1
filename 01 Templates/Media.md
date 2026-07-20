<%*
// 1. Read the temporary filename to determine the medium
let tempName = tp.file.title.toLowerCase();
let m = "Book"; // Default fallback
if (tempName.includes("film")) m = "Film";
else if (tempName.includes("series")) m = "Series";
else if (tempName.includes("audiobook")) m = "Audiobook";
else if (tempName.includes("game")) m = "Game";
else if (tempName.includes("album")) m = "Album";
else if (tempName.includes("video")) m = "Video";

// 2. Rename the file to free up the button for the next click
await tp.file.rename("New " + m + " - " + tp.date.now("YYYYMMDDHHmmss"));

// 3. Inject the YAML properties directly so we don't lose the variable
tR += `---
type: media
medium: ${m}
status: New
rating:
cover:
source:
topics: []
aliases: []
tags:
---`;
%>

> **Cover** accepts a direct image URL or a local image path/link such as `[[Attachments/poster.jpg]]`. Put an IMDb, Goodreads, Audible, Wikipedia, or other webpage URL in **Source**.

> Use these canonical values by convention:
> Medium — `Film`, `Series`, `Book`, `Audiobook`, `Game`, `Album`, `Video`;
> Status — `New`, `In Progress`, `Finished`, `Dropped`.

## Why it is here

## Notes / review

## Links
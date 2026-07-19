---
type: dashboard
---

> Edit each item in its source note using native **Properties**. Each section shows only that media type.

🎬📺🎥📽️📢🔈🎮📹🎦📚📖
## 📚 Books

[➕ New book](<obsidian://unique?content=---%0Atype%3A%20media%0Amedium%3A%20Book%0Astatus%3A%20New%0Arating%3A%0Acover%3A%0Asource%3A%0Atopics%3A%20%5B%5D%0Aaliases%3A%20%5B%5D%0A---%0A%0A%23%23%20Why%20it%20is%20here%0A%0A%23%23%20Notes%20%2F%20review%0A%0A%23%23%20Links%0A>)

```sqlseal
GRID
SELECT a(path, name) AS Title, status AS Status, rating AS Rating, topics AS Topics, substr(created_at, 1, 10) AS Added, CASE WHEN source IS NOT NULL AND trim(source) <> '' THEN a(source, 'Open') ELSE '' END AS Source FROM files WHERE path LIKE '02 Library/%' AND type = 'media' AND medium = 'Book' ORDER BY name
```

## 🎬 Movies

[➕ New film](<obsidian://unique?content=---%0Atype%3A%20media%0Amedium%3A%20Film%0Astatus%3A%20New%0Arating%3A%0Acover%3A%0Asource%3A%0Atopics%3A%20%5B%5D%0Aaliases%3A%20%5B%5D%0A---%0A%0A%23%23%20Why%20it%20is%20here%0A%0A%23%23%20Notes%20%2F%20review%0A%0A%23%23%20Links%0A>)

```sqlseal
GRID
SELECT a(path, name) AS Title, status AS Status, rating AS Rating, topics AS Topics, substr(created_at, 1, 10) AS Added, CASE WHEN source IS NOT NULL AND trim(source) <> '' THEN a(source, 'Open') ELSE '' END AS Source FROM files WHERE path LIKE '02 Library/%' AND type = 'media' AND medium = 'Film' ORDER BY name
```

## 📺 TV Shows

[➕ New series](<obsidian://unique?content=---%0Atype%3A%20media%0Amedium%3A%20Series%0Astatus%3A%20New%0Arating%3A%0Acover%3A%0Asource%3A%0Atopics%3A%20%5B%5D%0Aaliases%3A%20%5B%5D%0A---%0A%0A%23%23%20Why%20it%20is%20here%0A%0A%23%23%20Notes%20%2F%20review%0A%0A%23%23%20Links%0A>)

```sqlseal
GRID
SELECT a(path, name) AS Title, status AS Status, rating AS Rating, topics AS Topics, substr(created_at, 1, 10) AS Added, CASE WHEN source IS NOT NULL AND trim(source) <> '' THEN a(source, 'Open') ELSE '' END AS Source FROM files WHERE path LIKE '02 Library/%' AND type = 'media' AND medium = 'Series' ORDER BY name
```

## 🔈Audiobooks

[➕ New audiobook](<obsidian://unique?content=---%0Atype%3A%20media%0Amedium%3A%20Audiobook%0Astatus%3A%20New%0Arating%3A%0Acover%3A%0Asource%3A%0Atopics%3A%20%5B%5D%0Aaliases%3A%20%5B%5D%0A---%0A%0A%23%23%20Why%20it%20is%20here%0A%0A%23%23%20Notes%20%2F%20review%0A%0A%23%23%20Links%0A>)

```sqlseal
GRID
SELECT a(path, name) AS Title, status AS Status, rating AS Rating, topics AS Topics, substr(created_at, 1, 10) AS Added, CASE WHEN source IS NOT NULL AND trim(source) <> '' THEN a(source, 'Open') ELSE '' END AS Source FROM files WHERE path LIKE '02 Library/%' AND type = 'media' AND medium = 'Audiobook' ORDER BY name
```

## 🎮 Games

[➕ New game](<obsidian://unique?content=---%0Atype%3A%20media%0Amedium%3A%20Game%0Astatus%3A%20New%0Arating%3A%0Acover%3A%0Asource%3A%0Atopics%3A%20%5B%5D%0Aaliases%3A%20%5B%5D%0A---%0A%0A%23%23%20Why%20it%20is%20here%0A%0A%23%23%20Notes%20%2F%20review%0A%0A%23%23%20Links%0A>)

```sqlseal
GRID
SELECT a(path, name) AS Title, status AS Status, rating AS Rating, topics AS Topics, substr(created_at, 1, 10) AS Added, CASE WHEN source IS NOT NULL AND trim(source) <> '' THEN a(source, 'Open') ELSE '' END AS Source FROM files WHERE path LIKE '02 Library/%' AND type = 'media' AND medium = 'Game' ORDER BY name
```

## 🎧 Albums

[➕ New album](<obsidian://unique?content=---%0Atype%3A%20media%0Amedium%3A%20Album%0Astatus%3A%20New%0Arating%3A%0Acover%3A%0Asource%3A%0Atopics%3A%20%5B%5D%0Aaliases%3A%20%5B%5D%0A---%0A%0A%23%23%20Why%20it%20is%20here%0A%0A%23%23%20Notes%20%2F%20review%0A%0A%23%23%20Links%0A>)

```sqlseal
GRID
SELECT a(path, name) AS Title, status AS Status, rating AS Rating, topics AS Topics, substr(created_at, 1, 10) AS Added, CASE WHEN source IS NOT NULL AND trim(source) <> '' THEN a(source, 'Open') ELSE '' END AS Source FROM files WHERE path LIKE '02 Library/%' AND type = 'media' AND medium = 'Album' ORDER BY name
```

## 📹 Videos

[➕ New video](<obsidian://unique?content=---%0Atype%3A%20media%0Amedium%3A%20Video%0Astatus%3A%20New%0Arating%3A%0Acover%3A%0Asource%3A%0Atopics%3A%20%5B%5D%0Aaliases%3A%20%5B%5D%0A---%0A%0A%23%23%20Why%20it%20is%20here%0A%0A%23%23%20Notes%20%2F%20review%0A%0A%23%23%20Links%0A>)

```sqlseal
GRID
SELECT a(path, name) AS Title, status AS Status, rating AS Rating, topics AS Topics, substr(created_at, 1, 10) AS Added, CASE WHEN source IS NOT NULL AND trim(source) <> '' THEN a(source, 'Open') ELSE '' END AS Source FROM files WHERE path LIKE '02 Library/%' AND type = 'media' AND medium = 'Video' ORDER BY name
```
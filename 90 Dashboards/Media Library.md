---
type: dashboard
---
## 📚 Books

[➕ New book](obsidian://advanced-uri?filepath=02%20Library/New_Book&template=Media.md)

```sqlseal
GRID
SELECT a(path, name) AS Title, status AS Status, rating AS Rating, topics AS Topics, substr(created_at, 1, 10) AS Added, CASE WHEN source IS NOT NULL AND trim(source) <> '' THEN a(source, 'Open') ELSE '' END AS Source FROM files WHERE path LIKE '02 Library/%' AND type = 'media' AND medium = 'Book' ORDER BY name
```

## 🎬 Movies

[➕ New film](obsidian://advanced-uri?filepath=02%20Library/New_Film&template=Media.md)

```sqlseal
GRID
SELECT a(path, name) AS Title, status AS Status, rating AS Rating, topics AS Topics, substr(created_at, 1, 10) AS Added, CASE WHEN source IS NOT NULL AND trim(source) <> '' THEN a(source, 'Open') ELSE '' END AS Source FROM files WHERE path LIKE '02 Library/%' AND type = 'media' AND medium = 'Film' ORDER BY name
```

## 📺 TV Shows

[➕ New series](obsidian://advanced-uri?filepath=02%20Library/New_Series&template=Media.md)

```sqlseal
GRID
SELECT a(path, name) AS Title, status AS Status, rating AS Rating, topics AS Topics, substr(created_at, 1, 10) AS Added, CASE WHEN source IS NOT NULL AND trim(source) <> '' THEN a(source, 'Open') ELSE '' END AS Source FROM files WHERE path LIKE '02 Library/%' AND type = 'media' AND medium = 'Series' ORDER BY name
```

## 🔉 Audiobooks

[➕ New audiobook](obsidian://advanced-uri?filepath=02%20Library/New_Audiobook&template=Media.md)

```sqlseal
GRID
SELECT a(path, name) AS Title, status AS Status, rating AS Rating, topics AS Topics, substr(created_at, 1, 10) AS Added, CASE WHEN source IS NOT NULL AND trim(source) <> '' THEN a(source, 'Open') ELSE '' END AS Source FROM files WHERE path LIKE '02 Library/%' AND type = 'media' AND medium = 'Audiobook' ORDER BY name
```

## 🎮 Games

[➕ New game](obsidian://advanced-uri?filepath=02%20Library/New_Game&template=Media.md)

```sqlseal
GRID
SELECT a(path, name) AS Title, status AS Status, rating AS Rating, topics AS Topics, substr(created_at, 1, 10) AS Added, CASE WHEN source IS NOT NULL AND trim(source) <> '' THEN a(source, 'Open') ELSE '' END AS Source FROM files WHERE path LIKE '02 Library/%' AND type = 'media' AND medium = 'Game' ORDER BY name
```

## 🎧 Albums

[➕ New album](obsidian://advanced-uri?filepath=02%20Library/New_Album&template=Media.md)

```sqlseal
GRID
SELECT a(path, name) AS Title, status AS Status, rating AS Rating, topics AS Topics, substr(created_at, 1, 10) AS Added, CASE WHEN source IS NOT NULL AND trim(source) <> '' THEN a(source, 'Open') ELSE '' END AS Source FROM files WHERE path LIKE '02 Library/%' AND type = 'media' AND medium = 'Album' ORDER BY name
```

## 📹 Videos

[➕ New video](obsidian://advanced-uri?filepath=02%20Library/New_Video&template=Media.md)

```sqlseal
GRID
SELECT a(path, name) AS Title, status AS Status, rating AS Rating, topics AS Topics, substr(created_at, 1, 10) AS Added, CASE WHEN source IS NOT NULL AND trim(source) <> '' THEN a(source, 'Open') ELSE '' END AS Source FROM files WHERE path LIKE '02 Library/%' AND type = 'media' AND medium = 'Video' ORDER BY name
```

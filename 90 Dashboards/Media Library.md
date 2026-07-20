---
type: dashboard
---
## 📚 Books

```meta-bind-button
label: "➕ New book"
style: primary
actions:
  - type: js
    file: "Scripts/newMedia.js"
    args:
      medium: Book
```

```sqlseal
GRID
SELECT a(path, name) AS Title, status AS Status, rating AS Rating, topics AS Topics, substr(created_at, 1, 10) AS Added, CASE WHEN source IS NOT NULL AND trim(source) <> '' THEN a(source, 'Open') ELSE '' END AS Source FROM files WHERE path LIKE '02 Library/%' AND type = 'media' AND medium = 'Book' ORDER BY name
```

## 🎬 Movies

```meta-bind-button
label: "➕ New film"
style: primary
actions:
  - type: js
    file: "Scripts/newMedia.js"
    args:
      medium: Film
```

```sqlseal
GRID
SELECT a(path, name) AS Title, status AS Status, rating AS Rating, topics AS Topics, substr(created_at, 1, 10) AS Added, CASE WHEN source IS NOT NULL AND trim(source) <> '' THEN a(source, 'Open') ELSE '' END AS Source FROM files WHERE path LIKE '02 Library/%' AND type = 'media' AND medium = 'Film' ORDER BY name
```

## 📺 TV Shows

```meta-bind-button
label: "➕ New series"
style: primary
actions:
  - type: js
    file: "Scripts/newMedia.js"
    args:
      medium: Series
```

```sqlseal
GRID
SELECT a(path, name) AS Title, status AS Status, rating AS Rating, topics AS Topics, substr(created_at, 1, 10) AS Added, CASE WHEN source IS NOT NULL AND trim(source) <> '' THEN a(source, 'Open') ELSE '' END AS Source FROM files WHERE path LIKE '02 Library/%' AND type = 'media' AND medium = 'Series' ORDER BY name
```

## 🔈Audiobooks

```meta-bind-button
label: "➕ New audiobook"
style: primary
actions:
  - type: js
    file: "Scripts/newMedia.js"
    args:
      medium: Audiobook
```

```sqlseal
GRID
SELECT a(path, name) AS Title, status AS Status, rating AS Rating, topics AS Topics, substr(created_at, 1, 10) AS Added, CASE WHEN source IS NOT NULL AND trim(source) <> '' THEN a(source, 'Open') ELSE '' END AS Source FROM files WHERE path LIKE '02 Library/%' AND type = 'media' AND medium = 'Audiobook' ORDER BY name
```

## 🎮 Games

```meta-bind-button
label: "➕ New game"
style: primary
actions:
  - type: js
    file: "Scripts/newMedia.js"
    args:
      medium: Game
```

```sqlseal
GRID
SELECT a(path, name) AS Title, status AS Status, rating AS Rating, topics AS Topics, substr(created_at, 1, 10) AS Added, CASE WHEN source IS NOT NULL AND trim(source) <> '' THEN a(source, 'Open') ELSE '' END AS Source FROM files WHERE path LIKE '02 Library/%' AND type = 'media' AND medium = 'Game' ORDER BY name
```

## 🎧 Albums

```meta-bind-button
label: "➕ New album"
style: primary
actions:
  - type: js
    file: "Scripts/newMedia.js"
    args:
      medium: Album
```

```sqlseal
GRID
SELECT a(path, name) AS Title, status AS Status, rating AS Rating, topics AS Topics, substr(created_at, 1, 10) AS Added, CASE WHEN source IS NOT NULL AND trim(source) <> '' THEN a(source, 'Open') ELSE '' END AS Source FROM files WHERE path LIKE '02 Library/%' AND type = 'media' AND medium = 'Album' ORDER BY name
```

## 📹 Videos

```meta-bind-button
label: "➕ New video"
style: primary
actions:
  - type: js
    file: "Scripts/newMedia.js"
    args:
      medium: Video
```

```sqlseal
GRID
SELECT a(path, name) AS Title, status AS Status, rating AS Rating, topics AS Topics, substr(created_at, 1, 10) AS Added, CASE WHEN source IS NOT NULL AND trim(source) <> '' THEN a(source, 'Open') ELSE '' END AS Source FROM files WHERE path LIKE '02 Library/%' AND type = 'media' AND medium = 'Video' ORDER BY name
```

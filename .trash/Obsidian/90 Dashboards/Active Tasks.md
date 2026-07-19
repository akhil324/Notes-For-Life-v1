---
type: dashboard
---
## Pending Tasks

```sqlseal
GRID
SELECT
    checkbox AS Done,
    a(path) AS Date,
    task AS Task
FROM tasks
WHERE path LIKE '00 Daily/%'
  AND COALESCE(status, '') IN ('', ' ')
ORDER BY path DESC, position ASC
```
## Recently Completed

```sqlseal
GRID
SELECT
    checkbox AS Done,
    a(path) AS Date,
    task AS Task
FROM tasks
WHERE path LIKE '00 Daily/%'
  AND COALESCE(status, '') NOT IN ('', ' ')
ORDER BY path DESC, position ASC
LIMIT 10
```
## Status
```sqlseal
TEMPLATE
{{#each data}}<p>{{message}}</p>{{/each}}
WITH task_totals AS (
  SELECT
    SUM(CASE WHEN COALESCE(status, '') IN ('', ' ') THEN 1 ELSE 0 END) AS open_tasks,
    SUM(CASE WHEN COALESCE(status, '') NOT IN ('', ' ')
              AND date(substr(path, 10, 10)) BETWEEN date('now', '-6 days') AND date('now')
             THEN 1 ELSE 0 END) AS recent_completions,
    SUM(CASE WHEN COALESCE(status, '') NOT IN ('', ' ')
              AND date(substr(path, 10, 10)) = date('now')
             THEN 1 ELSE 0 END) AS today_page_completions
  FROM tasks
  WHERE path LIKE '00 Daily/%'
),
insights AS (
  SELECT 1 AS position, '✅ ' || recent_completions || ' completed task' || CASE WHEN recent_completions = 1 THEN '' ELSE 's' END || ' on your recent daily pages.' AS message
  FROM task_totals WHERE recent_completions > 0
  UNION ALL
  SELECT 2, '⚡ ' || today_page_completions || ' completion' || CASE WHEN today_page_completions = 1 THEN '' ELSE 's' END || ' on today''s daily page.'
  FROM task_totals WHERE today_page_completions > 0
  UNION ALL
  SELECT 3, '🎯 ' || open_tasks || ' visible win' || CASE WHEN open_tasks = 1 THEN '' ELSE 's' END || ' waiting for you.'
  FROM task_totals WHERE open_tasks > 0
  UNION ALL
  SELECT 4, '🧠 Pick one, finish it, then reassess.'
)
SELECT message FROM insights ORDER BY position;
```

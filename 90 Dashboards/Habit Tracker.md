---
type: dashboard
week_to_view: 2026-07-13
---
# Weekly Tracker
```sqlseal
GRID
WITH RECURSIVE
week AS (
  SELECT date(
    @week_to_view,
    '-' || ((CAST(strftime('%w', @week_to_view) AS INTEGER) + 6) % 7) || ' days'
  ) AS monday
),
days(day_index, day) AS (
  SELECT 0, monday FROM week
  UNION ALL
  SELECT day_index + 1, date(day, '+1 day')
  FROM days
  WHERE day_index < 6
),
habits(sort_order, habit) AS (
  VALUES
    (1, 'Workout'), (2, 'Woke Early'), (3, 'Slept Early'),
    (4, 'Supplements'), (5, 'Read Book'), (6, 'Journaled'),
    (7, 'Skincare AM'), (8, 'Skincare PM'), (9, 'No Doom Scroll')
),
daily AS (
  SELECT f.*
  FROM files f
  CROSS JOIN week w
  WHERE f.path LIKE '00 Daily/%'
    AND f.type = 'daily'
    AND date(f."date") BETWEEN w.monday AND date(w.monday, '+6 days')
),
values_by_habit AS (
  SELECT "date", 'Workout' AS habit, workout AS done FROM daily
  UNION ALL SELECT "date", 'Woke Early', woke_early FROM daily
  UNION ALL SELECT "date", 'Slept Early', slept_early FROM daily
  UNION ALL SELECT "date", 'Supplements', supplements FROM daily
  UNION ALL SELECT "date", 'Read Book', read_book FROM daily
  UNION ALL SELECT "date", 'Journaled', journaled FROM daily
  UNION ALL SELECT "date", 'Skincare AM', skincare_am FROM daily
  UNION ALL SELECT "date", 'Skincare PM', skincare_pm FROM daily
  UNION ALL SELECT "date", 'No Doom Scroll', no_doom_scroll FROM daily
),
matrix AS (
  SELECT
    'Dates' AS Habit,
    strftime('%d-', monday) || substr('JanFebMarAprMayJunJulAugSepOctNovDec', (CAST(strftime('%m', monday) AS INTEGER) - 1) * 3 + 1, 3) || strftime('-%Y', monday) AS Monday,
    strftime('%d-', date(monday, '+1 day')) || substr('JanFebMarAprMayJunJulAugSepOctNovDec', (CAST(strftime('%m', date(monday, '+1 day')) AS INTEGER) - 1) * 3 + 1, 3) || strftime('-%Y', date(monday, '+1 day')) AS Tuesday,
    strftime('%d-', date(monday, '+2 days')) || substr('JanFebMarAprMayJunJulAugSepOctNovDec', (CAST(strftime('%m', date(monday, '+2 days')) AS INTEGER) - 1) * 3 + 1, 3) || strftime('-%Y', date(monday, '+2 days')) AS Wednesday,
    strftime('%d-', date(monday, '+3 days')) || substr('JanFebMarAprMayJunJulAugSepOctNovDec', (CAST(strftime('%m', date(monday, '+3 days')) AS INTEGER) - 1) * 3 + 1, 3) || strftime('-%Y', date(monday, '+3 days')) AS Thursday,
    strftime('%d-', date(monday, '+4 days')) || substr('JanFebMarAprMayJunJulAugSepOctNovDec', (CAST(strftime('%m', date(monday, '+4 days')) AS INTEGER) - 1) * 3 + 1, 3) || strftime('-%Y', date(monday, '+4 days')) AS Friday,
    strftime('%d-', date(monday, '+5 days')) || substr('JanFebMarAprMayJunJulAugSepOctNovDec', (CAST(strftime('%m', date(monday, '+5 days')) AS INTEGER) - 1) * 3 + 1, 3) || strftime('-%Y', date(monday, '+5 days')) AS Saturday,
    strftime('%d-', date(monday, '+6 days')) || substr('JanFebMarAprMayJunJulAugSepOctNovDec', (CAST(strftime('%m', date(monday, '+6 days')) AS INTEGER) - 1) * 3 + 1, 3) || strftime('-%Y', date(monday, '+6 days')) AS Sunday,
    0 AS sort_order
  FROM week

  UNION ALL

  SELECT
    h.habit,
    MAX(CASE WHEN d.day_index = 0 THEN CASE WHEN CAST(v.done AS INTEGER) = 1 THEN '✓' ELSE '—' END END),
    MAX(CASE WHEN d.day_index = 1 THEN CASE WHEN CAST(v.done AS INTEGER) = 1 THEN '✓' ELSE '—' END END),
    MAX(CASE WHEN d.day_index = 2 THEN CASE WHEN CAST(v.done AS INTEGER) = 1 THEN '✓' ELSE '—' END END),
    MAX(CASE WHEN d.day_index = 3 THEN CASE WHEN CAST(v.done AS INTEGER) = 1 THEN '✓' ELSE '—' END END),
    MAX(CASE WHEN d.day_index = 4 THEN CASE WHEN CAST(v.done AS INTEGER) = 1 THEN '✓' ELSE '—' END END),
    MAX(CASE WHEN d.day_index = 5 THEN CASE WHEN CAST(v.done AS INTEGER) = 1 THEN '✓' ELSE '—' END END),
    MAX(CASE WHEN d.day_index = 6 THEN CASE WHEN CAST(v.done AS INTEGER) = 1 THEN '✓' ELSE '—' END END),
    h.sort_order
  FROM habits h
  CROSS JOIN days d
  LEFT JOIN values_by_habit v
    ON v.habit = h.habit AND date(v."date") = d.day
  GROUP BY h.sort_order, h.habit
)
SELECT Habit, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday
FROM matrix
ORDER BY sort_order;
```
## Summary
```sqlseal
TEMPLATE
{{#each data}}<p>{{message}}</p>{{/each}}
WITH RECURSIVE
week AS (
  SELECT date(@week_to_view, '-' || ((CAST(strftime('%w', @week_to_view) AS INTEGER) + 6) % 7) || ' days') AS monday
),
daily AS (
  SELECT f.*
  FROM files f CROSS JOIN week w
  WHERE f.path LIKE '00 Daily/%' AND f.type = 'daily'
    AND date(f."date") BETWEEN w.monday AND date(w.monday, '+6 days')
),
scores AS (
  SELECT 'Workout' AS habit, COALESCE(SUM(CASE WHEN CAST(workout AS INTEGER) = 1 THEN 1 ELSE 0 END), 0) AS wins FROM daily
  UNION ALL SELECT 'Woke Early', COALESCE(SUM(CASE WHEN CAST(woke_early AS INTEGER) = 1 THEN 1 ELSE 0 END), 0) FROM daily
  UNION ALL SELECT 'Slept Early', COALESCE(SUM(CASE WHEN CAST(slept_early AS INTEGER) = 1 THEN 1 ELSE 0 END), 0) FROM daily
  UNION ALL SELECT 'Supplements', COALESCE(SUM(CASE WHEN CAST(supplements AS INTEGER) = 1 THEN 1 ELSE 0 END), 0) FROM daily
  UNION ALL SELECT 'Read Book', COALESCE(SUM(CASE WHEN CAST(read_book AS INTEGER) = 1 THEN 1 ELSE 0 END), 0) FROM daily
  UNION ALL SELECT 'Journaled', COALESCE(SUM(CASE WHEN CAST(journaled AS INTEGER) = 1 THEN 1 ELSE 0 END), 0) FROM daily
  UNION ALL SELECT 'Skincare AM', COALESCE(SUM(CASE WHEN CAST(skincare_am AS INTEGER) = 1 THEN 1 ELSE 0 END), 0) FROM daily
  UNION ALL SELECT 'Skincare PM', COALESCE(SUM(CASE WHEN CAST(skincare_pm AS INTEGER) = 1 THEN 1 ELSE 0 END), 0) FROM daily
  UNION ALL SELECT 'No Doom Scroll', COALESCE(SUM(CASE WHEN CAST(no_doom_scroll AS INTEGER) = 1 THEN 1 ELSE 0 END), 0) FROM daily
),
summary AS (
  SELECT (SELECT COUNT(*) FROM daily) AS logged_days, COALESCE(SUM(wins), 0) AS total_wins FROM scores
),
strongest AS (SELECT habit, wins FROM scores ORDER BY wins DESC, habit LIMIT 1),
growth AS (SELECT habit FROM scores ORDER BY wins, habit LIMIT 1),
best_day AS (
  SELECT date("date") AS day,
    (CASE WHEN CAST(workout AS INTEGER) = 1 THEN 1 ELSE 0 END + CASE WHEN CAST(woke_early AS INTEGER) = 1 THEN 1 ELSE 0 END + CASE WHEN CAST(slept_early AS INTEGER) = 1 THEN 1 ELSE 0 END + CASE WHEN CAST(supplements AS INTEGER) = 1 THEN 1 ELSE 0 END + CASE WHEN CAST(read_book AS INTEGER) = 1 THEN 1 ELSE 0 END + CASE WHEN CAST(journaled AS INTEGER) = 1 THEN 1 ELSE 0 END + CASE WHEN CAST(skincare_am AS INTEGER) = 1 THEN 1 ELSE 0 END + CASE WHEN CAST(skincare_pm AS INTEGER) = 1 THEN 1 ELSE 0 END + CASE WHEN CAST(no_doom_scroll AS INTEGER) = 1 THEN 1 ELSE 0 END) AS wins
  FROM daily
  ORDER BY wins DESC, day
  LIMIT 1
),
insights AS (
  SELECT 1 AS position, '📅 You logged ' || logged_days || ' day' || CASE WHEN logged_days = 1 THEN '' ELSE 's' END || ' this week.' AS message FROM summary WHERE logged_days > 0
  UNION ALL SELECT 2, '✨ You collected ' || total_wins || ' small win' || CASE WHEN total_wins = 1 THEN '' ELSE 's' END || '.' FROM summary WHERE total_wins > 0
  UNION ALL SELECT 3, '💪 Strongest habit: ' || habit || ' (' || wins || ' win' || CASE WHEN wins = 1 THEN '' ELSE 's' END || ').' FROM strongest WHERE wins > 0
  UNION ALL SELECT 4, '🌱 Growth focus: ' || habit || ' — one gentle check-in is enough.' FROM growth CROSS JOIN summary WHERE logged_days > 0
  UNION ALL SELECT 5, '🔥 Best day: ' || strftime('%a', day) || ' with ' || wins || ' win' || CASE WHEN wins = 1 THEN '' ELSE 's' END || '.' FROM best_day WHERE wins > 0
)
SELECT message FROM insights ORDER BY position;
```

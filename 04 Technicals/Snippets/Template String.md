```python
import urllib.parse

# Open and read your template file
with open("template.md", "r", encoding="utf-8") as file:
    content = file.read()

# URL-encode the text
encoded_text = urllib.parse.quote(content)

# Print the final Obsidian link format
print(f"[➕ New Note](obsidian://unique?content={encoded_text})")
```
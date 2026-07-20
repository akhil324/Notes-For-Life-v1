```python
import sys
import urllib.parse

# Check if a file path was provided
if len(sys.argv) < 2:
    print("Usage: python script.py <path_to_file.md>")
    sys.exit(1)

# Get the file path from the command line parameter
file_path = sys.argv[1]

# Read the file
with open(file_path, "r", encoding="utf-8") as file:
    content = file.read()

# URL-encode the text
encoded_text = urllib.parse.quote(content)

# Print the final Obsidian link format
print(f"[➕ New Note](obsidian://unique?content={encoded_text})")
```
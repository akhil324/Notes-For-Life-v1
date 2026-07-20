// Scripts/newMedia.js
// Used by Meta Bind buttons (action type "js") to create a new note from
// 01 Templates/Media.md with the correct `medium` value already filled in.
//
// Requires: Meta Bind (with JavaScript enabled in its settings) + JS Engine.
// One script, reused by every "New ___" button — the medium is passed in
// via the button's own `args`, so no per-medium files are needed.

const medium = context.args.medium;
const folder = context.args.folder ?? "02 Library";
const templatePath = "01 Templates/Media.md";

if (!medium) {
  new Notice("newMedia.js: no 'medium' arg was passed by the button.");
} else {
  const templateFile = app.vault.getAbstractFileByPath(templatePath);

  if (!templateFile) {
    new Notice(`newMedia.js: template not found at "${templatePath}".`);
  } else {
    let content = await app.vault.read(templateFile);

    // Swap the `medium:` value in the frontmatter for the one this button
    // was configured with (e.g. Book, Film, Series, ...).
    content = content.replace(/^medium:.*$/m, `medium: ${medium}`);

    // Make sure the target folder exists.
    if (!app.vault.getAbstractFileByPath(folder)) {
      await app.vault.createFolder(folder);
    }

    // Find a free filename: "New Book", "New Book 1", "New Book 2", ...
    const base = `New ${medium}`;
    let name = base;
    let i = 1;
    while (app.vault.getAbstractFileByPath(`${folder}/${name}.md`)) {
      name = `${base} ${i}`;
      i++;
    }

    const file = await app.vault.create(`${folder}/${name}.md`, content);
    await app.workspace.getLeaf(false).openFile(file);
  }
}

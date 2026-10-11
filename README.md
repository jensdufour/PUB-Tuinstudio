# Bijbouw

## Plans

- [index.html](index.html): start page.
- [grondplan.html](grondplan.html): site and garden plan.
- [tuinstudio.html](tuinstudio.html): detailed studio plan and service schedule.
- [render.html](render.html): interactive 3D view.

Keep these four pages at the root so existing links and GitHub Pages continue to work. Open the HTML directly in a browser; the 3D view downloads Three.js from its existing CDN.

## Local Project Files

Only Git-tracked files remain in this workspace. Local drafts, spreadsheet exports, source documents, render archives, secrets and dependency folders were removed after explicit confirmation. Private project documents must not be published in this public repository.

The exported Excel workbook is maintained manually outside this repository, with OneDrive as the intended location. Email drafts are maintained manually in Outlook. Nothing is uploaded or sent automatically.

## Sheet Export

The optional exporter requires Python and `openpyxl`; the former local environment was removed. With those prerequisites installed, provide your own workbook path and a new output folder:

```powershell
python tools/export_project.py 'C:/path/to/workbook.xlsx' 'project-export'
```

The exporter checks populated values, preserves source formulas, verifies that the workbook is unchanged and refuses to overwrite existing Markdown. Export to a new folder for comparisons, not over the working record. Excel layout, charts and data validation remain available only in the source workbook.
# Bijbouw

## Plans

- [index.html](index.html): start page.
- [grondplan.html](grondplan.html): site and garden plan.
- [tuinstudio.html](tuinstudio.html): detailed studio plan and service schedule.
- [render.html](render.html): interactive 3D view.

Keep these four pages at the root so existing links and GitHub Pages continue to work. Open the HTML directly in a browser; the 3D view downloads Three.js from its existing CDN.

## Local Project Files

These folders are Git-ignored because this repository is public:

- `drafts/`: editable email drafts, not sent automatically.
- `project/`: one editable Markdown document per workbook sheet and a local contents page.
- `references/`: preserved source documents and the reviewed workbook snapshot.
- `archive/`: obsolete generated render images, retained for reversible cleanup.

Markdown sheets are static, not a spreadsheet engine. Cached results and source formulas are retained; blank values must not be interpreted as zero. Once edited, Markdown is the working record and the Excel snapshot is historical.

## Sheet Export

The existing local Python environment includes `openpyxl`:

```powershell
& .venv/Scripts/python.exe tools/export_project.py 'references/Project Bijbouw - reviewed.xlsx' 'project-export'
```

The exporter checks populated values, preserves source formulas, verifies that the workbook is unchanged and refuses to overwrite existing Markdown. Export to a new folder for comparisons, not over the working record. Excel layout, charts and data validation remain available only in the source workbook.
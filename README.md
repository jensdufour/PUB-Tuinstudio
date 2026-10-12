# Bijbouw

## Plans

- [index.html](index.html): start page.
- [grondplan.html](grondplan.html): site and garden plan.
- [tuinstudio.html](tuinstudio.html): detailed studio plan and service schedule.
- [render.html](render.html): interactive 3D view.

Keep these four pages at the root so existing links and GitHub Pages continue to work. Open the HTML directly in a browser; the 3D view downloads Three.js from its existing CDN.

The two 2D pages load their studio drawing from [studio-plan.js](studio-plan.js). Edit that shared SVG source instead of keeping independent copies in the HTML pages. The garden inset uses the identical drawing with a site-scale transform and footprint clip; the detailed page also shows its surrounding dimensions and deck. The 3D view remains a separate model.

The A/B selector is shared through [variant.js](variant.js). A retains the DRU; B uses the JAcobus 6 pellet stove on the NNO side left of the desk, facing into the room, without the central DRU enclosure or gas feed. The navigator carries the selected `?variant=A` or `?variant=B` into all views; direct pages offer the same selector. B is a space study: product dimensions come from the linked retailer, while combustible clearances, flue, outside air, electrical supply and heat sizing require installer confirmation.

## Local Project Files

Only Git-tracked files remain in this workspace. Local drafts, spreadsheet exports, source documents, render archives, secrets and dependency folders were removed after explicit confirmation. Private project documents must not be published in this public repository.

The exported Excel workbook is maintained manually outside this repository, with OneDrive as the intended location. Email drafts are maintained manually in Outlook. Nothing is uploaded or sent automatically.

# Bijbouw

## Plans

- [index.html](index.html): start page.
- [grondplan.html](grondplan.html): site and garden plan.
- [tuinstudio.html](tuinstudio.html): detailed studio plan and service schedule.
- [elektra.html](elektra.html): building-only technical plan for the electrician and plumber. Same studio drawing, furniture and garden deck removed. The sheet currently shows ceiling lights only. L01 is a 120 cm TL-lamp. The same number is one circuit: L02 and L03 are separate, and L04, L05 and L06 are each two spots. Dimension chains are hidden on this page.
- [render.html](render.html): interactive 3D view.

Keep these four pages at the root so existing links and GitHub Pages continue to work. Open the HTML directly in a browser; the 3D view downloads Three.js from its existing CDN.

The two 2D pages load their studio drawing from [studio-plan.js](studio-plan.js). Edit that shared SVG source instead of keeping independent copies in the HTML pages. The garden inset uses the identical drawing with a site-scale transform and footprint clip; the detailed page also shows its surrounding dimensions and deck. The 3D view remains a separate model.

The Piazzetta IP7 pillar is a provisional 90 x 60 x 280 cm enclosure at the existing centre, with 131 cm passages on either side. The stove faces the lounge; the closed office-facing back carries a schematic painting. Clearances, ventilation, pellet filling, slide-out servicing and rear-wall temperatures require installer confirmation; neither the enclosure nor the illustrative stove/painting heights are construction specifications.

## Local Project Files

Only Git-tracked files remain in this workspace. Local drafts, spreadsheet exports, source documents, render archives, secrets and dependency folders were removed after explicit confirmation. Private project documents must not be published in this public repository.

The exported Excel workbook is maintained manually outside this repository, with OneDrive as the intended location. Email drafts are maintained manually in Outlook. Nothing is uploaded or sent automatically.

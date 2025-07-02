---
outline: "deep"
---
# Workspace

In GazePlotter, the workspace is the main area where you can view and interact with your eye-tracking data visualizations. The workspace enables you to create comprehensive dashboards with multiple plots, compare different participants or stimuli, and maintain complete control over your analysis layout.

![Workspace overview in the GazePlotter tool allowing for multiple scarf plots with different eye-tracking data](./3.png)

## Workspace Toolbar

Vertical control panel on the left side providing quick workspace management:

- **Reset Layout** - Reorganize plots into clean grid layout
- **Add Visualization** - Create new [scarf plots](/basic/scarf-plot/), [bar plots](/basic/bar-plot/), or [transition matrices](/basic/transition-matrix/)
- **Toggle Fullscreen** - Distraction-free analysis mode
- **Source Metadata** - View detailed information about your data processing and system usage ([details](/advanced/source-metadata))

## Workspace Export & State Preservation

[Workspace export](/export/workspace/) creates comprehensive JSON files preserving:

- **Complete Layout** - Exact plot positions and sizes
- **Plot Configurations** - All visualization settings and customizations
- **Participant Groupings** - Custom groups for comparative analysis
- **AOI Customizations** - Colors, names, and visual properties
- **Filter Settings** - Data filtering and selection criteria
- **Visualization Types** - All plot types with specific settings

**Use Cases:**
- **Collaboration** - Share complete dashboards
- **Backup** - Save analysis configurations
- **Templates** - Create reusable layouts
- **Transfer** - Move workspaces between devices

**Restore:** Use **Upload data** button and select exported JSON file.

## Manipulating Plots in the Workspace

Drag-and-drop interface for plot management. More options in individual plots (see [Scarf plot](/basic/scarf-plot/)).

### Moving Plots
- Click and drag **drag handle** (4 dots icon) in plot header
- Plots snap to 50x50 pixel grid
- Workspace expands automatically at edges

![Moving a scarf plot in the GazePlotter tool](./1.png)

### Resizing Plots
- Drag bottom-right corner to resize
- Maintains proportional sizing on 50x50 pixel grid

![Resizing a scarf plot in the GazePlotter tool](./2.png)

### Adding and Removing Plots
**Plot Header Controls:**
- **Duplicate button** (copy icon) - Create identical copy
- **Remove button** (X icon) - Delete plot (cannot be undone)
- **Workspace toolbar** - [Add different plot types](#add-visualization)

![Adding and removing scarf plots in the GazePlotter tool](./4.png)

::: tip Workspace Management
Use workspace export frequently to save your analysis configurations. The JSON files are small and perfect for version control or sharing with collaborators.
:::
---
outline: "deep"
---
# Workspace

In GazePlotter, the workspace is the main area where you can view and interact with your eye-tracking data visualizations. The workspace enables you to create comprehensive dashboards with multiple plots, compare different participants or stimuli, and maintain complete control over your analysis layout.

![Workspace overview in the GazePlotter tool allowing for multiple scarf plots with different eye-tracking data](./3.png)

## Workspace Toolbar

The workspace toolbar is a vertical control panel on the left side of the workspace that provides quick access to workspace management tools:

### Reset Layout
Quickly reorganize all plots in your workspace to a clean, organized grid layout. This is helpful when plots become scattered or overlapping.

### Add Visualization
Create new plots in your workspace. Click to see available visualization options:
- Add new [scarf plots](/basic/scarf-plot/)
- Add [bar plots](/basic/bar-plot/)
- Add [transition matrices](/basic/transition-matrix/)

Each new visualization will be placed in the next available space in your workspace grid.

### Toggle Fullscreen
Enter or exit fullscreen mode for distraction-free analysis. In fullscreen mode, the workspace expands to fill your entire screen, hiding browser toolbars and other distractions.

### Source Metadata
View information about your uploaded data files, including:
- File names and formats
- Upload timestamps
- Data source details
- Processing status

## Workspace Export & State Preservation

The [workspace export functionality](/export/workspace/) is one of GazePlotter's most powerful features. When you export your workspace, it creates a comprehensive JSON file that preserves:

- **Complete Layout** - Exact positions and sizes of all plots in your workspace
- **Plot Configurations** - All visualization settings, customizations, and display options
- **Participant Groupings** - Custom groups you've created for comparative analysis
- **AOI Customizations** - Colors, names, and visual properties of Areas of Interest
- **Filter Settings** - Any data filtering or selection criteria applied
- **Visualization Types** - Bar plots, scarf plots, transition matrices with their specific settings

This makes workspace export perfect for:
- **Collaboration** - Share complete dashboards with colleagues
- **Backup** - Save your analysis configurations
- **Templates** - Create reusable workspace layouts
- **Transfer** - Move workspaces between devices

To restore a workspace, simply use the **Upload data** button and select your exported JSON file. Your workspace will be recreated exactly as it was saved.

## Manipulating Plots in the Workspace

You control the content of the workspace using a drag-and-drop interface. You can move plots around, resize them, and manage their lifecycle. More options are attached to individual plots (see [Scarf plot](/basic/scarf-plot/)).

### Moving Plots
To move a plot around the workspace, click and drag the **drag handle** (4 dots icon) in the plot's header to the desired location. If the area is already occupied by another plot, the plot at the target location will be moved to the closest empty space.

![Moving a scarf plot in the GazePlotter tool](./1.png)

::: info
Plots are moved in a grid-like manner, so they will snap to the closest empty space. The resolution of the grid is 50x50 pixels.
:::

::: info
If you move a plot to the edge of the workspace, the workspace will automatically expand to accommodate the new plot.
:::

### Resizing Plots
To resize a plot, click on the bottom right corner of the plot and drag it to the desired size. The plot will resize proportionally to the dragged corner.

![Resizing a scarf plot in the GazePlotter tool](./2.png)

::: info
The size of the plot changes in a grid-like manner, so it will snap to the closest grid point. The resolution of the grid is 50x50 pixels.
:::

### Adding and Removing Plots
Each plot has individual control buttons in its header:

**Adding New Plots:**
- Click the **duplicate button** (copy icon) in any plot's header to create an identical copy
- New plots are automatically placed in the next available space in the workspace grid
- Use the [Add Visualization](#add-visualization) option in the workspace toolbar to create different plot types

**Removing Plots:**
- Click the **remove button** (X icon) in the plot's header to delete it from the workspace
- This action cannot be undone, but you can always recreate the plot or restore from a workspace export

![Adding and removing scarf plots in the GazePlotter tool](./4.png)

::: tip Workspace Management
Use workspace export frequently to save your analysis configurations. The JSON files are small and perfect for version control or sharing with collaborators.
:::
---
outline: "deep"
---
# Scarf plot
Scarf plot (or sequential graph) is a visualization of eye movement data that shows the sequence of fixations and saccades in time. It is a useful tool for analyzing the order of fixations and saccades, and for comparing the scanpaths of different participants or stimuli. Specific areas of interest (AOIs) in the given stimuli are color-coded and displayed in the scarf plot. The scarf plot is the main visualization tool in GazePlotter, and it is used to visualize eye-tracking data from various eye-tracking software.

## Basic controls
In GazePlotter, scarf plots have following main controls:
1. **Title** - the title of the scarf plot, which can be changed by clicking on it.
2. **Stimulus selector** - a drop-down menu for selecting the stimulus to be displayed in the scarf plot.
3. **Timeline selector** - a drop-down menu for selecting the timeline type to be displayed in the scarf plot (absolute, relative, ordinal; see [Timelines](/basic/timelines/)).
4. **Group selector** - a drop-down menu for selecting the group of participants to be displayed in the scarf plot (see [Groups](/basic/groups/)).
5. **Zoom in/out** - buttons for zooming in and out of the scarf plot.
6. **More options** - a button for accessing additional options for the scarf plot (see [More options](#more-options)).

![Scarf plot basic controls in the GazePlotter tool](./1.png)

## More options
After clicking on the `More options` button, a pop-up menu with additional options for the scarf plot will appear. The following options are available:
1. **Customize AOIs** - opens the `AOIs Settings` tab in the settings window, where you can change the color, order, and name of the AOIs (see [Customize AOIs](/basic/aoi-customization/)).
2. **Add AOI visibility data** - opens a window for adding AOI visibility data to the scarf plot (see [Adding AOI visibility data](/basic/aoi-visibility/)).
3. **Participant grouping** - opens a window for grouping participants in the scarf plot (see [Participant grouping](/basic/groups/)).
4. **Clip timeline** - opens a window for clipping the timeline in the scarf plot (see [Clip timeline](/basic/clip-timeline/)).
5. **Download scarf plot** - downloads the scarf plot as an image file (PNG, JPEG, WEBP or SVG).
6. **Duplicate scarf plot** - duplicates the scarf plot in the nearest empty space in the workspace (see [Workspace](/basic/workspace/)).
7. **Delete scarf plot** - deletes the scarf plot from the workspace (see [Workspace](/basic/workspace/)).

![Scarf plot more options in the GazePlotter tool](./2.png)

## Interactivity
The scarf plot is interactive. Except for the basic controls and dragging the scarf plot around the workspace, you can interact with the scarf plot to get more detailed information about fixations, saccades, and AOIs in the data or highlight specific segments of the data.

### Sequence details
You can hover over fixations, saccades, and AOIs to see additional information, such as duration, start and end times, and AOI name. This information is displayed in a tooltip when you hover over the corresponding segment.

![Sequence details in the GazePlotter scarf plot](./4.png)

### Highlighting
In the legend, you can highlight all segments of a specific category (fixations, saccades, or AOIs) by:
1. Hovering over the category name in the legend to highlight all segments of that category temporarily.
2. Clicking on the category name in the legend to highlight all segments of that category until you click on it again to remove the highlight.

![Highlighting segments in the GazePlotter scarf plot](./3.png)
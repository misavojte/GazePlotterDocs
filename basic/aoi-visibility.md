# Adding AOI visibility data

GazePlotter supports the upload of AOI visibility data, allowing for the effective visualization of dynamic AOIs and their visibility in the stimulus. This enhances interpretability of the data and allows for more detailed analysis. 

## Getting AOI visibility data
::: warning
This feature is available only for [SMI BeGaze](/upload-data/smi-begaze.md) software export.
:::
### From SMI BeGaze
In the SMI BeGaze software, open `AOI Editor`. Export the AOI visibility data as `.xml` file by clicking `Save` button. In this file, you can find the information about the visibility of each AOI in a given stimulus.

The exported file can be then simply added to the workplace to already uploaded [SMI BeGaze](/upload-data/smi-begaze.md) data, see below.

## Adding AOI visibility data to the workplace
To add AOI visibility data to the workplace:
1. Click `Settings` button in the top right corner of the scarf plot with desired stimulus set.
2. In the `Scarf Chart Settings` window, click `AOIs visibility` button.
3. In new window, select the `.xml` file with AOI visibility data.
4. Select whether to add the AOI visibility data to all participants or only to the selected one.
5. Click `Start parsing` button. The AOI visibility data will be added to the workplace.

![](img/aoi-visibility/1.jpg)

## Interactivity
Each AOI visibility data is represented by a colored line. This is expanded and thus highlighted when the mouse is moved over the corresponding AOI category in the legend.

![](img/aoi-visibility/2.jpg)
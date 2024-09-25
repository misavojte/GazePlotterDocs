---
outline: deep
---

# Tobii Pro Lab upload
To upload data from Tobii Pro Lab, you need to export the data as a `.tsv` file. 

::: warning
Tobii Pro Lab export doesn't support dynamic AOI visibility information.
:::

## Export & upload

In the Tobii Pro Lab software, select `Analyze > Data Export`. 

Make sure, that in the right panel called `Format` you have selected `Single standard file (.tsv)`. 

Select only the following metrics for export to speed up the upload process:

| Column Name             |
|-------------------------|
| Participant name        |
| Recording name          |
| Presented Stimulus name |
| Eye movement type       |
| Eye movement type index |
| Event                   |
| AOI hit                 |

Then click `Export` to export the data.

The exported `.tsv` file can be then simply uploaded to the workplace by clicking the `Upload data` button (see [GazePlotter GUI overview](/basic/)) and selecting this file for upload.
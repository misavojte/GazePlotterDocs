---
outline: deep
---

# SMI BeGaze upload
To upload data from SMI BeGaze, you need to export the data as a `.csv` file. Make sure that columns are separated by a comma (`,`).

## No overlaying AOIs
If you don't have multiple AOI hits in the same fixation (caused by AOI overlay), the `.csv` file can be exported from the SMI BeGaze software by selecting `File > Export > CSV`.

In this tab, check the following metrics for export:

| Column Group             | Column Name                        |
|--------------------------|-----------------------------------|
| Presentation Information | Stimulus                           |
| Participant Information   | Participant                        |
|                          | Participant Properties<br>*if participant attributes needed for analysis |
| General Information      | Category                          |
| AOI Information          | AOI Name                          |
| Event Details            | Event Start Trial Time [ms]       |
|                          | Event End Trial Time [ms]         |

Then click `Export` to export the data.

The exported `.csv` file can be then simply uploaded to the workplace by clicking the `Upload data` button in [GazePlotter](https://gazeplotter.com) and selecting this file for upload.

## Data with overlaying AOIs
If you have multiple AOI hits in the same fixation (caused by AOI overlay), firstly export data as in the previous section. 

Then, in the SMI BeGaze software, select `File > Export > CSV` again. In this tab, check the following metrics for export:


Then click `Export` to export the data.

After that, click the `Upload data` button in [GazePlotter](https://gazeplotter.com) and select both the first exported `.csv` file and the second one for starting the upload and visualization.

## Adding dynamic AOI visibility information
If you have dynamic AOI visibility information you wish to visualize, firstly export and upload the data as in the one of the previous sections. 



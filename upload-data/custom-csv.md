# Upload of custom CSV

In addition to the supported file types, GazePlotter also supports the upload of custom CSV files. 

The CSV file must contain the following columns on the first line of the file:
* `Time` - timestamp of the sample, simple number, no units or commas allowed
* `Participant` - text string of the participant name to be displayed
* `Stimulus` - text string of the stimulus name to be displayed
* `AOI` - text string of the AOI name to be displayed

## Delimiters
The CSV file must use the following delimiters:
* `,` - column delimiter
* `\r\n` - row delimiter

## Formatting of one segment
Each segment must have at least two rows:
* The first row will be used for information when the segment starts.
* The last row will be used for information when the segment ends and all the other info.

::: info
Segment is determined by the homogenity of the `AOI`, `Participant` and `Stimulus` column.
:::

::: warning
All the other rows in the segment will be ignored.
:::

::: warning
Name of the columns is case sensitive.
:::

### Examples
The following CSV example contains one segment with two rows. The segment starts at 0 ms and ends at 100 ms. The participant is `Participant 1`, the stimulus is `Stimulus 1` and the AOI is `AOI 1`.
```csv
Time,Participant,Stimulus,AOI\r\n
0,Participant 1,Stimulus 1,AOI 1\r\n
100,Participant 1,Stimulus 1,AOI 1\r\n
```
Next example still have one segment, but with three rows. The segment starts at 0 ms and ends at 100 ms. The participant is `Participant 1`, the stimulus is `Stimulus 1` and the AOI is `AOI 1`.
```csv
Time,Participant,Stimulus,AOI\r\n
0,Participant 1,Stimulus 1,AOI 1\r\n
50,Participant 1,Stimulus 1,AOI 1\r\n
100,Participant 1,Stimulus 1,AOI 1\r\n
```
In the last example, we have two segments. One with 5 rows, second with 2 rows. 

The first segment starts at 0 ms and ends at 100 ms. The participant is `Participant 1`, the stimulus is `Stimulus 1` and the AOI is `AOI 1`.

The second segment starts at 100 ms and ends at 125 ms. The participant is `Participant 1`, the stimulus is `Stimulus 1` and the AOI is `AOI 2`.
```csv
Time,Participant,Stimulus,AOI\r\n
0,Participant 1,Stimulus 1,AOI 1\r\n
25,Participant 1,Stimulus 1,AOI 1\r\n
50,Participant 1,Stimulus 1,AOI 1\r\n
75,Participant 1,Stimulus 1,AOI 1\r\n
100,Participant 1,Stimulus 1,AOI 1\r\n
100,Participant 1,Stimulus 1,AOI 2\r\n
125,Participant 1,Stimulus 1,AOI 2\r\n
```

### Sample data

You can download the sample data, including other formats, from [OSF Sample Data Storage](https://osf.io/j58v3).

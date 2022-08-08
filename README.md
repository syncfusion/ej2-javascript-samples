# JavaScript Sample Browser

## Adding New Sample

Create your new folder in 'src' location and name the folder as control name. Example: “button” or "list-view".

Add your sample order in the `src/common/sampleOrder.json` with corresponding category.

**Note:** Do not use whitespace at any cause in the folder’s name. Use “-” instead of space.


### Configure the folder and sample

Create the “sample.json” file inside of your control folder.  Create your sample html and js file in same folder also the html and js files should have the same names.

**Note:** Do not use whitespace at any cause in the file’s name. Use “-” instead of space.


### Configure Sample JSON

Configure your sample json file as like below code snippet.

```
{
    "name": "Grid",
    "directory": "grid",
    "category": "Grid",
    "samples": [
        { "url": "localdata", "name": "Local Data", "category": "Data Binding" },
        { "url": "remotedata", "name": "Remote Data", "category": "Data Binding" },
        { "url": "autowrap", "name": "AutoWrap Column Cells", "category": "Columns" },
        { "url": "showhide", "name": "Show or Hide Column", "category": "Columns" }
    ],
    "dataSourcePath": "src/grid/datasource.js"
}
```
**Note:** To exculde a sample in the device you need to set `hideOnDevice` as true for the sample json file.

**Fields Description:**

* _name :_ It can be any string that you want to show a component name.

* _directory :_ Specifies that your sample's directory name.

* _category :_ Specify that your sample comes under which category.

* _dataSourcePath :_ Specify that your data source file Path (Optional).

* _samples :_ Specify array of samples in your control.

* _samples.url :_ specifies the file name without extension.

* _samples.name :_ It can be any string that you want to show a sample name.

* _samples.category :_ Specify that your sample comes under which category.


## Adding datasource components

To add datasource file for the component, you need to include the `dataSourcePath` option which need to map the datasource file path in the component's sample.json. 

refer the below link for config

https://github.com/syncfusion/ej2-javascript-samples/blob/master/src/grid/sample.json#L7

The sample datasource file need to store the json in window variable.

Each component's datasource window variable name must be unique.

For example datasource for grid must be stored as `window.gridData`.

Refer the below datasource file for further reference

https://github.com/syncfusion/ej2-javascript-samples/blob/master/src/grid/data-source.js

**Note:** Each component should include one datasource file only.

## Run the sample browser

We can run the sample browser with two commands

1. **gulp _serve_** – run the sample browser alone.
2. **gulp _watch_** – run the sample browser and monitor typescript as well. This will help at development time. If any changes detect means it will automatically compile and browser will reloaded.

```
gulp serve
```


**Access URLs:**

Local URL is works only in your machine.

```
http://localhost:3000
```

External URL is works in all locally connected LAN. (You can use to see sample browser in mobile).

```
http://your-ip-address:3000
```

**Note:** Here, The mentioned IP is your local machine IP Address.

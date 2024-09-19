window.tasksCollection = [
    {
        Id: 1,
        Name: "Project initiation",
        StartDate: new Date('04/02/2021'),
        EndDate: new Date('04/06/2021'),
        BaselineStartDate: new Date('04/02/2021'),
        BaselineEndDate: new Date('04/06/2021'),
    },
    {
        Id: 2,
        Name: "Identify site location",
        StartDate: new Date('04/02/2021'),
        EndDate: new Date('04/06/2021'),
        Progress: 30,
        ParentId: 1,
        BaselineStartDate: new Date('04/02/2021'),
        BaselineEndDate: new Date('04/10/2021'),
        resourceInfo: [{ Id: 1, Name: "Martin Tamer" ,MaxUnit:100}]
    },
    {
        Id: 3,
        Name: "Perform soil test",
        StartDate: new Date('04/08/2021'),
        EndDate: new Date('04/12/2021'),
        Progress: 40,
        ParentId: 1,
        BaselineStartDate: new Date('04/02/2021'),
        BaselineEndDate: new Date('04/10/2021'),
        resourceInfo: [{ Id: 1, Name: "Martin Tamer" ,MaxUnit:100}]
    },
    {
        Id: 4,
        Name: "Soil test approval",
        StartDate: new Date('04/08/2021'),
        EndDate: new Date('04/17/2021'),
        Progress: 30,
        ParentId: 1,
        BaselineStartDate: new Date('04/08/2021'),
        BaselineEndDate: new Date('04/15/2021'),
        resourceInfo: [{ Id: 3, Name: "Margaret Buchanan", MaxUnit: 100 }]
    },
    {
        Id: 5,
        Name: "Project initiation",
        StartDate: new Date('04/02/2021'),
        EndDate: new Date('04/08/2021'),
    },
    {
        Id: 6,
        Name: "Identify site location",
        StartDate: new Date('04/16/2021'),
        EndDate: new Date('04/18/2021'),
        Progress: 30,
        ParentId: 5,
        BaselineStartDate: new Date('04/02/2021'),
        BaselineEndDate: new Date('04/14/2021'),
        resourceInfo: [{ Id: 3, Name: "Margaret Buchanan", MaxUnit: 100 }]
    },
    {
        Id: 7,
        Name: "Perform soil test",
        StartDate: new Date('04/02/2021'),
        EndDate: new Date('04/05/2021'),
        Progress: 40,
        ParentId: 5,
        BaselineStartDate: new Date('04/02/2021'),
        BaselineEndDate: new Date('04/07/2021'),
        resourceInfo: [{ Id: 4, Name: "Fuller King", MaxUnit: 100}]
    },
    {
        Id: 8,
        Name: "Soil test approval",
        StartDate: new Date('04/02/2021'),
        EndDate: new Date('04/03/2021'),
        Progress: 30,
        ParentId: 5,
        BaselineStartDate: new Date('04/02/2021'),
        BaselineEndDate: new Date('04/06/2021'),
        resourceInfo: [{ Id: 5, Name: "Davolio Fuller", MaxUnit: 100 }]
    }
];

window.resourceCollection = [
    { Id: 1, Name: "Martin Tamer" ,MaxUnit:100},
    { Id: 2, Name: "Rose Fuller", MaxUnit: 100 },
    { Id: 3, Name: "Margaret Buchanan", MaxUnit: 100 },
    { Id: 4, Name: "Fuller King", MaxUnit: 100},
    { Id: 5, Name: "Davolio Fuller", MaxUnit: 100 },
    { Id: 6, Name: "Laura Callahan", MaxUnit: 100 },
    { Id: 7, Name: "Andrew Fuller", MaxUnit: 100 },
    { Id: 8, Name: "Nancy Davolio", MaxUnit: 100 }
];

window.taskDataCollection  = [
    { TaskID: 1,TaskName: "Product concept", StartDate: new Date(2026, 3, 2), EndDate: new Date(2026, 3, 8), Duration: "5 days" },
    { TaskID: 2,TaskName: "Defining the product usage", StartDate: new Date(2026, 3, 2), EndDate: new Date(2026, 3, 8), Duration: "3", Progress: 30, ParentTaskID: 1 },
    { TaskID: 3,TaskName: "Defining the target audience", StartDate: new Date(2026, 3, 2), EndDate: new Date(2026, 3, 4), Duration: "3", Progress: 40, ParentTaskID: 1 },
    { TaskID: 4,TaskName: "Prepare product sketch and notes", StartDate: new Date(2026, 3, 5), EndDate: new Date(2026, 3, 8), Duration: "2", Progress: 30, ParentTaskID: 1, Predecessor: "2" },
    { TaskID: 5,TaskName: "Concept approval", StartDate: new Date(2026, 3, 8), EndDate: new Date(2026, 3, 8), Duration: "0", Predecessor: "3,4", ParentTaskID: 1 },
    { TaskID: 6,TaskName: "Market research", StartDate: new Date(2026, 3, 9), EndDate: new Date(2026, 3, 18), Predecessor: "2", Duration: "4", Progress: 30 },
    { TaskID: 7,TaskName: "Demand analysis", StartDate: new Date(2026, 3, 9), EndDate: new Date(2026, 3, 12), Duration: "4", Progress: 40, ParentTaskID: 6 },
    { TaskID: 8,TaskName: "Customer strength", StartDate: new Date(2026, 3, 9), EndDate: new Date(2026, 3, 12), Duration: "4", Progress: 30, ParentTaskID: 7, Predecessor: "5" },
    { TaskID: 9,TaskName: "Market opportunity analysis", StartDate: new Date(2026, 3, 9), EndDate: new Date(2026, 3, 12), Duration: "4", ParentTaskID: 7, Predecessor: "5" },
    { TaskID: 10,TaskName: "Competitor analysis", StartDate: new Date(2026, 3, 15), EndDate: new Date(2026, 3, 18), Duration: "4", Progress: 30, ParentTaskID: 6, Predecessor: "7,8" },
    { TaskID: 11,TaskName: "Product strength analysis", StartDate: new Date(2026, 3, 15), EndDate: new Date(2026, 3, 18), Duration: "4", Progress: 40, ParentTaskID: 6, Predecessor: "9" },
    { TaskID: 12,TaskName: "Research completed", StartDate: new Date(2026, 3, 18), EndDate: new Date(2026, 3, 18), Duration: "0", Progress: 30, ParentTaskID: 6, Predecessor: "10" },
    { TaskID: 13,TaskName: "Product design and development", StartDate: new Date(2026, 3, 19), EndDate: new Date(2026, 4, 16), Duration: "20", Predecessor: "6" },
    { TaskID: 14,TaskName: "Functionality design", StartDate: new Date(2026, 3, 19), EndDate: new Date(2026, 3, 23), Duration: "3", Progress: 30, ParentTaskID: 13, Predecessor: "12" },
    { TaskID: 15,TaskName: "Quality design", StartDate: new Date(2026, 3, 19), EndDate: new Date(2026, 3, 23), Duration: "3", Progress: 40, ParentTaskID: 13, Predecessor: "12" },
    { TaskID: 16,TaskName: "Define reliability", StartDate: new Date(2026, 3, 24), EndDate: new Date(2026, 3, 25), Duration: "2", Progress: 30, ParentTaskID: 13, Predecessor: "15" },
    { TaskID: 17,TaskName: "TaskIDentifying raw materials", StartDate: new Date(2026, 3, 24), EndDate: new Date(2026, 3, 25), Duration: "2", ParentTaskID: 13, Predecessor: "15" },
    { TaskID: 18,TaskName: "Define cost plan", StartDate: new Date(2026, 3, 26), EndDate: new Date(2026, 3, 29), Duration: "2", Progress: 30, ParentTaskID: 13, Predecessor: "17" },
    { TaskID: 19,TaskName: "Manufacturing cost", StartDate: new Date(2026, 3, 26), EndDate: new Date(2026, 3, 29), Duration: "2", Progress: 40, ParentTaskID: 18, Predecessor: "17" },
    { TaskID: 20,TaskName: "Selling cost", StartDate: new Date(2026, 3, 26), EndDate: new Date(2026, 3, 29), Duration: "2", Progress: 30, ParentTaskID: 18, Predecessor: "17" },
    { TaskID: 21,TaskName: "Development of final design", StartDate: new Date(2026, 3, 30), EndDate: new Date(2026, 4, 8), Duration: "7", ParentTaskID: 13 },
    { TaskID: 22,TaskName: "Develop dimensions and design", StartDate: new Date(2026, 3, 30), EndDate: new Date(2026, 4, 1), Duration: "2", Progress: 30, ParentTaskID: 21, Predecessor: "19,20" },
    { TaskID: 23,TaskName: "Develop designs to meet industry", StartDate: new Date(2026, 4, 2), EndDate: new Date(2026, 4, 3), Duration: "2", Progress: 40, ParentTaskID: 21, Predecessor: "22" },
    { TaskID: 24,TaskName: "Include all the details", StartDate: new Date(2026, 4, 6), EndDate: new Date(2026, 4, 8), Duration: "3", Progress: 30, ParentTaskID: 21, Predecessor: "23" },
    { TaskID: 25,TaskName: "Project closure", StartDate: new Date(2026, 4, 9), EndDate: new Date(2026, 4, 13), Duration: "3", Predecessor: "24" },
];

window.ganttData = {
    "TaskDataCollection2021": [
      {
        "TaskID": 1,
        "TaskName": "Product concept",
        "StartDate": "2021-04-02",
        "EndDate": "2021-04-08",
        "Duration": "5 days",
        "Progress": 100
      },
      {
        "TaskID": 2,
        "TaskName": "Defining the product usage",
        "StartDate": "2021-04-02",
        "EndDate": "2021-04-08",
        "Duration": "3 days",
        "Progress": 100,
        "ParentId": 1
      },
      {
        "TaskID": 3,
        "TaskName": "Defining the target audience",
        "StartDate": "2021-04-02",
        "EndDate": "2021-04-04",
        "Duration": "3 days",
        "Progress": 100,
        "ParentId": 1
      },
      {
        "TaskID": 4,
        "TaskName": "Prepare product sketch and notes",
        "StartDate": "2021-04-05",
        "EndDate": "2021-04-08",
        "Duration": "2 days",
        "Progress": 100,
        "ParentId": 1,
        "Predecessor": "2"
      },
      {
        "TaskID": 5,
        "TaskName": "Concept approval",
        "StartDate": "2021-04-08",
        "EndDate": "2021-04-08",
        "Duration": "0 days",
        "Predecessor": "3,4",
        "ParentId": 1,
        "Progress": 100
      },
      {
        "TaskID": 6,
        "TaskName": "Market research",
        "StartDate": "2021-04-09",
        "EndDate": "2021-04-18",
        "Duration": "4 days",
        "Progress": 100,
        "Predecessor": "2"
      },
      {
        "TaskID": 7,
        "TaskName": "Demand analysis",
        "StartDate": "2021-04-09",
        "EndDate": "2021-04-12",
        "Duration": "4 days",
        "Progress": 100,
        "ParentId": 6
      },
      {
        "TaskID": 8,
        "TaskName": "Customer strength",
        "StartDate": "2021-04-09",
        "EndDate": "2021-04-12",
        "Duration": "4 days",
        "Progress": 100,
        "ParentId": 7,
        "Predecessor": "5"
      },
      {
        "TaskID": 9,
        "TaskName": "Market opportunity analysis",
        "StartDate": "2021-04-09",
        "EndDate": "2021-04-12",
        "Duration": "4 days",
        "ParentId": 7,
        "Progress": 100,
        "Predecessor": "5"
      },
      {
        "TaskID": 10,
        "TaskName": "Competitor analysis",
        "StartDate": "2021-04-15",
        "EndDate": "2021-04-18",
        "Duration": "4 days",
        "Progress": 100,
        "ParentId": 6,
        "Predecessor": "7,8"
      },
      {
        "TaskID": 11,
        "TaskName": "Product strength analysis",
        "StartDate": "2021-04-15",
        "EndDate": "2021-04-18",
        "Duration": "4 days",
        "Progress": 100,
        "ParentId": 6,
        "Predecessor": "9"
      },
      {
        "TaskID": 12,
        "TaskName": "Research completed",
        "StartDate": "2021-04-18",
        "EndDate": "2021-04-18",
        "Duration": "0 days",
        "Progress": 100,
        "ParentId": 6,
        "Predecessor": "10"
      },
      {
        "TaskID": 13,
        "TaskName": "Product design and development",
        "StartDate": "2021-04-19",
        "EndDate": "2021-05-16",
        "Duration": "20 days",
        "Progress": 100,
        "Predecessor": "6"
      },
      {
        "TaskID": 14,
        "TaskName": "Functionality design",
        "StartDate": "2021-04-19",
        "EndDate": "2021-04-23",
        "Duration": "3 days",
        "Progress": 100,
        "ParentId": 13,
        "Predecessor": "12"
      },
      {
        "TaskID": 15,
        "TaskName": "Quality design",
        "StartDate": "2021-04-19",
        "EndDate": "2021-04-23",
        "Duration": "3 days",
        "Progress": 100,
        "ParentId": 13,
        "Predecessor": "12"
      },
      {
        "TaskID": 16,
        "TaskName": "Define reliability",
        "StartDate": "2021-04-24",
        "EndDate": "2021-04-25",
        "Duration": "2 days",
        "Progress": 100,
        "ParentId": 13,
        "Predecessor": "15"
      },
      {
        "TaskID": 17,
        "TaskName": "Identifying raw materials",
        "StartDate": "2021-04-24",
        "EndDate": "2021-04-25",
        "Duration": "2 days",
        "ParentId": 13,
        "Progress": 100,
        "Predecessor": "15"
      },
      {
        "TaskID": 18,
        "TaskName": "Define cost plan",
        "StartDate": "2021-04-26",
        "EndDate": "2021-04-29",
        "Duration": "2 days",
        "Progress": 100,
        "ParentId": 13,
        "Predecessor": "17"
      },
      {
        "TaskID": 19,
        "TaskName": "Manufacturing cost",
        "StartDate": "2021-04-26",
        "EndDate": "2021-04-29",
        "Duration": "2 days",
        "Progress": 100,
        "ParentId": 18,
        "Predecessor": "17"
      },
      {
        "TaskID": 20,
        "TaskName": "Selling cost",
        "StartDate": "2021-04-26",
        "EndDate": "2021-04-29",
        "Duration": "2 days",
        "Progress": 100,
        "ParentId": 18,
        "Predecessor": "17"
      },
      {
        "TaskID": 21,
        "TaskName": "Development of final design",
        "StartDate": "2021-04-30",
        "EndDate": "2021-05-08",
        "Duration": "7 days",
        "Progress": 100,
        "ParentId": 13
      },
      {
        "TaskID": 22,
        "TaskName": "Develop dimensions and design",
        "StartDate": "2021-04-30",
        "EndDate": "2021-05-01",
        "Duration": "2 days",
        "Progress": 100,
        "ParentId": 21,
        "Predecessor": "19,20"
      },
      {
        "TaskID": 23,
        "TaskName": "Develop designs to meet industry",
        "StartDate": "2021-05-02",
        "EndDate": "2021-05-03",
        "Duration": "2 days",
        "Progress": 100,
        "ParentId": 21,
        "Predecessor": "22"
      },
      {
        "TaskID": 24,
        "TaskName": "Include all the details",
        "StartDate": "2021-05-06",
        "EndDate": "2021-05-08",
        "Duration": "3 days",
        "Progress": 100,
        "ParentId": 21,
        "Predecessor": "23"
      },
      {
        "TaskID": 25,
        "TaskName": "Project closure",
        "StartDate": "2021-05-09",
        "EndDate": "2021-05-13",
        "Duration": "3 days",
        "Predecessor": "24"
      }
    ],
    "TaskDataCollection2022": [
      {
        "TaskID": 1,
        "TaskName": "Product concept",
        "StartDate": "2022-01-02",
        "EndDate": "2022-01-08",
        "Progress": 100,
        "Duration": "5 days"
      },
      {
        "TaskID": 2,
        "TaskName": "Defining the product usage",
        "StartDate": "2022-01-02",
        "EndDate": "2022-01-08",
        "Duration": "3 days",
        "Progress": 100,
        "ParentId": 1
      },
      {
        "TaskID": 3,
        "TaskName": "Defining the target audience",
        "StartDate": "2022-01-02",
        "EndDate": "2022-01-04",
        "Duration": "3 days",
        "Progress": 100,
        "ParentId": 1
      },
      {
        "TaskID": 4,
        "TaskName": "Prepare product sketch and notes",
        "StartDate": "2022-01-05",
        "EndDate": "2022-01-08",
        "Duration": "2 days",
        "Progress": 100,
        "ParentId": 1,
        "Predecessor": "2"
      },
      {
        "TaskID": 5,
        "TaskName": "Concept approval",
        "StartDate": "2022-01-08",
        "EndDate": "2022-01-08",
        "Duration": "0 days",
        "Progress": 100,
        "ParentId": 1,
        "Predecessor": "3,4"
      },
      {
        "TaskID": 6,
        "TaskName": "Market research",
        "StartDate": "2022-01-09",
        "EndDate": "2022-01-20",
        "Duration": "6 days",
        "Progress": 100,
        "Predecessor": "2"
      },
      {
        "TaskID": 7,
        "TaskName": "Demand analysis",
        "StartDate": "2022-01-09",
        "EndDate": "2022-01-12",
        "Duration": "4 days",
        "Progress": 100,
        "ParentId": 6
      },
      {
        "TaskID": 8,
        "TaskName": "Customer strength",
        "StartDate": "2022-01-09",
        "EndDate": "2022-01-12",
        "Duration": "4 days",
        "Progress": 100,
        "ParentId": 7,
        "Predecessor": "5"
      },
      {
        "TaskID": 9,
        "TaskName": "Market opportunity analysis",
        "StartDate": "2022-01-09",
        "EndDate": "2022-01-12",
        "Duration": "4 days",
        "ParentId": 7,
        "Progress": 100,
        "Predecessor": "5"
      },
      {
        "TaskID": 10,
        "TaskName": "Competitor analysis",
        "StartDate": "2022-01-15",
        "EndDate": "2022-01-18",
        "Duration": "4 days",
        "Progress": 100,
        "ParentId": 6,
        "Predecessor": "7,8"
      },
      {
        "TaskID": 11,
        "TaskName": "Product strength analysis",
        "StartDate": "2022-01-15",
        "EndDate": "2022-01-18",
        "Duration": "4 days",
        "Progress": 100,
        "ParentId": 6,
        "Predecessor": "9"
      },
      {
        "TaskID": 12,
        "TaskName": "Research completed",
        "StartDate": "2022-01-18",
        "EndDate": "2022-01-18",
        "Duration": "0 days",
        "Progress": 100,
        "ParentId": 6,
        "Predecessor": "10"
      },
      {
        "TaskID": 13,
        "TaskName": "Product design and development",
        "StartDate": "2022-01-19",
        "EndDate": "2022-02-16",
        "Progress": 100,
        "Duration": "20 days",
        "Predecessor": "6"
      },
      {
        "TaskID": 14,
        "TaskName": "Functionality design",
        "StartDate": "2022-01-19",
        "EndDate": "2022-01-26",
        "Duration": "6 days",
        "Progress": 100,
        "ParentId": 13,
        "Predecessor": "12"
      },
      {
        "TaskID": 15,
        "TaskName": "Quality design",
        "StartDate": "2022-01-19",
        "EndDate": "2022-01-23",
        "Duration": "3 days",
        "Progress": 100,
        "ParentId": 13,
        "Predecessor": "12"
      },
      {
        "TaskID": 16,
        "TaskName": "Define reliability",
        "StartDate": "2022-01-24",
        "EndDate": "2022-01-25",
        "Duration": "2 days",
        "Progress": 100,
        "ParentId": 13,
        "Predecessor": "15"
      },
      {
        "TaskID": 17,
        "TaskName": "Identifying raw materials",
        "StartDate": "2022-01-24",
        "EndDate": "2022-01-25",
        "Duration": "2 days",
        "Progress": 100,
        "ParentId": 13,
        "Predecessor": "15"
      },
      {
        "TaskID": 18,
        "TaskName": "Define cost plan",
        "StartDate": "2022-01-26",
        "EndDate": "2022-01-29",
        "Duration": "2 days",
        "Progress": 100,
        "ParentId": 13,
        "Predecessor": "17"
      },
      {
        "TaskID": 19,
        "TaskName": "Manufacturing cost",
        "StartDate": "2022-01-26",
        "EndDate": "2022-01-29",
        "Duration": "2 days",
        "Progress": 100,
        "ParentId": 18,
        "Predecessor": "17"
      },
      {
        "TaskID": 20,
        "TaskName": "Selling cost",
        "StartDate": "2022-01-26",
        "EndDate": "2022-01-29",
        "Duration": "2 days",
        "Progress": 100,
        "ParentId": 18,
        "Predecessor": "17"
      },
      {
        "TaskID": 21,
        "TaskName": "Development of final design",
        "StartDate": "2022-01-30",
        "EndDate": "2022-02-07",
        "Duration": "7 days",
        "Progress": 100,
        "ParentId": 13
      },
      {
        "TaskID": 22,
        "TaskName": "Develop dimensions and design",
        "StartDate": "2022-01-30",
        "EndDate": "2022-02-01",
        "Duration": "2 days",
        "Progress": 100,
        "ParentId": 21,
        "Predecessor": "19,20"
      },
      {
        "TaskID": 23,
        "TaskName": "Develop designs to meet industry",
        "StartDate": "2022-02-02",
        "EndDate": "2022-02-03",
        "Duration": "2 days",
        "Progress": 100,
        "ParentId": 21,
        "Predecessor": "22"
      },
      {
        "TaskID": 24,
        "TaskName": "Include all the details",
        "StartDate": "2022-02-06",
        "EndDate": "2022-02-08",
        "Duration": "3 days",
        "Progress": 100,
        "ParentId": 21,
        "Predecessor": "23"
      },
      {
        "TaskID": 25,
        "TaskName": "Project closure",
        "StartDate": "2022-02-09",
        "EndDate": "2022-02-15",
        "Duration": "5 days",
        "Progress": 100,
        "Predecessor": "24"
      }
    ],
    "TaskDataCollection2023": [
      {
        "TaskID": 1,
        "TaskName": "Product concept",
        "StartDate": "2023-01-02",
        "EndDate": "2023-01-08",
        "Duration": "5 days",
        "Progress": 100
      },
      {
        "TaskID": 2,
        "TaskName": "Defining the product usage",
        "StartDate": "2023-01-02",
        "EndDate": "2023-01-08",
        "Duration": "3 days",
        "Progress": 100,
        "ParentId": 1
      },
      {
        "TaskID": 3,
        "TaskName": "Defining the target audience",
        "StartDate": "2023-01-02",
        "EndDate": "2023-01-04",
        "Duration": "3 days",
        "Progress": 100,
        "ParentId": 1
      },
      {
        "TaskID": 4,
        "TaskName": "Prepare product sketch and notes",
        "StartDate": "2023-01-05",
        "EndDate": "2023-01-08",
        "Duration": "2 days",
        "Progress": 100,
        "ParentId": 1,
        "Predecessor": "2"
      },
      {
        "TaskID": 5,
        "TaskName": "Concept approval",
        "StartDate": "2023-01-08",
        "EndDate": "2023-01-08",
        "Duration": "0 days",
        "Progress": 100,
        "ParentId": 1,
        "Predecessor": "3,4"
      },
      {
        "TaskID": 6,
        "TaskName": "Market research",
        "StartDate": "2023-01-09",
        "EndDate": "2023-01-18",
        "Duration": "4 days",
        "Progress": 100,
        "Predecessor": "2"
      },
      {
        "TaskID": 7,
        "TaskName": "Demand analysis",
        "StartDate": "2023-01-09",
        "EndDate": "2023-01-12",
        "Duration": "4 days",
        "Progress": 100,
        "ParentId": 6
      },
      {
        "TaskID": 8,
        "TaskName": "Customer strength",
        "StartDate": "2023-01-09",
        "EndDate": "2023-01-15",
        "Duration": "10 days",
        "Progress": 100,
        "ParentId": 7,
        "Predecessor": "5"
      },
      {
        "TaskID": 9,
        "TaskName": "Market opportunity analysis",
        "StartDate": "2023-01-09",
        "EndDate": "2023-01-12",
        "Duration": "4 days",
        "Progress": 100,
        "ParentId": 7,
        "Predecessor": "5"
      },
      {
        "TaskID": 10,
        "TaskName": "Competitor analysis",
        "StartDate": "2023-01-15",
        "EndDate": "2023-01-18",
        "Duration": "4 days",
        "Progress": 100,
        "ParentId": 6,
        "Predecessor": "7,8"
      },
      {
        "TaskID": 11,
        "TaskName": "Product strength analysis",
        "StartDate": "2023-01-15",
        "EndDate": "2023-01-18",
        "Duration": "4 days",
        "Progress": 100,
        "ParentId": 6,
        "Predecessor": "9"
      },
      {
        "TaskID": 12,
        "TaskName": "Research completed",
        "StartDate": "2023-01-18",
        "EndDate": "2023-01-18",
        "Duration": "0 days",
        "Progress": 100,
        "ParentId": 6,
        "Predecessor": "10"
      },
      {
        "TaskID": 13,
        "TaskName": "Product design and development",
        "StartDate": "2023-01-19",
        "EndDate": "2023-02-16",
        "Duration": "20 days",
        "Progress": 100,
        "Predecessor": "6"
      },
      {
        "TaskID": 14,
        "TaskName": "Functionality design",
        "StartDate": "2023-01-19",
        "EndDate": "2023-01-23",
        "Duration": "3 days",
        "Progress": 100,
        "ParentId": 13,
        "Predecessor": "12"
      },
      {
        "TaskID": 15,
        "TaskName": "Quality design",
        "StartDate": "2023-01-19",
        "EndDate": "2023-01-23",
        "Duration": "2 days",
        "Progress": 100,
        "ParentId": 13,
        "Predecessor": "12"
      },
      {
        "TaskID": 16,
        "TaskName": "Define reliability",
        "StartDate": "2023-01-24",
        "EndDate": "2023-01-25",
        "Duration": "2 days",
        "Progress": 100,
        "ParentId": 13,
        "Predecessor": "15"
      },
      {
        "TaskID": 17,
        "TaskName": "Identifying raw materials",
        "StartDate": "2023-01-24",
        "EndDate": "2023-01-25",
        "Duration": "2 days",
        "Progress": 100,
        "ParentId": 13,
        "Predecessor": "15"
      },
      {
        "TaskID": 18,
        "TaskName": "Define cost plan",
        "StartDate": "2023-01-26",
        "EndDate": "2023-01-29",
        "Duration": "2 days",
        "Progress": 100,
        "ParentId": 13,
        "Predecessor": "17"
      },
      {
        "TaskID": 19,
        "TaskName": "Manufacturing cost",
        "StartDate": "2023-01-26",
        "EndDate": "2023-01-29",
        "Duration": "2 days",
        "Progress": 100,
        "ParentId": 18,
        "Predecessor": "17"
      },
      {
        "TaskID": 20,
        "TaskName": "Selling cost",
        "StartDate": "2023-01-26",
        "EndDate": "2023-01-29",
        "Duration": "2 days",
        "Progress": 100,
        "ParentId": 18,
        "Predecessor": "17"
      },
      {
        "TaskID": 21,
        "TaskName": "Development of final design",
        "StartDate": "2023-01-30",
        "EndDate": "2023-02-07",
        "Duration": "7 days",
        "Progress": 100,
        "ParentId": 13
      },
      {
        "TaskID": 22,
        "TaskName": "Develop dimensions and design",
        "StartDate": "2023-01-30",
        "EndDate": "2023-02-01",
        "Duration": "5 days",
        "Progress": 100,
        "ParentId": 21,
        "Predecessor": "19,20"
      },
      {
        "TaskID": 23,
        "TaskName": "Develop designs to meet industry",
        "StartDate": "2023-02-02",
        "EndDate": "2023-02-03",
        "Duration": "2 days",
        "Progress": 100,
        "ParentId": 21,
        "Predecessor": "22"
      },
      {
        "TaskID": 24,
        "TaskName": "Include all the details",
        "StartDate": "2023-02-06",
        "EndDate": "2023-02-08",
        "Duration": "3 days",
        "Progress": 100,
        "ParentId": 21,
        "Predecessor": "23"
      },
      {
        "TaskID": 25,
        "TaskName": "Project closure",
        "StartDate": "2023-02-09",
        "EndDate": "2023-02-13",
        "Duration": "3 days",
        "Progress": 100,
        "Predecessor": "24"
      }
    ],
    "TaskDataCollection2024": [
      {
        "TaskID": 1,
        "TaskName": "Product concept",
        "StartDate": "2024-01-02",
        "EndDate": "2024-01-08",
        "Duration": "5 days",
        "Progress": 100
      },
      {
        "TaskID": 2,
        "TaskName": "Defining the product usage",
        "StartDate": "2024-01-02",
        "EndDate": "2024-01-08",
        "Duration": "2 days",
        "Progress": 100,
        "ParentId": 1
      },
      {
        "TaskID": 3,
        "TaskName": "Defining the target audience",
        "StartDate": "2024-01-02",
        "EndDate": "2024-01-04",
        "Duration": "3 days",
        "Progress": 100,
        "ParentId": 1
      },
      {
        "TaskID": 4,
        "TaskName": "Prepare product sketch and notes",
        "StartDate": "2024-01-05",
        "EndDate": "2024-01-08",
        "Duration": "5 days",
        "Progress": 100,
        "ParentId": 1,
        "Predecessor": "2"
      },
      {
        "TaskID": 5,
        "TaskName": "Concept approval",
        "StartDate": "2024-01-08",
        "EndDate": "2024-01-08",
        "Duration": "0 days",
        "Progress": 100,
        "ParentId": 1,
        "Predecessor": "3,4"
      },
      {
        "TaskID": 6,
        "TaskName": "Market research",
        "StartDate": "2024-01-09",
        "EndDate": "2024-01-18",
        "Duration": "4 days",
        "Progress": 100,
        "Predecessor": "2"
      },
      {
        "TaskID": 7,
        "TaskName": "Demand analysis",
        "StartDate": "2024-01-09",
        "EndDate": "2024-01-12",
        "Duration": "4 days",
        "Progress": 100,
        "ParentId": 6
      },
      {
        "TaskID": 8,
        "TaskName": "Customer strength",
        "StartDate": "2024-01-09",
        "EndDate": "2024-01-12",
        "Duration": "4 days",
        "Progress": 100,
        "ParentId": 7,
        "Predecessor": "5"
      },
      {
        "TaskID": 9,
        "TaskName": "Market opportunity analysis",
        "StartDate": "2024-01-09",
        "EndDate": "2024-01-12",
        "Duration": "4 days",
        "Progress": 100,
        "ParentId": 7,
        "Predecessor": "5"
      },
      {
        "TaskID": 10,
        "TaskName": "Competitor analysis",
        "StartDate": "2024-01-15",
        "EndDate": "2024-01-18",
        "Duration": "4 days",
        "Progress": 100,
        "ParentId": 6,
        "Predecessor": "7,8"
      },
      {
        "TaskID": 11,
        "TaskName": "Product strength analysis",
        "StartDate": "2024-01-15",
        "EndDate": "2024-01-18",
        "Duration": "4 days",
        "Progress": 100,
        "ParentId": 6,
        "Predecessor": "9"
      },
      {
        "TaskID": 12,
        "TaskName": "Research completed",
        "StartDate": "2024-01-18",
        "EndDate": "2024-01-18",
        "Duration": "0 days",
        "Progress": 100,
        "ParentId": 6,
        "Predecessor": "10"
      },
      {
        "TaskID": 13,
        "TaskName": "Product design and development",
        "StartDate": "2024-01-19",
        "EndDate": "2024-02-16",
        "Duration": "22 days",
        "Progress": 100,
        "Predecessor": "6"
      },
      {
        "TaskID": 14,
        "TaskName": "Functionality design",
        "StartDate": "2024-01-19",
        "EndDate": "2024-01-23",
        "Duration": "3 days",
        "Progress": 100,
        "ParentId": 13,
        "Predecessor": "12"
      },
      {
        "TaskID": 15,
        "TaskName": "Quality design",
        "StartDate": "2024-01-19",
        "EndDate": "2024-01-23",
        "Duration": "3 days",
        "Progress": 100,
        "ParentId": 13,
        "Predecessor": "12"
      },
      {
        "TaskID": 16,
        "TaskName": "Define reliability",
        "StartDate": "2024-01-24",
        "EndDate": "2024-01-25",
        "Duration": "2 days",
        "Progress": 100,
        "ParentId": 13,
        "Predecessor": "15"
      },
      {
        "TaskID": 17,
        "TaskName": "Identifying raw materials",
        "StartDate": "2024-01-24",
        "EndDate": "2024-01-25",
        "Duration": "2 days",
        "Progress": 100,
        "ParentId": 13,
        "Predecessor": "15"
      },
      {
        "TaskID": 18,
        "TaskName": "Define cost plan",
        "StartDate": "2024-01-26",
        "EndDate": "2024-01-29",
        "Duration": "2 days",
        "Progress": 100,
        "ParentId": 13,
        "Predecessor": "17"
      },
      {
        "TaskID": 19,
        "TaskName": "Manufacturing cost",
        "StartDate": "2024-01-26",
        "EndDate": "2024-01-29",
        "Duration": "2 days",
        "Progress": 100,
        "ParentId": 18,
        "Predecessor": "17"
      },
      {
        "TaskID": 20,
        "TaskName": "Selling cost",
        "StartDate": "2024-01-26",
        "EndDate": "2024-01-29",
        "Duration": "2 days",
        "Progress": 100,
        "ParentId": 18,
        "Predecessor": "17"
      },
      {
        "TaskID": 21,
        "TaskName": "Development of final design",
        "StartDate": "2024-01-30",
        "EndDate": "2024-02-07",
        "Duration": "7 days",
        "Progress": 100,
        "ParentId": 13
      },
      {
        "TaskID": 22,
        "TaskName": "Develop dimensions and design",
        "StartDate": "2024-01-30",
        "EndDate": "2024-02-01",
        "Duration": "2 days",
        "Progress": 100,
        "ParentId": 21,
        "Predecessor": "19,20"
      },
      {
        "TaskID": 23,
        "TaskName": "Develop designs to meet industry",
        "StartDate": "2024-02-02",
        "EndDate": "2024-02-03",
        "Duration": "2 days",
        "Progress": 100,
        "ParentId": 21,
        "Predecessor": "22"
      },
      {
        "TaskID": 24,
        "TaskName": "Include all the details",
        "StartDate": "2024-02-06",
        "EndDate": "2024-02-08",
        "Duration": "3 days",
        "Progress": 100,
        "ParentId": 21,
        "Predecessor": "23"
      },
      {
        "TaskID": 25,
        "TaskName": "Project closure",
        "StartDate": "2024-02-09",
        "EndDate": "2024-02-13",
        "Duration": "3 days",
        "Progress": 100,
        "Predecessor": "24"
      }
    ],
    "TaskDataCollection2025": [
      {
        "TaskID": 1,
        "TaskName": "Product concept",
        "StartDate": "2025-01-02",
        "EndDate": "2025-01-08",
        "Duration": "5 days",
        "Progress": 100
      },
      {
        "TaskID": 2,
        "TaskName": "Defining the product usage",
        "StartDate": "2025-01-02",
        "EndDate": "2025-01-08",
        "Duration": "5 days",
        "Progress": 100,
        "ParentId": 1
      },
      {
        "TaskID": 3,
        "TaskName": "Defining the target audience",
        "StartDate": "2025-01-02",
        "EndDate": "2025-01-04",
        "Duration": "3 days",
        "Progress": 100,
        "ParentId": 1
      },
      {
        "TaskID": 4,
        "TaskName": "Prepare product sketch and notes",
        "StartDate": "2025-01-05",
        "EndDate": "2025-01-08",
        "Duration": "2 days",
        "Progress": 100,
        "ParentId": 1,
        "Predecessor": "2"
      },
      {
        "TaskID": 5,
        "TaskName": "Concept approval",
        "StartDate": "2025-01-08",
        "EndDate": "2025-01-08",
        "Duration": "0 days",
        "Progress": 100,
        "ParentId": 1,
        "Predecessor": "3,4"
      },
      {
        "TaskID": 6,
        "TaskName": "Market research",
        "StartDate": "2025-01-09",
        "EndDate": "2025-01-18",
        "Duration": "6 days",
        "Progress": 100,
        "Predecessor": "2"
      },
      {
        "TaskID": 7,
        "TaskName": "Demand analysis",
        "StartDate": "2025-01-09",
        "EndDate": "2025-01-12",
        "Duration": "4 days",
        "Progress": 100,
        "ParentId": 6
      },
      {
        "TaskID": 8,
        "TaskName": "Customer strength",
        "StartDate": "2025-01-09",
        "EndDate": "2025-01-12",
        "Duration": "4 days",
        "Progress": 100,
        "ParentId": 7,
        "Predecessor": "5"
      },
      {
        "TaskID": 9,
        "TaskName": "Market opportunity analysis",
        "StartDate": "2025-01-09",
        "EndDate": "2025-01-12",
        "Duration": "8 days",
        "Progress": 100,
        "ParentId": 7,
        "Predecessor": "5"
      },
      {
        "TaskID": 10,
        "TaskName": "Competitor analysis",
        "StartDate": "2025-01-15",
        "EndDate": "2025-01-18",
        "Duration": "4 days",
        "Progress": 100,
        "ParentId": 6,
        "Predecessor": "7,8"
      },
      {
        "TaskID": 11,
        "TaskName": "Product strength analysis",
        "StartDate": "2025-01-15",
        "EndDate": "2025-01-18",
        "Duration": "4 days",
        "Progress": 100,
        "ParentId": 6,
        "Predecessor": "9"
      },
      {
        "TaskID": 12,
        "TaskName": "Research completed",
        "StartDate": "2025-01-18",
        "EndDate": "2025-01-18",
        "Duration": "0 days",
        "Progress": 100,
        "ParentId": 6,
        "Predecessor": "10"
      },
      {
        "TaskID": 13,
        "TaskName": "Product design and development",
        "StartDate": "2025-01-19",
        "EndDate": "2025-02-16",
        "Duration": "15 days",
        "Progress": 100,
        "Predecessor": "6"
      },
      {
        "TaskID": 14,
        "TaskName": "Functionality design",
        "StartDate": "2025-01-19",
        "EndDate": "2025-01-23",
        "Duration": "3 days",
        "Progress": 100,
        "ParentId": 13,
        "Predecessor": "12"
      },
      {
        "TaskID": 15,
        "TaskName": "Quality design",
        "StartDate": "2025-01-19",
        "EndDate": "2025-01-23",
        "Duration": "3 days",
        "Progress": 100,
        "ParentId": 13,
        "Predecessor": "12"
      },
      {
        "TaskID": 16,
        "TaskName": "Define reliability",
        "StartDate": "2025-01-24",
        "EndDate": "2025-01-25",
        "Duration": "2 days",
        "Progress": 100,
        "ParentId": 13,
        "Predecessor": "15"
      },
      {
        "TaskID": 17,
        "TaskName": "Identifying raw materials",
        "StartDate": "2025-01-24",
        "EndDate": "2025-01-25",
        "Duration": "2 days",
        "Progress": 100,
        "ParentId": 13,
        "Predecessor": "15"
      },
      {
        "TaskID": 18,
        "TaskName": "Define cost plan",
        "StartDate": "2025-01-26",
        "EndDate": "2025-01-29",
        "Duration": "2 days",
        "Progress": 100,
        "ParentId": 13,
        "Predecessor": "17"
      },
      {
        "TaskID": 19,
        "TaskName": "Manufacturing cost",
        "StartDate": "2025-01-26",
        "EndDate": "2025-01-29",
        "Duration": "2 days",
        "Progress": 100,
        "ParentId": 18,
        "Predecessor": "17"
      },
      {
        "TaskID": 20,
        "TaskName": "Selling cost",
        "StartDate": "2025-01-26",
        "EndDate": "2025-01-29",
        "Duration": "2 days",
        "Progress": 100,
        "ParentId": 18,
        "Predecessor": "17"
      },
      {
        "TaskID": 21,
        "TaskName": "Development of final design",
        "StartDate": "2025-01-30",
        "EndDate": "2025-02-07",
        "Duration": "7 days",
        "Progress": 100,
        "ParentId": 13
      },
      {
        "TaskID": 22,
        "TaskName": "Develop dimensions and design",
        "StartDate": "2025-01-30",
        "EndDate": "2025-02-01",
        "Duration": "2 days",
        "Progress": 100,
        "ParentId": 21,
        "Predecessor": "19,20"
      },
      {
        "TaskID": 23,
        "TaskName": "Develop designs to meet industry",
        "StartDate": "2025-02-02",
        "EndDate": "2025-02-03",
        "Duration": "3 days",
        "Progress": 100,
        "ParentId": 21,
        "Predecessor": "22"
      },
      {
        "TaskID": 24,
        "TaskName": "Include all the details",
        "StartDate": "2025-02-06",
        "EndDate": "2025-02-08",
        "Duration": "3 days",
        "Progress": 100,
        "ParentId": 21,
        "Predecessor": "23"
      },
      {
        "TaskID": 25,
        "TaskName": "Project closure",
        "StartDate": "2025-02-09",
        "EndDate": "2025-02-13",
        "Duration": "3 days",
        "Progress": 100,
        "Predecessor": "24"
      }
    ]
}

window.tasksCollectionData = [
    {
        TaskID: 1,
        TaskName: "Project initiation",
        StartDate: new Date('03/29/2024'),
        EndDate: new Date('04/02/2024'),
        resourceInfo: [3],
        Duration: 3,
    },
    {
        TaskID: 2,
        TaskName: "Identify site location",
        StartDate: new Date('03/29/2024'),
        EndDate: new Date('04/02/2024'),
        Duration: 3,
        resourceInfo: [1]
    },
    {
        TaskID: 3,
        TaskName: "Perform soil test",
        StartDate: new Date('03/29/2024'),
        EndDate: new Date('04/03/2024'),
        Duration: 4,
        resourceInfo: [1],
    },

    {
        TaskID: 5,
        TaskName: "Project estimation",
        StartDate: new Date('03/29/2024'),
        EndDate: new Date('04/02/2024'),
        resourceInfo: [3],
        Duration: 3,
    }
];
window.resourceCollectionData = [
    { resourceId: 1, resourceName: 'Martin Tamer', resourceGroup: 'Planning Team' },
        { resourceId: 2, resourceName: 'Rose Fuller', resourceGroup: 'Testing Team' },
        { resourceId: 3, resourceName: 'Margaret Buchanan', resourceGroup: 'Approval Team' },
        { resourceId: 4, resourceName: 'Fuller King', resourceGroup: 'Development Team' },
        { resourceId: 5, resourceName: 'Davolio Fuller', resourceGroup: 'Approval Team' },
 
];

window.analysisData = [
    {
        TaskID: 1,
        TaskName: 'Product Concept',
        StartDate: new Date('04/02/2019'),
        EndDate: new Date('04/21/2019'),
        subtasks: [
            { TaskID: 2, TaskName: 'Defining the product and its usage', BaselineStartDate: new Date('04/02/2019'), BaselineEndDate: new Date('04/06/2019'), StartDate: new Date('04/02/2019'), Duration: 3,Progress: 100 },
            { TaskID: 3, TaskName: 'Defining target audience', StartDate: new Date('04/02/2019'), Duration: 3,Predecessor: "2",Progress: 100,
        },
            { TaskID: 4, TaskName: 'Prepare product sketch and notes', StartDate: new Date('04/02/2019'), Duration: 3,Progress: 100 ,Predecessor: "3" },
        ]
    },
    { TaskID: 5, TaskName: 'Concept Approval', StartDate: new Date('04/02/2019'), Duration: 0,Predecessor: "4",Progress: 100, },
    {
        TaskID: 6,
        TaskName: 'Market Research',
        StartDate: new Date('04/02/2019'),
        EndDate: new Date('04/21/2019'),
        subtasks: [
            { TaskID: 7, TaskName: 'Competitor Analysis', StartDate: new Date('04/04/2019'), Duration: 4 ,Progress: 100,Predecessor: "5" },
            { TaskID: 8, TaskName: 'Product strength analysis', StartDate: new Date('04/04/2019'),Progress: 100, Duration: 4,Predecessor: "7"   },
            { TaskID: 9, TaskName: 'Research complete', StartDate: new Date('04/04/2019'),Progress: 100, Duration: 0,Predecessor: "8" }
        ]
    }
];

window.HistoricalTaskData = [
    {Id : 1, Name : "Requirement Analysis", StartDate : new Date(2026, 1, 10), EndDate : new Date(2026, 1, 15), Duration : "5", Progress : 100, ParentId : null},
    {Id : 2, Name : "UI/UX Design", StartDate : new Date(2026, 1, 15), EndDate: new Date(2026, 1, 17), Duration: "2", Progress : 0, ParentId : null},
    { Id : 3, Name :"Backend Development", StartDate : new Date(2026, 1, 20), EndDate : new Date(2026, 1, 23), Duration : "3", Progress : 50, ParentId : null },
    { Id : 4, Name :"Database Schema Design", StartDate : new Date(2026, 1, 18), EndDate : new Date(2026, 1, 24), Duration : "6", Progress : 0, ParentId : null },
    { Id : 5, Name :"Frontend Development", StartDate : new Date(2026, 1, 22), EndDate : new Date(2026, 1, 27), Duration : "5", Progress : 80, ParentId : null },
    { Id : 6, Name :"Testing Phase", StartDate : new Date(2026, 1, 25), EndDate : new Date(2026, 1, 30), Duration : "6", Progress : 20, ParentId : null },
    { Id : 7, Name :"Deployment Preparation", StartDate : new Date(2026, 1, 28), EndDate : new Date(2026, 2, 5), Duration : "9", Progress : 10, ParentId : null },
    { Id : 8, Name :"User Documentation", StartDate : new Date(2026, 2, 1), EndDate : new Date(2026, 2, 10), Duration : "10", Progress : 30, ParentId : null },
    { Id : 9, Name :"Security Audit", StartDate : new Date(2026, 2, 5), EndDate : new Date(2026, 2, 15), Duration : "11", Progress : 40, ParentId : null },
    { Id : 10, Name :"Performance Optimization", StartDate : new Date(2026, 2, 10), EndDate : new Date(2026, 2, 20), Duration : "11", Progress : 60, ParentId : null },
    { Id : 11, Name :"Beta Testing", StartDate : new Date(2026, 2, 15), EndDate : new Date(2026, 2, 25), Duration : "11", Progress : 70, ParentId : null },
    { Id : 12, Name :"Bug Fixing", StartDate : new Date(2026, 2, 20), EndDate : new Date(2026, 3, 5), Duration : "14", Progress : 80, ParentId : null },
    { Id : 13, Name :"Final Documentation", StartDate : new Date(2026, 3, 1), EndDate : new Date(2026, 3, 10), Duration : "10", Progress : 90, ParentId : null },
    { Id : 14, Name :"Product Launch", StartDate : new Date(2026, 3, 5), EndDate : new Date(2026, 3, 15), Duration : "11", Progress : 95, ParentId : null },
    { Id : 15, Name :"Post-launch Analysis", StartDate : new Date(2026, 3, 10), EndDate : new Date(2026, 3, 20), Duration : "11", Progress : 100, ParentId : null }
];

window.HistoricalDataCollection2021 = [
    {
        "Id": 1,
        "Name": "Requirement Analysis",
        "StartDate": "2021-01-10",
        "EndDate": "2021-01-20",
        "Duration": "11",
        "Progress": 100,
        "ParentId": null
      },
      {
        "Id": 2,
        "Name": "UI/UX Design",
        "StartDate": "2021-01-15",
        "EndDate": "2021-02-05",
        "Duration": "22",
        "Progress": 95,
        "ParentId": null
      },
      {
        "Id": 3,
        "Name": "Backend Development",
        "StartDate": "2021-01-20",
        "EndDate": "2021-02-10",
        "Duration": "22",
        "Progress": 85,
        "ParentId": null
      },
      {
        "Id": 4,
        "Name": "Database Schema Design",
        "StartDate": "2021-01-18",
        "EndDate": "2021-01-28",
        "Duration": "9",
        "Progress": 100,
        "ParentId": null
      },
      {
        "Id": 5,
        "Name": "Frontend Development",
        "StartDate": "2021-01-22",
        "EndDate": "2021-02-08",
        "Duration": "18",
        "Progress": 70,
        "ParentId": null
      },
      {
        "Id": 6,
        "Name": "Testing Phase",
        "StartDate": "2021-02-05",
        "EndDate": "2021-02-15",
        "Duration": "10",
        "Progress": 50,
        "ParentId": null
      },
      {
        "Id": 7,
        "Name": "Deployment Preparation",
        "StartDate": "2021-02-10",
        "EndDate": "2021-02-25",
        "Duration": "16",
        "Progress": 40,
        "ParentId": null
      },
      {
        "Id": 8,
        "Name": "User Documentation",
        "StartDate": "2021-02-15",
        "EndDate": "2021-03-05",
        "Duration": "18",
        "Progress": 60,
        "ParentId": null
      },
      {
        "Id": 9,
        "Name": "Security Audit",
        "StartDate": "2021-02-18",
        "EndDate": "2021-03-05",
        "Duration": "16",
        "Progress": 75,
        "ParentId": null
      },
      {
        "Id": 10,
        "Name": "Performance Optimization",
        "StartDate": "2021-02-25",
        "EndDate": "2021-03-15",
        "Duration": "18",
        "Progress": 80,
        "ParentId": null
      },
      {
        "Id": 11,
        "Name": "Beta Testing",
        "StartDate": "2021-03-01",
        "EndDate": "2021-03-15",
        "Duration": "15",
        "Progress": 65,
        "ParentId": null
      },
      {
        "Id": 12,
        "Name": "Bug Fixing",
        "StartDate": "2021-03-05",
        "EndDate": "2021-03-20",
        "Duration": "16",
        "Progress": 70,
        "ParentId": null
      },
      {
        "Id": 13,
        "Name": "Final Documentation",
        "StartDate": "2021-03-10",
        "EndDate": "2021-03-25",
        "Duration": "16",
        "Progress": 55,
        "ParentId": null
      },
      {
        "Id": 14,
        "Name": "Product Launch",
        "StartDate": "2021-03-15",
        "EndDate": "2021-03-31",
        "Duration": "17",
        "Progress": 90,
        "ParentId": null
      },
      {
        "Id": 15,
        "Name": "Post-launch Analysis",
        "StartDate": "2021-04-01",
        "EndDate": "2021-04-10",
        "Duration": "10",
        "Progress": 30,
        "ParentId": null
      }
]

window.HistoricalDataCollection2022 = [
    {
        "Id": 1,
        "Name": "Requirement Analysis",
        "StartDate": "2022-01-10",
        "EndDate": "2022-01-20",
        "Duration": "11",
        "Progress": 100,
        "ParentId": null
      },
      {
        "Id": 2,
        "Name": "UI/UX Design",
        "StartDate": "2022-01-15",
        "EndDate": "2022-02-05",
        "Duration": "22",
        "Progress": 95,
        "ParentId": null
      },
      {
        "Id": 3,
        "Name": "Backend Development",
        "StartDate": "2022-01-20",
        "EndDate": "2022-02-10",
        "Duration": "22",
        "Progress": 85,
        "ParentId": null
      },
      {
        "Id": 4,
        "Name": "Database Schema Design",
        "StartDate": "2022-01-18",
        "EndDate": "2022-01-28",
        "Duration": "9",
        "Progress": 100,
        "ParentId": null
      },
      {
        "Id": 5,
        "Name": "Frontend Development",
        "StartDate": "2022-01-22",
        "EndDate": "2022-02-05",
        "Duration": "15",
        "Progress": 70,
        "ParentId": null
      },
      {
        "Id": 6,
        "Name": "Testing Phase",
        "StartDate": "2022-02-05",
        "EndDate": "2022-02-15",
        "Duration": "10",
        "Progress": 50,
        "ParentId": null
      },
      {
        "Id": 7,
        "Name": "Deployment Preparation",
        "StartDate": "2022-02-10",
        "EndDate": "2022-02-25",
        "Duration": "16",
        "Progress": 40,
        "ParentId": null
      },
      {
        "Id": 8,
        "Name": "User Documentation",
        "StartDate": "2022-02-15",
        "EndDate": "2022-03-05",
        "Duration": "18",
        "Progress": 60,
        "ParentId": null
      },
      {
        "Id": 9,
        "Name": "Security Audit",
        "StartDate": "2022-02-18",
        "EndDate": "2022-03-05",
        "Duration": "16",
        "Progress": 75,
        "ParentId": null
      },
      {
        "Id": 10,
        "Name": "Performance Optimization",
        "StartDate": "2022-02-25",
        "EndDate": "2022-03-15",
        "Duration": "18",
        "Progress": 80,
        "ParentId": null
      },
      {
        "Id": 11,
        "Name": "Beta Testing",
        "StartDate": "2022-03-01",
        "EndDate": "2022-03-15",
        "Duration": "15",
        "Progress": 65,
        "ParentId": null
      },
      {
        "Id": 12,
        "Name": "Bug Fixing",
        "StartDate": "2022-03-05",
        "EndDate": "2022-03-20",
        "Duration": "16",
        "Progress": 70,
        "ParentId": null
      },
      {
        "Id": 13,
        "Name": "Final Documentation",
        "StartDate": "2022-03-10",
        "EndDate": "2022-03-25",
        "Duration": "16",
        "Progress": 55,
        "ParentId": null
      },
      {
        "Id": 14,
        "Name": "Product Launch",
        "StartDate": "2022-03-15",
        "EndDate": "2022-03-31",
        "Duration": "17",
        "Progress": 90,
        "ParentId": null
      },
      {
        "Id": 15,
        "Name": "Post-launch Analysis",
        "StartDate": "2022-04-01",
        "EndDate": "2022-04-10",
        "Duration": "10",
        "Progress": 30,
        "ParentId": null
      }
]

window.HistoricalDataCollection2023 = [
    {
        "Id": 1,
        "Name": "Requirement Analysis",
        "StartDate": "2023-01-10",
        "EndDate": "2023-01-20",
        "Duration": "11",
        "Progress": 100,
        "ParentId": null
      },
      {
        "Id": 2,
        "Name": "UI/UX Design",
        "StartDate": "2023-01-15",
        "EndDate": "2023-02-05",
        "Duration": "22",
        "Progress": 95,
        "ParentId": null
      },
      {
        "Id": 3,
        "Name": "Backend Development",
        "StartDate": "2023-01-10",
        "EndDate": "2023-02-20",
        "Duration": "22",
        "Progress": 85,
        "ParentId": null
      },
      {
        "Id": 4,
        "Name": "Database Schema Design",
        "StartDate": "2023-01-18",
        "EndDate": "2023-01-28",
        "Duration": "9",
        "Progress": 100,
        "ParentId": null
      },
      {
        "Id": 5,
        "Name": "Frontend Development",
        "StartDate": "2023-01-22",
        "EndDate": "2023-02-05",
        "Duration": "15",
        "Progress": 70,
        "ParentId": null
      },
      {
        "Id": 6,
        "Name": "Testing Phase",
        "StartDate": "2023-02-05",
        "EndDate": "2023-02-15",
        "Duration": "10",
        "Progress": 50,
        "ParentId": null
      },
      {
        "Id": 7,
        "Name": "Deployment Preparation",
        "StartDate": "2023-02-10",
        "EndDate": "2023-02-25",
        "Duration": "16",
        "Progress": 40,
        "ParentId": null
      },
      {
        "Id": 8,
        "Name": "User Documentation",
        "StartDate": "2023-02-15",
        "EndDate": "2023-03-05",
        "Duration": "18",
        "Progress": 60,
        "ParentId": null
      },
      {
        "Id": 9,
        "Name": "Security Audit",
        "StartDate": "2023-02-18",
        "EndDate": "2023-03-05",
        "Duration": "16",
        "Progress": 75,
        "ParentId": null
      },
      {
        "Id": 10,
        "Name": "Performance Optimization",
        "StartDate": "2023-02-25",
        "EndDate": "2023-03-15",
        "Duration": "18",
        "Progress": 80,
        "ParentId": null
      },
      {
        "Id": 11,
        "Name": "Beta Testing",
        "StartDate": "2023-03-01",
        "EndDate": "2023-03-15",
        "Duration": "15",
        "Progress": 65,
        "ParentId": null
      },
      {
        "Id": 12,
        "Name": "Bug Fixing",
        "StartDate": "2023-03-05",
        "EndDate": "2023-03-20",
        "Duration": "16",
        "Progress": 70,
        "ParentId": null
      },
      {
        "Id": 13,
        "Name": "Final Documentation",
        "StartDate": "2023-03-10",
        "EndDate": "2023-03-25",
        "Duration": "16",
        "Progress": 55,
        "ParentId": null
      },
      {
        "Id": 14,
        "Name": "Product Launch",
        "StartDate": "2023-03-15",
        "EndDate": "2023-03-31",
        "Duration": "17",
        "Progress": 90,
        "ParentId": null
      },
      {
        "Id": 15,
        "Name": "Post-launch Analysis",
        "StartDate": "2023-04-01",
        "EndDate": "2023-04-10",
        "Duration": "10",
        "Progress": 30,
        "ParentId": null
      }
]

window.HistoricalDataCollection2024 = [
    {
        "Id": 1,
        "Name": "Requirement Analysis",
        "StartDate": "2024-01-10",
        "EndDate": "2024-01-20",
        "Duration": "11",
        "Progress": 100,
        "ParentId": null
      },
      {
        "Id": 2,
        "Name": "UI/UX Design",
        "StartDate": "2024-01-15",
        "EndDate": "2024-02-05",
        "Duration": "22",
        "Progress": 95,
        "ParentId": null
      },
      {
        "Id": 3,
        "Name": "Backend Development",
        "StartDate": "2024-01-20",
        "EndDate": "2024-02-10",
        "Duration": "22",
        "Progress": 85,
        "ParentId": null
      },
      {
        "Id": 4,
        "Name": "Database Schema Design",
        "StartDate": "2024-01-18",
        "EndDate": "2024-01-28",
        "Duration": "9",
        "Progress": 100,
        "ParentId": null
      },
      {
        "Id": 5,
        "Name": "Frontend Development",
        "StartDate": "2024-01-22",
        "EndDate": "2024-02-05",
        "Duration": "15",
        "Progress": 70,
        "ParentId": null
      },
      {
        "Id": 6,
        "Name": "Testing Phase",
        "StartDate": "2024-02-05",
        "EndDate": "2024-02-15",
        "Duration": "10",
        "Progress": 50,
        "ParentId": null
      },
      {
        "Id": 7,
        "Name": "Deployment Preparation",
        "StartDate": "2024-02-10",
        "EndDate": "2024-02-25",
        "Duration": "16",
        "Progress": 40,
        "ParentId": null
      },
      {
        "Id": 8,
        "Name": "User Documentation",
        "StartDate": "2024-02-15",
        "EndDate": "2024-03-05",
        "Duration": "18",
        "Progress": 60,
        "ParentId": null
      },
      {
        "Id": 9,
        "Name": "Security Audit",
        "StartDate": "2024-02-18",
        "EndDate": "2024-03-05",
        "Duration": "16",
        "Progress": 75,
        "ParentId": null
      },
      {
        "Id": 10,
        "Name": "Performance Optimization",
        "StartDate": "2024-02-25",
        "EndDate": "2024-03-15",
        "Duration": "18",
        "Progress": 80,
        "ParentId": null
      },
      {
        "Id": 11,
        "Name": "Beta Testing",
        "StartDate": "2024-03-01",
        "EndDate": "2024-03-15",
        "Duration": "15",
        "Progress": 65,
        "ParentId": null
      },
      {
        "Id": 12,
        "Name": "Bug Fixing",
        "StartDate": "2024-03-05",
        "EndDate": "2024-03-20",
        "Duration": "16",
        "Progress": 70,
        "ParentId": null
      },
      {
        "Id": 13,
        "Name": "Final Documentation",
        "StartDate": "2024-03-10",
        "EndDate": "2024-03-25",
        "Duration": "16",
        "Progress": 55,
        "ParentId": null
      },
      {
        "Id": 14,
        "Name": "Product Launch",
        "StartDate": "2024-03-15",
        "EndDate": "2024-03-31",
        "Duration": "17",
        "Progress": 90,
        "ParentId": null
      },
      {
        "Id": 15,
        "Name": "Post-launch Analysis",
        "StartDate": "2024-04-01",
        "EndDate": "2024-04-10",
        "Duration": "10",
        "Progress": 30,
        "ParentId": null
      }
]

window.HistoricalDataCollection2025 = [
    {
        "Id": 1,
        "Name": "Requirement Analysis",
        "StartDate": "2025-01-05",
        "EndDate": "2025-01-15",
        "Duration": "11",
        "Progress": 100,
        "ParentId": null
      },
      {
        "Id": 2,
        "Name": "UI/UX Design",
        "StartDate": "2025-01-15",
        "EndDate": "2025-02-05",
        "Duration": "22",
        "Progress": 95,
        "ParentId": null
      },
      {
        "Id": 3,
        "Name": "Backend Development",
        "StartDate": "2025-01-20",
        "EndDate": "2025-02-10",
        "Duration": "22",
        "Progress": 85,
        "ParentId": null
      },
      {
        "Id": 4,
        "Name": "Database Schema Design",
        "StartDate": "2025-01-18",
        "EndDate": "2025-01-28",
        "Duration": "9",
        "Progress": 100,
        "ParentId": null
      },
      {
        "Id": 5,
        "Name": "Frontend Development",
        "StartDate": "2025-01-22",
        "EndDate": "2025-02-05",
        "Duration": "15",
        "Progress": 70,
        "ParentId": null
      },
      {
        "Id": 6,
        "Name": "Testing Phase",
        "StartDate": "2025-02-05",
        "EndDate": "2025-02-15",
        "Duration": "10",
        "Progress": 50,
        "ParentId": null
      },
      {
        "Id": 7,
        "Name": "Deployment Preparation",
        "StartDate": "2025-02-10",
        "EndDate": "2025-02-25",
        "Duration": "16",
        "Progress": 40,
        "ParentId": null
      },
      {
        "Id": 8,
        "Name": "User Documentation",
        "StartDate": "2025-02-15",
        "EndDate": "2025-03-05",
        "Duration": "18",
        "Progress": 60,
        "ParentId": null
      },
      {
        "Id": 9,
        "Name": "Security Audit",
        "StartDate": "2025-02-18",
        "EndDate": "2025-03-05",
        "Duration": "16",
        "Progress": 75,
        "ParentId": null
      },
      {
        "Id": 10,
        "Name": "Performance Optimization",
        "StartDate": "2025-02-25",
        "EndDate": "2025-03-15",
        "Duration": "18",
        "Progress": 80,
        "ParentId": null
      },
      {
        "Id": 11,
        "Name": "Beta Testing",
        "StartDate": "2025-03-01",
        "EndDate": "2025-03-15",
        "Duration": "15",
        "Progress": 65,
        "ParentId": null
      },
      {
        "Id": 12,
        "Name": "Bug Fixing",
        "StartDate": "2025-03-05",
        "EndDate": "2025-03-20",
        "Duration": "16",
        "Progress": 70,
        "ParentId": null
      },
      {
        "Id": 13,
        "Name": "Final Documentation",
        "StartDate": "2025-03-10",
        "EndDate": "2025-03-25",
        "Duration": "16",
        "Progress": 55,
        "ParentId": null
      },
      {
        "Id": 14,
        "Name": "Product Launch",
        "StartDate": "2025-03-15",
        "EndDate": "2025-03-31",
        "Duration": "17",
        "Progress": 90,
        "ParentId": null
      },
      {
        "Id": 15,
        "Name": "Post-launch Analysis",
        "StartDate": "2025-04-01",
        "EndDate": "2025-04-10",
        "Duration": "10",
        "Progress": 30,
        "ParentId": null
      }
]
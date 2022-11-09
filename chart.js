<canvas id = "myChart" width = "400" height = "400"></canvas>


let data = [ 660,  579,  498,  772,  797];//the actual statistic numbers
let labels = [ 2017,2018,2019,2020,2021 ];//the input of years at the bottom of graph
let title = 'Gun Violence in Chicago';//title when you click on the graph

let options = {
  
  
  type: 'bar',//Type of graph that will be displayed. ex: if you chose line, it would become line graph.
  
  data: {
    labels: labels,//function that creates the label interactivity on the graph
    datasets: [{
      
      // a few basic settings for the bars
      backgroundColor: 'rgb(0,50,255)',
      borderColor:     'rgb(0,20,255)',
      borderWidth:     4,
      
      // thickness of the bar (0–1)
      barPercentage: 1.0,
      
      data: data,
      label: 'City Wide Homocide Complaints'//Top title for graph
    }]
  },
  options: {
    title: {
      display: true,
      text: title
    },
    legend: {
      display: false
    }
  }
}




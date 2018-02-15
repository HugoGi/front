var minsec = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60]
var hour = [1,2,3];
var time = minsec
function changeTime() {
  var time = document.getElementById("time");
  var val = time.options[time.selectedIndex].value;
  if (val == "seconde" || val == "min"){
    time = minsec;
  }
  if (val == "hour"){
    time = hour;
  }
}

var ctx = document.getElementById("Chart-min").getContext('2d');
var time = changeTime()
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: minsec,
        datasets: [{
            label: 'max',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)'
            ],
            borderColor: [
                'rgba(255,0,247,1)'
            ],
            borderWidth: 1

        },{
          label: 'min',
          data: [59, 2, 33, 25, 42, 13],
          backgroundColor: [
              'rgba(38, 221, 23, 0.2)'
          ],
          borderColor: [
              'rgba(12,82,6,1)'
          ],
          borderWidth: 1
        },{
          label: 'mediane',
          data: [69, 42, 23, 75, 2, 23],
          backgroundColor: [
              'rgba(4, 158, 252, 0.2)'
          ],
          borderColor: [
              'rgba(0,40,97,1)'
          ],
          borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});

document.addEventListener("DOMContentLoaded", function(event) {
  var app = new Vue ({
    el: '#app',
    data: {
      tasks: ['Get groceries', 
              'Car wash', 
              'Dry cleaning'
              ],
      newTask: ''
    },
    methods: {
      addTask: function() {
        if (this.newTask !== '') {
          this.tasks.push(this.newTask);
          this.newTask='';
          }
        },
      completeTask: function(inputTask) {
        var index = this.tasks.indexOf(inputTask);
        this.tasks.splice(index, 1);
      
      }
    }
  });
});
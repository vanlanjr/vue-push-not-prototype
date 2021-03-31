var app = new Vue({
  el: '#app',
  data: {
    message: ''
  }
})

var app2 = new Vue({
  el: '#app-2',
  data: {
    update: '',
    notification: undefined
  },
  methods: {
    sendNotification: function () {
      this.notification = new Notification(app.message);
      this.update = 'Notification Sent!';
    }
  }
})

var app3 = new Vue({
  el: '#app-3',
  data: {
    message: ''
  },
  methods: {
    checkNotificationPromise: function() {
      return Notification.requestPermission()
    },
    // function to actually ask the permissions
    askNotificationPermission: function () {
      // Let's check if the browser supports notifications
      if (!('Notification' in window)) {
        console.log("This browser does not support notifications.");
      } else {
        this.checkNotificationPromise().then().catch()
      }
    }
  }
})

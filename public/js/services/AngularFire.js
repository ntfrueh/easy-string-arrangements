function firebaseDataService() {
    var root = firebase.database().ref();
  
    var service = {
       root: root,
       requests: root.child('requests')
    };
  
    return service;
 }
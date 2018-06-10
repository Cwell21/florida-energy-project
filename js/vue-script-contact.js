//WEEK 8 Homework.  VUE script file for FESC projects
var universities = [
  {
    name: "University of Florida",
    short: "uf",
    web: "uf",
    key: 0
  },
  {
    name: "Florida State University",
    short: "fsu",
    web: "fsu",
    key: 1
  },
  {
    name: "University of Central Florida",
    short: "ucf",
    web: "ucf",
    key: 2
  },
  {
    name: "University of South Florida",
    short: "usf",
    web: "usf",
    key: 3
  },
  {
    name: "Florida A&M University",
    short: "fam",
    web: "fam",
    key: 4
  },
  {
    name: "Florida Gulf Coast University",
    short: "fgcu",
    web: "fgcu",
    key: 5
  },
  {
    name: "Florida International University",
    short: "fiu",
    web: "fiu",
    key: 6
  },
  {
    name: "New College of Florida",
    short: "ncf",
    web: "ncf",
    key: 7
  },
  {
    name: "University of North Florida",
    short: "unf",
    web: "unf",
    key: 8,
  },
  {
    name: "University of West Florida",
    short: "uwf",
    web: "uwf",
    key: 9
  },
  {
    name: "University of West Florida",
    short: "fpu",
    web: "floridapoly",
    key: 10
  },
]

var fescContact = [
  {
    name: "Dr. David Norton",
    title: "Interim Director",
    email: "exemail@ufl.edu",
    phone: "555-555-5555",
    image: "images/people/Norton-225x225.jpg",
    id: "norton"
  },
  {
    name: "Ms Canan Balaban",
    title: "Associate Director",
    email: "exemail@ufl.edu",
    phone: "555-555-5555",
    image: "images/people/Balaban-225x225.jpg",
    id: "balaban"
  }
]

//APP to recreate university ribbon above footer.  Work on if time permits
// var App = new Vue({
//   el: "#univApp",
//   data: {
//     univ: universities
//   },
//   created: function(){
//       console.log("dispUniv Called")
//
//     },
// })

var contactApp = new Vue({
  el: "#contactApp",
  data: {
    contacts: fescContact
  }
})

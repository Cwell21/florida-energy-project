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

var siteData = [
  {
    header: "Expertise",
    para: "The consortium has considerable energy-related expertise and competitively funded research. The Consortium’s research focuses on those energy areas most relevant to Florida. Specifically, the FESC research agenda addresses energy generation from our two most abundant renewable resources (biomass and solar), carbon-free electric power generation (nuclear power, carbon sequestration), tapping the energy available from the ocean along our long and populated coastline, reducing consumption through energy conservation, and defining more efficient load management and energy storage systems.",
    page: "#"
  },
  {
    header: "Funded Projects",
    para: "The Florida Energy System Consortium (FESC) performs scholarly research and analysis of energy systems that contributes to a sustainable energy economy for Florida. In formulating a research plan for FESC, it became obvious that while most current university research was focused on specific energy components, a research gap existed from a systems perspective. It was believed that combining expertise at the State universities would position university researchers to address energy systems in a manner not possible at a single university. Building on this observation, our stated vision is to be a world leader in energy research enabled by a systems approach.",
    page: "projects.html"
  },
  {
    header: "Contacts",
    para: "FESC’s leadership team and organizational structure assure that truly leading edge research and development of critical importance to the Florida and national economies are developed, world-class students in multiple disciplines of energy are trained, and industry reaps the full benefits of the Consortium’s activities. The Leadership Team of FESC is comprised of highly experienced, highly successful innovators from the various energy related research fields, education, outreach, industrial collaboration, technology commercialization, and economic development. The FESC Director, Dr. Jennifer Curtis, is accountable for all mission activities of the Consortium and is assisted in his efforts by a Steering Committee, and Associate Directors in Industrial Collaboration & Commercialization, Education & Outreach, and Program Development.",
    page: "contact.html"
  }
]

var App = new Vue({
  el: "#univApp",
  data: {
    univ: universities
  },
  created: function(){
      console.log("dispUniv Called")

    },
})

var modApp = new Vue({
  el: "#modApp",
  data: {
    modData: siteData
  }
})

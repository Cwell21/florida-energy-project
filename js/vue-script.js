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

var projData = [
  {
    header: "Solar Systems Testing Facility",
    desc: "Description: Over the past 5 years, the Florida Solar Energy Center (FSEC) has received a significant increase in demand for solar thermal and PV testing and certification. This occurrence has resulted in requiring the Center to correspondingly amplify its capabilities to respond to the increased demand. Thus, the objective of this task was to construct a solar thermal and PV systems testing facility. This facility was built by adding walls, windows, doors and air conditioning to an existing roof only facility at the FSEC site. This new facility provides laboratory space for testing of solar water heating components and systems and PV modules and inverters. At this time, the facility is completed and this is the final report for the project.",
    budget: 600609,
    univs: "UCF/FSEC",
    projComplete: true,
    projLead: "James Roland, David Block"
  },
  {
    header: "Development of Novel Water Splitting Catalysts for the Production of Renewable Hydrogen",
    desc: "Description: This project focuses on the development of iron-based catalysts for the thermochemical splitting of water into hydrogen and oxygen. The thermochemical process of splitting water is particularly well-suited for the utilization of solar energy to provide the heat for the reaction and is a way to produce a renewable hydrogen fuel. As hydrogen is difficult to transport and store, producing hydrogen on site for power plants using proton exchange membrane (PEM) fuel cells or internal combustion engines to generate electricity or for the production of chemicals, such as liquid hydrocarbon fuels, is a very attractive approach.",
    budget: 100000,
    univs: "UF",
    projComplete: true,
    projLead: "Helena Hagelin-Weaver"
  },
  {
    header: "Clean Drinking Water",
    desc: "Description: Water and energy scarcity poses a future threat to human activity and societal development around the world. The state of Florida is vulnerable to fresh water shortages. Florida ground water is contaminated in many locations from leaky underground tanks, agricultural pesticides, and other chemicals. Although it is possible to desalinate sea water, conventional systems are energy intensive. Solar energy utilization for desalination systems is being investigated to provide adequate fresh water for the state’s needs. Solar diffusion driven desalination (DDD) system has been developed for both bulk water desalination and small community needs/disaster response. The research objective is to examine the best operating condition for the solar diffusion driven desalination (DDD) process using a computer models developed for the transient evaporation and condensation processes.",
    budget: 252000,
    univs: "UF",
    projComplete: false,
    ProjLead: "James Klausner"
  }
]

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

var modApp = new Vue({
  el: "#modApp",
  data: {
    modData: siteData
  }
})

var projApp = new Vue({
  el: "#projApp",
  data: {
    projects: projData
  }
})

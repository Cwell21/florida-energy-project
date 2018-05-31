//WEEK 8 Homework.  VUE script file for FESC projects
var projData = [
  {
    projTitle: "Solar Systems Testing Facility",
    desc: "Description: Over the past 5 years, the Florida Solar Energy Center (FSEC) has received a significant increase in demand for solar thermal and PV testing and certification. This occurrence has resulted in requiring the Center to correspondingly amplify its capabilities to respond to the increased demand. Thus, the objective of this task was to construct a solar thermal and PV systems testing facility. This facility was built by adding walls, windows, doors and air conditioning to an existing roof only facility at the FSEC site. This new facility provides laboratory space for testing of solar water heating components and systems and PV modules and inverters. At this time, the facility is completed and this is the final report for the project.",
    budget: 600609,
    univs: "UCF/FSEC",
    projComplete: true,
    projLead: "James Roland, David Block"
  },
  {
    projTitle: "Development of Novel Water Splitting Catalysts for the Production of Renewable Hydrogen",
    desc: "Description: This project focuses on the development of iron-based catalysts for the thermochemical splitting of water into hydrogen and oxygen. The thermochemical process of splitting water is particularly well-suited for the utilization of solar energy to provide the heat for the reaction and is a way to produce a renewable hydrogen fuel. As hydrogen is difficult to transport and store, producing hydrogen on site for power plants using proton exchange membrane (PEM) fuel cells or internal combustion engines to generate electricity or for the production of chemicals, such as liquid hydrocarbon fuels, is a very attractive approach.",
    budget: 100000,
    univs: "UF",
    projComplete: true,
    projLead: "Helena Hagelin-Weaver"
  },
  {
    projTitle: "Clean Drinking Water",
    desc: "Description: Water and energy scarcity poses a future threat to human activity and societal development around the world. The state of Florida is vulnerable to fresh water shortages. Florida ground water is contaminated in many locations from leaky underground tanks, agricultural pesticides, and other chemicals. Although it is possible to desalinate sea water, conventional systems are energy intensive. Solar energy utilization for desalination systems is being investigated to provide adequate fresh water for the state’s needs. Solar diffusion driven desalination (DDD) system has been developed for both bulk water desalination and small community needs/disaster response. The research objective is to examine the best operating condition for the solar diffusion driven desalination (DDD) process using a computer models developed for the transient evaporation and condensation processes.",
    budget: 252000,
    univs: "UF",
    projComplete: false,
    ProjLead: "James Klausner"
  }
]

var projApp = new Vue({
  el: "#projApp",
  data: {
    projects: projData
  }
})

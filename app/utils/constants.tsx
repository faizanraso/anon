export const schools = [
  "Carleton University",
  "Centennial College",
  "Concordia University",
  "Conestoga College",
  "Dalhousie University",
  "Durham College",
  "Fanshawe College",
  "George Brown College",
  "Humber College",
  "McGill University",
  "McMaster University",
  "Mohawk College",
  "Queen's University",
  "Ryerson University",
  "Seneca College",
  "Sheridan College",
  "Simon Fraser University",
  "University of Alberta",
  "University of British Columbia",
  "University of Calgary",
  "University of Guelph",
  "University of Manitoba",
  "University of Montreal",
  "University of Ottawa",
  "University of Saskatchewan",
  "University of Toronto",
  "University of Victoria",
  "University of Waterloo",
  "Western University",
  "Wilfrid Laurier University",
  "York University",
  "Other",
];

export const programs = [
  "Arts, Humanities and Social Sciences",
  "Business and Management",
  "Engineering",
  "Health and Medicine",
  "Education",
  "Computer Science",
  "Law and Legal Studies",
  "Social Work",
  "Architecture",
  "Agriculture and Environmental Sciences",
  "Communications and Media",
  "Language and Linguistics",
  "Hospitality and Tourism",
  "Psychology",
  "Mathematics and Statistics",
  "Other",
];

export const schoolFilters = schools.map((school) => ({
  name: school,
  filterId: school.toLowerCase().replace(/[^a-z0-9]/g, ""),
}));

export const programFilters = programs.map((program) => ({
  name: program,
  filterId: program.toLowerCase().replace(/[^a-z0-9]/g, ""),
}));

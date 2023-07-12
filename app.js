// 1. create a variable

const vizContainer = document.getElementById("vizContainer");

// 2 create a variable to store the dashboard options

const options = {
  device: "desktop",
  height: "800px",
  width: "1100px",
};

// 3. Create a variable to store the URL

const url =
  "https://public.tableau.com/views/EmbeddingWorkbookProfitsAcrossME-Asia/OfficeSupplyProfitsacrossMEandAsia";

// 4. Defining the function

function initViz() {
  const viz = new tableau.Viz(vizContainer, url, options);
}

// 6. calling function to load the dashboard

initViz();

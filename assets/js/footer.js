function showResult(selectedOption) {
    var result = document.getElementById('result');
    if (selectedOption === 'ds') {
      result.innerHTML = `
      <div class="">
          <p>Train ML models in Vantage</p>
          <p>There are situations when you want to quickly validate a machine learning model idea. You have a model type in mind. You don’t want to operationalize with an ML pipeline just yet. You just want to test out if the relationship you had in mind exists. Also, sometimes even your production deployment doesn’t require constant relearning with MLops. In such cases, you can use Vantage Analytics Library (VAL) and multiple ML model types it supports.</p>		
      </div>
      <div class="gs-button">
          <a href="https://quickstarts.teradata.com/ds.html" class="NoDec" target="_blank">
              <button class="bt">Get started</button>
          </a>
      </div>`;
    } else if (selectedOption === 'de') {
      result.innerHTML = `
      <div class="">
          <p>dbt with Teradata Vantage</p>
          <p>This tutorial demonstrates how to use dbt (Data Build Tool) with Teradata Vantage. It’s based on the original dbt Jaffle Shop tutorial. A couple of models have been adjusted to the SQL dialect supported by Vantage.</p>
      </div>
      <div class="gs-button">
      <a href="https://quickstarts.teradata.com/dbt.html" target="_blank" class="NoDec">
          <button class="bt">Get started</button>
      </a>
      </div>`;
    } else if (selectedOption === 'developer') {
      result.innerHTML = `
      <div class="">
          <p>Connect to Vantage using JDBC</p>
          <p>This how-to demonstrates how to connect to Teradata Vantage using JDBC using a sample Java application: https://github.com/Teradata/jdbc-sample-app.</p>
      </div>
      <div class="gs-button">
        <a href="https://quickstarts.teradata.com/jdbc.html" class="NoDec" target="_blank">
          <button class="bt">Get started</button>
        </a>
      </div>`;
    } else if (selectedOption === 'da') {
      result.innerHTML = `
      <div class="">
          <p>Run large bulkloads efficiently with Teradata Parallel Transporter (TPT)</p>
          <p>We often have a need to move large volumes of data into Vantage. Teradata offers Teradata Parallel Transporter (TPT) utility that can efficiently load large amounts of data into Teradata Vantage. This how-to demonstrates how to use TPT. In this scenario, we will load over 300k records, over 40MB of data, in a couple of seconds.</p>
      </div>
      <div class="gs-button">
        <a href="https://quickstarts.teradata.com/tools-and-utilities/run-bulkloads-efficiently-with-teradata-parallel-transporter.html" class="NoDec" target="_blank">
          <button class="bt">Get started</button>
        </a>
      </div>`;
    }else if (selectedOption === 'it') {
      result.innerHTML = `
      <div class="">
          <p>Query data stored in object storage</p>
          <p>Native Object Storage (NOS) is a Vantage feature that allows you to query data stored in files in object storage such as AWS S3, Google GCS, Azure Blob or on-prem implementations. It’s useful in scenarios where you want to explore data without building a data pipeline to bring it into Vantage.</p>
      </div>
      <div class="gs-button">
        <a href="https://quickstarts.teradata.com/nos.html" class="NoDec" target="_blank">
          <button class="bt">Get started</button>
        </a>  
      </div>`;
    }
  }
/**/
function community() {

  var blackoutElement = document.querySelector('.page-blackout');

  document.getElementById("myCommunityDropdown").classList.toggle("show");
  document.getElementById("myDocsDropdown").classList.remove("show");
  if(document.getElementById("myCommunityDropdown").classList.contains("dropdown-content") && 
      document.getElementById("myCommunityDropdown").classList.contains("show")){
    blackoutElement.classList.add('active');
  }else{
    blackoutElement.classList.remove('active');
  }
}

function docs() {
  var blackoutElement = document.querySelector('.page-blackout');   

  document.getElementById("myDocsDropdown").classList.toggle("show");
  document.getElementById("myCommunityDropdown").classList.remove("show"); 
  if(document.getElementById("myDocsDropdown").classList.contains("dropdown-content") && 
      document.getElementById("myDocsDropdown").classList.contains("show")){
    blackoutElement.classList.add('active');
  }else{
    blackoutElement.classList.remove('active');
  }
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
if (!event.target.matches('.dropbtn')) {
  var dropdowns = document.getElementsByClassName("dropdown-content");
  var blackoutElement = document.querySelector('.page-blackout');
  var i;
  for (i = 0; i < dropdowns.length; i++) {
    var openDropdown = dropdowns[i];
    if (openDropdown.classList.contains('show')) {
      openDropdown.classList.remove('show');
      blackoutElement.classList.remove('active');
    }
  }
  
}
}

/*Mobile NavBar*/
document.addEventListener("DOMContentLoaded", function () {
const showMenuButton = document.getElementById("showMenu");
const menuListing = document.querySelector(".header-nav-mobile__menu-listing");
const menu = document.getElementById('vue-mobile-slide');
const blackoutElement = document.querySelector('.page-blackout');

showMenuButton.addEventListener("click", function () {
menuListing.classList.toggle("display-menu"); 
showMenuButton.classList.toggle("active"); 
blackoutElement.classList.toggle("active");
});
});


document.addEventListener("DOMContentLoaded", function () {
const toggleButtonDocs = document.getElementById("toggleButtonDocs");
const containerDocs = document.querySelector(".slide-up-down__container");

toggleButtonDocs.addEventListener("click", function () {
containerDocs.classList.toggle("hidden");
toggleButtonDocs.classList.toggle("toggle-active");
});
});

document.addEventListener("DOMContentLoaded", function () {
const toggleButtonComm = document.getElementById("toggleButtonComm");
const containerComm = document.querySelectorAll(".slide-up-down__container")[1];

toggleButtonComm.addEventListener("click", function () {
containerComm.classList.toggle("hidden");
toggleButtonComm.classList.toggle("toggle-active");
});
});
var internshipData = JSON.parse(localStorage.getItem("searchData"));
function displaySearch() {
  internshipData.map(function (ele, index) {
    if (index < 10) {
      var mainDiv = document.createElement("div");
      mainDiv.setAttribute("class", "mainDiv");

      var div1 = document.createElement("div");
      div1.setAttribute("class", "innerDiv");
      var imgBox = document.createElement("div");
      imgBox.setAttribute("class", "imgBox");

      var img = document.createElement("img");
      img.setAttribute("src", ele.logo);
      imgBox.append(img);
      var div2 = document.createElement("div");
      div2.setAttribute("class", "innerDiv2");

      var heading = document.createElement("h6");
      heading.innerText = ele.title;

      var p1 = document.createElement("p");
      p1.innerText = ele.company_name;
      p1.setAttribute("class", "para");

      var p2 = document.createElement("p");
      p2.innerText = ele.internship_type;
      p2.setAttribute("class", "para");

      var p3 = document.createElement("p");
      p3.innerText = ele.category_name;
      p3.setAttribute("class", "para");

      var p4 = document.createElement("p");
      p4.innerText = ele.location;
      p4.setAttribute("class", "para");

      var p5 = document.createElement("p");
      p5.innerText = ele.stipend;
      p5.setAttribute("class", "para5");

      var div3 = document.createElement("div");
      div3.setAttribute("class", "innerDiv3");

      var p6 = document.createElement("p");
      p6.innerText = ele.days_left;

      var symDiv = document.createElement("div");
      symDiv.setAttribute("class", "symDiv");

      symDiv.innerHTML = `<i class="fas fa-share-alt"></i>`;

      var anch = document.createElement("a");
      anch.innerText = ele.anch;

      div1.append(imgBox);
      div2.append(heading, p1, p2, p3, p4, p5);
      div3.append(p6, symDiv, anch);
      mainDiv.append(div1, div2, div3);
      document.querySelector("#container").append(mainDiv);
    }
  });
}
displaySearch();

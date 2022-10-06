function openNavItem() {
  document.getElementById("collapseWidthExample").style.display = "block";
  document.getElementById("main").style.marginLeft = "16%";
  document.getElementById("breadcumb").style.marginLeft = "16%";
  document.getElementById("breadcumb").style.display="flex";
}

function closeNavItem() {
  document.getElementById("collapseWidthExample").style.display = "none";
  document.getElementById("main").style.marginLeft = "4%";
  document.getElementById("main").style.display="none";
  document.getElementById("breadcumb").style.marginLeft = "4%";
  document.getElementById("breadcrumb-list-cars").style.display="none";
  document.getElementById("breadcrumb-add-cars").style.display="none";
  document.getElementById("breadcrumb-add-update").style.display="none";
}



document.getElementById("menu_Button").addEventListener("click", toggleNav);

function toggleNav() {
  navSize = document.getElementById("mySidenav").style.width;
  if (navSize == "4%") {
    return close();
  }
  return open();
}

function open() {
  document.getElementById("mySidenav").style.width = "4%";
  document.getElementById("breadcumb").style.marginLeft = "4%";
  document.getElementById("breadcumb").style.display="blok";
  document.getElementById("header").style.display = "grid";
  document.getElementById("header").style.marginLeft = "4%";
  document.getElementById("main").style.marginLeft = "4%";
}

function close() {
  document.getElementById("breadcumb").style.display="none";
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
  document.getElementById("main").style.display="none";
  document.getElementById("header").style.marginLeft = "0";
  document.getElementById("collapseWidthExample").style.display = "none";

}

function openlistcar() {
  document.getElementById("list-car-a").href="http://localhost:4242/list-cars";
  document.getElementById("mySidenav").width="4%";

}

function addCar(){
  document.getElementById("tambah_kendaraan").href="add-car";
  
}







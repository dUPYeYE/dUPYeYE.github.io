function SelectDay() {
    var d = new Date();

        tableHetfo.style.display = "none";
        tableKedd.style.display = "none";
        tableSzerda.style.display = "none";
        tableCsutortok.style.display = "none";
        tablePentek.style.display = "none";
        tableAscii.style.display = "none";

        if(d.getDay() == 2)
        {
            tableKedd.style.display = "table";
        }
        else if(d.getDay() == 3)
        {
            tableSzerda.style.display = "table";
        }
        else if(d.getDay() == 4)
        {
            tableCsutortok.style.display = "table";
        }
        else if(d.getDay() == 5)
        {
            tablePentek.style.display = "table";
        }
        else
        {
            tableHetfo.style.display = "table";
        }
  }

function change_page_ascii(){
    window.location.href = "ascii.html";
} 
function change_page_vim(){
    window.location.href = "vim.html";
}
function change_page_orar(){
    window.location.href = "index.html";
}

var tableHetfo = document.getElementById("tableHetfo");
var tableKedd = document.getElementById("tableKedd");
var tableSzerda = document.getElementById("tableSzerda");
var tableCsutortok = document.getElementById("tableCsutortok");
var tablePentek = document.getElementById("tablePentek");
var tableAscii = document.getElementById("tableAscii");

var btnTabHetfo = document.getElementById("showTableHetfo");
var btnTabKedd = document.getElementById("showTableKedd");
var btnTabSzerda = document.getElementById("showTableSzerda");
var btnTabCsutortok = document.getElementById("showTableCsutortok");
var btnTabPentek = document.getElementById("showTablePentek");
var btnTabAscii = document.getElementById("showTableAscii");

btnTabHetfo.onclick = function () {
    tableHetfo.style.display = "table";
    tableKedd.style.display = "none";
    tableSzerda.style.display = "none";
    tableCsutortok.style.display = "none";
    tablePentek.style.display = "none";
    tableAscii.style.display = "none";
}
btnTabKedd.onclick = function () {
    tableHetfo.style.display = "none";
    tableKedd.style.display = "table";
    tableSzerda.style.display = "none";
    tableCsutortok.style.display = "none";
    tablePentek.style.display = "none";
    tableAscii.style.display = "none";
}
btnTabSzerda.onclick = function () {
    tableHetfo.style.display = "none";
    tableKedd.style.display = "none";
    tableSzerda.style.display = "table";
    tableCsutortok.style.display = "none";
    tablePentek.style.display = "none";
    tableAscii.style.display = "none";
}
btnTabCsutortok.onclick = function () {
    tableHetfo.style.display = "none";
    tableKedd.style.display = "none";
    tableSzerda.style.display = "none";
    tableCsutortok.style.display = "table";
    tablePentek.style.display = "none";
    tableAscii.style.display = "none";
}
btnTabPentek.onclick = function () {
    tableHetfo.style.display = "none";
    tableKedd.style.display = "none";
    tableSzerda.style.display = "none";
    tableCsutortok.style.display = "none";
    tablePentek.style.display = "table";
    tableAscii.style.display = "none";
}
btnTabAscii.onclick = function () {
    tableHetfo.style.display = "none";
    tableKedd.style.display = "none";
    tableSzerda.style.display = "none";
    tableCsutortok.style.display = "none";
    tablePentek.style.display = "none";
    tableAscii.style.display = "table";
}
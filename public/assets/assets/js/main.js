$(document).ready(function () {
  /*===================================*
    01. LOADING JS
    /*===================================*/
  $(window).on("load", function () {
    setTimeout(function () {
      $(".preloader").delay(700).fadeOut(700);
    }, 800);
  });
  /*===================================*
        start window scroll
    /*===================================*/
  $(window).on("scroll", function () {
    var scroll = $(window).scrollTop();

    if (scroll >= 250) {
      $("nav.navbar").addClass("nav-fixed");
    } else {
      $("nav.navbar").removeClass("nav-fixed");
    }
  });
  /*===================================*
            end window scroll
        /*===================================*/

  jQuery(".selectDate").datetimepicker({
    format: "d/m/Y",
    datepicker: true,
    viewMode: "months",
    timepicker: false,
    inline: true,
    lang: "ru",
    scrollMonth: false,
    scrollInput: false,
  });
  const tooltipTriggerList = document.querySelectorAll(
    '[data-bs-toggle="tooltip"]'
  );
  const tooltipList = [...tooltipTriggerList].map(
    (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
  );
});
// ###################### SIMPLE DATATABLE #################################
var datatable = $(".datatable").DataTable({
  // responsive: true,
  responsive: false,
  scrollX: true,
  language: {
    sLengthMenu: "Show _MENU_",
  },
  order: [[1, "asc"]],
  initComplete: function () {
    var tableBody = document.querySelector(".dataTables_scrollBody");
    var headerTable = document.querySelector(".dataTables_scrollHead");
    var curDown = false;
    var oldScrollLeft = 0;
    // var oldScrollTop = 0;
    var curXPos = 0;
    // var curYPos = 0;
    if (tableBody) {
      tableBody.addEventListener("mousemove", function (e) {
        if (curDown === true) {
          tableBody.scrollLeft = oldScrollLeft + (curXPos - e.pageX);
          headerTable.scrollLeft = oldScrollLeft + (curXPos - e.pageX);
          //tableBody.scrollTop = oldScrollTop + (curYPos - e.pageY);
        }
      });
      tableBody.addEventListener("mousedown", function (e) {
        curDown = true;
        // curYPos = e.pageY;
        curXPos = e.pageX;
        oldScrollLeft = tableBody.scrollLeft;
        // oldScrollTop = tableBody.scrollTop;
      });
      tableBody.addEventListener("mouseup", function (e) {
        curDown = false;
      });
      tableBody.addEventListener("scroll", function (e) {
        headerTable.scrollLeft = tableBody.scrollLeft;
      });
    }
  },
  // initComplete: function (settings, json) {
  //   $(".datatable").wrap(
  //     "<div class='drag mb-4 user-select-none' style='overflow:auto; width:100%;'></div>"
  //   );
  // },
});

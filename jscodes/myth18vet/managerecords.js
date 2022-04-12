//---------------------------firebase config---------------------------------------//
var firebaseConfig = {
  apiKey: "AIzaSyBJspFr6QSvhEAmONVu3Tl7lZrRFQSA-8I",
  authDomain: "analyzerdb.firebaseapp.com",
  databaseURL: "https://analyzerdb-default-rtdb.firebaseio.com",
  projectId: "analyzerdb",
  storageBucket: "analyzerdb.appspot.com",
  messagingSenderId: "326480477399",
  appId: "1:326480477399:web:2b7cf4d69a4895daeb8492",
  measurementId: "G-NHM4EMZ8HS"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
let db = firebase.firestore(); 
let engineers = [];
var username;
firebase.auth().onAuthStateChanged(function(user) {
  var user = firebase.auth().currentUser;
  username = user.email;
})
var clicks = 0;
// RealTimeData();
setTimeout(function (searchAlgn) {
  $(document).ready(function () {

    $('#example').dataTable({
      iDisplayLength: 5,
      pagingType: "full_numbers",
      searching: true,
      paginate: true,
      select: true,
      select: {
        style: 'os',
        className: 'focusedRow',
        selector: 'td:last-child a'
      },
      responsive: true,
      "autoWidth": false,
      sorting: true,
      "order": [[0]],
      lengthChange: false,
      pageLength: 12,
      scrollY: "400px",
      columnDefs: [
        {
          "targets": [0],
          "visible": true,
          "searchable": true,
          orderable: true,
        },
        {
          "targets": [1],
          "visible": true,
          "searchable": true,
          orderable: true,
        },
        {
          "targets": [2],
          "visible": true,
          "searchable": true,
          orderable: true,
        },
        {
          "targets": [3],
          "visible": false,
          "searchable": true,
          orderable: true,
        },
        {
          "targets": [4],
          "visible": false,
          "searchable": true,
          orderable: true,
        },
        {
          "targets": [5],
          "visible": false,
          "searchable": true,
          orderable: true,
        },
        {
          "targets": [6],
          "visible": false,
          "searchable": true,
          orderable: true
        },
        { width: "10px", targets: 0 },
        { width: "500px", targets: 1 },
        { width: "500px", targets: 2 },
        { width: "500px", targets: 3 },
        { width: "500px", targets: 4 },
        { width: "500px", targets: 5 },
        { width: "500px", targets: 6 },
      ],
      fixedColumns: true,
      "dom": '<lf<t>ip>',
      info: true,
      scrollCollapse: true,
      processing: false,
      language: {

        paginate: { first: "First", last: "Last", next: "Next", previous: "Previous" }

      },
      serverSide: false,
      select: {
        style: 'os',
        items: 'cell'
      },
      orderCellsTop: true,
      fixedHeader: true,
      initComplete: function () {
        var api = this.api();

        // For each column
        api
          .columns()
          .eq(0)
          .each(function (colIdx) {
            // Set the header cell to contain the input element
            var cell = $('.filters th').eq(
              $(api.column(colIdx).header()).index()
            );
            var title = $(cell).text();
            $(cell).html('<input id="searchinput" type="text"/>');

            // On every keypress in this input
            $(
              'input',
              $('.filters th').eq($(api.column(colIdx).header()).index())
            )
              .off('keyup change')
              .on('keyup change', function (e) {
                e.stopPropagation();

                // Get the search value
                $(this).attr('title', $(this).val());
                var regexr = '({search})'; //$(this).parents('th').find('select').val();

                var cursorPosition = this.selectionStart;
                // Search the column for that value
                api
                  .column(colIdx)
                  .search(
                    this.value != ''
                      ? regexr.replace('{search}', '(((' + this.value + ')))')
                      : '',
                    this.value != '',
                    this.value == ''
                  )
                  .draw();

                $(this)
                  .focus()[0]
                  .setSelectionRange(cursorPosition, cursorPosition);
              });
          });
      },
    });
    var table = $('#example').DataTable();
    $('#example tbody').on('click', 'tr', function () {
      $(".modal-body div span").text("");
      $("#number1").text(table.row(this).data()[0]);
      $("#activity1").text(table.row(this).data()[1]);
      $("#date6").text(table.row(this).data()[2]);
      $("#serial1").text(table.row(this).data()[3]);
      $("#machine1").text(table.row(this).data()[4]);
      $("#idnumber1").text(table.row(this).data()[5]);
      $("#username63").text(table.row(this).data()[6]);
      $("#messagemodal").modal("show");
    });
  });
}, 2000);

    
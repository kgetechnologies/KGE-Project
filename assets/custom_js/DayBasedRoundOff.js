
'use strict';
// Class definition

var KTDatatableDataLocalDemo2 = function () {
  // Private functions

  // demo initializer
  var demo = function () {
    var dataJSONArray = JSON.parse(
      '[{"RecordID":1,"brand":"Normal","type":1,"one":1,"two":1,"three":"1"},\n' +


      '{"RecordID":2,"brand":"Business","type":1,"one":1,"two":1,"three":"1"},\n' +

      '{"RecordID":3,"brand":"Coporate","type":1,"one":1,"two":1,"three":"1"},\n' +


      '{"RecordID":4,"brand":"Millenium","type":1,"one":1,"two":1,"three":"1"}]');

    var datatable = $('#kt_datatable2').KTDatatable({
      // datasource definition
      data: {
        type: 'local',
        source: dataJSONArray,
        pageSize: 10,
      },

      // layout definition
      layout: {
        scroll: false, // enable/disable datatable scroll both horizontal and vertical when needed.
        // height: 450, // datatable's body's fixed height
        footer: false, // display/hide footer
      },

      // column sorting
      sortable: true,

      pagination: true,

      search: {
        input: $('#kt_datatable_search_query2'),
        key: 'generalSearch',
      },

      // columns definition
      columns: [{
        field: 'RecordID',
        title: '#',
        sortable: false,
        width: 20,
        type: 'number',
        selector: true,
        textAlign: 'center',
      }, {
        field: 'brand',
        title: 'Brand',
        textAlign: 'center',
       
      }, {
        field: 'type',
        title: 'Type',
        textAlign: 'center',
        // callback function support for column rendering
        template: function (row) {
          var status = {
            1: {
              'title': 'Visa',
            },
            2: {
              'title': 'Master',
            },
            3: {
              'title': 'Diner',
            },
            4: {
              'title': 'Amex',
            },

          };
          return '<span class="font-weight-bold' + status[row.type] + ' label-inline">' + status[row.type].title + '</span>';
        },
      }, 
       { field: 'one',
        title: '1-99,999',
        textAlign: 'center',
        template: function (row) {
          var status ={

           1: {
              'title' : '',
            },
           

          };
          return '<input type="number" style="width:100%; padding:2px; border: 1px solid #ccc; border-radius: 4px; box-sizing:border-box; resize:vertical;" value="'+status[row.one].title+'">';
        },

        },
       {
        field: 'two',
        title: '1Lakh- 1,99,999',
        textAlign: 'center',
        template: function (row) {
          var status ={

           1: {
              'title' : '',
            },
        

          };

          return '<input type="number" style="width:100%; padding:2px; border: 1px solid #ccc; border-radius: 4px; box-sizing:border-box; resize:vertical;" value="'+status[row.two].title+'">';

          
        },



      }, {
        field: 'three',
        title: '2Lakh+',
        textAlign: 'center',
        template: function (row) {
          var status ={

           1: {
              'title' : '',
            },
         

          };
          return '<input type="number" style="width:100%; padding:2px; border: 1px solid #ccc; border-radius: 4px; box-sizing:border-box; resize:vertical;" value="'+status[row.three].title+'">';
        },
        
      },
      {
        field: 'three',
        title: '5L',
        textAlign: 'center',
        template: function (row) {
          var status ={

           1: {
              'title' : '',
            },
         
          };
          return '<input type="number" style="width:100%; padding:2px; border: 1px solid #ccc; border-radius: 4px; box-sizing:border-box; resize:vertical;" value="'+status[row.three].title+'">';
        },
        
      },
      {
        field: 'three',
        title: '>15+',
        textAlign: 'center',
        template: function (row) {
          var status ={

           1: {
              'title' : '',
            },
           


          };
          return '<input type="number" style="width:100%; padding:2px; border: 1px solid #ccc; border-radius: 4px; box-sizing:border-box; resize:vertical;" value="'+status[row.three].title+'">';
        },
        
      },
    ],
    });

    $('#kt_datatable_search_status2').on('change', function () {
      datatable.search($(this).val().toLowerCase(), 'brand');
    });

    $('#kt_datatable_search_type2').on('change', function () {
      datatable.search($(this).val().toLowerCase(), 'type');
    });

    $('#kt_datatable_search_status2, #kt_datatable_search_type2').selectpicker();
  };

  return {
    // Public functions
    init: function () {
      // init dmeo
      demo();
    },
  };
}();

jQuery(document).ready(function () {
  KTDatatableDataLocalDemo2.init();
});

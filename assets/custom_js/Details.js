'use strict';
// Class definition

var KTDatatableDataLocalDemo = function () {
  // Private functions

  // demo initializer
  var demo = function () {
    var dataJSONArray = JSON.parse(
      '[{"RecordID":1,"FirstName":"Kulgaurav","LastName":"Singh","MobileNumber":"8840279971","WhatsappNumber":"8840279971","Location":1,"isactivated":1,"custcount":"0"},\n' +


      '{"RecordID":3,"FirstName":"Madhumala","LastName":"Nayak","MobileNumber":"8093528727","WhatsappNumber":"8895602966","Location":2,"isactivated":1,"custcount":"0"},\n' +


      '{"RecordID":5,"FirstName":"Mercy","LastName":"Amaravathi","MobileNumber":"9445944602","WhatsappNumber":"9445944602","Location":3,"isactivated":1,"custcount":"0"},\n' +




      '{"RecordID":7,"FirstName":"Vishnu"	,"LastName":"Priya","MobileNumber":null,"WhatsappNumber":"","Location":3,"isactivated":1,"custcount":"0"},\n' +


      '{"RecordID":9,"FirstName":"Vikash"	,"LastName":"Raj","MobileNumber":"9445944601","WhatsappNumber":"9445944601","Location":3,"isactivated":1,"custcount":"0"},\n' +

      '{"RecordID":10,"FirstName":"Vignesh"	,"LastName":"Raj","MobileNumber":"9445944603","WhatsappNumber":"9445944603","Location":3,"isactivated":1,"custcount":"0"},\n' +


      '{"RecordID":12,"FirstName":"Rani"	,"LastName":"Rani","MobileNumber":"9445944602","WhatsappNumber":"9445944602","Location":3,"isactivated":1,"custcount":"0" }]');

    var datatable = $('#kt_datatable').KTDatatable({
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
        input: $('#kt_datatable_search_query'),
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
        field: 'FirstName',
        title: 'First Name',
      }, {
        field: 'LastName',
        title: 'Last Name',
      }, {
        field: 'MobileNumber',
        title: 'Mobile Number',
        textAlign: 'center',
      }, {
        field: 'WhatsappNumber',
        title: 'Whatsapp Number',
        textAlign: 'center',
      },
      {
        field: 'Location',
        title: 'Location',
        textAlign: 'center',
        autoHide: false,
        // callback function support for column rendering
        template: function (row) {
          var status = {
            1: {
              'title': 'Gorakhpur',

            },
            2: {
              'title': 'Odisha',

            },
            3: {
              'title': 'Chennai',

            },
            4: {
              'title': 'Ambattur',
            },
            5: {
              'title': '',
            },

          };
          return '<span class="font-weight-bold text-' + status[row.Location] + '">' +
            status[row.Location].title + '</span>';
        },
      }, {
        field: 'isactivated',
        title: 'IsActivated',
        textAlign: 'center',
        // callback function support for column rendering
        template: function (row) {
          var status = {
            1: {
              'title': 'Yes',
              'class': ' label-light-success',
            },
            2: {
              'title': 'No',
              'class': ' label-light-danger',
            },

          };
          return '<span class="label font-weight-bold label-lg ' + status[row.isactivated].class + ' label-inline">' + status[row.isactivated].title + '</span>';
        },
      }, {
        field: 'custcount',
        title: 'Customer Count',
        textAlign: 'center',
      },],
    });

    $('#kt_datatable_search_status').on('change', function () {
      datatable.search($(this).val().toLowerCase(), 'isactivated');
    });

    $('#kt_datatable_search_type').on('change', function () {
      datatable.search($(this).val().toLowerCase(), 'Location');
    });

    $('#kt_datatable_search_status, #kt_datatable_search_type').selectpicker();
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
  KTDatatableDataLocalDemo.init();
});

'use strict';
// Class definition

var KTDatatableDataLocalDemo2 = function () {
  // Private functions

  // demo initializer
  var demo = function () {
    var dataJSONArray = JSON.parse(
      '[{"RecordID":1,"brand":"Normal","type":1,"one":1,"two":2,"three":"1"},\n' +


      '{"RecordID":2,"brand":"Business","type":2,"one":2,"two":3,"three":"2"},\n' +

      '{"RecordID":3,"brand":"Coporate","type":3,"one":2,"two":3,"three":"2"},\n' +


      '{"RecordID":4,"brand":"Millenium","type":4,"one":3,"two":4,"three":"3"}]');

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
              'title' : '2.3',
            },
            2: {
              'title' : '2.4',
            },
            3: {
              'title' : '3.5',
            },
            4: {
              'title' : '20.5',
            }, 
            5: {
              'title' : '20.1',
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
              'title' : '2.3',
            },
            2: {
              'title' : '2.4',
            },
            3: {
              'title' : '3.5',
            },
            4: {
              'title' : '20.5',
            }, 
            5: {
              'title' : '20.1',
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
              'title' : '2.3',
            },
            2: {
              'title' : '2.4',
            },
            3: {
              'title' : '3.5',
            },
            4: {
              'title' : '20.5',
            }, 
            5: {
              'title' : '20.1',
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

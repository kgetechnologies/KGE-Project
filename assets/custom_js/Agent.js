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
      },{
        field: 'Actions',
        title: 'History',
        sortable: false,
        textAlign: 'center',
        width: 125,
        overflow: 'visible',
        autoHide: false,
        template: function() {
          return '\
                         \
                          <a href="javascript:;" class="btn btn-sm btn-clean text-primary btn-icon mr-2" title="Details">\
                              <span class="svg-icon svg-icon-md">\
                                 More Details\
                              </span>\
                          </a>\
                         \
                      ';
        },
      }],
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
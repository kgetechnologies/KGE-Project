

'use strict';
// Class definition

var KTDatatableDataLocalDemo2 = function () {
  // Private functions

  // demo initializer
  var demo = function () {
    var dataJSONArray = JSON.parse(
      '[]');

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
        title: 'Minimum Amount',
        textAlign: 'center',
       
      },
      {
        field: 'brand',
        title: 'RoundOff',
        textAlign: 'center',
       
      },
      {
        field: 'brand',
        title: 'Manage',
        textAlign: 'center',
       
      },
    ],
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

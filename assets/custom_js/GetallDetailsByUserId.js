'use strict';
// Class definition

var KTDatatableDataLocalDemo = function() {
  // Private functions

  // demo initializer
  var demo = function() {
    var dataJSONArray = JSON.parse(
        '[{"RecordID":1,"FirstName":"Kulgaurav","LastName":"Singh","MobileNumber":"8840279971","WhatsappNumber":"8840279971","Location":1,"isactivated":1, "agent":1,"tpr":null, "Actions":null},\n' +

        


      

        '{"RecordID":15,"FirstName":null,"LastName":null,"MobileNumber":"0","WhatsappNumber":"0","Location":5,"isactivated":2, "agent":5,"tpr":null,"Actions":null}]');

    var datatable = $('#kt_datatable3').KTDatatable({
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
        input: $('#kt_datatable_search_query3'),
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
          title: 'A/C Name',
        },{
            field: 'LastName',
            title: 'A/C Type',
          },{
            field: 'MobileNumber',
            title: 'A/C No',
            textAlign: 'center',
          },{
            field: 'WhatsappNumber',
            title: 'IFSC COde',
            textAlign: 'center',
          },{
            field: 'WhatsappNumber',
            title: 'Customer Name',
            textAlign: 'center',
          },
          {
            field: 'WhatsappNumber',
            title: 'Passbook',
            textAlign: 'center',
          },
          {
            field: 'tpr',
            title: 'ToProcess',
            sortable: false,
            textAlign: 'center',
            width: 125,
            overflow: 'visible',
            autoHide: false,
            template: function() {
              return '\
              <div class="dropdown dropdown-inline">\
              <a href="javascript:;" class="btn btn-sm btn-clean btn-icon mr-2" data-toggle="dropdown">\
                  <span class="svg-icon svg-icon-md">\
                      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">\
                          <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\
                              <rect x="0" y="0" width="24" height="24"/>\
                              <path d="M5,8.6862915 L5,5 L8.6862915,5 L11.5857864,2.10050506 L14.4852814,5 L19,5 L19,9.51471863 L21.4852814,12 L19,14.4852814 L19,19 L14.4852814,19 L11.5857864,21.8994949 L8.6862915,19 L5,19 L5,15.3137085 L1.6862915,12 L5,8.6862915 Z M12,15 C13.6568542,15 15,13.6568542 15,12 C15,10.3431458 13.6568542,9 12,9 C10.3431458,9 9,10.3431458 9,12 C9,13.6568542 10.3431458,15 12,15 Z" fill="#000000"/>\
                          </g>\
                      </svg>\
                  </span>\
              </a>\
                <div class="dropdown-menu dropdown-menu-sm dropdown-menu-right">\
                  <ul class="navi flex-column navi-hover py-2">\
                      <li class="navi-header font-weight-bolder text-uppercase font-size-xs text-primary pb-2">\
                          Choose an action:\
                      </li>\
                      <li class="navi-item">\
                          <a href="#" class="navi-link">\
                              <span class="navi-icon"></span>\
                              <span class="navi-text">ToActivate</span>\
                          </a>\
                      </li>\
                      <li class="navi-item">\
                          <a href="#" class="navi-link">\
                              <span class="navi-icon"></span>\
                              <span class="navi-text">ToReject</span>\
                          </a>\
                      </li>\
                      <li class="navi-item">\
                          <a href="#" class="navi-link">\
                              <span class="navi-icon"></span>\
                              <span class="navi-text">ToDeactivate</span>\
                          </a>\
                      </li>\
                  </ul>\
                </div>\
          </div>\
          \                              ';
            },
          }        
,
        {
          field: 'Actions',
          title: 'Manage',
          sortable: false,
          textAlign: 'center',
          width: 125,
          overflow: 'visible',
          autoHide: false,
          template: function() {
            return '\
              \
              <button style="width:100%;" class="btn btn-primary btn-sm btn-clean btn-icon mr-2">\
              <a href="EditBank.html" class="text-white">\
              Edit Bank</a>\
                           </button>\
						';
          },
        }],
    });


   
  };

  return {
    // Public functions
    init: function() {
      // init dmeo
      demo();
    },
  };
}();

jQuery(document).ready(function() {
  KTDatatableDataLocalDemo.init();
});

// _________________Card Table_________________
'use strict';
// Class definition

var KTDatatableDataLocalDemo2 = function() {
  // Private functions

  // demo initializer
  var demo = function() {
    var dataJSONArray = JSON.parse(
        '[{"RecordID":1,"CardType":"Normal","CardNo":"123465423223","CardBrand":"","CardPicturePath":"","CardPictureBackPath":"","ClickTo":1, "Actions":null},\n' +

        


      

        '{"RecordID":2,"CardType":"Normal","CardNo":"124535345343","CardBrand":"","CardPicturePath":"","CardPictureBackPath":"","ClickTo":2, "Actions":null}]');

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
          field: 'CardType',
          title: 'Card Type',
        },{
            field: 'CardNo',
            title: 'Card No',
          },{
            field: 'CardBrand',
            title: 'Card Brand',
            textAlign: 'center',
          },{
            field: 'CardPicturePath',
            title: 'CardPicturePath',
            textAlign: 'center',
          },{
            field: 'CardPictureBackPath',
            title: 'CardPictureBackPath',
            textAlign: 'center',
          },{
            field: 'ClickTo',
            title: 'Click To',
            textAlign: 'center',
             // callback function support for column rendering
          template: function(row) {
            var status = {
              1: {
                'title': 'Modify',
                'class': 'btn btn-primary',
                
              },
              2: {
                'title': 'Rejected',
                 'class': 'label-light-danger'
              },
            
            };
            return '<span class="label font-weight-bold label-lg ' + status[row.ClickTo].class + ' label-inline">' + status[row.ClickTo].title + '</span>';

            

          },
          },
         
        {
          field: 'Actions',
          title: 'Manage',
          sortable: false,
          textAlign: 'center',
          width: 125,
          overflow: 'visible',
          autoHide: false,
          template: function() {
            return '\
              \
              <button style="width:100%;" class="btn btn-primary btn-sm btn-clean btn-icon mr-2">\
              <a href="CardDetails.html" class="text-white">\
              Edit Card</a>\
                           </button>\
						';
          },
        }],
    });


   
  };
  return {
    // Public functions
    init: function() {
      // init dmeo
      demo();
    },
  };
}();

jQuery(document).ready(function() {
  KTDatatableDataLocalDemo2.init();
});



// _________________Proof Table_________________
'use strict';
// Class definition

var KTDatatableDataLocalDemo4 = function() {
  // Private functions

  // demo initializer
  var demo = function() {
    var dataJSONArray = JSON.parse(
        '[{"RecordID":1,"FirstName":"Kulgaurav","LastName":"Singh","MobileNumber":"8840279971","WhatsappNumber":"8840279971","Location":1,"isactivated":1, "agent":1,"tpr":null, "Actions":null},\n' +

        


      

        '{"RecordID":15,"FirstName":null,"LastName":null,"MobileNumber":"0","WhatsappNumber":"0","Location":5,"isactivated":2, "agent":5,"tpr":null,"Actions":null}]');

    var datatable = $('#kt_datatable4').KTDatatable({
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
        input: $('#kt_datatable_search_query4'),
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
          title: 'Full Name ',
        },{
            field: 'LastName',
            title: 'Proof Type',
          },{
            field: 'MobileNumber',
            title: 'Front Picture',
            textAlign: 'center',
          },{
            field: 'WhatsappNumber',
            title: 'Back Picture',
            textAlign: 'center',
          }, {
            field: 'tpr',
            title: 'ToProcess',
            sortable: false,
            textAlign: 'center',
            width: 125,
            overflow: 'visible',
            autoHide: false,
            template: function() {
              return '\
              <div class="dropdown dropdown-inline">\
              <a href="javascript:;" class="btn btn-sm btn-clean btn-icon mr-2" data-toggle="dropdown">\
                  <span class="svg-icon svg-icon-md">\
                      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">\
                          <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\
                              <rect x="0" y="0" width="24" height="24"/>\
                              <path d="M5,8.6862915 L5,5 L8.6862915,5 L11.5857864,2.10050506 L14.4852814,5 L19,5 L19,9.51471863 L21.4852814,12 L19,14.4852814 L19,19 L14.4852814,19 L11.5857864,21.8994949 L8.6862915,19 L5,19 L5,15.3137085 L1.6862915,12 L5,8.6862915 Z M12,15 C13.6568542,15 15,13.6568542 15,12 C15,10.3431458 13.6568542,9 12,9 C10.3431458,9 9,10.3431458 9,12 C9,13.6568542 10.3431458,15 12,15 Z" fill="#000000"/>\
                          </g>\
                      </svg>\
                  </span>\
              </a>\
                <div class="dropdown-menu dropdown-menu-sm dropdown-menu-right">\
                  <ul class="navi flex-column navi-hover py-2">\
                      <li class="navi-header font-weight-bolder text-uppercase font-size-xs text-primary pb-2">\
                          Choose an action:\
                      </li>\
                      <li class="navi-item">\
                          <a href="#" class="navi-link">\
                              <span class="navi-icon"></span>\
                              <span class="navi-text">Approve</span>\
                          </a>\
                      </li>\
                      <li class="navi-item">\
                          <a href="#" class="navi-link">\
                              <span class="navi-icon"></span>\
                              <span class="navi-text">Reject</span>\
                          </a>\
                      </li>\
                     \
                  </ul>\
                </div>\
          </div>\
          \                              ';
            },
          }        
,
         
        {
          field: 'Actions',
          title: 'Manage',
          sortable: false,
          textAlign: 'center',
          width: 125,
          overflow: 'visible',
          autoHide: false,
          template: function() {
            return '\
              \
              <button style="width:100%;" class="btn btn-primary btn-sm btn-clean btn-icon mr-2">\
              <a href="ProofDetails.html" class="text-white">\
              Edit Proof</a>\
                           </button>\
						';
          },
        }],
    });


   
  };

  return {
    // Public functions
    init: function() {
      // init dmeo
      demo();
    },
  };
}();

jQuery(document).ready(function() {
  KTDatatableDataLocalDemo4.init();
});


// _________________Transaction Table_________________
'use strict';
// Class definition

var KTDatatableDataLocalDemo1 = function() {
  // Private functions

  // demo initializer
  var demo = function() {
    var dataJSONArray = JSON.parse(
        '[{"RecordID":1,"FirstName":"Kulgaurav","LastName":"Singh","MobileNumber":"8840279971","WhatsappNumber":"8840279971","Location":1,"isactivated":1, "agent":1,"tpr":null, "Actions":null},\n' +

        


      

        '{"RecordID":15,"FirstName":null,"LastName":null,"MobileNumber":"0","WhatsappNumber":"0","Location":5,"isactivated":2, "agent":5,"tpr":null,"Actions":null}]');

    var datatable = $('#kt_datatable1').KTDatatable({
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
        input: $('#kt_datatable_search_query1'),
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
          title: 'Requested On',
        },{
            field: 'LastName',
            title: 'Card Brand',
          },{
            field: 'MobileNumber',
            title: 'Card Type',
            textAlign: 'center',
          },{
            field: 'WhatsappNumber',
            title: 'Card  No',
            textAlign: 'center',
          },{
            field: 'WhatsappNumber',
            title: 'Amount',
            textAlign: 'center',
          },{
            field: 'WhatsappNumber',
            title: 'Tranx%',
            textAlign: 'center',
          },{
            field: 'WhatsappNumber',
            title: 'Status',
            textAlign: 'center',
          }, {
            field: 'tpr',
            title: 'ToProcess',
            sortable: false,
            textAlign: 'center',
            width: 125,
            overflow: 'visible',
            autoHide: false,
            template: function() {
              return '\
              <div class="dropdown dropdown-inline">\
              <a href="javascript:;" class="btn btn-sm btn-clean btn-icon mr-2" data-toggle="dropdown">\
                  <span class="svg-icon svg-icon-md">\
                      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">\
                          <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\
                              <rect x="0" y="0" width="24" height="24"/>\
                              <path d="M5,8.6862915 L5,5 L8.6862915,5 L11.5857864,2.10050506 L14.4852814,5 L19,5 L19,9.51471863 L21.4852814,12 L19,14.4852814 L19,19 L14.4852814,19 L11.5857864,21.8994949 L8.6862915,19 L5,19 L5,15.3137085 L1.6862915,12 L5,8.6862915 Z M12,15 C13.6568542,15 15,13.6568542 15,12 C15,10.3431458 13.6568542,9 12,9 C10.3431458,9 9,10.3431458 9,12 C9,13.6568542 10.3431458,15 12,15 Z" fill="#000000"/>\
                          </g>\
                      </svg>\
                  </span>\
              </a>\
                <div class="dropdown-menu dropdown-menu-sm dropdown-menu-right">\
                  <ul class="navi flex-column navi-hover py-2">\
                      <li class="navi-header font-weight-bolder text-uppercase font-size-xs text-primary pb-2">\
                          Choose an action:\
                      </li>\
                      <li class="navi-item">\
                          <a href="#" class="navi-link">\
                              <span class="navi-icon"></span>\
                              <span class="navi-text">Approve</span>\
                          </a>\
                      </li>\
                      <li class="navi-item">\
                          <a href="#" class="navi-link">\
                              <span class="navi-icon"></span>\
                              <span class="navi-text">Reject</span>\
                          </a>\
                      </li>\
                     \
                  </ul>\
                </div>\
          </div>\
          \                              ';
            },
          }        
,
         
      ],
    });


   
  };

  return {
    // Public functions
    init: function() {
      // init dmeo
      demo();
    },
  };
}();

jQuery(document).ready(function() {
  KTDatatableDataLocalDemo1.init();
});

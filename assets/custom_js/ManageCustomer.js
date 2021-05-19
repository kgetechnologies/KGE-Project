'use strict';
// Class definition

var KTDatatableDataLocalDemo = function() {
  // Private functions

  // demo initializer
  var demo = function() {
    var dataJSONArray = JSON.parse(
        '[{"RecordID":1,"FirstName":"Kulgaurav","LastName":"Singh","MobileNumber":"8840279971","WhatsappNumber":"8840279971","Location":1,"isactivated":1, "agent":1,"Actions":null},\n' +

        				
        '{"RecordID":2,"FirstName":null,"LastName":null,"MobileNumber":"0","WhatsappNumber":"0","Location":5,"isactivated":2, "agent":2,"Actions":null},\n' +

        '{"RecordID":3,"FirstName":"Madhumala","LastName":"Nayak","MobileNumber":"8093528727","WhatsappNumber":"8895602966","Location":2,"isactivated":1, "agent":5,"Actions":null},\n' +

        
        
        '{"RecordID":4,"FirstName":"1","LastName":"2","MobileNumber":"9445944601","WhatsappNumber":"9445944603","Location":3,"isactivated":1, "agent":5,"Actions":null},\n' +


        '{"RecordID":5,"FirstName":"Mercy","LastName":"Amaravathi","MobileNumber":"9445944602","WhatsappNumber":"9445944602","Location":3,"isactivated":1, "agent":3,"Actions":null},\n' +

        '{"RecordID":6,"FirstName":null,"LastName":null,"MobileNumber":"0","WhatsappNumber":"0","Location":5,"isactivated":2, "agent":5,"Actions":null},\n' +
       
        			
        
        '{"RecordID":7,"FirstName":"Vishnu"	,"LastName":"Priya","MobileNumber":null,"WhatsappNumber":"","Location":3,"isactivated":1, "agent":5,"Actions":null},\n' +
        
        '{"RecordID":8,"FirstName":"1"	,"LastName":"2","MobileNumber":"9445944601","WhatsappNumber":"9445944603","Location":3,"isactivated":1, "agent":5,"Actions":null},\n' +


        '{"RecordID":9,"FirstName":""	,"LastName":"","MobileNumber":"0","WhatsappNumber":"0","Location":5,"isactivated":2, "agent":5,"Actions":null},\n' +
        
        '{"RecordID":9,"FirstName":"Vikash"	,"LastName":"Raj","MobileNumber":"9445944601","WhatsappNumber":"9445944601","Location":3,"isactivated":1, "agent":5,"Actions":null},\n' +

        '{"RecordID":10,"FirstName":"Vignesh"	,"LastName":"Raj","MobileNumber":"9445944603","WhatsappNumber":"9445944603","Location":3,"isactivated":1, "agent":5,"Actions":null},\n' +


        '{"RecordID":11,"FirstName":""	,"LastName":"","MobileNumber":"0","WhatsappNumber":"0","Location":5,"isactivated":2, "agent":5,"Actions":null},\n' +

        

        
        '{"RecordID":12,"FirstName":"Rani"	,"LastName":"Rani","MobileNumber":"9445944602","WhatsappNumber":"9445944602","Location":3,"isactivated":1, "agent":5,"Actions":null},\n' +

        '{"RecordID":15,"FirstName":null,"LastName":null,"MobileNumber":"0","WhatsappNumber":"0","Location":5,"isactivated":2, "agent":5,"Actions":null}]');

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
        },{
            field: 'LastName',
            title: 'Last Name',
          },{
            field: 'MobileNumber',
            title: 'Mobile Number',
            textAlign: 'center',
          },{
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
            template: function(row) {
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
              return '<span class="font-weight-bold text' + status[row.Location]+ '">' +
                  status[row.Location].title + '</span>';
            },
          }, {
            field: 'agent',
            title: 'Agent',
            textAlign: 'center',
            template: function(row) {
              
                var status = {
                  1: {
                    'title': 'Madhumala Nayak',
                   
                  },
                  2: {
                    'title': 'Balaji Balaji',
                   
                  },
                  3: {
                    'title': 'Mercy Amaravathi',
                   
                  },
                  4: {
                    'title': 'Vikash',
                  },
                  5: {
                    'title': '',
                  },
                  
                };

              return ' <a href="Details.html" class="font-weight-bold ' +status[row.agent]+ '">' +status[row.agent].title + '</a>';

              
            },


        },{
          field: 'isactivated',
          title: 'IsActivated',
          textAlign: 'center',
          // callback function support for column rendering
          template: function(row) {
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
          field: 'Actions',
          title: 'Actions',
          sortable: false,
          textAlign: 'center',
          width: 125,
          overflow: 'visible',
          autoHide: false,
          template: function() {
            return '\
						\
							<a href="GetallDetailsByUserId.html" class="btn btn-sm btn-clean btn-icon mr-2" title="Edit details">\
	                            <span class="svg-icon svg-icon-md">\
	                                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">\
	                                    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\
	                                        <rect x="0" y="0" width="24" height="24"/>\
	                                        <path d="M8,17.9148182 L8,5.96685884 C8,5.56391781 8.16211443,5.17792052 8.44982609,4.89581508 L10.965708,2.42895648 C11.5426798,1.86322723 12.4640974,1.85620921 13.0496196,2.41308426 L15.5337377,4.77566479 C15.8314604,5.0588212 16,5.45170806 16,5.86258077 L16,17.9148182 C16,18.7432453 15.3284271,19.4148182 14.5,19.4148182 L9.5,19.4148182 C8.67157288,19.4148182 8,18.7432453 8,17.9148182 Z" fill="#000000" fill-rule="nonzero"\ transform="translate(12.000000, 10.707409) rotate(-135.000000) translate(-12.000000, -10.707409) "/>\
	                                        <rect fill="#000000" opacity="0.3" x="5" y="20" width="15" height="2" rx="1"/>\
	                                    </g>\
	                                </svg>\
	                            </span>\
						</a>\
				\
						';
          },
        }],
    });

    $('#kt_datatable_search_status').on('change', function() {
      datatable.search($(this).val().toLowerCase(), 'isactivated');
    });

    $('#kt_datatable_search_type').on('change', function() {
      datatable.search($(this).val().toLowerCase(), 'Location');
    });

    $('#kt_datatable_search_status, #kt_datatable_search_type').selectpicker();
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

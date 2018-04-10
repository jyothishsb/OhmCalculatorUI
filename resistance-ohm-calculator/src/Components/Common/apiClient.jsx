import $ from 'jquery';

export function apiClient(url, requestType,  callbackFunction) {
    
        $.ajax({
            type: requestType,
            contenetType: "application/json",
            url: url,
            dataType: "json",
            headers: {
            
            },
            success: function (response, status) {
                if (status === 'success') {
                    callbackFunction({
                        status: '200',
                        response: response
                    });
                } else {
                    callbackFunction({
                        status: '204',
                        response: response
                    });
                }
            },
            error: function (response, status) {
                callbackFunction({
                    status: '400',
                    response: response.response
                });
            }
        })
   
};
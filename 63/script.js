(function () {
    'use strict';

    $('form').submit((event) => {
        const textArea = $('#theTextArea');
        // const theInput = $('#inputFile');
        // console.log('theInput', theInput);
        const file = $('#inputFile').val();
        const spinner = $('#loader');
        spinner.hide();
        //  console.log('file ', file);
        //  console.log('file.value ', file.value);
        $.get(file, (loadedData) => {
            spinner.show();
            setTimeout(() => {
                textArea.text(loadedData);
                spinner.hide();
            }, 3000);

            console.log(loadedData);
        })
            .fail((xhr, statusCode, statusText) => {
                textArea.text(`That File Is unavailable ${statusText} ${statusCode}`);
                console.log(xhr);
                console.log(statusCode);
                console.log(statusText);
            });

        console.log(file);
        event.preventDefault();
    });
}());

var x = ['john', 'mike', 'pete'];
console.log(x[1]);

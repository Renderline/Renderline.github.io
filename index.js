
init();

function init() {

    initDragAndDrop();

}

// Drag and Drop commun element
function initDragAndDrop() {

    document.addEventListener( "dragover", function( event ) {
        dragOverHandler( event );
    }, false );

    document.addEventListener( "drop", function( event ) {
        dropHandler( event );
    }, false );

}

function dropHandler( ev ) {

    if( ev !== null && ev !== undefined) {

        // Prevent default behavior (Prevent file from being opened)
        ev.preventDefault();

        if (ev.dataTransfer.items) {

            // Use DataTransferItemList interface to access the file(s)
            for (var i = 0; i < ev.dataTransfer.items.length; i++) {

                // If dropped items aren't files, reject them
                if (ev.dataTransfer.items[i].kind === 'file') {

                    var f = ev.dataTransfer.files[ i ];
                    var jsonType = /json/;
                    if (!f.type.match(jsonType)){continue;}

                    var file = ev.dataTransfer.items[i].getAsFile();
                    console.log('... file[' + i + '].name = ' + file.name);
                    var name = file.name;
                    var elemName = name.split( '.' )[ 0 ];

                    var reader = new FileReader();
                    reader.onloadend = function(e) {
                        var result = JSON.parse(this.result);
                        console.log(result);
                    };
                    reader.readAsText(f);

                }

            }

        }

    }

}

function dragOverHandler( ev, scene ) {

    if( ev !== null && ev !== undefined) {
    
        // Prevent default behavior (Prevent file from being opened)
        ev.preventDefault();

    }

}

Template.codeEditor.onRendered(function(){
    var textarea = document.getElementById("code1");

    // Wait until animation finished render container
    setTimeout(function(){

        CodeMirror.fromTextArea(textarea, {
            lineNumbers: true,
            matchBrackets: true,
            styleActiveLine: true
        });
    }, 500);

});
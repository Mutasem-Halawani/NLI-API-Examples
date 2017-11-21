// Search API Example:
// http://primo.nli.org.il/PrimoWebServices/xservice/search/brief?institution=NNL&loc=local,scope:(NNL)&query=rtype,exact,KETUBBA&query=lsr41,exact,yes&indx=1&bulkSize=50&json=true



// Image Api Example:
// http://iiif.nli.org.il/IIIFv21/FL10449331/full/max/0/default.jpg


// Presentaion API Example:
// http://iiif.nli.org.il/IIIFv21/DOCID/NNL_ALEPH001337672/manifest

var makePUTRequest = function(){
    $.ajax({
        type: "GET",
        url: "http://primo.nli.org.il/PrimoWebServices/xservice/search/brief?institution=NNL&loc=local,scope:(NNL_MAPS_JER)&query=any,contains,jerusalem&query=facet_lang,exact,heb&indx=1&bulkSize=5&json=true",
        crossDomain: true,
        dataType: 'jsonp',
        success: function( response ){
            console.log(response)
            console.log('success')
        },
        error: function( error ){
            console.log( "ERROR:", error );
        },
    });
};
makePUTRequest();

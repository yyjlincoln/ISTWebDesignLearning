function loadCSS() {
    if((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|wOSBrowser|BrowserNG|WebOS)/i))) {
            // document.write('<link href="css/mobile.css" rel="stylesheet" type="text/css" media="screen" />');
        if(here=="desktop"){
            document.clear()
            document.write('Please wait while we redirect you to mobile site...')
            document.write('<script>top.location="'+where_mobile+'"</script>')}
       }
       else {
           if(here=="mobile"){
        document.clear()
        document.write('Please wait while we redirect you to desktop site...')
        document.write('<script>top.location="'+where_desktop+'"</script>')}
       }
   }
// /   loadCSS()
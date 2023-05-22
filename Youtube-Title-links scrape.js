console.clear();
urls = $$('a');
urls.forEach(function(v,i,a){
    if (v.id=="video-title-link" && v.href){
        console.log(v.title+'\t'+v.href);
    }
});

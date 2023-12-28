function onSearchClick(){
    
    const newurl = (window.location.protocol + "//" + window.location.host + window.location.pathname);
    const element = document.getElementById("searchText");
    const text = (""+element.value).toLowerCase();

    const tablesName = [
        "Курси".toLowerCase(), 
        "Статі".toLowerCase(), 
        "Література".toLowerCase()
    ]

    if(text.indexOf("html")!=-1){

        window.location.replace(newurl +  '#firstPage');

    }
    else if(text.indexOf("css")!=-1){

        window.location.replace(newurl +  '#3rdPage');

    }
    else if(text.indexOf("javaScript".toLowerCase())!=-1){

        window.location.replace(newurl +  '#secondPage/1');

    }else if(tablesName.indexOf(text)!=-1){
        const index = tablesName.indexOf(text); 
        const url = newurl +  "#secondPage/" +((index===1 || index===0)? 0 : 2);
        
        debugger;
        
        window.location.replace(url);

    }

    element.value = "";
    
}
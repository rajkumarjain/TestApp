function route(handle,pathname){
    console.log("Routing request for " + pathname);
    if(typeof handle[pathname] === 'function'){
        handle[pathname]();
    }else
    {
        console.log("No handler for " + pathname);
    }
}
exports.route = route;
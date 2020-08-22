function toggle_visibility(id) {
    var e = document.getElementById(id);
    console.log(e.style.display);
    if(e.style.display != 'none') {
        e.style.display = 'none';
    }
    else
        e.style.display = 'block';
}

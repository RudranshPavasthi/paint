canvas = document.getElementById("myCanvas");
pen = canvas.getContext("2d");
var mouseEvent = "";
var lastmousex, lastmousey;
pen_color = "black";
pen_width = 1;
canvas.addEventListener("mousedown", mymousedown);

function mymousedown(e) {
    pen_color = document.getElementById("pen_color").value;
    pen_width = document.getElementById("pen_width").value;
    mouseEvent = "md"
}
canvas.addEventListener("mouseleave", mymouseleave);

function mymouseleave(e) {
    mouseEvent = "ml"
}
canvas.addEventListener("mouseup", mymouseup);

function mymouseup(e) {
    mouseEvent = "mu"
}
canvas.addEventListener("mousemove", mymousemove)

function mymousemove(e) {
    current_mouse_x = e.clientX - canvas.offsetLeft;
    current_mouse_y = e.clientY - canvas.offsetTop;
    if (mouseEvent == "md") {
        pen.beginPath();
        pen.strokeStyle = pen_color;
        pen.lineWidth = pen_width;
       pen.arc(current_mouse_x,current_mouse_y,20,0,2*Math.PI)
        pen.stroke();
    }
    lastmousex = current_mouse_x;
    lastmousey = current_mouse_y;
}
function Clear(){
    pen.clearRect(0,0,800,600);


}
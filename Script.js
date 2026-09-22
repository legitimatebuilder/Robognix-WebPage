var smallCursor = document.querySelector('.small-cursor');
var largeCursor = document.querySelector('.large-cursor');

document.onmousemove = function (e) {
    smallCursor.style.left = (e.pageX - 5) + "px";
    smallCursor.style.top = (e.pageY - 5) + "px";

    smallCursor.style.display = "block";

    largeCursor.style.left = (e.pageX - 21) + "px";
    largeCursor.style.top = (e.pageY - 21) + "px";

    largeCursor.style.display = "block";
}

// Note: Although, the border radius makes 4px(2px for X & 2px for Y), but here the middle alignment for small cursor is attained by adding 21px for X & Y of large cursor. //
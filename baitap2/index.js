let col = document.getElementsByClassName("collapsible");
for(var i = 0; i < col.length; i++)
{
    col[i].addEventListener("click", function(){
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        content.classList.toggle("hidden")
    })
}
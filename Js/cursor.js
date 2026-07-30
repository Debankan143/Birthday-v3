const cursor = document.createElement("div");

cursor.className = "cursor";

document.body.appendChild(cursor);

document.addEventListener("mousemove",(e)=>{

    cursor.style.left = e.clientX + "px";

    cursor.style.top = e.clientY + "px";

});

document.querySelectorAll("button,a,.photo-card,.flower,#giftBox").forEach(item=>{

    item.addEventListener("mouseenter",()=>{

        cursor.classList.add("active");

    });

    item.addEventListener("mouseleave",()=>{

        cursor.classList.remove("active");

    });

});
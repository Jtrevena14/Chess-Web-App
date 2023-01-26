let arr = [];
let select=0;
let colorBoard = 0;
let holder = 0;

function colorSquares(){
    document.querySelectorAll('.sq').forEach(square =>{
        colorBoard++;
    
        colorBoard%2==0 ? square.style.backgroundColor = 'brown' : square.style.backgroundColor = 'tan';
        
        if(colorBoard==8 || colorBoard==holder+8){
            holder+=9;
            colorBoard++;
        }    
    })
}
colorSquares();

function setImages(){
    document.querySelectorAll('.sq').forEach(piece => {
        var elmnt = document.createElement("img");
        var notDrag = document.createAttribute("draggable");
        notDrag.value = "false";
        elmnt.setAttributeNode(notDrag);
        if(piece.innerText!="."){
            var att = document.createAttribute("src");
            att.value = piece.innerText+'.png';
            elmnt.setAttributeNode(att);
            
        }
        piece.appendChild(elmnt);
        
    })
}
setImages();

let highlight=0;
function selectPiece(){
    document.querySelectorAll('.sq').forEach(piece =>{
        
        piece.addEventListener('mousedown',function(){
            if(select==0 && piece.innerText!="."){
                arr[0]=piece.id;
                select=1;
            }
        })
        
        piece.addEventListener('mouseup',function(){
            if(select==1){
                arr[1]=piece.id;
                let p = document.getElementById(arr[0]).firstChild.textContent;
                document.getElementById(arr[0]).firstChild.textContent = ".";
                document.getElementById(arr[1]).firstChild.textContent = p;
                let n = document.getElementById(arr[0]).lastChild.getAttribute("src");
                document.getElementById(arr[0]).lastChild.setAttribute("src","");
                document.getElementById(arr[1]).lastChild.setAttribute('src',n);
                select=0;
                
            }
            if(highlight==1){
                colorSquares();
                highlight=0;
            }
        })
        piece.addEventListener('contextmenu',function(e){
            e.preventDefault();
            piece.style.backgroundColor="darkred";
            highlight=1;
        })
    })
    console.log(arr);
}
selectPiece();
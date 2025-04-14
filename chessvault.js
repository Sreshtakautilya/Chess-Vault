function pawnfun(){
    let p=document.getElementById("pawn")
    p.style.transform='scale(1.5)'
    let r=document.getElementById("rook")
    r.style.transform='scale(1)'
    let kn=document.getElementById("knight")
    kn.style.transform='scale(1)'
    let b=document.getElementById("bishop")
    b.style.transform='scale(1)'
    let q=document.getElementById("queen")
    q.style.transform='scale(1)'
    let k=document.getElementById("king")
    k.style.transform='scale(1)'
    let color=document.getElementById("color")
    let names=document.getElementById("name")
    let postions=document.getElementById("positions")
    let moves=document.getElementById("moves")
    let directions=document.getElementById("directions")
    let color1=document.getElementById("color1")
    let names1=document.getElementById("name1")
    let postions1=document.getElementById("positions1")
    let moves1=document.getElementById("moves1")
    let directions1=document.getElementById("directions1")
    color.textContent=" black"
    names.textContent=" Pawn"
    postions.textContent=" a7,b7,c7,d7,e7,f7,g7,h7"
    moves.textContent=" 1 to 2 steps"
    directions.textContent=" Vertically"; 
    /white ans/ 
    color1.textContent=" White"
    names1.textContent=" Pawn"
    postions1.textContent=" a2,b2,c2,d2,e2,f2,g2,h2"
    moves1.textContent=" 1 to 2 steps"
    directions1.textContent=" Vertically";     
}
function rookfun(){
  let p=document.getElementById("pawn")
  p.style.transform='scale(1)'
  let r=document.getElementById("rook")
  r.style.transform='scale(1.5)'
  let kn=document.getElementById("knight")
  kn.style.transform='scale(1)'
  let b=document.getElementById("bishop")
  b.style.transform='scale(1)'
  let q=document.getElementById("queen")
  q.style.transform='scale(1)'
  let k=document.getElementById("king")
  k.style.transform='scale(1)'
  //black div/
  let color=document.getElementById("color")
  let names=document.getElementById("name")
  let postions=document.getElementById("positions")
  let moves=document.getElementById("moves")
  let directions=document.getElementById("directions")
  //white div/
  let color1=document.getElementById("color1")
  let names1=document.getElementById("name1")
  let postions1=document.getElementById("positions1")
  let moves1=document.getElementById("moves1")
  let directions1=document.getElementById("directions1")
  //black ans/
  color.textContent=" black"
  names.textContent=" rook"
  postions.textContent=" a8,h8"
  moves.textContent=" 1 to 8 steps"
  directions.textContent=" horizontally and Vertically"; 
  //white ans/ 
  color1.textContent=" White"
  names1.textContent=" rook"
  postions1.textContent=" a1,h1"
  moves1.textContent=" 1 to 8 steps"
  directions1.textContent=" horizontally or Vertically"; 
}
function knightfun(){
  let p=document.getElementById("pawn")
  p.style.transform='scale(1)'
  let r=document.getElementById("rook")
  r.style.transform='scale(1)'
  let kn=document.getElementById("knight")
  kn.style.transform='scale(1.5)'
  let b=document.getElementById("bishop")
  b.style.transform='scale(1)'
  let q=document.getElementById("queen")
  q.style.transform='scale(1)'
  let k=document.getElementById("king")
  k.style.transform='scale(1)'
  //black div/
  let color=document.getElementById("color")
  let names=document.getElementById("name")
  let postions=document.getElementById("positions")
  let moves=document.getElementById("moves")
  let directions=document.getElementById("directions")
  //white div/
  let color1=document.getElementById("color1")
  let names1=document.getElementById("name1")
  let postions1=document.getElementById("positions1")
  let moves1=document.getElementById("moves1")
  let directions1=document.getElementById("directions1")
  //black ans/
  color.textContent=" black"
  names.textContent=" Knight"
  postions.textContent=" b8,g8"
  moves.textContent=" jumps 4 boxes"
  directions.textContent=" L shape"; 
  //white ans/ 
  color1.textContent=" White"
  names1.textContent=" rook"
  postions1.textContent=" b1,g1"
  moves1.textContent=" jumps 4 boxes"
  directions1.textContent=" L shape";
}
function bishopfun(){
  let p=document.getElementById("pawn")
    p.style.transform='scale(1)'
    let r=document.getElementById("rook")
    r.style.transform='scale(1)'
    let kn=document.getElementById("knight")
    kn.style.transform='scale(1)'
    let b=document.getElementById("bishop")
    b.style.transform='scale(1.5)'
    let q=document.getElementById("queen")
    q.style.transform='scale(1)'
    let k=document.getElementById("king")
    k.style.transform='scale(1)'
    //black div/
  let color=document.getElementById("color")
  let names=document.getElementById("name")
  let postions=document.getElementById("positions")
  let moves=document.getElementById("moves")
  let directions=document.getElementById("directions")
  //white div/
  let color1=document.getElementById("color1")
  let names1=document.getElementById("name1")
  let postions1=document.getElementById("positions1")
  let moves1=document.getElementById("moves1")
  let directions1=document.getElementById("directions1")
  //black ans/
  color.textContent=" black"
  names.textContent=" bishop"
  postions.textContent=" c8,f8"
  moves.textContent=" moves in same color"
  directions.textContent=" diagonally"; 
  //white ans/ 
  color1.textContent=" White"
  names1.textContent=" bishop"
  postions1.textContent=" c1,f1"
  moves1.textContent=" moves in same color"
  directions1.textContent=" diagonally";
}
function queenfun(){
  let p=document.getElementById("pawn")
    p.style.transform='scale(1)'
    let r=document.getElementById("rook")
    r.style.transform='scale(1)'
    let kn=document.getElementById("knight")
    kn.style.transform='scale(1)'
    let b=document.getElementById("bishop")
    b.style.transform='scale(1)'
    let q=document.getElementById("queen")
    q.style.transform='scale(1.5)'
    let k=document.getElementById("king")
    k.style.transform='scale(1)'
    //black div/
  let color=document.getElementById("color")
  let names=document.getElementById("name")
  let postions=document.getElementById("positions")
  let moves=document.getElementById("moves")
  let directions=document.getElementById("directions")
  //white div/
  let color1=document.getElementById("color1")
  let names1=document.getElementById("name1")
  let postions1=document.getElementById("positions1")
  let moves1=document.getElementById("moves1")
  let directions1=document.getElementById("directions1")
  //black ans/
  color.textContent=" black"
  names.textContent=" queen"
  postions.textContent=" d8"
  moves.textContent=" literally moves  everywhere"
  directions.textContent=" horizontally, Vertically and diagonally"; 
  //white ans/ 
  color1.textContent=" White"
  names1.textContent=" queen"
  postions1.textContent=" d1"
  moves1.textContent=" literally moves  everywhere"
  directions1.textContent=" horizontally, Vertically and diagonally";   
}
function kingfun(){
  let p=document.getElementById("pawn")
  p.style.transform='scale(1)'
  let r=document.getElementById("rook")
  r.style.transform='scale(1)'
  let kn=document.getElementById("knight")
  kn.style.transform='scale(1)'
  let b=document.getElementById("bishop")
  b.style.transform='scale(1)'
  let q=document.getElementById("queen")
  q.style.transform='scale(1)'
  let k=document.getElementById("king")
  k.style.transform='scale(1.5)'
    //black div/
    let color=document.getElementById("color")
    let names=document.getElementById("name")
    let postions=document.getElementById("positions")
    let moves=document.getElementById("moves")
    let directions=document.getElementById("directions")
    //white div/
    let color1=document.getElementById("color1")
    let names1=document.getElementById("name1")
    let postions1=document.getElementById("positions1")
    let moves1=document.getElementById("moves1")
    let directions1=document.getElementById("directions1")
 //black ans/
    color.textContent=" black"
    names.textContent=" king"
    postions.textContent=" d8"
    moves.textContent=" 1 step "
    directions.textContent=" horizontally, Vertically and diagonally"; 
    //white ans/ 
    color1.textContent=" White"
    names1.textContent=" king"
    postions1.textContent=" d1"
    moves1.textContent=" 1 step"
    directions1.textContent=" horizontally, Vertically and diagonally";
  
}
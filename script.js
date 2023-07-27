let txt1="ABCDEFGHIJKLMNOPQRSTUVWXYZ~`!@#$%^&*()_-+={}[]:;<>,.? abcdefghijklmnopqrstuvwxyz1234567890";
let txt2="$&[~<a]# @*+`<}-{:!%^_.?bcdfzeimjpgh;w=,loknqtvu(rsx)yBSGNJUDTV1F2IWX3KERH4L5M90AYOPZCQ786";

let text1Array=txt1.split("");
let text2Array=txt2.split("");



//Encryption work

let iptext=document.getElementById("iptext");
let opcode=document.getElementById("opcode");

let ency=new Object();
for(let i=0;i<text1Array.length;i++){
    ency[text1Array[i]]=text2Array[i];
}


benc=document.getElementById("b-enc");
benc.addEventListener("click",()=>{
    let message=iptext.value;
    let codeMessage="";
    
    for (let i of message){
        codeMessage+=ency[i];
    }
    opcode.value=codeMessage;
})





//decryption work

let ipcode=document.getElementById("ipcode");
let optext=document.getElementById("optext");

let decy=new Object();
for(let i=0;i<text2Array.length;i++){
    decy[text2Array[i]]=text1Array[i];
}

let outputMessage="";

bdec=document.getElementById("b-dec");
bdec.addEventListener("click",()=>{
    let givenCode=ipcode.value;
    for (let i of givenCode){
        outputMessage+=decy[i];
    }
    optext.value=outputMessage;
})

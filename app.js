//
// variables
//

const resetValue= document.querySelector("#reset");
const countList = document.querySelector("#count");
const increase  = document.querySelector("#plus");
const decrease  = document.querySelector("#minus");
const place     = document.querySelector("#add");
const addList   = document.querySelector(".list");
const items     = document.querySelector("#items");



let delList = []; 

let countValue = 1;

//
//DOM Functions
//


increase.addEventListener("click",(e)=>{
  countValue++
  countList.value=countValue;
  countList.setAttribute("value",`${countValue}`);
  countList.setAttribute("placeholder",`${countValue}`);
});

decrease.addEventListener("click",()=>{
  if(countValue>1){
  countValue--;
  countList.value=countValue;
  countList.setAttribute("value",`${countValue}`);
  countList.setAttribute("placeholder",`${countValue}`);
}});

resetValue.addEventListener("click",reset);

countList.addEventListener("input",()=>{
  if(countList.value != Number){
  countValue =countList.value;
  countList.setAttribute("value",`${countValue}`);
  countList.setAttribute("placeholder",`${countValue}`);
}else{
  window.confirm("Not a valid Number Input.")
}});


place.addEventListener("click",addItem);



items.addEventListener("keydown",(eve)=>{
    if(eve.key === 'Enter'){
      addItem();
    }
});

addList.addEventListener("click", (e) => {
  
  if (e.target.classList.contains("delList")) {
    e.target.parentElement.remove();
  }
  
});


//
//functions
//

function reset(){
  countValue = 1;
  countList.setAttribute("value",`${countValue}`);
  countList.setAttribute("placeholder",`${countValue}`);
  items.value="";
  countList.value="1";
};



function addItem(){

  if(items.value==""){
    window.confirm("Please input a Item.")
    reset();
  }else if(!Number(countValue)){

    window.confirm("Please input a Valid Number.");
    reset();

  }else{
  let ele = document.createElement("div"); 

  ele.setAttribute("class","listEle flex gap-[16px] mt-[5px] justify-between font-bold");
  ele.innerHTML=`<div class="flex gap-[10px] ">
  <input type="checkbox" class="markBox text-[2rem]">
  <p class=" markBoxP text-[1.5rem] text-white">${items.value.trim()}  x${countValue}</p>
  </div>
  <i class=" delList fa-solid fa-trash rounded-[6px] p-[10px] text-red-700 bg-white"></i>`;
  reset();
  
  addList.appendChild(ele);

  delList = [...document.getElementsByClassName("delList")];

}};


function clearList(){

}



//
//storage
//


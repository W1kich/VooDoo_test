(()=>{"use strict";const t=t=>({id:t.id,title:t.title.length>=22?t.title.slice(0,19)+"...":t.title,vendor:t.vendor,product_type:t.product_type,price:t.variants.length&&"0.00"!==t.variants[0].price?t.variants[0].price:"Sold out",img:t.images.length?t.images[0].src:"https://cdn.shopify.com/s/files/1/0690/0075/7529/products/AAUvwnj0ICORVuxs41ODOvnhvedArLiSV20df7r8XBjEUQ_s900-c-k-c0x00ffffff-no-rj.jpg?v=1670516994",option:t.options[0].values?t.options[0].values:"no option"}),e=async(e=500)=>{const s=await fetch(`https://voodoo-sandbox.myshopify.com/products.json?limit=${e}`);if(!s.ok)throw new Error(`Could not fetch ${url}, status: ${s.status}`);return(await s.json()).products.map(t)},s=()=>{const t=document.querySelector(".shoppingCard").querySelectorAll(".shopping__list__item__price"),e=document.querySelector(".total");let s=0;t.forEach((function(t){const e=t.closest(".shopping__list__item").querySelector(".countNumber");s+=parseFloat(function(t){const e=t.match(/\d+\.\d+/g);return e?+e[0]:0}(t.innerText))*parseFloat(e.innerText)})),e.innerText=s.toFixed(2)+"KR."},i=async()=>{const t=await e();let i=1;const n=(t,e,s)=>{document.querySelector(".cards").innerHTML="";const i=e*--s,n=i+e;t.slice(i,n).forEach((t=>{((t,e=".cards")=>{const s=document.createElement("div"),i=document.querySelector(e);s.innerHTML=`\n\t\t<div class="card flex flex-col gap-3 w-[300px] h-[448px] ">\n\t\t\t<div class="relative hover:cursor-pointer">\n\t\t\t\t<div class="w-[300px] h-[300px] p-[12px] border-solid border-black border-2 ">\n\t\t\t\t\t<img class="imgBox"src="${t.img}" alt=">${t.title}">\n\t\t\t\t</div>\n\t\t\t\t<div class=" rounded p-[8px] bg-black text-mainColor text-xs absolute top-[12px] left-[12px]">Used</div>\n\t\t\t</div>\n\t\t\t<div class="flex flex-row justify-between">\n\t\t\t\t<div class="flex flex-col items-start">\n\t\t\t\t\t<div class="">${t.title}</div>\n\t\t\t\t\t<div class="">${"Sold out"===t.price?"Sold out":t.price+"KR."} </div>\n\t\t\t\t</div>\n\t\t\t\t<div class="flex flex-col items-end">\n\t\t\t\t\t<div class="">Condition</div>\n\t\t\t\t\t<div class="">Slightly used</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div id="${t.id}" class="bg-black button text-mainColor p-[16px] text-sm rounded text-center hover:cursor-pointer hover:bg-slate-600">\n\t\t\t\tADD TO CART\n\t\t\t</div>\n\t\t</div> `,i.append(s)})(t)}))},r=(t,e,s)=>{const i=Math.ceil(t.length/e),n=document.querySelector(".pages"),r=function(t=i,e){let s,n="",r=e-1,o=e+1;e>1&&2!=e&&(n+='<div class="page__link p-[13px] hover:cursor-pointer flex flex-0 h-[39px] justify-center items-center border-solid border-black border-2 text-black  rounded-full font-light text-lg")">1</span></div>',e>3&&(n+='<div class="p-[11px] hover:cursor-pointer flex flex-0 h-[39px] justify-center items-center border-solid border-black border-2 text-black  rounded-full font-light text-lg" >...</div>')),e==t?r-=3:e==t-1?r-=2:e==t-2&&(r-=1),1==e?o+=3:2==e?o+=2:3==e&&(o+=1);for(let i=r;i<=o;i++)i>t||(0==i&&(i+=1),s=e==i?"active text-mainColor bg-black":"text-black",n+=i>9?`<div class="page__link p-[6px] hover:cursor-pointer flex flex-0 h-[39px] justify-center items-center border-solid border-black border-2   rounded-full font-light text-lg ${s}" >${i}</div>`:`<div class="page__link p-[11px] hover:cursor-pointer flex flex-0 h-[39px] justify-center items-center border-solid border-black border-2   rounded-full font-light text-lg ${s}" >${i}</div>`);return e<t-1&&(e<t-2&&(n+='<div class="p-[11px] hover:cursor-pointer flex flex-0 h-[39px] justify-center items-center border-solid border-black border-2 text-black  rounded-full font-light text-lg" >...</div>'),n+=`<div class="page__link p-[6px] hover:cursor-pointer flex flex-0 h-[39px] justify-center items-center border-solid border-black border-2 text-black  rounded-full font-light text-lg">${t}</div>`),n}(i,s);n.innerHTML=r};n(t,24,i),r(t,24,i),document.querySelector(".pages").addEventListener("click",(e=>{e.target.classList.contains("page__link")&&(i=+e.target.innerText,r(t,24,i),n(t,24,i),window.scrollTo({top:0,behavior:"smooth"}))})),window.addEventListener("click",(async t=>{if(t.target.classList.contains("button")){const s=document.querySelector("#shopping__list").querySelector(`#A${t.target.id}`);s?s.querySelector(".countNumber").innerHTML++:await(async t=>{const s=document.querySelector(".shopping__list"),i=document.createElement("div");let n=(await e()).filter((e=>e.id===t));if("Sold out"===n[0].price)return 0;i.id=`A${n[0].id}`,i.classList="shopping__list__item flex flex-row gap-[18px] align-top mb-[40px]",i.innerHTML=`\n\t\t\t\t<div class="rounded border-gray-500 border-2 w-[74px] h-[74px]"><img src="${n[0].img}" alt=""></div>\n\t\t\t\t<div class=" text-mainColor text-sm flex flex-col gap-[12px] w-[231px]">\n\t\t\t\t\t\t<div class="">${n[0].title}</div>\n\t\t\t\t\t\t<div class="shopping__list__item__price">${"Sold out"===n[0].price?"Sold out":n[0].price+"KR."}</div>\n\t\t\t\t\t\t<div class="counter flex flex-row items-end gap-[6px] text-center">\n\t\t\t\t\t\t\t\t<div class="minus px-[4px] pb-px min-h-[20px] min-w-[20px] hover:bg-gray-700 hover:cursor-pointer "> -</div>\n\t\t\t\t\t\t\t\t<div class="countNumber px-[3px] min-h-[20px] min-w-[20px]">1</div>\n\t\t\t\t\t\t\t\t<div class="plus px-[3px] min-h-[20px] min-w-[20px] hover:bg-gray-700 hover:cursor-pointer">+</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class="delete-bin"><img class="delete-bin" src="src/img/delete-bin-6-line.svg" alt=""></div>\n\t\t`,s.appendChild(i)})(+t.target.id)}s()}))};window.addEventListener("DOMContentLoaded",(function(){i(),window.addEventListener("click",(function(t){let e;t.target.classList.contains("delete-bin")&&(t.target.closest(".shopping__list__item").remove(),s()),(t.target.classList.contains("plus")||t.target.classList.contains("minus"))&&(e=t.target.closest(".shopping__list__item").querySelector(".countNumber")),t.target.classList.contains("plus")&&(e.innerText=++e.innerText),t.target.classList.contains("minus")&&(parseInt(e.innerText)>1?e.innerText=--e.innerText:t.target.closest(".shopping__list__item")&&1===parseInt(e.innerText)&&t.target.closest(".shopping__list__item").remove(),s()),(t.target.classList.contains("plus")||t.target.classList.contains("minus")&&t.target.closest(".shoppingCard"))&&s()})),window.addEventListener("click",(t=>{const e=document.querySelector(".shoppingCard");t.target.classList.contains("button")||t.target.classList.contains("shopping-card")?(e.classList.remove("right-[-100%]"),e.classList.add("right-[0]")):t.target.classList.contains("close-shopping-card")&&(e.classList.add("right-[-100%]"),e.classList.remove("right-[0]"))})),s(),(()=>{const t=document.querySelector(".menu__button"),e=document.querySelector(".products"),s=document.querySelector(".menu");e.addEventListener("click",(function(e){e.target.classList.contains("rotate-180")&&e.target.classList.contains("menu__button")?(s.classList.add("hidden"),s.classList.remove("left-0"),s.classList.add("left-[-100%]"),t.classList.remove("rotate-180")):!e.target.classList.contains("rotate-180")&&e.target.classList.contains("menu__button")&&(s.classList.remove("hidden"),s.classList.add("left-0"),s.classList.remove("left-[-100%]"),t.classList.add("rotate-180"))}))})()}))})();
//# sourceMappingURL=bundle.js.map
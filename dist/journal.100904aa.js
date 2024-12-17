const e=JSON.parse(localStorage.getItem("favorites"))||[],t=document.getElementById("favorites");if(console.log("overview:",e),0===e.length){let e=document.createElement("p");e.textContent="No favorite movies added yet!",e.className="text-center text-gray-500 mt-4",t.appendChild(e)}else e.forEach(l=>{let a=document.createElement("div");a.className="p-20 rounded-lg shadow-md mb-4 flex flex-col items-left bg-zinc-950";let n=document.createElement("div");n.className="flex gap-8",a.appendChild(n);let r=document.createElement("img");r.src=`https://image.tmdb.org/t/p/w500${l.poster_path}`,r.alt=l.title,r.className="w-4/12 rounded-lg mb-4",n.appendChild(r);let d=document.createElement("p");d.textContent=l.overview||"No description available.",d.className="text-lg w-1/2 text-gray-400 mb-4 text-left content-center justify-normal ",n.appendChild(d);let i=document.createElement("div");i.className="flex gap-1 mb-4",a.appendChild(i);for(let t=1;t<=5;t++){let a=document.createElement("span");a.textContent="★",a.className="text-gray-400 cursor-pointer text-2xl transition-all hover:text-yellow-400",a.dataset.value=t,l.rating&&t<=l.rating&&a.classList.add("text-yellow-400"),a.addEventListener("click",()=>{l.rating=t,Array.from(i.children).forEach((e,l)=>{e.classList.toggle("text-yellow-400",l<t)});let a=e.findIndex(e=>e.id===l.id);-1!==a&&(e[a].rating=t,localStorage.setItem("favorites",JSON.stringify(e)))}),i.appendChild(a)}let o=document.createElement("textarea");o.placeholder="Write your review...",o.className="w-4/12 p-3 border rounded mb-2 focus:outline-none text-sm",o.value=l.review||"",a.appendChild(o),document.createElement("div").className="flex space-x-2";let s=document.createElement("button");s.textContent="Submit Review",s.className="bg-blue-500 text-white px-4 py-2 rounded shadow-md hover:bg-blue-600 w-3/12",a.appendChild(s),s.addEventListener("click",()=>{let t=o.value.trim();if(t){let a=e.findIndex(e=>e.id===l.id);-1!==a&&(e[a].review=t,localStorage.setItem("favorites",JSON.stringify(e)),alert("Review saved!"))}else alert("Please write a review before submitting.")}),t.appendChild(a)});
//# sourceMappingURL=journal.100904aa.js.map
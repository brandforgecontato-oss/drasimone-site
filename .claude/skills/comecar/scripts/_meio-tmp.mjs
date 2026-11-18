import { chromium } from "playwright";
const b = await chromium.launch();
const p = await b.newPage({ viewport: { width: 1440, height: 900 } });
await p.goto("http://localhost:4321/b.html", { waitUntil: "networkidle" });
await p.evaluate(()=>document.querySelector(".abordagem").scrollIntoView());
const vistos=[];
for (let k=0;k<12;k++){ await p.waitForTimeout(1000); vistos.push((await p.evaluate(()=>document.querySelector("video").currentTime)).toFixed(1)); if(k===1||k===5||k===8) await p.screenshot({path:`${process.env.SP}/bc-${k}.png`,clip:{x:1000,y:100,width:420,height:720}}); }
console.log("tempos:", vistos.join(" "));
await b.close();

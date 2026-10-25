'use client';
import {useEffect,useState} from "react";
import Advanced from "./advanced";
import {ArrowRight,BookOpen,Check,CheckCircle2,ChevronDown,ClipboardCheck,Compass,Menu,PackageCheck,ShieldCheck,Sparkles,Target,Truck,Wallet,X} from "lucide-react";

const stages=[
 {name:"Clarify",detail:"Define the required business outcome, quantity, quality, budget and timing.",example:"A new production facility needs 300 certified safety helmets by the opening date."},
 {name:"Explore",detail:"Understand the supplier market, alternatives and availability.",example:"Identify qualified suppliers and request comparable quotations."},
 {name:"Choose",detail:"Assess potential suppliers against cost, quality, reliability, capability and risk.",example:"Compare the price of each helmet together with freight charges and lead time."},
 {name:"Agree",detail:"Document commercial obligations, specifications and responsibilities.",example:"Confirm terms for delivery, warranty, returns and payment."},
 {name:"Fulfill",detail:"Place an order, monitor delivery and verify the goods or services received.",example:"Inspect the delivered helmets against the accepted specification."},
 {name:"Improve",detail:"Measure supplier outcomes and apply lessons to future sourcing decisions.",example:"Review defects, delivery accuracy and supplier responsiveness."}
];
const benefits=[
 {Icon:Wallet,title:"Responsible spending",detail:"Understand total cost, avoid waste, and secure appropriate value.",tone:"bg-amber-100 text-amber-800"},
 {Icon:ShieldCheck,title:"Risk management",detail:"Address supplier, compliance, quality and continuity risks early.",tone:"bg-blue-100 text-blue-800"},
 {Icon:PackageCheck,title:"Quality and suitability",detail:"Turn operational needs into specifications and verify outcomes.",tone:"bg-purple-100 text-purple-800"},
 {Icon:Truck,title:"Operational continuity",detail:"Ensure the goods or services needed by the business arrive reliably.",tone:"bg-emerald-100 text-emerald-800"}
];
const quickQuiz=[
 {q:"A supplier has the lowest price but misses a mandatory delivery date. What should procurement do?",options:["Buy from the cheapest supplier","Assess delivery risk, alternatives and total business impact","Ignore the timing requirement"],a:1,why:"Procurement considers the full business outcome, not just the quoted price."},
 {q:"What should be established before requesting supplier offers?",options:["A clear business requirement","The final supplier score","An invoice payment date"],a:0,why:"A well-defined need allows offers to be assessed on a consistent basis."},
 {q:"Which best describes procurement?",options:["Only issuing purchase orders","Only negotiating discounts","Coordinating external supply to create business value"],a:2,why:"Procurement covers requirements, market engagement, agreements, fulfillment and supplier performance."}
];
export default function Page(){
 const [stage,setStage]=useState(0);
 const [expanded,setExpanded]=useState<number|null>(0);
 const [answers,setAnswers]=useState<Record<number,number>>({});
 const [complete,setComplete]=useState(false);
 const [menu,setMenu]=useState(false);
 useEffect(()=>{try{setComplete(localStorage.getItem("procurement-lesson-01")==="done")}catch{}},[]);
 const score=quickQuiz.filter((q,i)=>answers[i]===q.a).length;
 const finished=Object.keys(answers).length===quickQuiz.length;
 const toggleComplete=()=>setComplete(prev=>{try{localStorage.setItem("procurement-lesson-01",prev?"pending":"done")}catch{}return !prev});
 return <main className="min-h-screen">
 <header className="sticky top-0 z-30 border-b border-slate-200 bg-cream/95 backdrop-blur">
  <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
   <a href="#top" className="flex items-center gap-3 text-lg font-extrabold tracking-tight">
    <span className="grid h-10 w-10 place-items-center rounded-xl bg-navy text-mint"><Compass size={23}/></span>
    <span>THE PROCUREMENT <span className="text-emerald-700">ATLAS</span></span>
   </a>
   <nav aria-label="Lesson navigation" className="hidden items-center gap-6 text-sm font-medium text-slate-600 md:flex">
    <a className="hover:text-emerald-700" href="#framework">The journey</a>
    <a className="hover:text-emerald-700" href="#process">Process flow</a>
    <a className="hover:text-emerald-700" href="#capstone">Capstone</a>
    <a className="hover:text-emerald-700" href="#assessment">Assessment</a>
    <span className="rounded-full bg-slate-100 px-3 py-2">Lesson 01 / 08</span>
   </nav>
   <button type="button" aria-label="Toggle navigation" aria-expanded={menu} onClick={()=>setMenu(!menu)} className="md:hidden">{menu?<X/>:<Menu/>}</button>
  </div>
  {menu&&<nav aria-label="Mobile navigation" className="flex flex-col gap-3 border-t bg-white px-6 py-4 text-sm md:hidden">{[["Journey","#framework"],["Process flow","#process"],["Capstone","#capstone"],["Assessment","#assessment"]].map(([s,href])=><a key={href} onClick={()=>setMenu(false)} href={href}>{s}</a>)}</nav>}
 </header>
 <section id="top" className="mx-auto max-w-7xl px-5 pb-16 pt-12 md:px-8 md:pt-20">
  <div className="grid items-center gap-12 lg:grid-cols-[.95fr_1.05fr]">
   <div>
    <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-xs font-bold uppercase tracking-widest text-emerald-800"><Sparkles size={15}/> Fundamentals · Lesson 01</p>
    <h1 className="max-w-xl text-5xl font-extrabold leading-tight tracking-tight md:text-6xl">Procurement turns <span className="text-emerald-700">business needs</span> into value.</h1>
    <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">Learn why organizations obtain goods and services from external suppliers, how the process works, and how buyers balance cost, quality, risk and timing.</p>
    <div className="mt-8 flex flex-wrap gap-3"><a className="inline-flex items-center gap-2 rounded-xl bg-navy px-6 py-3 font-semibold text-white" href="#framework">Explore the journey <ArrowRight size={17}/></a><a className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-6 py-3 font-semibold" href="#capstone">Try the capstone <Target size={17}/></a></div>
    <div className="mt-8 flex flex-wrap gap-5 text-sm text-slate-500"><span className="flex items-center gap-2"><BookOpen size={17}/> Beginner-friendly</span><span className="flex items-center gap-2"><Target size={17}/> System-agnostic</span><span className="flex items-center gap-2"><CheckCircle2 size={17}/> Interactive</span></div>
   </div>
   <div className="rounded-[2rem] bg-navy p-6 text-white shadow-soft md:p-9">
    <div className="mb-7 flex items-center justify-between"><div><p className="text-xs font-bold uppercase tracking-widest text-mint">The big picture</p><h2 className="mt-2 text-2xl font-bold">From need to outcome</h2></div><span className="rounded-full border border-white/20 px-3 py-1 text-xs">6 stages</span></div>
    <div className="grid grid-cols-3 gap-2 sm:grid-cols-6">{stages.map((s,i)=><button type="button" aria-pressed={stage===i} key={s.name} onClick={()=>setStage(i)} className={stage===i?"min-h-24 rounded-xl border border-mint bg-mint p-2 text-navy":"min-h-24 rounded-xl border border-white/20 bg-white/10 p-2 text-white hover:bg-white/20"}><span className="block text-xl font-extrabold">{String(i+1).padStart(2,"0")}</span><span className="mt-2 block text-xs font-bold">{s.name}</span></button>)}</div>
    <div className="mt-5 min-h-40 rounded-2xl bg-white p-5 text-ink"><p className="text-xs font-bold uppercase tracking-widest text-emerald-700">Stage {stage+1} / 6</p><h3 className="mt-2 text-xl font-bold">{stages[stage].name}</h3><p className="mt-2 text-sm leading-6 text-slate-600">{stages[stage].detail}</p><p className="mt-3 border-l-2 border-emerald-500 pl-3 text-sm italic text-slate-500">{stages[stage].example}</p></div>
    <p className="mt-4 text-center text-xs text-slate-300">Select a stage to explore the decisions involved</p>
   </div>
  </div>
 </section>
 <section className="bg-white py-16"><div className="mx-auto max-w-7xl px-5 md:px-8">
  <p className="text-xs font-bold uppercase tracking-widest text-emerald-700">The business purpose</p><h2 className="mt-3 text-3xl font-extrabold md:text-4xl">Why procurement matters</h2>
  <p className="mt-4 max-w-2xl leading-7 text-slate-600">A sound procurement decision supports the organization—not just its purchase price.</p>
  <div className="mt-9 grid gap-4 md:grid-cols-2 lg:grid-cols-4">{benefits.map(b=><article className="rounded-2xl border border-slate-200 bg-slate-50 p-6" key={b.title}><span className={"mb-6 grid h-12 w-12 place-items-center rounded-xl "+b.tone}><b.Icon size={23}/></span><h3 className="text-lg font-bold">{b.title}</h3><p className="mt-3 text-sm leading-7 text-slate-600">{b.detail}</p></article>)}</div>
 </div></section>
 <section id="framework" className="mx-auto max-w-7xl px-5 py-20 md:px-8">
  <p className="text-xs font-bold uppercase tracking-widest text-emerald-700">An original teaching model</p><h2 className="mt-3 text-3xl font-bold md:text-4xl">The procurement journey</h2><p className="mt-4 max-w-2xl leading-7 text-slate-600">Follow the linked decisions that take a requirement from business need to measurable outcome.</p>
  <div className="mt-8 grid gap-3 md:grid-cols-3">{stages.map((s,i)=><article className="overflow-hidden rounded-2xl border border-slate-200 bg-white" key={s.name}><button type="button" className="flex w-full items-center justify-between p-5 text-left" aria-expanded={expanded===i} onClick={()=>setExpanded(expanded===i?null:i)}><span><span className="text-xs font-bold text-emerald-700">STEP {String(i+1).padStart(2,"0")}</span><span className="mt-2 block text-xl font-bold">{s.name}</span></span><ChevronDown aria-hidden size={20}/></button>{expanded===i&&<div className="border-t p-5"><p className="text-sm leading-7 text-slate-600">{s.detail}</p><p className="mt-3 border-l-2 border-emerald-500 pl-3 text-sm italic text-slate-600">{s.example}</p></div>}</article>)}</div>
  <p className="mt-5 text-sm text-slate-500">This six-stage model simplifies overlapping, iterative activities. Actual procurement policies and approvals vary.</p>
 </section>
 <Advanced/>
 <section id="quiz" className="mx-auto max-w-4xl px-5 py-16 md:px-8">
  <p className="text-xs font-bold uppercase tracking-widest text-emerald-700">Quick knowledge check</p><h2 className="mt-3 text-3xl font-bold">Test the essentials</h2><p className="mt-3 text-slate-600">Get feedback immediately for every answer.</p>
  <div className="mt-8 space-y-4">{quickQuiz.map((q,i)=><article key={q.q} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft"><p className="text-xs font-bold text-emerald-700">QUESTION {i+1} OF {quickQuiz.length}</p><h3 className="mt-3 font-bold">{q.q}</h3><div className="mt-4 space-y-2">{q.options.map((o,j)=><button type="button" key={o} onClick={()=>setAnswers(v=>({...v,[i]:j}))} className={answers[i]===j?"flex w-full items-center gap-3 rounded-xl border border-emerald-500 bg-emerald-50 p-3 text-left text-sm":"flex w-full items-center gap-3 rounded-xl border border-slate-200 p-3 text-left text-sm hover:bg-slate-50"}><span className="grid h-7 w-7 shrink-0 place-items-center rounded-full border border-slate-300 text-xs font-bold">{String.fromCharCode(65+j)}</span>{o}</button>)}</div>{answers[i]!==undefined&&<p role="status" className="mt-4 rounded-xl bg-emerald-50 p-4 text-sm text-emerald-900"><strong>{answers[i]===q.a?"Correct. ":"Review. "}</strong>{q.why}</p>}</article>)}</div>
  {finished&&<div role="status" className="mt-5 rounded-xl bg-navy p-5 text-center text-white"><span className="text-2xl font-bold">{score} / {quickQuiz.length}</span><p className="mt-2 text-sm text-slate-200">Review the explanations before continuing.</p></div>}
  <div className="mt-8 flex flex-wrap items-center justify-between gap-4 rounded-2xl border bg-white p-5"><div><p className="font-bold">Lesson 01 · Understanding procurement</p><p className="mt-1 text-sm text-slate-500">Saved only in this browser.</p></div><button type="button" onClick={toggleComplete} className={complete?"inline-flex items-center gap-2 rounded-xl bg-emerald-100 px-5 py-3 font-bold text-emerald-900":"inline-flex items-center gap-2 rounded-xl bg-navy px-5 py-3 font-bold text-white"}>{complete?<><Check size={17}/> Completed — undo</>:<><CheckCircle2 size={17}/> Mark complete</>}</button></div>
 </section>
 <footer className="border-t border-slate-200 bg-white px-5 py-8 text-center text-sm text-slate-500">The Procurement Atlas · Independent system-agnostic education · Fictional case studies · Phase 1.1</footer>
 </main>;
}

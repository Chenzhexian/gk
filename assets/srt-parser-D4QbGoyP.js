import{V as c,a as i,b as a}from"./prod-RtkHkcfd.js";import"./app-D1Nt7VoA.js";const n=/,/g,u="-->";class o extends c{parse(s,e){var r,h;if(s==="")this.c&&(this.l.push(this.c),(h=(r=this.h).onCue)==null||h.call(r,this.c),this.c=null),this.e=i.None;else if(this.e===i.Cue)this.c.text+=(this.c.text?`
`:"")+s;else if(s.includes(u)){const t=this.q(s,e);t&&(this.c=new a(t[0],t[1],t[2].join(" ")),this.c.id=this.n,this.e=i.Cue)}this.n=s}q(s,e){return super.q(s.replace(n,"."),e)}}function p(){return new o}export{o as SRTParser,p as default};

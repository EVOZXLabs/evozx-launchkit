function generateDocs(){

const project=
document.getElementById(
"project"
).value;

const token=
document.getElementById(
"token"
).value;

const symbol=
document.getElementById(
"symbol"
).value;

const supply=
document.getElementById(
"supply"
).value;

const description=
document.getElementById(
"description"
).value;


const html=

`<!DOCTYPE html>

<html>

<head>

<title>${project}</title>

<link rel="stylesheet"
href="style.css">

</head>

<body>

<section class="hero">

<h1>${project}</h1>

<p>${description}</p>

<button>

BUY ${symbol}

</button>

</section>


<section>

<h2>About</h2>

<p>

${project}
built on EVOZ Mainnet

</p>

</section>


<section>

<h2>Token Info</h2>

<p>

Token:

${token}

</p>

<p>

Supply:

${supply}

</p>

</section>


<section>

<h2>Utility</h2>

<ul>

<li>Community</li>

<li>Payments</li>

<li>Ecosystem</li>

</ul>

</section>


<section>

<h2>Roadmap</h2>

<p>

Launch

Growth

Expansion

</p>

</section>


<section>

<h2>FAQ</h2>

<p>

What is ${project}?

Blockchain project.

</p>

</section>

</body>

</html>
`;


const css=

`
body{

font-family:Arial;

margin:0;

background:#0a1022;

color:white;

}

.hero{

padding:120px 20px;

text-align:center;

}

section{

padding:50px 20px;

max-width:900px;

margin:auto;

}

button{

padding:15px 30px;

font-size:18px;

}

`;

document.getElementById(
"landinghtml"
).value=html;

document.getElementById(
"landingcss"
).value=css;

document.getElementById(
"preview"
).srcdoc=

`<style>${css}</style>${html}`;

}


function copyText(id){

const el=
document.getElementById(id);

el.select();

document.execCommand(
"copy"
);

}


function downloadText(id,file){

const text=
document.getElementById(id).value;

const blob=
new Blob(
[text]
);

const a=
document.createElement(
"a"
);

a.href=
URL.createObjectURL(
blob
);

a.download=file;

a.click();

}

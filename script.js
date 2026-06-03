function generateDocs(){

const project =
document.getElementById("project").value.trim();

const token =
document.getElementById("token").value.trim();

const symbol =
document.getElementById("symbol").value.trim();

const supply =
document.getElementById("supply").value.trim();

const description =
document.getElementById("description").value.trim();


if(
!project||
!token||
!symbol||
!supply
){

alert(
"Please fill all fields"
);

return;

}


const readme =

`# ${project}

Overview

${description}

Token

Name: ${token}

Symbol: ${symbol}

Supply: ${supply}

Network

EVOZ Mainnet

Website

Coming Soon
`;


const whitepaper =

`# ${project} Whitepaper

Introduction

${project} is built on EVOZ Mainnet.

Vision

Create utility and sustainable growth.

Utilities

Community Rewards

Payments

Ecosystem Services

Conclusion

Building long term ecosystem value.
`;


const roadmap =

`PHASE 1

• Token Creation

• Community Building

• Launch Website


PHASE 2

• Partnerships

• Utility Development

• Growth Campaign


PHASE 3

• Product Expansion

• User Acquisition

• Ecosystem Scaling
`;


const tokenomics =

`TOKENOMICS

50% Community

20% Ecosystem

20% Development

10% Marketing

Supply:

${supply}
`;


const contract =

`pragma solidity ^0.8.20;

contract ${symbol}Token {

string public name =
"${token}";

string public symbol =
"${symbol}";

uint public totalSupply =
${supply};

address public owner;

constructor(){

owner=msg.sender;

}

}
`;


const logo =

`Create a futuristic crypto logo for ${project}.

Theme:

dark blockchain

modern technology

glowing elements

token symbol ${symbol}

professional launch ready branding

high quality vector style
`;


const bio =

`${project}

Building on EVOZ Mainnet.

Token:

${token}

Symbol:

${symbol}

Community driven ecosystem.
`;



document.getElementById(
"readme"
).value=readme;

document.getElementById(
"whitepaper"
).value=whitepaper;

document.getElementById(
"roadmap"
).value=roadmap;

document.getElementById(
"tokenomics"
).value=tokenomics;

document.getElementById(
"contract"
).value=contract;

document.getElementById(
"logo"
).value=logo;

document.getElementById(
"bio"
).value=bio;

}



function copyText(id){

const el=
document.getElementById(id);

el.select();

document.execCommand(
"copy"
);

alert(
"Copied"
);

}



function downloadText(id,file){

const text=
document.getElementById(id).value;

const blob=
new Blob(
[text],
{type:"text/plain"}
);

const a=
document.createElement(
"a"
);

a.href=
URL.createObjectURL(blob);

a.download=file;

a.click();

}

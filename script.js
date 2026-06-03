function generateDocs() {

const project =
document.getElementById("project").value;

const token =
document.getElementById("token").value;

const symbol =
document.getElementById("symbol").value;

const supply =
document.getElementById("supply").value;

const description =
document.getElementById("description").value;

const readme =
`# ${project}

## Overview

${description}

## Token Information

- Name: ${token}
- Symbol: ${symbol}
- Supply: ${supply}

## Network

EVOZ Mainnet

## Website

Coming Soon
`;

const whitepaper =
`# ${project} Whitepaper

## Introduction

${project} is a blockchain project built on EVOZ Mainnet.

## Vision

To build sustainable utility and ecosystem growth.

## Token

Name: ${token}

Symbol: ${symbol}

Supply: ${supply}

## Use Cases

Community
Payments
Rewards
Utilities

## Conclusion

${project} aims to contribute to the EVOZ ecosystem.
`;

const roadmap =
`# ${project} Roadmap

Phase 1
- Token Creation
- Website Launch
- Community Setup

Phase 2
- Ecosystem Development
- Partnerships
- Utility Expansion

Phase 3
- Product Launch
- User Growth
- Ecosystem Integration
`;

const tokenomics =
`# ${project} Tokenomics

Token Name:
${token}

Symbol:
${symbol}

Max Supply:
${supply}

Distribution

50% Community

20% Ecosystem

20% Development

10% Marketing
`;

document.getElementById("readme").value =
readme;

document.getElementById("whitepaper").value =
whitepaper;

document.getElementById("roadmap").value =
roadmap;

document.getElementById("tokenomics").value =
tokenomics;

}

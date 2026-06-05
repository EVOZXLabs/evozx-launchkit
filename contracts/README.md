<div align="center">🧩 EVOZX Token Source

Source code reference for all ERC20 tokens deployed through EVOZX Launch Kit.

<br><img src="https://img.shields.io/badge/Standard-ERC20-blue?style=for-the-badge"><img src="https://img.shields.io/badge/Extension-Burnable-orange?style=for-the-badge"><img src="https://img.shields.io/badge/Compiler-0.8.20-success?style=for-the-badge"></div>---

📖 Overview

All tokens deployed through EVOZX Launch Kit are generated using the same smart contract source code.

Each deployed token only differs in:

- Token Name
- Token Symbol
- Total Supply
- Creator Address

The contract logic remains identical for every token.

---

📄 Contract File

EVOZXToken.sol

---

⚙️ Compiler Settings

Setting| Value
Solidity| 0.8.20
Optimizer| Enabled
Runs| 200
EVM Version| Paris

---

🔥 Features

✅ ERC20 Standard

✅ ERC20 Burnable Extension

✅ Fixed Supply Minting

✅ Creator Ownership Tracking

✅ EVM Compatible

---

🏗 Constructor

constructor(
    string memory name_,
    string memory symbol_,
    uint256 supply_,
    address creator_
)

---

🪙 Mint Logic

Token supply is minted once during deployment:

_mint(
    creator_,
    supply_ * 10 ** decimals()
);

---

🌐 Launch Kit

Official Launch Kit:

https://evozxlabs.github.io/EVOZX-LaunchKit/

---

🏭 Factory Contract

0x3F810a44D29a4f0fF7880641E69EBCBc076dA220

---

📜 License

MIT License

---

<div align="center">Built with ❤️ by EVOZX Labs

For EVOZ Mainnet Ecosystem

</div>

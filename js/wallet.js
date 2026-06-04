let provider;
let signer;
let currentAccount;

async function connectWallet() {

    if (!window.ethereum) {

        alert(
            "Wallet EVM tidak terdeteksi.\n\nGunakan TokenPocket, OKX Wallet, Bitget Wallet, Rabby atau MetaMask."
        );

        return;

    }

    try {

        await provider.send(
            "eth_requestAccounts",
            []
        );

        await switchToEvoz();

        await updateWalletInfo();

    } catch (error) {

        console.error(error);

    }

}

async function switchToEvoz() {

    const chainHex =
        "0x" +
        CONFIG.CHAIN_ID.toString(16);

    try {

        await window.ethereum.request({

            method:
                "wallet_switchEthereumChain",

            params: [
                {
                    chainId:
                        chainHex
                }
            ]

        });

    } catch (error) {

        if (error.code === 4902) {

            await window.ethereum.request({

                method:
                    "wallet_addEthereumChain",

                params: [

                    {

                        chainId:
                            chainHex,

                        chainName:
                            CONFIG.CHAIN_NAME,

                        nativeCurrency: {

                            name:
                                CONFIG.CURRENCY_SYMBOL,

                            symbol:
                                CONFIG.CURRENCY_SYMBOL,

                            decimals:
                                18

                        },

                        rpcUrls: [
                            CONFIG.RPC_URL
                        ],

                        blockExplorerUrls: [
                            CONFIG.EXPLORER_URL
                        ]

                    }

                ]

            });

        }

    }

}

function shortenAddress(address) {

    return (
        address.substring(0, 6) +
        "..." +
        address.substring(
            address.length - 4
        )
    );

}

async function updateWalletInfo() {

    provider =
        new ethers.providers.Web3Provider(
            window.ethereum
        );

    const accounts =
        await provider.listAccounts();

    if (accounts.length === 0) {

        document.getElementById(
            "walletAddress"
        ).innerText =
            "Wallet not connected";

        return;

    }

    currentAccount =
        accounts[0];

    signer =
        provider.getSigner();

    document.getElementById(
        "walletAddress"
    ).innerText =
        shortenAddress(
            currentAccount
        );

    const chainId =
        await window.ethereum.request({
            method: "eth_chainId"
        });

    const networkDiv =
        document.getElementById(
            "networkStatus"
        );

    if (networkDiv) {

        if (
            parseInt(chainId, 16) ===
            CONFIG.CHAIN_ID
        ) {

            networkDiv.innerText =
                "Network: EVOZ Mainnet";

        } else {

            networkDiv.innerText =
                "Network: Wrong Network";

        }

    }

}

async function checkConnection() {

    if (!window.ethereum) {
        return;
    }

    try {

        await updateWalletInfo();

    } catch (error) {

        console.error(error);

    }

}

window.addEventListener(
    "load",
    checkConnection
);

if (window.ethereum) {

    window.ethereum.on(
        "accountsChanged",
        function() {

            updateWalletInfo();

        }
    );

    window.ethereum.on(
        "chainChanged",
        function() {

            updateWalletInfo();

        }
    );

}

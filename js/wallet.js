let provider;
let signer;
let currentAccount;

function shortenAddress(address) {

    return (
        address.substring(0, 6) +
        "..." +
        address.substring(
            address.length - 4
        )
    );

}

function updateConnectButton(address) {

    const btn =
        document.getElementById(
            "connectBtn"
        );

    btn.innerText =
        shortenAddress(address);

}

function resetConnectButton() {

    document.getElementById(
        "connectBtn"
    ).innerText =
        "Connect Wallet";

}

async function connectWallet() {

    if (!window.ethereum) {

        alert(
            "Wallet EVM tidak terdeteksi.\n\nBuka website ini melalui browser wallet seperti TokenPocket, OKX Wallet, Bitget Wallet, Rabby atau MetaMask."
        );

        return;

    }

    try {

        await switchToEvoz();

        const currentChain =
            await window.ethereum.request({
                method: "eth_chainId"
            });

        const targetChain =
            "0x" +
            CONFIG.CHAIN_ID.toString(16);

        if (
            currentChain.toLowerCase() !==
            targetChain.toLowerCase()
        ) {

            alert(
                "Silakan pindah ke EVOZ Mainnet terlebih dahulu."
            );

            return;

        }

        provider =
            new ethers.providers.Web3Provider(
                window.ethereum
            );

        await provider.send(
            "eth_requestAccounts",
            []
        );

        signer =
            provider.getSigner();

        currentAccount =
            await signer.getAddress();

        document.getElementById(
            "walletAddress"
        ).innerText =
            currentAccount;

        updateConnectButton(
            currentAccount
        );

    } catch (error) {

        console.error(error);

        document.getElementById(
            "walletAddress"
        ).innerText =
            "Connection Failed";

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

            try {

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

            } catch (addError) {

                console.error(addError);

            }

        }

    }

}

async function checkConnection() {

    if (!window.ethereum) {
        return;
    }

    try {

        provider =
            new ethers.providers.Web3Provider(
                window.ethereum
            );

        const accounts =
            await provider.listAccounts();

        if (accounts.length > 0) {

            currentAccount =
                accounts[0];

            document.getElementById(
                "walletAddress"
            ).innerText =
                currentAccount;

            updateConnectButton(
                currentAccount
            );

        }

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
        function(accounts) {

            if (accounts.length > 0) {

                currentAccount =
                    accounts[0];

                document.getElementById(
                    "walletAddress"
                ).innerText =
                    currentAccount;

                updateConnectButton(
                    currentAccount
                );

            } else {

                document.getElementById(
                    "walletAddress"
                ).innerText =
                    "Wallet not connected";

                resetConnectButton();

            }

        }
    );

    window.ethereum.on(
        "chainChanged",
        function() {

            window.location.reload();

        }
    );

}

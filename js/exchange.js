async function loadExchangeStock() {

try {

    const provider =
        new ethers.providers.JsonRpcProvider(
            CONFIG.RPC_URL
        );

    const exchange =
        new ethers.Contract(
            CONFIG.EXCHANGE_ADDRESS,
            EXCHANGE_ABI,
            provider
        );

    const stock =
        await exchange.getAvailableStock();

    document.getElementById(
        "exchangeStock"
    ).innerHTML =

        "Available Stock: " +

        Number(
            ethers.utils.formatUnits(
                stock,
                18
            )
        ).toLocaleString() +

        " EVOZX";

} catch (error) {

    console.error(
        error
    );

    document.getElementById(
        "exchangeStock"
    ).innerHTML =

        "Available Stock: Error";

}

}

function calculateEVOZX() {

const amount =
    parseFloat(

        document.getElementById(
            "buyAmount"
        ).value

    ) || 0;

const receive =
    amount /
    CONFIG.EXCHANGE_RATE;

document.getElementById(
    "receiveAmount"
).innerHTML =

    "Receive: " +

    receive.toLocaleString() +

    " EVOZX";

}

async function addEVOZXToWallet() {

try {

    await window.ethereum.request({

        method:
            "wallet_watchAsset",

        params: {

            type:
                "ERC20",

            options: {

                address:
                    CONFIG.EVOZX_ADDRESS,

                symbol:
                    "EVOZX",

                decimals:
                    18

            }

        }

    });

} catch (error) {

    console.error(
        error
    );

}

}

async function buyEVOZX() {

try {

    if (
        !window.ethereum
    ) {

        alert(
            "Wallet not detected."
        );

        return;

    }

    const amount =
        document.getElementById(
            "buyAmount"
        ).value;

    if (
        !amount ||
        Number(amount) <= 0
    ) {

        alert(
            "Enter EVOZ amount."
        );

        return;

    }

    document.getElementById(
        "exchangeStatus"
    ).innerHTML =

        `
        <div class="loading"></div>
        Waiting for wallet confirmation...
        `;

    const provider =
        new ethers.providers.Web3Provider(
            window.ethereum
        );

    const signer =
        provider.getSigner();

    const exchange =
        new ethers.Contract(
            CONFIG.EXCHANGE_ADDRESS,
            EXCHANGE_ABI,
            signer
        );

    const tx =
        await exchange.buyEVOZX({

            value:
                ethers.utils.parseEther(
                    amount
                )

        });

    document.getElementById(
        "exchangeStatus"
    ).innerHTML =

        `
        <div class="loading"></div>
        Processing transaction...
        `;

    await tx.wait();

    const received =
        Number(amount) /
        CONFIG.EXCHANGE_RATE;

    document.getElementById(
        "exchangeStatus"
    ).innerHTML =

        `
        ✅ Successfully purchased
        ${received.toLocaleString()}
        EVOZX

        <br><br>

        <button
        onclick="addEVOZXToWallet()">

            Add EVOZX To Wallet

        </button>

        <br><br>

        <a
        href="${CONFIG.EXPLORER_URL}/tx/${tx.hash}"
        target="_blank">

            View Transaction

        </a>
        `;

    document.getElementById(
        "buyAmount"
    ).value = "";

    document.getElementById(
        "receiveAmount"
    ).innerHTML =

        "Receive: 0 EVOZX";

    await loadExchangeStock();

} catch (error) {

    console.error(
        error
    );

    document.getElementById(
        "exchangeStatus"
    ).innerHTML =

        `
        ❌ ${error.message}
        `;

}

}

window.addEventListener(

"load",

async () => {

    await loadExchangeStock();

}

);

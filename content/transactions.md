
# Transactions

Transactions are at the heart of blockchain and so they are typically shown right on the home screen of any wallet. Users quickly want to see if a transaction they made was processed and if any new new ones have come in.

## Transaction lists

<fig desktop="half,right" drop="false">
	<fig-img
		src="/images/transactions/transaction-summary-display.png"
		retina="/images/transactions/transaction-summary-display@2x.png"
		width="620"
		height="485"
		alt="Typical structure of a home screen"
	/>
</fig>

Wallet designs for transaction lists are really diverse at the moment. Some provide only basic facts and read more like database outputs, while others show too much information resulting in tiny fonts. In this type of list, users just need to have a few basic questions answered, so they can decide whether they want to click/tap to see all the details:

- Why was this transaction made?
- What type of transfer was this (payment, deposit, vote...)?
- Which currency was this in (for multi-currency systems)
- What was the amount?
- Who sent it?
- When was it made?
- Did it go through?

That's a lot of information to pack in a small area, so each piece needs to be carefully considered and placed.

### Examples

<image-grid count="3">
	<image-grid-img
		src="/images/transactions/skycoin-app-transactions.png" 
		width="1200" 
		height="2133"
		alt="Skycoin app transactions" 
		caption="Skycoin for Android, Version 1.1.1, August 20, 2018"
		title="Skycoin for Android, Version 1.1.1, August 20, 2018"
		link="https://play.google.com/store/apps/details?id=com.skycoin.wallet"
	/>
	<image-grid-img
		src="/images/transactions/ravencoin-app-transactions.jpg" 
		width="738" 
		height="1432"
		alt="Ravencoin app transactions" 
		caption="Ravencoin Android wallet, Version 1.1FI, September 4, 2018"
		title="Ravencoin Android wallet, Version 1.1FI, September 4, 2018"
		link="https://play.google.com/store/apps/details?id=com.ravencoin"
	/>
	<image-grid-img
		src="/images/transactions/trittum-app-transactions.jpg" 
		width="720" 
		height="1280"
		alt="Trittum app transactions" 
		caption="Trittum app, Version 1.0.0, August 16, 2018"
		title="Trittum app, Version 1.0.0, August 16, 2018"
		link="https://play.google.com/store/apps/details?id=com.megano.trittium_mobile_wallet"
	/>
	<image-grid-img
		src="/images/transactions/citowise-transactions.jpg" 
		width="750" 
		height="1624"
		alt="Transactions in the Citowise app." 
		caption="Transactions in the Citowise app."
		title="Citowise - Ethereum Wallet, V 1.7.3, Sep 19, 2018"
		link="https://itunes.apple.com/US/app/id1358433319?mt=8"
	/>
</image-grid>

## Transaction details

These screens typically duplicate the information shown in the transaction list screens and show it in a slightly expanded format with more labels and context, and then show a host of secondary information (fees, transactions IDs, etc). Users typically look for the transaction status ("Did it go through?") and want a way to share a receipt or transaction confirmation.

### Examples

<image-grid count="1">
	<image-grid-img
		src="/images/transactions/tron-app-transaction-transfer.jpg" 
		width="1125" 
		height="2436" 
		alt="Tron for Android - transaction details"
		caption="Tron for Android, Version 1.1.5, August 30, 2018"
		title="Tron for Android, Version 1.1.5, August 30, 2018"
		link="https://play.google.com/store/apps/details?id=com.tronwallet2"
	/>
	<image-grid-img
		src="/images/transactions/citowise-send-receipt.jpg" 
		width="750" 
		height="1624" 
		alt="Transaction details in the Citowise app." 
		caption="Transaction details in the Citowise app."
		title="Citowise - Ethereum Wallet, V 1.7.3, Sep 19, 2018"
		link="https://itunes.apple.com/US/app/id1358433319?mt=8"
	/>
	<image-grid-img
		src="/images/transactions/moneroju-send-receipt.png" 
		width="780" 
		height="1386" 
		alt="Transaction details in the monerujo app." 
		caption="Transaction details in the monerujo app."
		title="monerujo, V 1.6.4, August 20, 2018"
		link="https://play.google.com/store/apps/details?id=com.m2049r.xmrwallet"
	/>
</image-grid>

<!--

## Examples

### Skycoin

<ann screensize="small" cid="skycoin-app-transactions">
	<ann-figure
		src="/images/transactions/skycoin-app-transactions.png" 
		width="1200" 
		height="2133"
		alt="Trittum app transactions" 
		caption="Skycoin for Android, Version 1.1.1, August 20, 2018"
		link="https://play.google.com/store/apps/details?id=com.skycoin.wallet"
	/>
	<ann-list>
		<ann-list-item position="0.32, 0.5">Labels (like "Primary" or "Savings") would be helpful.</ann-list-item>
		<ann-list-item position="0.89, 0.6">The USD balance could also be added for each address, just like it's shown in the wallet summary at the top.</ann-list-item>
		<ann-list-item position="0.12, 0.74">Quick access to the QR code is nice. An alternative solution would be for the whole row to be clickable and reveal the full address and QR code in the detail screen.</ann-list-item>
	</ann-list>
</ann>

### Ravencoin

Transactions are at the heart of blockchain and so they are typically shown right on the home screen of any wallet. Users quickly want to see if a transaction they made was processed and if any new new ones have come in.

<ann screensize="small" cid="ravencoin-app-transactions">
	<ann-figure
		src="/images/transactions/ravencoin-app-transactions.jpg" 
		width="738" 
		height="1432"
		alt="Ravencoin app transactions" 
		caption="Ravencoin Android wallet, Version 1.1FI, September 4, 2018"
		link="https://play.google.com/store/apps/details?id=com.ravencoin"
	/>
	<ann-list>
		<ann-list-item position="0.31, 0.24">The price and syncing status are pretty squeezed in and could be placed differently.</ann-list-item>
		<ann-list-item position="0.2, 0.41">Not necessary to show the symbol here, since the wallet only handles Ravencoin.</ann-list-item>
		<ann-list-item position="0.55, 0.65">Addresses could be shortened to "1234...5678" to save space and increase font size for better legibility.</ann-list-item>
	</ann-list>
</ann>

---

### Trittum

This is an example of a wallet that leaves out all labels. The result is an interface where only actual data is shown and there are no explananations, and only minor visual cues, to let the user know what is what.

<ann screensize="small" cid="trittum-app-transactions">
	<ann-figure
		src="/images/transactions/trittum-app-transactions.jpg" 
		width="720" 
		height="1280"
		alt="Trittum app transactions" 
		caption="Trittum app, Version 1.0.0, August 16, 2018"
		link="https://play.google.com/store/apps/details?id=com.megano.trittium_mobile_wallet"
	/>
	<ann-list>
		<ann-list-item position="0.08, 0.08">Could benefit from a different label like “Your wallets” or “Your coins”</ann-list-item>
		<ann-list-item position="0.16, 0.44">No indication that these are transactions.</ann-list-item>
		<ann-list-item position="0.13, 0.75">Users are expected to know what each symbol stands for.</ann-list-item>
		<ann-list-item position="0.4, 0.83">Dates could be formatted differently to be more readable, such as “12 minutes ago” or “July 6, 2018”.</ann-list-item>
		<ann-list-item position="0.73, 0.21">Coin symbols used in transaction list should also be used up here to make the visual connection.</ann-list-item>
		<ann-list-item position="0.6, 0.66">Transaction status (sending, received) not indicated.</ann-list-item>
		<ann-list-item position="0.86, 0.83">Transaction type (sent/received) only hinted at by amount color and +/-.</ann-list-item>
	</ann-list>
</ann>

---

### Tron

<ann screensize="small" cid="tron-app-transactions">
	<ann-figure
		src="/images/transactions/tron-app-transactions.jpg" 
		width="1125" 
		height="2436"
		alt="Tron app transactions" 
		caption="Tron for Android, Version 1.1.5, August 30, 2018"
		link="https://play.google.com/store/apps/details?id=com.tronwallet2"
	/>
	<ann-list>
		<ann-list-item position="0.85, 0.1">Filter options by transaction type could be helpful.</ann-list-item>
		<ann-list-item position="0.12, 0.16">Color coding different types of transactions works well.</ann-list-item>
		<ann-list-item position="0.92, 0.4">The icons appear to reflect the transaction type and not shown on the transaction detail screen. If so, they are duplicate information and could be removed. Instead, a progress or payment/deposit indicator might be more helpful.</ann-list-item>
		<ann-list-item position="0.47, 0.69">Addresses could be shortened to "1234...5678" to save space and increase font size for better legibility. Ideally, address labels could be used.</ann-list-item>
	</ann-list>
</ann>

<fig desktop="third,right" mobile="half,right">
	<fig-img
		src="/images/transactions/tron-app-transaction-transfer.jpg" 
		width="1125" 
		height="2436" 
		alt="Tron for Android - transaction details"
	/>
	<fig-cap
		caption="Tron for Android, Version 1.1.5, August 30, 2018"
		link="https://play.google.com/store/apps/details?id=com.tronwallet2"
	/>
</fig>

The transaction detail screen of the Tron app is well-designed. It still is hard to understand what this transaction was about, users may ask questions like:

- Does "Transfer" mean Tron was moved between my own addresses?
- Or did I pay someone or receive a payment?
- Why was this transaction made?

To answer those, an indicator could be added whether this transaction was a payment or deposit. It would also be helpful to show a payment note, as well as labels for addresses, and move those higher up on the screen. The hash could be deprioritized - while it is useful information, it does help with the top-level understanding of the transaction.

-->
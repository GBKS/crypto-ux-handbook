
# Requesting payments

Requesting payments may be straightforward for casual users. All they need to do is share an address and an amount, and wait for the payment to appear in their wallet. For businesses that receive hundreds of payments, it is important to have options to more easily manage and organize transactions.

<flow>
	<ol>
		<flow-step>
			<h4>Request</h4>
			<p>User A shares their address, the amount, and an optional payment ID with User B.</p>
		</flow-step>
		<flow-step>
			<h4>Sending</h4>
			<p>User B initiates the transaction with their own wallet.</p>
		</flow-step>
		<flow-step>
			<h4>Processing</h4>
			<p>The transaction is queued and processed by the network.</p>
		</flow-step>
		<flow-step>
			<h4>Confirmation</h4>
			<p>After a certain amount of blocks, the transaction is considered confirmed.</p>
		</flow-step>
	</ol>
</flow>

This page focuses on Step 1, for the other steps, review the page about [sending](sending).

Most wallets have a screen for receiving or requesting payments. Typically, this is just a way to view your public address and a matching QR code, so it can be shared with others so they can pay you. The Obike app shown here is the most basic example of this.

<image-grid count="2">
	<image-grid-img
		src="/images/receive/obike-app-receive.jpg"
		width="576"
		height="1024"
		alt="Obike app - receive screen"
		caption="Obike is the most basic example of showing a simple address and the matching QR code."
	/>
	<image-grid-img
		src="/images/receive/cake-wallet-receive.png" 
		width="750" 
		height="1333"
		alt="Cake Wallet receive screen" 
		caption="Cake Wallet receive screen."
		title="Cake Wallet, V 3.0.1, Sep 24, 2018"
		link="https://itunes.apple.com/us/app/cake-wallet-for-xmr-monero/id1334702542?mt=8"
	/>
	<image-grid-img
		src="/images/receive/trittum-app-receive.jpg"
		width="720"
		height="1280"
		alt="Trittium app - receive screen"
		caption="Trittium allows for multiple coins and multiple addresses for each one."
	/>
	<image-grid-img
		src="/images/receive/iota-trinity-receive.png" 
		width="1440" 
		height="2560"
		alt="Receive screen in the IOTA app." 
		caption="Receive screen in the IOTA app."
		title="IOTA Trinity Wallet, V 0.5.0, September 14, 2018"
		link="https://play.google.com/store/apps/details?id=com.iota.trinity"
	/>
	<image-grid-img
		src="/images/receive/vechain-receive.png" 
		width="1440" 
		height="2560"
		alt="Receive screen in the VeChainThor app." 
		caption="Receive screen in the VeChainThor app."
		title="VeChainThor Wallet, V 1.2.0, September 7, 2018"
		link="https://play.google.com/store/apps/details?id=com.vechain.wallet"
	/>
	<image-grid-img
		src="/images/receive/nano-app-receive.jpg"
		width="750"
		height="1333"
		alt="Nano app - receive screen"
		caption="Nano"
	/>
</image-grid>

---

## Multiple addresses

<fig desktop="half,right">
	<fig-img
		src="/images/receive/monero-gui-receive.png"
		width="2048"
		height="1536"
		alt="Monero desktop wallet - receive"
	/>
	<fig-cap
		caption="Monero desktop wallet"
		link="https://getmonero.org/downloads/"
	/>
</fig>

The Monero desktop wallet allows for managing multiple addresses. Each address can be labelled to make them easier for users to identify. However, the labels are only stored locally (and not in the blockchain). That means the labels are not available on a wallet on another device, which is a small usability problem.

If an amount is entered into the input field at the bottom, that amount is also encoded in the QR code. This makes it easier to request specific amounts of Monero by others. A payment ID still needs to be communicated separately.

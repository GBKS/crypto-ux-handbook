
# Making payments

Blockchain data structures are fundamentally about transfers (inputs and outputs between addresses), and initiating a transfer is probably the action users take most frequently in wallet or exchange software. If you talk to cryptocurrency users or listen to Podcasts, you will frequently hear about a feeling of anxiety around sending money. People are afraid to typing in the wrong address, or they get nervous when a transaction is not showing up in an explorer or on an exchange after a few minutes. In traditional bank transfers it's perfectly normal that you have to wait for a few days and that you don't really know what happens in that time period. But with cryptocurrencies, the expectations are much higher and good interface design can help reduce some of the anxiety.

## User flow

Sending coins typically follows a linear sequence of events, as follows:

<flow>
	<ol>
		<flow-step>
			<h4>Request</h4>
			<p>User A shares their address, the amount, and an optional payment ID with User B.</p>
		</flow-step>
		<flow-step>
			<h4>Address input</h4>
			<p>User B enters/copies the address or scans a QR code.</p>
		</flow-step>
		<flow-step>
			<h4>Amount input</h4>
			<p>User B enters the amount to send.</p>
		</flow-step>
		<flow-step>
			<h4>Fee adjustment</h4>
			<p>User B may increase the transaction fee for faster processing.</p>
		</flow-step>
		<flow-step>
			<h4>Payment ID</h4>
			<p>A payment ID may be entered to uniquely identify the purpose of the transaction later.</p>
		</flow-step>
		<flow-step>
			<h4>Review & confirmation</h4>
			<p>The UI requires User B to review the transaction details before sending it to the network.</p>
		</flow-step>
		<flow-step>
			<h4>Sending</h4>
			<p>The transaction is sent to the network for processing.</p>
		</flow-step>
		<flow-step>
			<h4>Processing</h4>
			<p>After a certain amount of blocks, the transaction is considered confirmed.</p>
		</flow-step>
		<flow-step>
			<h4>Confirmed</h4>
			<p>Once confirmed, the transaction is final and settled.</p>
		</flow-step>
	</ol>
</flow>

Note that typically you don't have to select an address from which the amount is taken from. While you usually receive payments on multiple addresses, wallets tend to disregard them for sending. An outgoing transaction might even include amounts from several addresses (for technical reasons). Some wallets offer options to choose a single "from" address. 

### 1. Payment request

<fig desktop="half,right" :drop="false">
	<fig-img
		src="/images/sending/share-address.png"
		retina="/images/sending/share-address@2x.png"
		width="600"
		height="300"
		alt="Sharing a cryptocurrencies address"
	/>
</fig>

The user receives a request for payment and navigates to the "Send" screen in their wallet. The recipient may share their address, or a payment ID (which has the address, amount and purpose encoded). The payment ID can also be received via a QR code.

<break />

### 2. Address input

<fig desktop="half,right" :drop="false">
	<fig-img
		src="/images/sending/recipient-address.png"
		retina="/images/sending/recipient-address@2x.png"
		width="620"
		height="576"
		alt="Entering the recipient address"
	/>
</fig>

The recipient address may be entered manually, which can be error prone. It is better to use copy/paste functionality or providing the option to scan a QR code. This is covered in [addresses](addresses).

If the wallet supports services like [OpenAlias](https://openalias.org) or the [Ethereum Name Service](https://ens.domains), users can also enter URLs or email addresses that are then resolved into addresses. In those cases, it should be clarified that this option is available, and users should ideally verify that the correct address was retrieved.

<break />

### 3. Amount input

<fig desktop="half,right" :drop="false">
	<fig-img
		src="/images/sending/amount-to-send.png"
		retina="/images/sending/amount-to-send@2x.png"
		width="620"
		height="250"
		alt="Entering the amount to send"
	/>
</fig>

Entering the amount to pay is fairly straightforward. Important is to show how many coins the user currently has in their account, as well as the amount converted to the users local currency (Euro, Dollar, etc). Another popular option is to "Send all".

<break />

### 4. Fee adjustment

<fig desktop="half,right" :drop="false">
	<fig-img
		src="/images/sending/myetherwallet-gas-limit.png"
		width="770"
		height="150"
		alt="MyEtherWallet gas limit"
	/>
	<fig-cap
		caption="Entering a transaction fee on MyEtherWallet."
		title="MyEtherWallet"
		link="https://www.myetherwallet.com"
	/>
</fig>

Nobody likes fees, but they are necessary for several purposes. For once, free transactions would likely lead to spam and network attacks. Second, they help compensate miners for their work. Since many cryptocurrencies have fixed supply, mining rewards will drop to zero at some point and fees will become the sole incentive for miners to continue their work.

<break />

<fig desktop="half,right" :drop="false">
	<fig-img
		src="/images/sending/transaction-fee-adjustment-slider.png"
		retina="/images/sending/transaction-fee-adjustment-slider@2x.png"
		width="620"
		height="261"
		alt="Transaction fee adjustment via a slider"
	/>
</fig>

Users can typically increase fees for higher priority to get a transaction processed by the network. In some cases, like Monero, fees can also be increase for higher privacy (increased ring size in this case).

<break />

<fig desktop="half,right" :drop="false">
	<fig-img
		src="/images/sending/transaction-fee-adjustment.png"
		retina="/images/sending/transaction-fee-adjustment@2x.png"
		width="620"
		height="340"
		alt="Transaction fee adjustment"
	/>
</fig>

Fees are typically fairly low, but can become substantial during peak network loads like December 2018. Also note that fees are independent of the amount that is sent. So sending $100,000 costs the same fee as $1.

Regarding the user experience, fee adjustment is often shown as a slider that ranges from low priority to high priority. As the user adjusts it, the indicators for transaction fee and processing time update dynamically.

<break />

### 5. Payment ID input

Some cryptocurrencies allow for an additional payment ID. In Monero, for example, the receiving and sending addresses are encrypted, so submitting a payment ID allows for faster matching of the transaction to a user account or invoice. Also note that so-called integrated addresses are a way to bake an address and a payment ID into a single address, which is much easier to work with.

### 7. Review & confirmation

<fig desktop="third,right" mobile="half,right">
	<fig-img
		src="/images/sending/monero-send-review.png"
		width="750"
		height="1334"
		alt="Reviewing a transaction before sending it"
	/>
</fig>

Before sending the transaction for processing to the network, it is good practice to ask the user to review the information again to spot any mistakes. This is also a good moment to add an optional note, although this note will not be sent along with the transaction or stored in the blockchain.

<break />

### 8. Sent confirmation

<fig desktop="third,right" mobile="half,right">
	<fig-img
		src="/images/sending/monero-send-receipt.png"
		width="750"
		height="1334"
		alt="A receipt for a sent transaction"
	/>
</fig>

Once sent, the transaction cannot be modified or reversed. Now senders may want to send a confirmation about the transaction to the recipient (a proof of transaction, or receipt), and both the sender and recipient may want to observe the transaction as it gets processed by the network.

<break />

### 9. Processing

<fig desktop="half,right" :drop="false">
	<fig-img
		src="/images/sending/transaction-status.png"
		retina="/images/sending/transaction-status@2x.png"
		width="620"
		height="653"
		alt="Transaction status display"
	/>
</fig>

Transactions get first added to a queue and then added to a block. Then, the confirmation process begins. A confirmed transaction simply means that a certain number of blocks has been added to the blockchain after the block the transaction is stored in. Since blockchains have target block times, it's then possible to give an estimated confirmation time. The transaction will already show up in the receiving and sending wallet before being confirmed.

<break />

### 10. Confirmed

A transaction is considered confirmed if a certain number of blocks has been added to the chain after the block that contains the transaction. In Monero, that number is 10. A block is created every 2 minutes (in Monero), so a transaction takes about 20 minutes to be confirmed.

Centralized services can monitor transactions and send out emails or notifications as the confirmation process happens. I am not sure whether this is a technical limitation, but notifications are not usually offered by most software wallets.

---

## Keep users informed

<fig desktop="half,right" drop="false">
	<fig-img
		src="/images/user-onboarding/notifications.png"
		retina="/images/user-onboarding/notifications@2x.png"
		width="620"
		height="232"
		alt="Notifications"
	/>
</fig>

Sometimes it can be a good idea to perform an action in the background (like processing a transaction), while allowing users to move on to other things. This is particularly important in crypto where actual money is being sent.

---

## Help users get it right

<fig desktop="half,right" drop="false">
	<fig-img
		src="/images/sending/error-messages.png"
		retina="/images/sending/error-messages@2x.png"
		width="620"
		height="390"
		alt="Better error messages"
	/>
</fig>

Users will make mistakes. When they do, don't hold it against them with big red errors and technical statements. It's better to help them understand how to get it right.

---

## Examples

### Moneroju send flow

<image-grid count="4">
	<image-grid-img
		src="/images/sending/moneroju-send.png" 
		width="780" 
		height="1386"
		alt="Moneroju wallet send screen" 
		caption="Entering the amount."
	/>
	<image-grid-img
		src="/images/sending/moneroju-send-confirm.png" 
		width="780" 
		height="1386"
		alt="Moneroju wallet send screen" 
		caption="Confirming the transaction before sending it to the network."
	/>
	<image-grid-img
		src="/images/sending/moneroju-send-receipt.png" 
		width="780" 
		height="1386"
		alt="Moneroju wallet send screen" 
		caption="Transaction summary and receipt."
	/>
	<image-grid-img
		src="/images/sending/moneroju-home.png" 
		width="780" 
		height="1386"
		alt="Moneroju wallet send screen" 
		caption="The payment appears in the transaction list (for both sender and receiver)."
	/>
</image-grid>

### Various others

<image-grid count="2">
	<image-grid-img
		src="/images/sending/cake-wallet-send.png" 
		width="750" 
		height="1333"
		alt="Cake Wallet send screen" 
		caption="Cake Wallet send screen."
		title="Cake Wallet, V 3.0.1, Sep 24, 2018"
		link="https://itunes.apple.com/us/app/cake-wallet-for-xmr-monero/id1334702542?mt=8"
	/>
	<image-grid-img
		src="/images/sending/skycoin-send.png" 
		width="755" 
		height="1343"
		alt="Send screen in the Skycoin wallet app." 
		caption="Send screen in the Skycoin wallet app." 
		title="Skycoin wallet app, V 1.1.1, August 20, 2018"
		link="https://play.google.com/store/apps/details?id=com.skycoin.wallet"
	/>
	<image-grid-img
		src="/images/sending/coinbase-send.png" 
		width="750" 
		height="1334"
		alt="Send screen in the Coinbase app." 
		caption="Send screen in the Coinbase app." 
	/>
	<image-grid-img
		src="/images/sending/iota-trinity-send.png" 
		width="1440" 
		height="2560"
		alt="Send screen in the IOTA app." 
		caption="Send screen in the IOTA app."
		title="IOTA Trinity Wallet, V 0.5.0, September 14, 2018"
		link="https://play.google.com/store/apps/details?id=com.iota.trinity"
	/>
	<image-grid-img
		src="/images/sending/vechain-send.png" 
		width="1440" 
		height="2560"
		alt="Send screen in the VeChainThor app." 
		caption="Send screen in the VeChainThor app."
		title="VeChainThor Wallet, V 1.2.0, September 7, 2018"
		link="https://play.google.com/store/apps/details?id=com.vechain.wallet"
	/>
	<image-grid-img
		src="/images/sending/nano-send.jpg" 
		width="750" 
		height="1624"
		alt="Send screen in the Nano wallet app." 
		caption="Send screen in the Nano wallet app."
		link="https://itunes.apple.com/us/app/nano-wallet-for-ios/id1373912752?mt=8"
		title="Nano wallet for iOS, V 1.0.1, July 25, 2018"
	/>
	<image-grid-img
		src="/images/sending/citowise-send.jpg" 
		width="750" 
		height="1624"
		alt="Send screen in the Citowise app." 
		caption="Send screen in the Citowise app."
		title="Citowise - Ethereum Wallet, V 1.7.3, Sep 19, 2018"
		link="https://itunes.apple.com/US/app/id1358433319?mt=8"
	/>
</image-grid>



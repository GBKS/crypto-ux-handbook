
# Addresses

Addresses are very important for users since that's how accounts are managed and transactions are made. Addresses are long strings of letters and numbers, which makes them hard to parse and impossible to memorize (compared to email addresses, for example). Because of this, interfaces play an important role to help users work with addresses efficiently while avoiding mistakes.

Here are some example address for different coins.

**Bitcoin**
`1AeM3wYnDpEd5tRrGyUphL2nnTPQsAvTEz`

**Ethereum**
`0x0243420b50035805f01ED87F6EAE89F13Ec216eB`

**Monero**
`43Yfjr3vygyWwK1voeB4HaMkUGQBSVqCb2tRaRWPbSsKho1yjtmm7PPbVY1N722n7LeV82YHfWfsTBTVpTp63H8J8UXSTzd`

This makes it easy to make mistakes when passing addresses on to others. Therefore many wallets offer prominent copy/paste options as well as QR codes, which are simply visual representations of addresses. Since [QR](https://en.wikipedia.org/wiki/QR_code) codes can be easily scanned by smartphone or desktop cameras, they are one of the most convenient ways to forward addresses to others.

A second aspect of addresses is that the offer a way for users to better manage their money. For example, a user can set up addresses for long-term savings, business invoices, or weekly allowances.

---

## Address display

<fig desktop="half,right" :drop="false">
	<fig-img
		src="/images/addresses/ethereum-blockies-example.png"
		retina="/images/addresses/ethereum-blockies-example@2x.png"
		width="600"
		height="544"
		alt="Ethereum address display examples"
	/>
</fig>

Addresses can be shown in a few different ways. Full addresses are long and impossible to memorize. They also sometimes don't fit into interfaces well, like in a list of transactions on a smartphone app. For those instances, it has become common to shorten addresses to the first four and the last four characters, as shown above. When making or reviewing a transaction, the full address should still be shown.

Additional services like [OpenAlias](https://openalias.org) and the [Ethereum Name Service](https://ens.domains) allow for the creation of shorthands for addresses that look more like email addresses or URLs. Those are not widely adopted yet and can require advanced technical knowledge to set up.

<break />

<fig desktop="half,right">
	<fig-img
		src="/images/addresses/myetherwallet-address-icons.png"
		width="1408"
		height="757"
		alt="MyEtherWallet screenshot"
	/>
	<fig-cap
		caption="Address display on MyEtherWallet."
		title="MyEtherWallet"
		link="https://www.myetherwallet.com/"
	/>
</fig>

Another approach is to visualize addresses. [Blockies](https://github.com/ethereum/blockies) turn addresses into unique, colorful icons that serve no other purpose than allowing us to make a visual comparison, something people are good at. QR codes follow the same principle, but they are made for computers to read addresses easily.

---

## Entering addresses

As much as possible, addresses should not be entered manually. It is much less error-prone to copy and paste or scan a QR code. Check the page about [sending](sending) for details.

<image-grid count="2">
	<image-grid-img
		src="/images/sending/coinbase-send.png" 
		width="750" 
		height="1334"
		alt="Send screen in the Coinbase app." 
		caption="Send screen in the Coinbase app." 
		title="Skycoin wallet app, V 1.1.1, August 20, 2018"
		link="https://play.google.com/store/apps/details?id=com.skycoin.wallet"
	/>
	<image-grid-img
		src="/images/addresses/blocks-scan-qr-code.jpg"
		width="750"
		height="1333"
		alt="Blocks Nano wallet"
		caption="Scanning a QR code in the Blocks Nano wallet."
		link="https://itunes.apple.com/us/app/nano-blocks/id1378558905?ls=1&mt=8"
	/>
</image-grid>

---

## Managing your addresses

<fig desktop="half,right" :drop="false">
	<fig-img
		src="/images/addresses/your-addresses.png"
		retina="/images/addresses/your-addresses@2x.png"
		width="600"
		height="345"
		alt="Managing your own addresses"
	/>
</fig>

It is recommended to use a new address for every transaction. For non-casual users, this can quickly get messy, and the need to manage addresses becomes important. Creating new addresses is straightforward, one of the more tricky parts is giving users tools to keep them organized over time. Address labels are not stored on the blockchain, so adding a label to a wallet address on your phone will not add that label to the wallet on your laptop.

---

## Contacts

<fig desktop="half,right" :drop="false">
	<fig-img
		src="/images/addresses/contacts.png"
		retina="/images/addresses/contacts@2x.png"
		width="600"
		height="345"
		alt="Managing contacts"
	/>
</fig>

Many wallets call the list of addresses you have sent money to "Address book". I recommend using "Contacts" to avoid confusion with management of the addresses of your own wallet.

<break />

## Examples

<image-grid count="2">
	<image-grid-img
		src="/images/addresses/vechain-contacts.png" 
		width="1440" 
		height="2560"
		alt="Empty contacts screen in the VeChainThor app." 
		caption="Empty contacts screen in the VeChainThor app."
		title="VeChainThor Wallet, V 1.2.0, September 7, 2018"
		link="https://play.google.com/store/apps/details?id=com.vechain.wallet"
	/>
	<image-grid-img
		src="/images/addresses/vechain-contacts-add.png" 
		width="1440" 
		height="2560"
		alt="Adding a contact in the VeChainThor app." 
		caption="Adding a contact in the VeChainThor app."
		title="VeChainThor Wallet, V 1.2.0, September 7, 2018"
		link="https://play.google.com/store/apps/details?id=com.vechain.wallet"
	/>
	<image-grid-img
		src="/images/addresses/trittium-addresses.jpg" 
		width="720" 
		height="1280"
		alt="Address list in the Trittium app" 
		caption="Trittium for Android"
	/>
	<image-grid-img
		src="/images/addresses/canoe-address-book.jpg"
		width="750"
		height="1624"
		alt="Canoe wallet address book"
		caption="Canoe Nano wallet address book"
		link="https://itunes.apple.com/us/app/canoe-nano-wallet/id1365127213?mt=8"
	/>
</image-grid>
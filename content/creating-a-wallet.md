
# Creating a wallet

<fig desktop="half,right">
	<fig-img
		src="/images/user-onboarding/bitcoin-core-launch.png"
		width="1516"
		height="1066"
		alt="Bitcoin Core wallet - initial launch"
	/>
	<fig-cap
		caption="Bitcoin Core wallet - initial launch"
		link="https://bitcoin.org/en/download"
	/>
</fig>

One of the first things any cryptocurrency user needs to do is to set up a wallet. Many times, wallet software will automatically create a new wallet during the first launch without even letting the user know. Before jumping in, let's talk about what a wallet is, since some of the terms are used loosely and may actually describe different things.

---

## Seed phrase

<fig desktop="half,right">
	<fig-img
		src="/images/user-onboarding/lightning-new-app-seed.png"
		width="1760"
		height="1226"
		alt="Lightning desktop wallet - new seed"
	/>
	<fig-cap
		caption="Generating a new seed in the Lightning wallet."
		title="Lightning wallet"
		link="https://github.com/lightninglabs/lightning-app"
	/>
</fig>

The majority of wallets are deterministic. That means that all addresses used for sending and receiving are generated from a seed phrase. That seed phrase is a list of 24 words. Because that seed phrase is so important, it should receive a lot of attention during the wallet creation and users should receive clear instructions on what it is and how to protect it.

Seed phrases may also be called recovery phrases, mnemonic seeds, paper keys and other terms. While it's tempting to use the technical term, a more easily understandable term like "recovery phrase" that users already know from other software they use can be the smarter choice. 

---

## Examples

### Ethos

[Ethos](https://www.ethos.io/) calls itself a universal wallet. It's goal is to allow users to manage all their digital assets in a central interface. Many wallets focus on a single cryptocurrency or on tracking a portfolio of multiple assets, so Ethos is quite ambitious. Their first-time user experience is well thought out and spans at least a dozen screens. While there is usually a tendency to reduce the number of screens and amount of copy users see when getting started, Ethos goes the opposite route, as you can see in the screenshots (from August 2018) below. This is a sharp contrast to the majority of desktop wallets that don't show any of these screens but simply create a new seed in the background during first launch without informing the user at all.

<image-grid count="8">
	<image-grid-img
		src="/images/user-onboarding/ethos-onboarding-1.png" 
		width="1440" 
		height="2560"
		alt="Getting started with the Ethos mobile wallet" 
		caption="The first screen clearly explains what is about to happen."
	/>
	<image-grid-img
		src="/images/user-onboarding/ethos-onboarding-2.png" 
		width="1440" 
		height="2560"
		alt="Ethos wallet app user onboarding" 
		caption="Another heads-up what users will have to do so they don't get caught off-guard."
	/>
	<image-grid-img
		src="/images/user-onboarding/ethos-onboarding-3.png" 
		width="1440" 
		height="2560"
		alt="Ethos wallet app user onboarding" 
		caption="A fun idea to use motion to create random data, although it may not be obvious how or why this works to a general audience."
	/>
	<image-grid-img
		src="/images/user-onboarding/ethos-onboarding-4.png" 
		width="1440" 
		height="2560"
		alt="Ethos wallet app user onboarding" 
		caption="Another primer on what is asked of the user next."
	/>
	<image-grid-img
		src="/images/user-onboarding/ethos-onboarding-5.png" 
		width="1440" 
		height="2560"
		alt="Ethos wallet app user onboarding" 
		caption="One of the four screens showing the unique seed."
	/>
	<image-grid-img
		src="/images/user-onboarding/ethos-onboarding-6.png" 
		width="1440" 
		height="2560"
		alt="Ethos wallet app user onboarding" 
		caption="Another clear statement of what is expected of the user."
	/>
	<image-grid-img
		src="/images/user-onboarding/ethos-onboarding-7.png" 
		width="1440" 
		height="2560"
		alt="Ethos wallet app user onboarding" 
		caption="This overlay may unnecessarily include technical terms like 'handshake'."
	/>
	<image-grid-img
		src="/images/user-onboarding/ethos-onboarding-8.png" 
		width="1440" 
		height="2560"
		alt="Ethos wallet app user onboarding" 
		caption="Final confirmation that the software is now set up for use."
	/>
</image-grid>

### Ark

While Ethos uses motion data from shaking the phone, the Ark wallet lets the user randomly draw curves on the screen to create unique, random data to generate the new seed. While Ark uses much fewer screens, the big, red message about storing the 'secret passphrase' is pretty clear.

<image-grid count="3">
	<image-grid-img
		src="/images/first-use/ark-create-wallet-entropy.png" 
		width="1440" 
		height="2560"
		alt="Entropy creation in the Ark mobile wallet" 
	/>
	<image-grid-img
		src="/images/first-use/ark-create-wallet-ready.png" 
		width="1440" 
		height="2560"
		alt="Recovery phrase display in the Ark mobile wallet" 
	/>
	<image-grid-img
		src="/images/first-use/ark-create-wallet-encrypt.png" 
		width="1440" 
		height="2560"
		alt="PIN encryption in the Ark mobile wallet" 
	/>
</image-grid>

### Bread

The bread goes also has a thorough process for ensuring that users correctly write down their seed phrase (they call it 'paper key'). There's one word per screen, and users have to click through all 12 of them before they can continue.

<image-grid count="2">
	<image-grid-img
		src="/images/first-use/bread-app-paper-key.png" 
		width="750" 
		height="1334"
		alt="Bread app - paper key" 
		caption="The bread app calls the mnemonic seed a 'paper key'."
	/>
	<image-grid-img
		src="/images/first-use/bread-app-paper-key-word.png" 
		width="750" 
		height="1334"
		alt="Bread app - paper key" 
		caption="As with Ethos, users are asked to write down each word with pen and paper."
	/>
</image-grid>

### IOTA Trinity

These are some screens from the wallet creation flow in the [IOTA Trinity wallet](https://play.google.com/store/apps/details?id=com.iota.trinity) to show to what lengths wallets go to guide users through proper security measures. Note that the screens showing the actual seed are not included here.

<image-grid count="2">
	<image-grid-img
		src="/images/first-use/iota-trinity-create-wallet-1.png" 
		width="1440" 
		height="2560"
		alt="Security settings screen in the IOTA app."
	/>
	<image-grid-img
		src="/images/first-use/iota-trinity-create-wallet-2.png" 
		width="1440" 
		height="2560"
		alt="Security settings screen in the IOTA app."
	/>
	<image-grid-img
		src="/images/first-use/iota-trinity-create-wallet-3.png" 
		width="1440" 
		height="2560"
		alt="Security settings screen in the IOTA app."
	/>
	<image-grid-img
		src="/images/first-use/iota-trinity-create-wallet-4.png" 
		width="1440" 
		height="2560"
		alt="Security settings screen in the IOTA app."
	/>
	<image-grid-img
		src="/images/first-use/iota-trinity-create-wallet-5.png" 
		width="1440" 
		height="2560"
		alt="Security settings screen in the IOTA app."
	/>
	<image-grid-img
		src="/images/first-use/iota-trinity-create-wallet-6.png" 
		width="1440" 
		height="2560"
		alt="Security settings screen in the IOTA app."
	/>
</image-grid>

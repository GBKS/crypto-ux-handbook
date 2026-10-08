
#  User onboarding

**User onboarding is about increasing the likelihood that new users become successful when adopting your product.**

Blockchain and cryptocurrencies are primarily used to transfer value (money), so helping users understand what is happening and how to use the software is much more important than in social media, for example. Making a mistake in a Tweet is no big deal. Sending Bitcoin to the wrong address is irreversible and most likely means that the money is lost. This may change in the future, but at this point, cryptocurrencies are much more unforgiving than what people are used to from traditional financial institutions. If there is a fraudulent charge on a credit card, it is still possible to call the bank and reverse the transaction. Not so with crypto.

So the full control you have over your finance in crypto comes with the extra responsibility of managing your own security and being thorough in your actions. This also puts much more responsibility on us, the people who design the systems and interfaces others rely on.

## A typical usage lifecycle

Below is an outline of the usage lifecycle, which is the general series of steps a user can take from being completely unaware of a service, to becoming a power user. This document is primarily about step 4, the [first-time user experience](first-use), and focuses on the particular needs and desires a user has at that point. If you get that part right, many other steps become easier.

<flow>
	<ol>
		<flow-step>
			<h4>Unaware</h4>
			<p>Everybody starts here and has never heard or seen your company or product before.</p>
		</flow-step>
		<flow-step>
			<h4>Aware</h4>
			<p>A user hears about the service for the first time. This could be via word of mouth, advertising, or other channels.</p>
		</flow-step>
		<flow-step>
			<h4>Interested</h4>
			<p>A user gets interested in the service through repeat exposure and decides to try it out.</p>
		</flow-step>
		<flow-step>
			<h4>First-time use</h4>
			<p>The user starts tries the service out for the first time. Basic concepts need to be explained and ideally the user can successfully achieve a task to set them up for the next steps.</p>
		</flow-step>
		<flow-step>
			<h4>Regular use</h4>
			<p>Through repeat use, the user becomes more familiar with the service and starts using more of the features.</p>
		</flow-step>
		<flow-step>
			<h4>Passionate use</h4>
			<p>These are expert users with high expectations of the service. They will express strong wishes, provide feedback and also spread the word to potential new users.</p>
		</flow-step>
	</ol>
</flow>

## General tips & tricks

### Start with the user

<fig drop="false">
	<fig-img
		src="/images/user-onboarding/city-crowd.jpg"
		width="2000"
		height="702"
		alt="City crowd"
	/>
	<fig-cap
		caption="You always design for other people."
		title="Photo by Artur Kraft"
		link="https://unsplash.com/photos/mZk3lQzf0Xo"
	/>
</fig>

Whenever you design something, it is important to keep in mind who your users are, and what part of the lifecycle the are currently in. There is no point in explaining complex workflows to users who just heard about your service, and power users won't gain much from general overviews. The goal is always to be highly considerate of the situation the user is in and what their goals are, and then help them be successful. Talking to users and diving deep into analytics to understand behavior are invaluable.

### Use simple language

<fig desktop="half,right" mobile="half,right">
	<fig-img
		src="/images/exchanges/legolas-modes.png"
		width="1600"
		height="3261"
		alt="Legolas"
	/>
	<fig-cap
		caption="LGO offers different UIs for users with different needs."
		title="UI announcement by LGO"
		link="https://medium.com/lgogroup/introducing-lgos-trading-interface-77967e4e108e"
	/>
</fig>

Professionals tend to use terms that only people in their field are familiar with. But it's important to avoid those, or at least only use them after they have been explained to users. Politicians tend to keep their language at a 6-8th grade level, and Ernest Hemingway kept his language to the level of 5th graders (there's [an app](http://www.hemingwayapp.com/) for that). It is tempting to see this as a "dumbing down", but it's simply a good approach to ensure that you can reach a wide audience and force yourself to explain things simply.

<break />

### One thing at a time

Thing, in this case, refers to a mental process, not a UI element. Try to break activities down into the individual tasks users have to accomplish. This could be understanding a concept or user flow, filling out a form field, reviewing and confirmation something, etc. Designing for mobile first is a good way to encourage this idea during the design process. There is so little screen estate on mobile phones that you automatically start splitting things up.

### Before & after

<fig desktop="half,right" drop="false">
	<fig-img
		src="/images/user-onboarding/before-and-after.png"
		retina="/images/user-onboarding/before-and-after@2x.png"
		width="620"
		height="333"
		alt="Consider before & after"
	/>
</fig>

Beyond splitting up individual tasks, you can also consider splitting a single task into the before, during and after. Before performing the task, a user needs to understand what they are about to do, how to perform it, and if they need to prepare anything beforehand. After a task, it can often be helpful to summarize what just happened, the effects it has, and what's about to happen next. 

### Identify your happy path

<fig desktop="half,right" drop="false">
	<fig-img
		src="/images/first-use/the-happy-path.png"
		width="620"
		height="359"
		alt="The happy path"
	/>
</fig>

In most user flows, there is a combination of steps that will work out great for 90% of users while also requiring little effort. Smart defaults, automatic validation and error detection, hiding rarely used functions, etc are all ways to create a simple and smooth flow. Advanced features can still be accessible at each step via collapsible elements, customizable settings, and advanced setup flows. This approach can establish an overall simplicity while allowing for depth when needed. Just make sure the happy path works in the best interest of the user.

### It's OK to add friction

While it's generally good to remove extraneous elements and steps, there are moments where it's good to intentionally add friction. Those moments are many times not related to something that happens on the tech side, but when you want a user to be aware of something.

For example, [Metamask](https://metamask.io/) can automatically log out into decentralized apps without you ever having used the app before. But it can be confusing to be thrown directly into software functionality without the initial friction of an onboarding or introduction flow.

---

Now let's take a closer look at the [first-time user experience](first-use).
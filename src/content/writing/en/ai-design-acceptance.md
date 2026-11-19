---
title: "Is What You Tell AI the Same Thing Clients Used to Tell You?"
description: "One app screen, two ways of briefing AI: vague feedback took 6 rounds to reach barely usable, while a design system plus acceptance criteria scored 5/5 by version 2. Four methods for getting AI to design right, and a brief template you can copy."
date: "2026-11-19"
cover: "/images/writing/ai-design-acceptance/f_a6b3.webp"
relatedWork: "shunfeng"
figuresNote: "The test ran on a Chinese-language app, so the screenshots and figure labels are in Chinese. Each caption explains what the figure shows."
---

"Make this text a bit bigger."

"Move it a little to the left."

"It feels kind of flat. Can it feel more lively?"

Anyone who designs for a living has been worn down by lines like these. What we used to dread most was feedback that can't explain itself, where all you can do is guess, round after round.

Now AI executes the design for us. But look back at the instructions we give it, and they are often exactly these lines. **We seem to have become the client we used to hate.**

If you have used AI to make a social graphic or a banner, you have seen it: the logo stretched or recolored, the brand blue turned into a "close-enough blue". The whole thing looks great, yet it isn't your company's at all.

## AI designs to deliver, not to serve a purpose

When I review designs, I have always followed a fixed order:

1. **At first glance, can the CTA (or whatever users must spot instantly) be seen right away?**
2. **Overall balance and harmony.** Can users tell what this page is about at once?
3. **Do the style and colors fit the brand?**
4. **Is each heading distinct enough**, and does the hierarchy match the priorities we set?
5. **Is all the content there, and is it correct?**

Big picture first, details last. First make sure the page "works", then pick at the details.

AI usually starts from point five. It fills in everything you gave it, gets the data right, then lays it out in whatever way it finds attractive (or generic). Whether the first four points hold is **pure luck**.

Worse, AI naturally drifts toward the average. Say "more lively" and you get the average of everything "lively". Leave the brand colors undefined and you get the most common mainstream colors and styles: good-looking, but impossible to match to a corporate identity.

So the problem isn't that AI can't design. **It's that we keep "what counts as right" in our heads and hand it a single line: "make it more lively."**

## The test: one screen, two ways of briefing

I tested this on [Shunfeng](/en/work/shunfeng/), an app I built at the Meta AI Hackathon that listens to airport announcements for deaf and hard-of-hearing travelers. It already has a complete design system in Figma.

The new screen to design: **a flight delay page**. BR198 from Taipei to Tokyo Narita, scheduled for 14:05, delayed to 15:20, and gate B7 may change.

I opened two separate design sessions with Claude. Neither could see the other, and neither could see my acceptance criteria.

- **Group A (free rein)**: I gave it one existing screen and said "match this style". After that, only five pieces of feedback: make the text bigger; the key point doesn't stand out; it feels flat; can it feel more reassuring; make it more refined.
- **Group B (spec-bound)**: I gave it the token table, the component list, the rules and five concrete requirements up front. It had to sketch first, then self-check against my five-layer review order before handing in.

The results:

|  | A: free rein | B: spec-bound |
| --- | --- | --- |
| Versions | 6 (first draft + 5 rounds of feedback) | 1 sketch + 3 finished versions (v3 was polish after scoring 5) |
| My scores | 2 → 2 → 2 → 3 → 4 → 4 | 5 on v2 |
| Deliverable | v6, barely | v2 |
| Colors outside the design system | 11 in v1, 18 in v6 | 0 |
| Shadows / gradients | 0 → 6 / 6 the moment I said "flat" | 0 / 0 |
| What I said | "A bit more…" over and over | Answered 5 design questions the AI asked me |

![Left: Group A, version 6. Middle: Group B, version 3. Right: Group B after tapping the primary button, with a 50% dark overlay behind the notification](/images/writing/ai-design-acceptance/f_a6b3.webp)

Left is Group A's version 6 after five rounds. Middle and right are Group B's version 3 and its state after the primary button is tapped.

What struck me most:

**"Make the key point stand out" created the screen's biggest flaw.** In round 3 I said "the key point doesn't stand out", and the AI painted the whole delay card brand indigo, the same color as the primary button ("Show large-text card to ground staff"). The highlight block and the CTA now clash and compete for attention, so the CTA is no longer the first thing you see. That breaks the first layer of my review. The clash survived all the way to version 6, because none of my later feedback was about the CTA.

![Left: Group A, round 2, where the delay card is white with a thin border. Right: after "the key point doesn't stand out" in round 3, the whole delay card turns the same indigo as the primary button](/images/writing/ai-design-acceptance/f_a2a3.webp)

**Group A had drifted from the design system from version 1.** I assumed that with a screenshot, the colors would be exact. But 11 of its 12 colors were approximations guessed from the screenshot. The brand indigo came out as #1B2A8C instead of #17288B, a difference you can barely see.

**Vague feedback makes AI invent styles.** The moment I said "it feels flat", six shadows and six gradients appeared, with corner radii anywhere from 2 to 22px. Shunfeng's design system says "cards use a 1px border only, no shadows". With my last line, "make it more refined", the AI shrank the text on its own, undoing round 2's "make the text bigger". Fixing B broke A.

**Semantic colors got misused.** Group A put "Confirmed" on a dark blue background. My comment: the dark background limits the palette. The card holds several layers of information, but color can no longer rank them, so it's hard to read.

**An AI with a spec stops to ask.** Across the sketch and version 1, Group B asked me five questions: which semantic color the delay should use; whether changing the Flight card counts as a new variant; what the primary button does; whether the gate number's type size could go down; whether a modal is allowed. **It was clearly already thinking about the experience, and about where the design system needed room to flex.**

**The self-check was honest.** In version 1, Group B reported on its own: "Type hierarchy fails: B7 is the same size as 15:20." Since the fix meant changing a component, it asked me first. The color list it reported matched what the measuring script found exactly.

**With a system, polish doesn't knock things over.** After Group B scored 5, I asked for two refinements: a 50% dark overlay behind the notification when it pops up, and remove the "vibrates once" label. The AI simply took the existing body-text token (#111433) at 50% opacity for the overlay. Invented colors, shadows and gradients stayed at zero, and nothing else drifted. Group A, by contrast, sprouted new colors and shadows with every change.

## Method 1: Lay the foundation, then let AI extend it

We used to be unable to define a design system for every single project. With AI's help, that's now easy. So I always start by defining the brand colors and building a basic design system in Figma, then let AI apply that system to extend the design. When something needs to change, I change the token, and everything moves together.

Without this foundation, the long run is a disaster:

- A button ends up with dozens of looks, and you can't say what each one is for.
- You can't iterate the UI, test user preferences or follow trends by adjusting tokens.
- You just keep telling AI to change the style. Step one meets the brief; by step n, over 30% of the UI has different colors and looks. In the test above, off-system colors grew from 11 to 18. That's this effect.

Many people worry that rules will limit what AI can design. My experience is the opposite: rules are the foundation that makes design more flexible. Inside a company, the brand always had someone guarding it, and output always had standards (and if not, front-end development would block it or force it back in line, to the front-end team's tears). **When AI does the work, you can skip this part even less.**

![Lay the foundation, then let AI extend: brand colors → Figma design system → tokens → AI uses only these to extend new screens](/images/writing/ai-design-acceptance/f1_foundation.webp)

## Method 2: Turn your review order into the AI's pre-delivery self-check

When you hand off work, you need to explain more than "what to make". You also need to say **how to verify it was done right**.

Designers know best what "right" means; it just usually lives in our heads. So I wrote my five-layer review order as a checklist the AI must run through in order before delivering. Each item gets a report of "pass / fail + evidence", and anything that fails gets fixed before delivery:

1. Is the call to action visible at first glance, with only one primary button?
2. Is the screen balanced, with the page's subject clear at a glance?
3. Does it use only the specified tokens and components? **List every color hex used.**
4. Does the type hierarchy follow the priority order (e.g. new time > delay status > flight info > reason)?
5. Does the data match what was given, exactly?

The key is evidence. "Done" on its own is worthless. Make it produce something you can check, such as which colors it used. In the test, Group B's self-reported color list matched the script's measurements exactly. That's a self-assessment you can trust.

![Group B's self-check on finished version 1: four of five items pass, type hierarchy fails, and it stops to ask first](/images/writing/ai-design-acceptance/f2_selfcheck.webp)

Then add one more rule: **when you need a new component, stop and ask me first.** That single line turns the AI from "improvising" into "asking for design decisions".

## Method 3: Want creativity? Give intentional references, and sketch first

"Can it be more creative?" is another classic client line. In real work, I first align on two things: what's already working, and where they want more creativity. When the other side can't explain it, I find five product screenshots that feel creative and ask them to pick, then communicate with sketches, and only then start building.

With AI it's the same, just reversed: now I'm the one who knows exactly what I want. So I give **2 to 3 references** in the style I want, and say clearly what I like about each one.

If you treat it as a random roll of the dice, you might land on something you like. But before long you'll find your content turning into the AI-flavored stuff everyone hates. (There's no such thing as luck in AI; everything has a traceable cause, you just may not notice it.)

A small episode in the test proved how much "say exactly what you like" matters. Group B scored 5, but the orange card's header had picked up a "vibrates once" label. That came from the reference image and has no place on a delay page, yet the AI copied it over wholesale (removed in version 3). **If you don't say which parts of a reference you don't want, it takes them along too.**

Order matters as well: **ask for low-fidelity sketches first, blocks and hierarchy only, and build the finished version only after choosing a direction.** The sketch is a checkpoint for the AI; if the direction is off, you pull it back right there. Group B's three key questions in the test were all asked at the sketch stage.

![Left: the reference image marked with the three things I liked and the "vibrates once" I didn't want. Right: Group B's two sketch directions, with direction A, which leads with the delay, chosen](/images/writing/ai-design-acceptance/f3_reference.webp)

## Method 4: Hand hard rules to "assembly", not "generation"

The other place AI most easily goes wrong is applying and placing a company logo. A logo must not change in style, proportion or color, and its placement has to follow the guidelines: the distance from the logo to the left (or right) edge and the top (or bottom) edge, in proportion.

Rules like these call for two different approaches:

- **Generated images** (asking AI to produce an image directly): pixel alignment is hard to begin with, so I judge them quickly by eye. These images aren't suited to brand elements that need precision.
- **Assembled images** (asking AI to compose the elements in HTML or SVG, which Claude is very good at): give it the correct logo SVG or PNG and specify how many px from the top edge and the left edge, and it will match exactly.

Both groups in the test used assembly. So Group A's problem wasn't "can't be precise". It was "nobody told it what precise meant".

![A Shunfeng 600×600 Google Ads banner: only the top-left is correct; the other three show common logo mistakes: stretched, recolored, and given a glow and shadow with drifting placement](/images/writing/ai-design-acceptance/f4_logo.webp)

**While writing this article, I became that client myself.** I asked AI to make the banner above. At first I gave it just a background image and "600×600, for Google Ads", then fixed it line by line: "the logo mockup isn't OK", "you didn't follow the design system", "the logo is clearly wrong, and so is the text color". Nine rounds later, the AI had fixed the previous problem each time, but guessed something new: type sizes outside the system, a home-made button, the wrong logo version. The design system was right there; it just didn't use it.

Then I stopped and wrote the brief as seven points: which logo node to use, which token for the headline and subhead, a white overlay at what % that must not cover the logo or button, the logo's distance from the edges, a button that follows Apple's guidelines, and fonts that follow the design system. After that, one more round with two changes, and it was final. **The cost of vague feedback isn't just in the test. It showed up in my own work too.**

The same Shunfeng 600×600 Google Ads banner as an example: only the top-left is right; the other three are logo mistakes AI-made images commonly have.

## Don't be that annoying one. Be the one who writes the acceptance criteria

AI has made execution cheap, so a designer's value moves to defining what counts as right. You can keep saying "more lively" and get something barely acceptable after six versions. Or you can write down the standard in your head first, and get the 5 you'd give yourself in two.

Here is the template I use to brief AI. It has four parts, each a paragraph you can copy as-is, with how I filled it in for this test as a prompt:

**① Design system**

> Use the design system in this Figma file: [link]. Colors, type sizes, spacing and corner radii may only use its variables, and components may only be existing ones. If you need a new color or component, stop and ask me first.

**② What to make**

> Make me [screen], used when [the situation in which the user sees it]. Data: [list each item].

Example: a flight delay page, seen when a traveler at the airport receives a delay notice. BR198 Taipei → Tokyo Narita, scheduled 14:05, delayed to 15:20, gate B7 may change.

**③ References**

> Attached are 2–3 reference images. What I like is [specifically which part], and what I don't need is [which part].

Example: I like "status at the very top, the primary button most prominent, the same color for the same situation"; I don't need "the vibrates-N-times hint".

**④ How to deliver**

> First give me two block-only sketch directions; I'll pick one, then you make the finished version. Before delivering, self-check in this order, reporting pass or fail for each and fixing failures first: is the primary button the most prominent, and the only one → is the subject clear at a glance → any colors or components outside the system → is the heading size order right → is the data exactly correct.

If you don't have the Figma MCP connector, paste a screenshot of your styles page instead (with hex codes written on it), and add: "Use the hex codes written on the image; don't sample colors from pixels."

Give it a try. I bet you'll find out pretty quickly how well it works~

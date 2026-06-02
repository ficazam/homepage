# Context Is the Whole Game

The single most important thing that will make your AI agent reliable for real work is not model choice. It's the thing most engineers avoid: writing documentation.

I know how that sounds, but think about it:

It's why sports teams don't plug new players straight into the lineup with zero ramp-up. A star player who doesn't know the playbook is lost on the field — they'll make a great play sometimes, but most of the time they just create more work for the rest of the team. The talent isn't the problem. The talent just doesn't know the system yet.

An AI model works the same way. No model can know how you work. No model can know how your repo is set up. The context that makes the work *yours* is unavailable to the agent unless it's written down, saved, and committed to its memory. Nothing in the pipeline can replace that - not a bigger model, not a better prompt. Good context is king, queen and rooks, and there's no substitute for it.

## What do I actually mean by "context"?

"Context" is a fuzzy concept, especially for newer users, so let me be precise about what I mean. There's two kinds of documentation that matter here.

**Standing documentation** — conventions, read-before-write rules, the AGENTS.md-style files. This is the part that constrains: it tells the model what it should and shouldn't do. It plays the role the system prompt plays — loaded every session, always present, the rules of the house.

**Situational documentation** — the per-repo, per-task context, including the task list itself. This is the part that informs: it defines how the model answers and how it does the work. It's the layer your actual requests live in, the thing that shapes a specific job rather than the standing rules.

Guardrails constrain. Context informs. Both are documentation, and the system needs both.

Here's a piece of the standing context from one of my repos:

*(The artifact is included in the article as a collapsible section — see `context.md` in this directory.)*

## So we just have to write a mountain of docs?

So we've concluded that to get a model to do relevant work consistently, we have to write documentation for it. But wasn't the whole point that we *shouldn't* have to? Is it really mandatory to sit down and write dozens of files every time I open a project? Isn't that an massive waste of the time that AI was supposed to save?

Yes. It is. Which is why we should not be writing any documentation.

Wait — what? Didn't I just say documentation is mandatory?

I did. But I never said *we* should write it - the model should.

## Let the model document itself

When I onboard into a new repo, I let my AI assistant onboard itself. It reads the codebase and generates its own documentation — the standing context it will rely on for every task that follows.

That artifact I showed you above? I didn't write it. My system did. It wrote that file, saved it, committed it to its own context memory, and now references and consumes it every time we work in that repo. I've only ever read it once — just now, while pasting it here. Normally I never do.

I trust the generated context completely, because gathering context is mechanical work — tedious, necessary, and exactly the kind of thing a machine should own. So I let it.

What I *don't* delegate is judgment. I feed the system a ticket, ask it to plan the implementation, and I review *that* — the workplan, the last piece of the documentation chain — closely. That's where the decisions live. That's where human developers are still necessary.

And it holds up. Out of hundreds of tickets we've worked through together, I've rolled back maybe three to five percent of the plans — and most of those weren't even the model's fault. They failed because *I* forgot to pass it an important piece of context in my prompt.

The model reasoned correctly over the information it had. When it missed, the information was incomplete — and that was on me, not on it.

The failures cluster at the context boundary, *not* the capability boundary. 

## The part that's actually yours

So here's where it leaves us.

The model is the part you can buy. Anyone can. It's a seat, a subscription, a line item — the competition has the exact same one, your neighbor has the exact same one. The context is the part you *build*, and it's the part that decides whether that expensive model is worth anything at all.

The amazing thing is that you don't even have to build it yourself. You can hand the chore to the one party that needs it most — the model itself — and spend your own attention where it actually matters: on judgment and on planning, not on gathering and documenting.

Once you get that right, reliability stops being a question about the model. A star player who's learned the playbook isn't a different athlete — they're the same talent, finally able to play with their team, because they finally know the system. Your AI is no different. The capability was already there. All it needed was the context only you could give it — and that, it turns out, you can direct it to write for itself.

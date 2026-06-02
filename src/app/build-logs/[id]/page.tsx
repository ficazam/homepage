"use client";
import { use, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { posts } from "../posts";

const BuildLogPost = ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = use(params);
  const post = posts.find((p) => p.id === parseInt(id));

  const [contextContent, setContextContent] = useState<string>("");

  useEffect(() => {
    document.body.style.overflow = "auto";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    fetch("/writing/context.md")
      .then((r) => r.text())
      .then(setContextContent);
  }, []);

  if (!post) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center text-white px-4 w-full pt-24 sm:pt-16 pb-20"
    >
      <h1 className="w-full text-center text-3xl sm:text-5xl font-extrabold font-heading text-pink-500 leading-wide tracking-widest">
        Context Is the Whole{" "}
        <span className="transition-all duration-300 hover:text-white hover:[text-shadow:0_0_5px_rgb(255_0_255/80%),_0_0_10px_rgb(255_0_255/80%),_0_0_15px_rgb(255_0_255/80%),_0_0_20px_rgb(255_0_255/_80%)]">
          Game
        </span>
      </h1>
      <motion.span
        className="h-[3px] bg-pink-400 mb-10 mt-2"
        initial={{ width: 0 }}
        animate={{ width: "85%" }}
        transition={{ ease: "easeInOut", duration: 0.7, delay: 0.2 }}
      />

      <article className="max-w-3xl w-full mx-auto font-body">
        <p className="text-gray-200 leading-relaxed mb-4 text-justify">
          The single most important thing that will make your AI agent reliable
          for real work is not model choice. It&apos;s the thing most engineers
          avoid: writing documentation.
        </p>

        <p className="text-gray-200 leading-relaxed mb-4 text-justify">
          I know how that sounds, but think about it:
        </p>

        <p className="text-gray-200 leading-relaxed mb-4 text-justify">
          It&apos;s why sports teams don&apos;t plug new players straight into
          the lineup with zero ramp-up. A star player who doesn&apos;t know the
          playbook is lost on the field — they&apos;ll make a great play
          sometimes, but most of the time they just create more work for the
          rest of the team. The talent isn&apos;t the problem. The talent just
          doesn&apos;t know the system yet.
        </p>

        <p className="text-gray-200 leading-relaxed mb-4 text-justify">
          An AI model works the same way. No model can know how you work. No
          model can know how your repo is set up. The context that makes the
          work <em>yours</em> is unavailable to the agent unless it&apos;s
          written down, saved, and committed to its memory. Nothing in the
          pipeline can replace that — not a bigger model, not a better prompt.
          Good context is king, queen and rooks, and there&apos;s no substitute
          for it.
        </p>

        <h3 className="text-2xl font-heading text-pink-400 mt-10 mb-4">
          What do I actually mean by &ldquo;context&rdquo;?
        </h3>

        <p className="text-gray-200 leading-relaxed mb-4 text-justify">
          &ldquo;Context&rdquo; is a fuzzy concept, especially for newer users,
          so let me be precise about what I mean. There&apos;s two kinds of
          documentation that matter here.
        </p>

        <p className="text-gray-200 leading-relaxed mb-4 text-justify">
          <strong className="text-white">Standing documentation</strong> —
          conventions, read-before-write rules, the AGENTS.md-style files. This
          is the part that constrains: it tells the model what it should and
          shouldn&apos;t do. It plays the role the system prompt plays — loaded
          every session, always present, the rules of the house.
        </p>

        <p className="text-gray-200 leading-relaxed mb-4 text-justify">
          <strong className="text-white">Situational documentation</strong> —
          the per-repo, per-task context, including the task list itself. This
          is the part that informs: it defines how the model answers and how it
          does the work. It&apos;s the layer your actual requests live in, the
          thing that shapes a specific job rather than the standing rules.
        </p>

        <p className="text-gray-200 leading-relaxed mb-6 text-justify">
          Guardrails constrain. Context informs. Both are documentation, and
          the system needs both.
        </p>

        <p className="text-gray-200 leading-relaxed mb-4 text-justify">
          Here&apos;s a piece of the standing context from one of my repos:
        </p>

        <details className="mb-8 bg-gray-800/40 rounded-lg border border-pink-400/20">
          <summary className="font-heading text-pink-400 cursor-pointer px-4 py-3 text-lg">
            felipeicaza/homepage — context.md
          </summary>
          <pre className="px-4 pb-4 pt-2 text-gray-300 text-xs font-mono whitespace-pre-wrap overflow-auto max-h-96 border-t border-pink-400/20 leading-relaxed">
            {contextContent}
          </pre>
        </details>

        <h3 className="text-2xl font-heading text-pink-400 mt-10 mb-4">
          So we just have to write a mountain of docs?
        </h3>

        <p className="text-gray-200 leading-relaxed mb-4 text-justify">
          So we&apos;ve concluded that to get a model to do relevant work
          consistently, we have to write documentation for it. But wasn&apos;t
          the whole point that we <em>shouldn&apos;t</em> have to? Is it really
          mandatory to sit down and write dozens of files every time I open a
          project? Isn&apos;t that a massive waste of the time that AI was
          supposed to save?
        </p>

        <p className="font-heading text-xl text-white border-l-2 border-pink-400 pl-4 my-6 leading-relaxed">
          Yes. It is. Which is why we should not be writing any documentation.
        </p>

        <p className="text-gray-400 leading-relaxed mb-4 italic">
          Wait — what? Didn&apos;t I just say documentation is mandatory?
        </p>

        <p className="text-gray-200 leading-relaxed mb-4 text-justify">
          I did. But I never said{" "}
          <strong className="text-white">we</strong> should write it — the
          model should.
        </p>

        <h3 className="text-2xl font-heading text-pink-400 mt-10 mb-4">
          Let the model document itself
        </h3>

        <p className="text-gray-200 leading-relaxed mb-4 text-justify">
          When I onboard into a new repo, I let my AI assistant onboard itself.
          It reads the codebase and generates its own documentation — the
          standing context it will rely on for every task that follows.
        </p>

        <p className="text-gray-200 leading-relaxed mb-4 text-justify">
          That artifact I showed you above? I didn&apos;t write it. My system
          did. It wrote that file, saved it, committed it to its own context
          memory, and now references and consumes it every time we work in that
          repo. I&apos;ve only ever read it once — just now, while pasting it
          here. Normally I never do.
        </p>

        <p className="text-gray-200 leading-relaxed mb-4 text-justify">
          I trust the generated context completely, because gathering context is
          mechanical work — tedious, necessary, and exactly the kind of thing a
          machine should own. So I let it.
        </p>

        <p className="text-gray-200 leading-relaxed mb-4 text-justify">
          What I <em>don&apos;t</em> delegate is judgment. I feed the system a
          ticket, ask it to plan the implementation, and I review{" "}
          <em>that</em> — the workplan, the last piece of the documentation
          chain — closely. That&apos;s where the decisions live. That&apos;s
          where human developers are still necessary.
        </p>

        <p className="text-gray-200 leading-relaxed mb-4 text-justify">
          And it holds up. Out of hundreds of tickets we&apos;ve worked through
          together, I&apos;ve rolled back maybe three to five percent of the
          plans — and most of those weren&apos;t even the model&apos;s fault.
          They failed because <em>I</em> forgot to pass it an important piece
          of context in my prompt.
        </p>

        <p className="text-gray-200 leading-relaxed mb-4 text-justify">
          The model reasoned correctly over the information it had. When it
          missed, the information was incomplete — and that was on me, not on
          it.
        </p>

        <p className="font-heading text-xl text-white border-l-2 border-pink-400 pl-4 my-6 leading-relaxed">
          The failures cluster at the context boundary, not the capability
          boundary.
        </p>

        <h3 className="text-2xl font-heading text-pink-400 mt-10 mb-4">
          The part that&apos;s actually yours
        </h3>

        <p className="text-gray-200 leading-relaxed mb-4 text-justify">
          So here&apos;s where it leaves us.
        </p>

        <p className="text-gray-200 leading-relaxed mb-4 text-justify">
          The model is the part you can buy. Anyone can. It&apos;s a seat, a
          subscription, a line item — the competition has the exact same one,
          your neighbor has the exact same one. The context is the part you{" "}
          <em>build</em>, and it&apos;s the part that decides whether that
          expensive model is worth anything at all.
        </p>

        <p className="text-gray-200 leading-relaxed mb-4 text-justify">
          The amazing thing is that you don&apos;t even have to build it
          yourself. You can hand the chore to the one party that needs it most —
          the model itself — and spend your own attention where it actually
          matters: on judgment and on planning, not on gathering and
          documenting.
        </p>

        <p className="text-gray-200 leading-relaxed text-justify">
          Once you get that right, reliability stops being a question about the
          model. A star player who&apos;s learned the playbook isn&apos;t a
          different athlete — they&apos;re the same talent, finally able to play
          with their team, because they finally know the system. Your AI is no
          different. The capability was already there. All it needed was the
          context only you could give it — and that, it turns out, you can
          direct it to write for itself.
        </p>
      </article>
    </motion.div>
  );
};

export default BuildLogPost;

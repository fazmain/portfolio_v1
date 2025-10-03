import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function MyResearchOnMechInterp() {
  return (
    <div className="min-h-screen pt-20 lg:pt-32">
      <article className="max-w-3xl mx-auto px-8">
        {/* Back Button */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Blog
        </Link>

        {/* Article Header */}
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Opening the Blackbox of LLMs: My current research description
          </h1>
          <p className="text-zinc-400">Published on October 3, 2025</p>
        </header>

        {/* Article Content */}
        <div className="prose prose-invert prose-lg max-w-none">
          <p className="text-xl text-zinc-300 mb-8">
            When people talk about artificial intelligence, they often describe
            it as a black box. We type in a prompt, and the model produces
            something surprisingly fluent. But very few people, even
            researchers, can explain how it reached that answer.{" "}
          </p>

          <p className="text-xl text-zinc-300 mb-8">
            That mystery is what drew me to looking into Mechanistic
            Interpretability, a field that tries to make sense of what’s going
            on inside these systems. Instead of treating models as magical
            oracles, we try to trace the thoughts of the language model. It is
            like peaking in their brain, probing in, and seeing how they react -
            like neuroscience of AI, maybe.
          </p>

          <p className="text-xl text-zinc-300 mb-8">
            My research focuses on opening up that black box using a new
            approach: attribution graphs. Think of them as detailed maps of how
            information flows inside a language model when it responds to a
            prompt. Each graph shows not just the words we type in and the words
            the model produces, but the hidden chain of signals, decisions, and
            pathways that connect them.
          </p>

          <p className="text-xl text-zinc-300 mb-8">
            By collecting thousands of these maps, I look for recurring
            motifs—small, repeatable structures in the graph that show up
            whenever the model performs a certain behavior. For example, if a
            model consistently recalls facts across multiple steps or refuses a
            harmful request, there may be a distinct subsystem that ‘lights up’
            to make that happen. The next step is testing whether these motifs
            really matter. Using targeted interventions, we can shut off parts
            of the graph and see if the behavior disappears, or strengthen a
            pathway and watch the response change. If the motif is stable and
            causal, then we’ve learned something remarkable: a hidden building
            block of reasoning inside the AI.
          </p>

          <p className="text-xl text-zinc-300 mb-8">
            Why does this matter outside the simulation? It stops the AI from
            behaving like a MechaHitler, as we saw a few months ago by Grok.
            Looking into the subsystems that cause bias, hallucinations, and
            harmful traits will help us make the AI models more aligned with the
            public's best interests. In a world where AI is increasingly shaping
            online conversations and moderating content, understanding these
            motifs and cataloging them helps us create tools for transparency
            and accountability.
          </p>

          <p className="text-xl text-zinc-300 mb-8">
            Personally, this work is about more than the algorithms and graphs.
            It’s about trust. If the future depends on AI, then we deserve to
            know not just what these systems say, but why they say it. My
            research brings us a step closer to that transparency by turning the
            black box into something we can finally open, study, and, most
            importantly, hold accountable.
          </p>

          <div className="mt-12 pt-8 border-t border-zinc-800">
            <p className="text-zinc-400">
              Have any thoughts or feedback for me? Feel free to
              reach out on{" "}
              <a
                href="https://www.linkedin.com/in/faiazmain/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-400 hover:text-orange-300"
              >
                LinkedIn
              </a>{" "}
              and let us chat!.
            </p>
          </div>
        </div>
      </article>
    </div>
  );
}

import { notFound } from "next/navigation";
import { getPostBySlug } from "../posts";
import { BuildLogPostFade } from "./BuildLogPostFade";

const BuildLogPost = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) notFound();

  return (
    <BuildLogPostFade
      title={
        <div className="w-full flex flex-col items-center">
          <h1 className="w-full text-center text-3xl sm:text-5xl font-extrabold font-heading text-pink-500 leading-wide tracking-widest">
            {post.title}
          </h1>
          <time dateTime={post.date} className="font-body text-sm text-gray-400 mt-3">
            {post.date}
          </time>
        </div>
      }
    >
      <article
        className="max-w-3xl w-full mx-auto font-body [&>p]:text-gray-200 [&>p]:leading-relaxed [&>p]:mb-4 [&>p]:text-justify [&>h3]:text-2xl [&>h3]:font-heading [&>h3]:text-pink-400 [&>h3]:mt-10 [&>h3]:mb-4 [&_strong]:text-white [&>blockquote]:font-heading [&>blockquote]:text-xl [&>blockquote]:text-white [&>blockquote]:border-l-2 [&>blockquote]:border-pink-400 [&>blockquote]:pl-4 [&>blockquote]:my-6 [&>blockquote]:leading-relaxed [&>pre]:bg-gray-800/40 [&>pre]:rounded-lg [&>pre]:border [&>pre]:border-pink-400/20 [&>pre]:p-4 [&>pre]:mb-8 [&>pre]:overflow-auto [&>pre]:max-h-96 [&_pre_code]:text-gray-300 [&_pre_code]:text-xs [&_pre_code]:font-mono [&_pre_code]:whitespace-pre-wrap [&_pre_code]:leading-relaxed [&_thead]:bg-gray-800/60 [&_th]:font-heading [&_th]:text-pink-400 [&_th]:text-left [&_th]:whitespace-nowrap [&_th]:px-4 [&_th]:py-2 [&_th]:border [&_th]:border-pink-400/20 [&_td]:px-4 [&_td]:py-2 [&_td]:border [&_td]:border-pink-400/20 [&_td]:text-gray-200 [&_tbody_tr:nth-child(even)]:bg-gray-800/20"
        dangerouslySetInnerHTML={{ __html: post.html }}
      />
    </BuildLogPostFade>
  );
};

export default BuildLogPost;

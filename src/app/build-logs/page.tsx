import Link from "next/link";
import { getAllPosts } from "./posts";
import { BuildLogsFade } from "./BuildLogsFade";

const BuildLogs = () => {
  const posts = getAllPosts();

  return (
    <BuildLogsFade
      title={
        <h1 className="w-full mt-16 sm:mt-0 text-center text-6xl font-extrabold font-heading text-pink-500 leading-wide tracking-widest">
          Build{" "}
          <span className="transition-all duration-300 hover:text-white hover:[text-shadow:0_0_5px_rgb(255_0_255/80%),_0_0_10px_rgb(255_0_255/80%),_0_0_15px_rgb(255_0_255/80%),_0_0_20px_rgb(255_0_255/_80%)]">
            Logs
          </span>
        </h1>
      }
    >
      <div className="w-full max-w-2xl mx-auto font-body flex flex-col gap-y-4">
        {posts.map((post) => (
          <div key={post.slug} className="group relative inline-block">
            <Link
              href={`/build-logs/${post.slug}`}
              className="group font-heading text-xl text-pink-400"
            >
              <span className="text-3xl mr-2">→</span>
              {post.title}
            </Link>
            <span className="absolute left-0 bottom-0 h-[2px] bg-pink-400 w-0 group-hover:w-full transition-all ease-in duration-300" />
            <p className="font-body text-sm text-gray-400 mt-1">
              {post.date} · {post.description}
            </p>
          </div>
        ))}
      </div>
    </BuildLogsFade>
  );
};

export default BuildLogs;

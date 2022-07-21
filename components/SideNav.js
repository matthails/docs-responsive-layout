import Link from 'next/link';

const posts = [{title: 'Hello World', filePath: 'hello-world.mdx'}, {title: 'Example Post', filePath: 'example-post.mdx'}]

export function SideNav() {
 
  return (
    <nav className="md:hidden fixed pt-10 pb-8 px-6 border-r-[1px] border-r-slate-200 shrink-0 z-10 bg-white">
        <p className="text-lg font-medium pb-4">Get started</p>
     


      <ul className="flex flex-col gap-1">
       {posts.map((post) => (
          <li key={post.filePath}>
            <Link
             as={`/posts/${post.filePath.replace(/\.mdx?$/, '')}`}
              href={`/posts/[slug]`}  
            >
              <a>{post.title}</a>
            </Link>
          </li>
        ))} 
      </ul>
    </nav>
  );
}
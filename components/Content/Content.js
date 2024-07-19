export default function Content({ content }) {
  return (
    <div
      dangerouslySetInnerHTML={{ __html: content }}
      className="prose lg:prose-xl prose-headings:font-title prose-headings:font-bold"
    ></div>
  );
}

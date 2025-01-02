/* eslint-disable react/prop-types */
export default function Article({ title, text, tags, image, alt }) {
  return (
    <div className="alura-card">
      <h3 className="text-xl text-alura-200 font-bold dark:text-gray-200">
        {title}
      </h3>
      <div className="hidden sm:flex justify-end gap-2 w-full pr-5">
        {tags.map((tag, index) => (
          <span key={index} className="alura-tag">
            {tag}
          </span>
        ))}
      </div>

      <div className="grid gap-1">
        {text.map((content, index) => (
          <p
            key={index}
            className="text-alura-200 dark:text-gray-400 line-clamp-2 sm:line-clamp-none"
          >
            {content}
          </p>
        ))}
      </div>
      {image && <img className="sm:p-4" src={image} />}
      {image && alt && <span className="sr-only">{alt}</span>}
    </div>
  );
}

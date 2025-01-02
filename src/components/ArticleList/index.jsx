import data from "../../../article.json";
import Article from "../Article";

export default function ArticleList() {
  return (
    <div className="grid gap-5 max-w-2xl mt-5 m-auto sm:mt-0 sm:grid-cols-2 lg:grid-cols-3 lg:max-w-[1000px]">
      {data.map((props, index) => (
        <Article key={index} {...props} />
      ))}
    </div>
  );
}

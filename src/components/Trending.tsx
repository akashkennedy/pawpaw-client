const Trending = () => {
  const trendingTopics: string[] = [
    "rip_cheems",
    "blackcatlivesmatter",
    "stopbearattacks",
    "whitefur",
    "golizard",
  ];
  return (
    <section className="border-4 border-primary rounded-pill m-5 p-3 w-max">
      <div>
        <h2 className="text-3xl font-semibold">Trending#</h2>
        <p className="font-medium text-lg text-gray-800">
          Trending Topics of the Day
        </p>
        <ol className="list-decimal list-inside p-2 space-y-1">
          {trendingTopics.map((topic: string, index: number) => (
            <li
              key={index}
              className="text-gray-900 text-xl cursor-pointer transition hover:translate-x-1"
            >
              {topic}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Trending;

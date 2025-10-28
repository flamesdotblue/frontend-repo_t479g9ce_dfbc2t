const chips = [
  'All',
  'Music',
  'Gaming',
  'Live',
  'News',
  'Mixes',
  'Trailers',
  'Podcasts',
  'Tech',
  'Comedy',
  'Lo-fi',
  'Cooking',
  'Travel',
  'Football',
  'AI',
];

function Categories() {
  return (
    <div className="sticky top-16 z-40 bg-white/80 backdrop-blur border-b border-gray-200">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="flex gap-3 overflow-x-auto no-scrollbar py-3">
          {chips.map((c, idx) => (
            <button
              key={c}
              className={`whitespace-nowrap rounded-full border px-3 py-1.5 text-sm hover:bg-gray-100 ${
                idx === 0 ? 'bg-gray-900 text-white border-gray-900' : 'border-gray-300 text-gray-800'
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Categories;

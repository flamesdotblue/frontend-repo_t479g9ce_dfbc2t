function formatViews(num) {
  if (num >= 1_000_000) return (num / 1_000_000).toFixed(1).replace(/\.0$/, '') + 'M views';
  if (num >= 1_000) return (num / 1_000).toFixed(1).replace(/\.0$/, '') + 'K views';
  return num + ' views';
}

function VideoCard({ video }) {
  return (
    <div className="group cursor-pointer">
      <div className="relative w-full overflow-hidden rounded-xl bg-gray-200">
        <img
          src={`https://picsum.photos/seed/${video.id}/480/270`}
          alt={video.title}
          className="aspect-video w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
          loading="lazy"
        />
        <span className="absolute bottom-2 right-2 rounded bg-black/80 px-1.5 py-0.5 text-[11px] font-semibold text-white">
          {video.duration}
        </span>
      </div>
      <div className="mt-3 flex gap-3">
        <img
          src={`https://picsum.photos/seed/${video.channel}/48/48`}
          alt={video.channel}
          className="h-9 w-9 rounded-full object-cover"
          loading="lazy"
        />
        <div>
          <h3 className="line-clamp-2 text-sm font-semibold leading-snug text-gray-900">
            {video.title}
          </h3>
          <p className="mt-1 text-xs text-gray-600">{video.channel}</p>
          <p className="text-xs text-gray-500">
            {formatViews(video.views)} • {video.time}
          </p>
        </div>
      </div>
    </div>
  );
}

export default VideoCard;

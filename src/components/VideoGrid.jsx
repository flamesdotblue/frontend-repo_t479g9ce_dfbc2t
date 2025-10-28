import VideoCard from './VideoCard';

const sampleVideos = Array.from({ length: 16 }).map((_, i) => ({
  id: i + 1,
  title: `Amazing video number ${i + 1} you should absolutely watch right now`,
  channel: `Channel${(i % 8) + 1}`,
  views: Math.floor(Math.random() * 1_000_000) + 1_000,
  time: `${(i % 11) + 1} days ago`,
  duration: `${Math.floor(Math.random() * 14) + 1}:${String(Math.floor(Math.random() * 60)).padStart(2, '0')}`,
}));

function VideoGrid() {
  return (
    <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 py-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {sampleVideos.map((v) => (
          <VideoCard key={v.id} video={v} />)
        )}
      </div>
    </div>
  );
}

export default VideoGrid;

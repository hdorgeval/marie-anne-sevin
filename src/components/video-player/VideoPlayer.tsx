import { type FC, useCallback } from "react";
import { useAnalytics } from "../../hooks/useAnalytics";
import "@vidstack/react/player/styles/default/theme.css";
import "@vidstack/react/player/styles/default/layouts/audio.css";
import "@vidstack/react/player/styles/default/layouts/video.css";
import "./VideoPlayer.css";
import { MediaPlayer, MediaProvider, Poster } from "@vidstack/react";
import {
	DefaultVideoLayout,
	defaultLayoutIcons,
} from "@vidstack/react/player/layouts/default";

export interface VideoPlayerOwnProps {
	title: string;
	videoUrl: string;
	startTime?: string;
	endTime?: string;
	thumbnailUrl?: string;
	className?: string;
}
export const VideoPlayer: FC<VideoPlayerOwnProps> = ({
	videoUrl,
	thumbnailUrl,
	title,
	className,
}) => {
	const { trackSimpleEvent } = useAnalytics();
	const handleOnStarted = useCallback(() => {
		console.log("Video started");
		trackSimpleEvent("start-video-xyz");
	}, [trackSimpleEvent]);

	return (
		<div className={className}>
			<MediaPlayer
				className="vds-player"
				title={title}
				preload="none"
				load="play" // ⬅️ clé : ne charge qu'au moment du play
				src={videoUrl}
				viewType="video"
				playsInline={true}
				autoPlay={false}
				muted={false}
				crossOrigin="anonymous"
				onStarted={handleOnStarted}
				poster={thumbnailUrl}
			>
				<MediaProvider />
				{thumbnailUrl && <Poster className="vds-poster" />}
				<DefaultVideoLayout icons={defaultLayoutIcons} />
			</MediaPlayer>
		</div>
	);
};

VideoPlayer.displayName = "VideoPlayer";

import "@vidstack/react/player/styles/default/theme.css";
import "@vidstack/react/player/styles/default/layouts/audio.css";
import { MediaPlayer, MediaProvider, Poster } from "@vidstack/react";
import {
	DefaultAudioLayout,
	defaultLayoutIcons,
} from "@vidstack/react/player/layouts/default";
import "./AudioPlayer.css";
import { type FC, useCallback } from "react";

export interface AudioPlayerOwnProps {
	title: string;
	audioUrl: string;
	startTime?: string;
	endTime?: string;
	thumbnailUrl?: string;
	className?: string;
}

export const AudioPlayer: FC<AudioPlayerOwnProps> = ({
	audioUrl,
	title,
	thumbnailUrl,
	className,
}) => {
	const handleOnStarted = useCallback(() => {
		console.log("Audio started");
	}, []);

	return (
		<div className={className}>
			<MediaPlayer
				className="ads-player"
				title={title}
				preload="none"
				load="play" // ⬅️ clé : ne charge qu'au moment du play
				src={audioUrl}
				viewType="audio"
				playsInline={true}
				autoPlay={false}
				muted={false}
				crossOrigin="anonymous"
				onStarted={handleOnStarted}
				poster={thumbnailUrl}
			>
				<MediaProvider />
				{thumbnailUrl && <Poster className="ads-poster" />}
				<DefaultAudioLayout icons={defaultLayoutIcons} />
			</MediaPlayer>
		</div>
	);
};

AudioPlayer.displayName = "AudioPlayer";

/** biome-ignore-all lint/security/noDangerouslySetInnerHtml: false */
import type { FC } from "react";

function toClosedSentence(sentence: string): string {
	const decodedSentence = decodeThreeDots(
		decodeDotCom(decodeExclamationPoint(decodeQuestionMark(sentence))),
	);
	if (
		hasExclamationPointAtTheEnd(decodedSentence) ||
		hasThreeDotsAtTheEnd(decodedSentence) ||
		hasColonsAtTheEnd(decodedSentence) ||
		hasSemiColonsAtTheEnd(decodedSentence) ||
		hasSmileyAtTheEnd(decodedSentence) ||
		hasQuestionMarkAtTheEnd(decodedSentence)
	) {
		return decodedSentence;
	}

	return `${decodedSentence}.`;
}

function toSentenceWithNotes(sentence: string): string {
	if (hasNote(sentence)) {
		return encodeNote(sentence);
	}

	return sentence;
}

function encodeThreeDots(sentence: string): string {
	return sentence.replaceAll("...", "|||");
}

function encodeExclamationPoint(sentence: string): string {
	return sentence.replaceAll(/![\s\n]/g, "III.");
}

function encodeQuestionMark(sentence: string): string {
	return sentence.replaceAll("?", "qqq.");
}

function encodeDotCom(sentence: string): string {
	return sentence.replaceAll(".com", "|com");
}

function encodeNote(sentence: string): string {
	return sentence.replaceAll("*", '<sup class="">*</sup>');
}

function decodeThreeDots(sentence: string): string {
	return sentence.replaceAll("|||", "...");
}
function decodeDotCom(sentence: string): string {
	return sentence.replaceAll("|com", ".com");
}
function decodeExclamationPoint(sentence: string): string {
	return sentence.replaceAll("III", "!");
}
function decodeQuestionMark(sentence: string): string {
	return sentence.replaceAll("qqq", "?");
}
function hasThreeDotsAtTheEnd(sentence: string): boolean {
	return sentence.endsWith("|||");
}

function hasNote(sentence: string): boolean {
	return sentence.includes("*");
}
function hasColonsAtTheEnd(sentence: string): boolean {
	return sentence.endsWith(":");
}

function hasSemiColonsAtTheEnd(sentence: string): boolean {
	return sentence.endsWith(";");
}

function hasExclamationPointAtTheEnd(sentence: string): boolean {
	return sentence.endsWith("!");
}

function hasSmileyAtTheEnd(sentence: string): boolean {
	return sentence.endsWith(";)") || sentence.endsWith(":)");
}

function hasQuestionMarkAtTheEnd(sentence: string): boolean {
	return sentence.endsWith("?");
}

function toEmphasized(
	sentence: string,
	words: string[] | undefined,
	wordsCssClassNames: string[] | undefined,
): string {
	if (!Array.isArray(words)) {
		return sentence;
	}
	if (words.length === 0) {
		return sentence;
	}

	if (!Array.isArray(wordsCssClassNames)) {
		return sentence;
	}
	if (wordsCssClassNames.length === 0) {
		return sentence;
	}

	let result = sentence;
	for (const word of words) {
		if (result.includes(word)) {
			result = result.replaceAll(
				word,
				`<span class="${(wordsCssClassNames ?? []).join(" ")}">${word}</span>`,
			);
		}
	}

	return result;
}

export interface DescriptionOwnProps {
	children: React.ReactNode;
	emphasizedWords?: string[];
	emphasizedWordsCssClassNames?: string[];
}
export const Description: FC<DescriptionOwnProps> = ({
	children,
	emphasizedWords,
	emphasizedWordsCssClassNames,
}) => {
	if (typeof children !== "string") {
		return <>{children}</>;
	}
	const text = children;
	const sentences = encodeThreeDots(
		encodeDotCom(encodeExclamationPoint(encodeQuestionMark(text))),
	)
		.split(".")
		.map((s) => s.trim())
		.filter((s) => s.length > 0);

	return (
		<>
			{sentences.map((sentence, index) =>
				index === 0 ? (
					<p
						key={0}
						className="pt-2"
						dangerouslySetInnerHTML={{
							__html: toEmphasized(
								toSentenceWithNotes(toClosedSentence(sentence)),
								emphasizedWords,
								emphasizedWordsCssClassNames,
							),
						}}
					></p>
				) : (
					<p
						key={sentence}
						dangerouslySetInnerHTML={{
							__html: toEmphasized(
								toSentenceWithNotes(toClosedSentence(sentence)),
								emphasizedWords,
								emphasizedWordsCssClassNames,
							),
						}}
					></p>
				),
			)}
		</>
	);
};

Description.displayName = "Description";

import { type FC, useMemo } from "react";
import { Link, useLocation } from "react-router-dom";
import thumbnail from "../../assets/video-thumbnail-2025.webp";
import { OpenExternalLinkButton } from "../../components/OpenExternalLinkButton";
import { VideoPlayer } from "../../components/video-player";

export const HambugerMenu: FC = () => {
	const location = useLocation();
	const isOnHomePage = useMemo(() => {
		return location.pathname === "/";
	}, [location.pathname]);
	return (
		<nav className="navbar navbar-dark sticky-top position-absolute top-0 end-0 w-100">
			<div className="container-fluid pe-0 me-1 d-flex flex-row">
				{isOnHomePage ? (
					<div className="flex-grow-1" />
				) : (
					<Link
						to="/"
						className="navbar-brand text-reset"
						aria-label="Accueil"
						title="Accueil"
					>
						<i className="bi bi-house-up fs-3 text-light" />
					</Link>
				)}
				<button
					className="navbar-toggler pt-1-half border border-secondary"
					type="button"
					data-bs-toggle="offcanvas"
					data-bs-target="#offcanvasDarkNavbar"
					aria-controls="offcanvasDarkNavbar"
					title="Menu"
					aria-label="Menu"
					data-tour-id="step-1"
				>
					<span className="toggler-horizontal-bar" />
					<span className="toggler-horizontal-bar" />
					<span className="toggler-horizontal-bar" />
				</button>

				<div
					className="offcanvas offcanvas-end text-bg-dark"
					tabIndex={-1}
					id="offcanvasDarkNavbar"
				>
					<div className="offcanvas-header">
						<h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">
							Marie-Anne Sévin
						</h5>
						<button
							id="hamburger-close-button"
							type="button"
							className="btn-close btn-close-white"
							data-bs-dismiss="offcanvas"
							aria-label="Close"
						/>
					</div>
					<div className="offcanvas-body fs-6 pt-0">
						<ul className="navbar-nav justify-content-start align-items-start flex-grow-1 pe-3">
							<li className="nav-item w-100 text-start">
								<div className="d-flex p-1 flex-row flex-wrap align-items-center">
									<Link
										to="/calendrier"
										className="text-decoration-none text-light"
										title="Calendrier 2025"
										aria-label="Calendrier 2025"
									>
										<span className="badge rounded-pill text-bg-dark fs-7 border border-secondary m-1">
											Calendrier 2025
										</span>
									</Link>
									<Link
										to="/"
										className="text-decoration-none text-light"
										aria-current="page"
										title="Accueil"
										aria-label="Accueil"
									>
										<span className="badge rounded-pill text-bg-dark fs-7 border border-secondary m-1">
											Accueil
										</span>
									</Link>
									<Link
										to="/qui-suis-je"
										className="text-decoration-none text-light"
										title="Qui suis-je ?"
										aria-label="Qui suis-je ?"
									>
										<span className="badge rounded-pill text-bg-dark fs-7 border border-secondary m-1">
											Qui suis-je ?
										</span>
									</Link>
									<span className="badge rounded-pill text-bg-dark fs-7 border border-secondary m-1">
										<OpenExternalLinkButton
											className="text-decoration-none text-light"
											link="https://amzn.eu/d/dd3iN4K"
											analyticsEvent="open-amazon-on-my-book"
											title="Voir mon livre 'harmonie pédagogique' sur Amazon"
											aria-label="Voir mon livre 'harmonie pédagogique' sur Amazon"
										>
											Mon dernier livre
										</OpenExternalLinkButton>
									</span>
									<Link
										to="/temoignages"
										className="text-decoration-none text-light"
									>
										<span className="badge rounded-pill text-bg-dark fs-7 border border-secondary m-1">
											Témoignages
										</span>
									</Link>
									<span className="badge rounded-pill text-bg-dark fs-7 border border-secondary m-1">
										<OpenExternalLinkButton
											className="text-decoration-none text-light"
											link="https://marmitefm.fr/podcasts/sacrement-feminin-180/la-sexualite-sacree-septembre-2022-784"
											analyticsEvent="open-podcast-sexualité-sacrée"
											title="Ecouter mon podcast sur la sexualité sacrée"
											aria-label="Ecouter mon podcast sur la sexualité sacrée"
										>
											Podcast: la sexualité sacrée
										</OpenExternalLinkButton>
									</span>
									<span className="badge rounded-pill text-bg-dark fs-7 border border-secondary m-1">
										<OpenExternalLinkButton
											className="text-decoration-none text-light"
											link="https://www.meditationfrance.com/archive/2023/0304.htm"
											analyticsEvent="open-meditattion-france"
											title="Voir mon article sur Méditation France : De l'harmonie dans l'air"
											aria-label="Voir mon article sur Méditation France: De l'harmonie dans l'air"
										>
											Meditationfrance (De l'harmonie dans l'air)
										</OpenExternalLinkButton>
									</span>
									<span className="badge rounded-pill text-bg-dark fs-7 border border-secondary m-1">
										<OpenExternalLinkButton
											className="text-decoration-none text-light"
											link="https://www.meditationfrance.com/archive/2023/1102.htm"
											analyticsEvent="open-meditattion-france"
											title="Voir mon article sur Méditation France : Tantra et Constellations"
											aria-label="Voir mon article sur Méditation France: Tantra et Constellations"
										>
											Meditationfrance (Tantra et Constellations)
										</OpenExternalLinkButton>
									</span>

									<span className="badge rounded-pill text-bg-dark fs-7  m-0 p-0 pt-1">
										<audio
											controls={true}
											className="w-80 ps-4"
											style={{ height: "1.5rem" }}
										>
											<source
												src="https://hearthis.at/marmitefm884/sacrement-feminin-202209-5-la-sexualite-sacree-v2/stream.mp3?s=coF&t=1664204379"
												type="audio/mpeg"
											/>
											<track
												kind="captions"
												srcLang="fr"
												label="Sous-titres français"
											/>
										</audio>
									</span>
								</div>
							</li>
							<li className="nav-item w-100 text-start mt-3">
								<div className=" w-100 border-bottom border-secondary fs-5 text-secondary">
									Entreprises, Thérapeutes et Institutions
								</div>
								<div className="d-flex p-1 flex-row flex-wrap align-items-center">
									<Link to="/professionnels">
										<span className="badge rounded-pill text-bg-dark fs-7 border border-secondary m-1">
											Accueil
										</span>
									</Link>
									<Link
										to="/professionnels/calendrier"
										className="text-decoration-none text-light"
										title="Calendrier 2025 pour les Professionnels et Institutions"
										aria-label="Calendrier 2025 pour les Professionnels et Institutions"
									>
										<span className="badge rounded-pill text-bg-dark fs-7 border border-secondary m-1">
											Calendrier 2025
										</span>
									</Link>
								</div>
							</li>
							<li className="nav-item w-100 text-start mt-3">
								<div className=" w-100 border-bottom border-secondary fs-5 text-secondary">
									Particuliers
								</div>
								<div className="d-flex p-1 flex-row flex-wrap align-items-center">
									<Link to="/massage/massage-meditatif">
										<span className="badge rounded-pill text-bg-dark fs-7 border border-secondary m-1">
											Massage méditatif
										</span>
									</Link>
									<Link to="/massage/rituel-tantrique">
										<span className="badge rounded-pill text-bg-dark fs-7 border border-secondary m-1">
											Rituel tantrique
										</span>
									</Link>
									<Link to="/constellations">
										<span className="badge rounded-pill text-bg-dark fs-7 border border-secondary m-1">
											Constellations
										</span>
									</Link>
									<Link to="/soiree-tantra">
										<span className="badge rounded-pill text-bg-dark fs-7 border border-secondary m-1">
											Soirée Tantra
										</span>
									</Link>
								</div>
							</li>
							<li className="nav-item w-100 text-start mt-3">
								<div className=" w-100 border-bottom border-secondary fs-5 text-secondary">
									Initiation duo et couple
								</div>
								<div className="d-flex p-1 flex-row flex-wrap align-items-center">
									<Link to="/initiation/massage-meditatif">
										<span className="badge rounded-pill text-bg-dark fs-7 border border-secondary m-1">
											Apprendre le massage tantrique à 2
										</span>
									</Link>
								</div>
							</li>
							<li className="nav-item w-100 text-start mt-3">
								<div className=" w-100 border-bottom border-secondary fs-5 text-secondary">
									Stages
								</div>
								<div className="d-flex p-1 flex-row flex-wrap align-items-center">
									{/* <Link to="/stage/toucher-present-toucher-conscient">
                    <span className="badge rounded-pill text-bg-dark fs-7 border border-secondary m-1">
                      Toucher Présent - Toucher Conscient
                    </span>
                  </Link> */}
									{/* <Link to="/stage/la-voix-du-corps">
                    <span className="badge rounded-pill text-bg-dark fs-7 border border-secondary m-1">
                      La Voix du Corps
                    </span>
                  </Link> */}
									<Link to="/stage/sons-mantras-tantra">
										<span className="badge rounded-pill text-bg-dark fs-7 border border-secondary m-1">
											Sons Mantras Tantra
										</span>
									</Link>
									<Link to="/stage/tantra-et-constellations">
										<span className="badge rounded-pill text-bg-dark fs-7 border border-secondary m-1">
											Tantra et Constellations
										</span>
									</Link>
									<Link to="/stage/femme-sauvage">
										<span className="badge rounded-pill text-bg-dark fs-7 border border-secondary m-1">
											À la rencontre de la femme sauvage
										</span>
									</Link>
									<Link to="/stage/tantra-femme">
										<span className="badge rounded-pill text-bg-dark fs-7 border border-secondary m-1">
											Tantra femme
										</span>
									</Link>
									<Link to="/stage/tantra-homme">
										<span className="badge rounded-pill text-bg-dark fs-7 border border-secondary m-1">
											Tantra homme
										</span>
									</Link>

									{/* <Link to="/stage/voix-et-bols-tibetains">
                    <span className="badge rounded-pill text-bg-dark fs-7 border border-secondary m-1">
                      Bien être par la voix et bols tibétains
                    </span>
                  </Link> */}
								</div>
							</li>

							{/* <li className="nav-item w-100 text-start mt-3">
                <div className="w-100 border-bottom border-secondary fs-6 text-secondary d-flex p-1 flex-row flex-wrap align-items-center">
                  <span>Mon espace client</span>
                </div>
                <div className="d-flex p-1 flex-row flex-wrap align-items-center">
                  <AccountFullNameBadge />
                  <CreateAccountBadge />
                  <LoginAccountBadge />
                  <LogoutAccountBadge />
                </div>
              </li> */}

							<li className="nav-item w-100 text-start mt-3">
								<div className="w-100 border-bottom border-secondary fs-6 text-secondary d-flex p-1 flex-row flex-wrap align-items-center">
									<span>Rétrospective 2024</span>
								</div>
								<div className="d-flex p-1 flex-row flex-wrap align-items-center">
									<div className="container-fluid mt-4 w-100 m-auto">
										<VideoPlayer
											thumbnailUrl={thumbnail}
											videoUrl="/videos/VIDEO-2025.mp4"
										/>
									</div>
								</div>
							</li>

							<li className="nav-item w-100 text-start mt-3">
								<div className="w-100 border-bottom border-secondary fs-6 text-secondary d-flex p-1 flex-row flex-wrap align-items-center">
									<span>Crédits photos</span>
								</div>
								<div className="d-flex p-1 flex-row flex-wrap align-items-center">
									<span className="badge rounded-pill text-bg-dark fs-7 border border-secondary m-1">
										Nicolas Rilat photography
									</span>
								</div>
							</li>
							<li className="nav-item w-100 text-start mt-3">
								<div className="w-100 border-bottom border-secondary fs-6 text-secondary d-flex p-1 flex-row flex-wrap align-items-center">
									<span>Confiance numérique</span>
								</div>
								<div className="d-flex p-1 flex-row flex-wrap align-items-center">
									<Link to="/mentions-legales">
										<span className="badge rounded-pill text-bg-dark fs-7 border border-secondary m-1">
											Mentions légales
										</span>
									</Link>
								</div>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</nav>
	);
};

HambugerMenu.displayName = "HambugerMenu";

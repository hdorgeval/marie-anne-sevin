import { FC } from 'react';
import { Description } from '../components/Description';
import { OpenExternalLinkButton } from '../components/OpenExternalLinkButton';
import { ENTRETIEN_PREALABLE_CALENDAR_LINK } from './page-layout/CalendarLinks';
import { PageSubTitle } from './page-layout/PageSubTitle';
import { PageTitle } from './page-layout/PageTitle';
import { PublicPageLayoutWithFixedBackgroundImage } from './page-layout/PublicPageLayoutWithFixedBackgroundImage';
import { SemiTransparentTile } from './page-layout/SemiTransparentTile';
import { TransparentListGroupItem } from './page-layout/TransparentListGroupItem';
export const MassageMeditatif: FC = () => {
  return (
    <PublicPageLayoutWithFixedBackgroundImage
      backgroundImageUrl="/images/background-massage-meditatif.png"
      backgroundOverlay="linear-gradient(to bottom,rgba(0, 0, 0, 0.1), rgba(79, 79, 93, 0.0))"
      backgroundPosition="50%"
      htmlTitle="Massage méditatif | Massage | Marie-Anne Sévin"
    >
      <div>
        <div className="mt-4 pt-4">
          <PageTitle>Massage méditatif</PageTitle>
        </div>
        <div>
          <PageSubTitle>
            <OpenExternalLinkButton
              className="btn btn-outline-light fw-bolder w-75 mt-1"
              link={ENTRETIEN_PREALABLE_CALENDAR_LINK}
              analyticsEvent="rdv-massage-meditatif"
              title="Prendre rendez-vous"
            >
              Prendre rendez-vous
            </OpenExternalLinkButton>
          </PageSubTitle>
        </div>
        <div className="d-flex px-0 pt-4 flex-column justify-content-between">
          <SemiTransparentTile className="card text-start text-light font-monserrat">
            <ul className="list-group list-group-flush mt-0 pt-0">
              <TransparentListGroupItem className="pt-3">
                <div className="d-flex flex-row align-items-center card-subtitle">
                  <i className="bi bi-clock-history fs-3 me-4"></i>
                  <div className="d-flex flex-column card-subtitle pt-1">
                    <span className="text-nowrap fs-7">1h 30</span>
                  </div>
                </div>
              </TransparentListGroupItem>

              <TransparentListGroupItem className="mt-0 pt-3">
                <div className="d-flex flex-row align-items-center card-subtitle">
                  <i className="bi bi-geo-alt fs-3 me-4"></i>
                  <div className="d-flex flex-column card-subtitle">
                    <span className="text-nowrap fs-7">31 rue Rieussec, Viroflay (78)</span>
                  </div>
                </div>
              </TransparentListGroupItem>
              <TransparentListGroupItem className="pt-1 pb-0">
                <div className="d-flex flex-row card-subtitle align-items-center">
                  <i className="bi bi-currency-euro fs-3 me-4"></i>
                  <div className="d-flex flex-column justify-content-between ">
                    <span className="">120€</span>
                  </div>
                </div>
              </TransparentListGroupItem>
              <TransparentListGroupItem className="py-3">
                <div className="d-flex flex-row align-items-center card-subtitle">
                  <i className="bi bi-exclamation-diamond fs-2 me-4"></i>
                  <div className="d-flex flex-column card-subtitle">
                    <span className="">Rdv validé uniquement après entretien téléphonique</span>
                    <OpenExternalLinkButton
                      className="btn btn-outline-light fw-bolder w-100 mt-1"
                      link={ENTRETIEN_PREALABLE_CALENDAR_LINK}
                      analyticsEvent="rdv-rituel-tantrique"
                      title="Prendre rendez-vous pour l'entretien préalable"
                    >
                      Prendre rendez-vous pour l'entretien préalable
                    </OpenExternalLinkButton>
                  </div>
                </div>
              </TransparentListGroupItem>
            </ul>
            <div className="card-body pt-2">
              <Description>
                Ce massage à l'huile de coco chaude désodorisée se pratique sur table et dure
                environ une heure. Après un temps de méditation invitant à la connexion au corps et
                à la respiration, le corps et l'être sont célébrés à travers un toucher méditatif et
                présent d'une extrême lenteur. Tout le corps est considéré dans sa globalité et
                l'énergie est accompagnée dans toutes les directions vous procurant une sensation de
                relaxation et de vitalité. Un temps de brief, de douche et de débrief entourent ce
                temps de massage. Je ne propose pas de prestation sexuelle (ni génitale, ni
                bucco-génitale).
              </Description>
            </div>
          </SemiTransparentTile>
          <SemiTransparentTile className="card text-start text-light font-monserrat mt-4">
            <div className="card-body">
              <h5 className="card-title mb-0 fw-bolder">Ce massage est-il pour moi ?</h5>
              <h5 className="card-title mb-0 fw-bolder mt-3">10 questions fréquentes</h5>
            </div>
            <ul className="list-group list-group-flush">
              <TransparentListGroupItem className="pb-2">
                <div className="card bg-color-dark-semi-transparent">
                  <div className="card-header fs-5">1. La nudité est-elle obligatoire ?</div>
                  <div className="card-body">
                    <Description>
                      Non, la nudité est possible pour la personne massée. Vous pouvez garder un
                      sous-vêtement qui ne craint pas l'huile. Vous pouvez à tout moment décider de
                      vous couvrir ou au contraire d'ôter vos sous-vêtements en cours de massage. Ce
                      qui est important, c'est de vous sentir en sécurité afin de profiter
                      pleinement du massage. Me concernant, en tant que masseuse, je porte un boxer
                      et une brassière. Pour les personnes préférant moins de contact peau à peau,
                      je peux mettre un t-shirt et un legging. à contrario, pour les personnes à
                      l'aise avec le contact et la nudité, je porte à minima le boxer. Je ne masse
                      pas nue.
                    </Description>
                  </div>
                </div>
              </TransparentListGroupItem>

              <TransparentListGroupItem className="pb-2">
                <div className="card bg-color-dark-semi-transparent">
                  <div className="card-header fs-5">2. Tout le corps est-il massé ?</div>
                  <div className="card-body">
                    <Description>
                      Tout le corps peut être massé dans la limite du cadre que nous avons construit
                      ensemble. Si vous ne souhaitez pas que certaines parties de votre corps soient
                      touchées, je prendrai soin de m'éloigner de la zone. De mon coté, je suis
                      également libre de masser ou pas tout votre corps selon mes limites ou les
                      lésions rencontrées. À tout moment, vous et moi pouvons demander ou refuser de
                      masser une zone du corps.
                    </Description>
                  </div>
                </div>
              </TransparentListGroupItem>

              <TransparentListGroupItem className="pb-2">
                <div className="card bg-color-dark-semi-transparent">
                  <div className="card-header fs-5">
                    3. Je n'y connais rien en tantra, je n'ai jamais médité, puis-je recevoir ce
                    massage ?
                  </div>
                  <div className="card-body">
                    <Description>
                      Lors de ce rituel, je vous accompagne pas à pas en fonction de là où vous en
                      êtes sur votre chemin spirituel ou dans la connaissance de votre corps. Je
                      prends le temps d'expliquer les étapes du rituel et guide la méditation. Il
                      n'y a pas de question idiote ; posez toutes les questions sans tabou lors de
                      l'entretien téléphonique ou lors du brief de façon à ce que votre mental soit
                      totalement libre lors du massage. J'y répondrai autant que possible.
                    </Description>
                  </div>
                </div>
              </TransparentListGroupItem>

              <TransparentListGroupItem className="pb-2">
                <div className="card bg-color-dark-semi-transparent">
                  <div className="card-header fs-5">
                    4. J'ai des soucis de santé, puis-je bénéficier de ce massage ?
                  </div>
                  <div className="card-body">
                    <Description>
                      Chaque condition médicale étant particulière, je vous invite à demander l'avis
                      de votre médecin avant de prendre rendez-vous. Certains traitements passent la
                      barrière cutanée et pourraient avoir un impact pour moi. Merci de me prévenir
                      afin que je mette des gants pour protéger ma santé. Si vous avez une
                      infections transmissible, merci également de me prévenir afin que je prenne
                      les précautions nécessaires.
                    </Description>
                  </div>
                </div>
              </TransparentListGroupItem>

              <TransparentListGroupItem className="pb-2">
                <div className="card bg-color-dark-semi-transparent">
                  <div className="card-header fs-5">
                    5. Est-ce un massage thérapeutique, bien-être, énergétique, érotique ?
                  </div>
                  <div className="card-body">
                    <Description>
                      Je dirais "rien de tout ça" et "tout ça à la fois". Lors de ce rituel,
                      j'accompagne ce qui se présente dans un cadre et un protocole défini. Il n'y a
                      pas d'intention de ma part, si ce n'est de célébrer votre être dans toutes ses
                      dimensions (physique, émotionnelles et spirituelles). Ainsi, ce massage peut
                      avoir des vertus relaxante et énergétiques. L'accueil de la sensualité et
                      l'accompagnement de l'énergie sexuelle peuvent vous procurer une dimension
                      érotique ou thérapeutique. La dévotion pour la vie et pour qui vous êtes peut
                      ouvrir à une dimension spirituelle. En revanche, si vous cherchez un massage
                      pour votre mal de dos, pour rééquilibrer votre taux hormonal ou pour une
                      prestation sexuelle, je vous invite à prendre rendez-vous avec un
                      professionnel de ces questions.
                    </Description>
                  </div>
                </div>
              </TransparentListGroupItem>

              <TransparentListGroupItem className="pb-2">
                <div className="card bg-color-dark-semi-transparent">
                  <div className="card-header fs-5">6. Le sexe est-il massé ?</div>
                  <div className="card-body">
                    <Description>
                      Lors de ce massage, il n'y a pas de massage spécifique du sexe, des mains ou
                      des oreilles. Le corps est massé dans sa globalité dans un toucher très lent ,
                      presque immobile. Une écoute au niveau du périnée (en contact ou à distance)
                      est possible tout comme le contact au niveau des genoux ou du cœur en fonction
                      du cadre que nous avons posé ensemble.
                    </Description>
                  </div>
                </div>
              </TransparentListGroupItem>

              <TransparentListGroupItem className="pb-2">
                <div className="card bg-color-dark-semi-transparent">
                  <div className="card-header fs-5">
                    7. Je suis allergique à l'huile de coco, que faire ?
                  </div>
                  <div className="card-body">
                    <Description>
                      Vous pouvez venir avec l'huile végétale de votre choix sans ajout d'huiles
                      essentielles.
                    </Description>
                  </div>
                </div>
              </TransparentListGroupItem>

              <TransparentListGroupItem className="pb-2">
                <div className="card bg-color-dark-semi-transparent">
                  <div className="card-header fs-5">8. J'ai peur des réactions de mon corps</div>
                  <div className="card-body">
                    <Description
                      emphasizedWords={[
                        'Pour les hommes',
                        'Pour les femmes',
                        'Vous êtes non-binaire, trans ou en questionnement',
                      ]}
                      emphasizedWordsCssClassNames={['text-info-emphasis']}
                    >
                      Lors de ce massage, vous êtes invité à laisser votre corps vivre le massage.
                      Si des mouvements ou sons vous viennent, laissez les circuler ;
                      j'accompagnerai le flow. S'ils dépassent le cadre de mon massage je vous
                      inviterai à respirer dans l'expérience et à vous déposer sur la table. Pour
                      les hommes : si vous avez une érection, ce n'est pas grave. Si vous n'avez pas
                      d'érection, ce n'est pas grave. Je rappelle ici qu'il n'y a pas de prestation
                      sexuelle et donc pas de masturbation dans ce massage. Pour les femmes : si
                      vous avez vos règles, vous pouvez vous faire masser et nous définissons ce qui
                      est confortable pour chacune. Il n'y a pas de masturbation pendant ce massage.
                      Vous êtes non-binaire, trans ou en questionnement : au delà de tous les points
                      évoqués ci-dessus, je vous accompagnerai au mieux dans le respect de vos
                      besoins.
                    </Description>
                  </div>
                </div>
              </TransparentListGroupItem>

              <TransparentListGroupItem className="pb-2">
                <div className="card bg-color-dark-semi-transparent">
                  <div className="card-header fs-5">9. Peut-il y avoir réciprocité ?</div>
                  <div className="card-body">
                    <Description>
                      Dans cette expérience, vous êtes invité à l'état de réceptivité du massage. Il
                      n'y a pas de réciprocité car cette dernière vous ferait sortir de votre
                      expérience en projetant votre attention vers l'extérieur.
                    </Description>
                  </div>
                </div>
              </TransparentListGroupItem>

              <TransparentListGroupItem className="pb-2">
                <div className="card bg-color-dark-semi-transparent">
                  <div className="card-header fs-5">
                    10. Est-il possible de vivre ce massage avec un ou une partenaire ?
                  </div>
                  <div className="card-body">
                    <Description>
                      Ce massage est une expérience personnelle entre le masseur et le massé. En
                      revanche, si vous souhaitez apprendre ce toucher et le partager, je vous
                      propose un cursus de 3 sessions de 3h de transmission du toucher méditatif.
                    </Description>
                  </div>
                </div>
              </TransparentListGroupItem>
            </ul>
          </SemiTransparentTile>
          <SemiTransparentTile className="card text-start text-light font-monserrat mt-4">
            <div className="card-body">
              <OpenExternalLinkButton
                className="btn btn-outline-light fw-bolder w-100 mt-1"
                link={ENTRETIEN_PREALABLE_CALENDAR_LINK}
                analyticsEvent="rdv-massage-meditatif"
                title="Prendre rendez-vous"
              >
                Prendre rendez-vous
              </OpenExternalLinkButton>
            </div>
          </SemiTransparentTile>
        </div>
      </div>
    </PublicPageLayoutWithFixedBackgroundImage>
  );
};

MassageMeditatif.displayName = 'MassageMeditatif';

import introJs from 'intro.js';
import { useCallback, useEffect, useState } from 'react';
import { Location, useLocation } from 'react-router';
import useLocalStorageState from 'use-local-storage-state';
import { useAnalytics } from './useAnalytics';

export interface AppStep {
  id: string;
  selector: string;
  content: string;
  title?: string;
  url?: string;
  position:
    | 'top'
    | 'left'
    | 'right'
    | 'bottom'
    | 'bottom-left-aligned'
    | 'bottom-middle-aligned'
    | 'bottom-right-aligned'
    | 'auto';
}

export interface ExtendedIntojsStep extends introJs.Step {
  id: string;
}

const allSteps: AppStep[] = [
  {
    id: 'v1.step-1',
    selector: '[data-tour-id="step-1"]',
    content: 'Cliquez ici pour découvrir tout ce que je propose',
    position: 'left',
    title: 'Bienvenue !!!',
    url: '/',
  },
];

export const useGuidedTour = () => {
  const { trackSimpleEvent } = useAnalytics();
  const [hasStarted, setHasStarted] = useState(false);
  const [showCheckboxDontShowAgain] = useState(false);
  const location = useLocation() as Location;
  const [tour, setTour] = useState(
    introJs().setOptions({
      overlayOpacity: 0,
      showBullets: false,
      showProgress: false,
      doneLabel: "Ok, j'ai compris",
      nextLabel: 'Suivant',
      prevLabel: '<',
      hidePrev: true,
      showStepNumbers: false,
      exitOnEsc: true,
      exitOnOverlayClick: true,
      dontShowAgain: showCheckboxDontShowAgain,
      buttonClass: 'btn btn-primary',
    } as introJs.Options),
  );
  const [doneSteps, setDoneSteps] = useLocalStorageState<string[]>(
    'marie-anne-sevin.com.guided-tour.done-steps',
    {
      defaultValue: [],
    },
  );

  const targetClickedEventHandler = useCallback(
    (step: AppStep) => {
      function eventListener(evt: Event) {
        if (doneSteps.includes(step.id)) {
          return;
        }
        setDoneSteps([...doneSteps, step.id]);
        evt.currentTarget?.removeEventListener('click', eventListener);
        tour.exit();
      }
      return eventListener;
    },
    [doneSteps, setDoneSteps, tour],
  );

  const closeTourAndRemoveStepOnTargetClicked = useCallback(
    (step: AppStep) => {
      if (doneSteps.includes(step.id)) {
        return;
      }
      const element = document.querySelector(step.selector);
      if (element) {
        element.addEventListener('click', targetClickedEventHandler(step));
      }
    },
    [doneSteps, targetClickedEventHandler],
  );

  const isStepDone = useCallback(
    (step: AppStep) => {
      if (doneSteps.includes(step.id)) {
        return true;
      }
      return false;
    },
    [doneSteps],
  );

  const isStepOnRightLocation = useCallback(
    (step: AppStep) => {
      if (step.url && location.pathname === step.url) {
        return true;
      }
      if (step.url === undefined) {
        return true;
      }
    },
    [location],
  );

  const isStepsSelectorInDom = useCallback((step: AppStep) => {
    const element = document?.querySelector(step.selector);
    if (element) {
      return true;
    }
    return false;
  }, []);

  const buildRemainingSteps = useCallback(
    (steps: AppStep[]) => {
      const stepsToRun: ExtendedIntojsStep[] = steps
        .filter((s) => !isStepDone(s))
        .filter((s) => isStepOnRightLocation(s))
        .filter((s) => isStepsSelectorInDom(s))
        .map((s) => {
          closeTourAndRemoveStepOnTargetClicked(s);
          return {
            id: s.id,
            intro: s.content,
            element: s.selector,
            position: s.position,
            title: s.title,
          };
        });
      return stepsToRun;
    },
    [
      closeTourAndRemoveStepOnTargetClicked,
      isStepDone,
      isStepsSelectorInDom,
      isStepOnRightLocation,
    ],
  );
  useEffect(() => {
    setHasStarted(true);
    setTimeout(() => {
      try {
        const remainingSteps = buildRemainingSteps(allSteps);
        setTour(
          tour.setOptions({ steps: remainingSteps }).oncomplete(() => {
            setDoneSteps([...doneSteps, ...remainingSteps.map((s) => s.id)]);
            trackSimpleEvent('has-completed-guided-tour');
          }),
        );
        if (hasStarted && remainingSteps.length > 0) {
          tour.start();
          return;
        }
        if (hasStarted && remainingSteps.length === 0) {
          tour.exit();
        }
      } catch (error) {
        // TODO : log error
      }
    }, 2000);
  }, [buildRemainingSteps, doneSteps, hasStarted, setDoneSteps, tour, trackSimpleEvent]);
};

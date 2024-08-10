import { AssuranceCase, SupportedClaim, Claim, Context } from 'asac4ux-lib';

import { argment } from './argumentOnUsabilityOfX/separateArgumentsOverScreenDisplaysAndScreenTransitions.js';
import { evs } from './evidencesOfAssuranceCaseOnUsabilityOfX.js';

export const ac = new AssuranceCase(
    new SupportedClaim(
        new Claim("Web application X has the required usability."),
        argment,
        [
            new Context("Web application X has pages A/B/C.")
        ]
    ),
    evs
);
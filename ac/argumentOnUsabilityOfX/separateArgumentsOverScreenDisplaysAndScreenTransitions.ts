import { SupportedClaim, Claim, Argument, Inference } from 'asac4ux-lib';

import { argument as argumentOnPages } from './argumentOnPages/argumentOverEachPage.js';
import { argument as argumentOnTransitions } from './argumentOnTransitions/argumentOverEachScreenTransition.js';

export const argment = new Argument(
    new Inference(
        "Separate arguments over screen displays and screen transitions",
        [
            new SupportedClaim(
                new Claim("Web application X screens are loaded within the expected time."),
                argumentOnPages,
                []
            ),
            new SupportedClaim(
                new Claim("User screen transitions on Web application X are completed within the expected time."),
                argumentOnTransitions,
                []
            )
        ],
        []
    ),
    []
);
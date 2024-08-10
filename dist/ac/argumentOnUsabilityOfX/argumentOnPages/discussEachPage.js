import { Argument, Inference, SupportedClaim, Claim, UndevelopedArgument } from 'asac4ux-lib';
import params from '../../paramsOfAssuranceCaseOnUsabilityOfX.json' assert { type: "json" };
import { argument as argumentOnPageA } from './argumentOnPageA/pageAAccessTest.js';
export const argument = new Argument(new Inference("Discuss each page", [
    new SupportedClaim(new Claim(`Page A screen display finishes within ${params["RESPONSE_TIME_MS_A"]} milliseconds.`), argumentOnPageA, []),
    new SupportedClaim(new Claim(`Page B screen display finishes within ${params["RESPONSE_TIME_MS_B"]} milliseconds.`), UndevelopedArgument, []),
    new SupportedClaim(new Claim(`Page C screen display finishes within ${params["RESPONSE_TIME_MS_C"]} milliseconds.`), UndevelopedArgument, [])
], []), []);

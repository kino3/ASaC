import { Argument, Inference, SupportedClaim, Claim, Context, UndevelopedArgument } from 'asac4ux-lib';
import params from '../../paramsOfAssuranceCaseOnUsabilityOfX.json' assert { type: "json" };
export const argument = new Argument(new Inference("Argument over each screen transition", [
    new SupportedClaim(new Claim(`Transition from page A to page B takes less than ${params["TRANSITION_TIME_MS_FROM_A_TO_B"]} milliseconds.`), new UndevelopedArgument(), [])
], [
    new Context("Web application X has a transition from page A to page B.")
]), []);

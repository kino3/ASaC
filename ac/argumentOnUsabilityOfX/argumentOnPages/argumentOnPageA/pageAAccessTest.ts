import { Argument, ReferenceToEvidenceItem, pickEvidence } from 'asac4ux-lib';

import { evs } from '../../../evidencesOfAssuranceCaseOnUsabilityOfX.js';

export const argument = new Argument(
    new ReferenceToEvidenceItem(
        "page A access test",
        pickEvidence(evs, "ID_001")
    ),
    []
);
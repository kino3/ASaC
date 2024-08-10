/**
 * Trial formalisation of ISO/IEC/IEEE 15026-2:2022 Assurance Case
 */
/**
 * 5.3.1 Context type
 */
export class Context {
    statement;
    evidence;
    constructor(s, e = null) {
        this.statement = s;
        this.evidence = e;
    }
}
/**
 * 5.3.2 Evidence type
 */
export class Evidence {
    id;
    statement;
    constructor(id, s) {
        this.id = id;
        this.statement = s;
    }
}
export class ReferenceToEvidenceItem {
    statement;
    evidence;
    constructor(s, e) {
        this.statement = s;
        this.evidence = e;
    }
}
/**
 * 5.3.3 Claim type
 */
export class Claim {
    statement;
    constructor(s) {
        this.statement = s;
    }
}
/**
 * 5.3.4 Inference type
 */
export class Inference {
    // TODO an inference R (5.3.4) with a list of supported claims SC1, SC2, SC3 ... SCn,
    // where R derives C from the set of claims of SC1, SC2, SC3 ...SCn,
    statement;
    supportedClaims;
    contexts;
    constructor(s, scs, xs) {
        this.statement = s;
        this.supportedClaims = scs;
        this.contexts = xs;
    }
}
/**
 * 5.3.5 Argument type
 */
export class Argument {
    contexts;
    inferenceOrReferenceToEvidenceItem;
    constructor(r, xs) {
        this.inferenceOrReferenceToEvidenceItem = r;
        this.contexts = xs;
    }
}
export class UndevelopedArgument {
}
/**
 * 5.3.5 Supported claim type
 */
export class SupportedClaim {
    claim;
    argument;
    contexts;
    constructor(c, a, xs) {
        this.claim = c;
        this.argument = a;
        this.contexts = xs;
    }
}
/**
 * 5.3.6 Narrative introduction type
 */
export class NarrativeIntroduction {
    statement;
    constructor(s) {
        this.statement = s;
    }
}
export class AssuranceCase {
    main;
    evidences;
    report;
    constructor(sc, es, n = null) {
        this.main = sc;
        this.evidences = es;
        // TODO AssuranceCaseのmain(SupportedClaim)の下のReferenceToEvidenceItemは
        // すべてevidences内のEvidenceを参照している必要がある
        this.report = n;
    }
}
// methods
export function pickEvidence(evs, id) {
    const evidence = evs.get(id);
    if (!evidence) {
        throw new Error("Evidence with ID '" + id + "' not found.");
    }
    return evidence;
}

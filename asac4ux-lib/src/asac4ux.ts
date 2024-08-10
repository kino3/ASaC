/**
 * Trial formalisation of ISO/IEC/IEEE 15026-2:2022 Assurance Case
 */

/**
 * 5.3.1 Context type
 */
export class Context {
    statement: string;
    evidence: Evidence | null;
    constructor(s: string, e: Evidence | null = null) {
        this.statement = s;
        this.evidence = e;
    }
}

/**
 * 5.3.2 Evidence type
 */
export class Evidence {
    id: string;
    statement: string;
    constructor(id: string, s: string) {
        this.id = id;
        this.statement = s;
    }
}

export class ReferenceToEvidenceItem {
    statement: string;
    evidence: Evidence;
    constructor(s: string, e: Evidence) {
        this.statement = s;
        this.evidence = e;
    }
}

/**
 * 5.3.3 Claim type
 */
export class Claim {
    statement: string;
    constructor(s: string) {
        this.statement = s;
    }
}

/**
 * 5.3.4 Inference type
 */
export class Inference {
    // TODO an inference R (5.3.4) with a list of supported claims SC1, SC2, SC3 ... SCn,
    // where R derives C from the set of claims of SC1, SC2, SC3 ...SCn,
    statement: string; 
    supportedClaims: Array<SupportedClaim>;
    contexts: Array<Context>;
    constructor(s: string, scs: Array<SupportedClaim>, xs: Array<Context>) {
        this.statement = s;
        this.supportedClaims = scs;
        this.contexts = xs;
    }
}

/** 
 * 5.3.5 Argument type
 */
export class Argument {
    contexts: Array<Context>;
    inferenceOrReferenceToEvidenceItem: Inference | ReferenceToEvidenceItem;
    constructor(r: Inference | ReferenceToEvidenceItem, xs: Array<Context>) {
        this.inferenceOrReferenceToEvidenceItem = r;
        this.contexts = xs;
    }
}

export class UndevelopedArgument {}

/** 
 * 5.3.5 Supported claim type
 */
export class SupportedClaim {
    claim: Claim;
    argument: Argument | UndevelopedArgument;
    contexts: Array<Context>;
    constructor(c: Claim, a: Argument | UndevelopedArgument, xs: Array<Context>) {
        this.claim = c;
        this.argument = a;
        this.contexts = xs;
    }
}

/**
 * 5.3.6 Narrative introduction type
 */
export class NarrativeIntroduction {
    statement: string
    constructor(s: string) {
        this.statement = s;
    }
}

export class AssuranceCase {
    main: SupportedClaim;
    evidences: Map<string,Evidence>;
    report: NarrativeIntroduction | null;
    constructor(sc: SupportedClaim, es: Map<string,Evidence>, n: NarrativeIntroduction | null = null) {
        this.main = sc;
        this.evidences = es;
        // TODO AssuranceCaseのmain(SupportedClaim)の下のReferenceToEvidenceItemは
        // すべてevidences内のEvidenceを参照している必要がある
        this.report = n;
    }
}

// methods
export function pickEvidence(evs: Map<string, Evidence>, id: string) {
    const evidence = evs.get(id);
    if (!evidence) {
        throw new Error("Evidence with ID '" + id + "' not found.");
    }
    return evidence;
}

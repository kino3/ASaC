/**
 * Trial formalisation of ISO/IEC/IEEE 15026-2:2022 Assurance Case
 */
/**
 * 5.3.1 Context type
 */
export declare class Context {
    statement: string;
    evidence: Evidence | null;
    constructor(s: string, e?: Evidence | null);
}
/**
 * 5.3.2 Evidence type
 */
export declare class Evidence {
    id: string;
    statement: string;
    constructor(id: string, s: string);
}
export declare class ReferenceToEvidenceItem {
    statement: string;
    evidence: Evidence;
    constructor(s: string, e: Evidence);
}
/**
 * 5.3.3 Claim type
 */
export declare class Claim {
    statement: string;
    constructor(s: string);
}
/**
 * 5.3.4 Inference type
 */
export declare class Inference {
    statement: string;
    supportedClaims: Array<SupportedClaim>;
    contexts: Array<Context>;
    constructor(s: string, scs: Array<SupportedClaim>, xs: Array<Context>);
}
/**
 * 5.3.5 Argument type
 */
export declare class Argument {
    contexts: Array<Context>;
    inferenceOrReferenceToEvidenceItem: Inference | ReferenceToEvidenceItem;
    constructor(r: Inference | ReferenceToEvidenceItem, xs: Array<Context>);
}
export declare class UndevelopedArgument {
}
/**
 * 5.3.5 Supported claim type
 */
export declare class SupportedClaim {
    claim: Claim;
    argument: Argument | UndevelopedArgument;
    contexts: Array<Context>;
    constructor(c: Claim, a: Argument | UndevelopedArgument, xs: Array<Context>);
}
/**
 * 5.3.6 Narrative introduction type
 */
export declare class NarrativeIntroduction {
    statement: string;
    constructor(s: string);
}
export declare class AssuranceCase {
    main: SupportedClaim;
    evidences: Map<string, Evidence>;
    report: NarrativeIntroduction | null;
    constructor(sc: SupportedClaim, es: Map<string, Evidence>, n?: NarrativeIntroduction | null);
}
export declare function pickEvidence(evs: Map<string, Evidence>, id: string): Evidence;


/**
 * Trial formalisation of ISO/IEC/IEEE 15026-2:2022 Assurance Case
 */

/**
 * 5.3.1 Context type
 */
class Context {
    statement: String;

}

/**
 * 5.3.2 Evidence type
 */
class Evidence {
    statement: String;
    // a reference to an evidence item (5.3.2) that supports the truth of C.
}

/**
 * 5.3.3 Claim type
 */
class Claim {
    statement: String;
}
/**
 * 5.3.4 Inference type
 */
class Inference {
    // TODO an inference R (5.3.4) with a list of supported claims SC1, SC2, SC3 ... SCn,
    // where R derives C from the set of claims of SC1, SC2, SC3 ...SCn, 
    scs: Array<SupportedClaim>;

}

/** 
 * 5.3.5 Argument type
 */
class Argument {
    statement: String;
    xs: Array<Context>; // a possibly empty list of contexts
    i_or_e: Inference | Evidence;
    c: Claim
}

const inf1 = new Inference();
const arg1 = new Argument();
arg1.i_or_e = inf1;

/** 
 * 5.3.5 Supported claim type
 */
class SupportedClaim {
    c: Claim;
    a: Argument; // If a is null, this is a.k.a. "undeveloped" argument
    xs: Array<Context>;

    constructor(c: Claim, a: Argument, xs: Array<Context>) {
        this.c = c;
        this.a = a;
        this.xs = xs;
    }
}
/**
 * 5.3.6 Narrative introduction type
 */
class NarrativeIntroduction {
    statement: any
}

class AssuranceCase {
    main: SupportedClaim;
    evidence: Array<Evidence>;
    report: NarrativeIntroduction;
}
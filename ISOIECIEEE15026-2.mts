// let message: string = 'Hello World';
// console.log(message);

/**
 * Trial formalisation of ISO/IEC/IEEE 15026-2:2022 Assurance Case
 */

/**
 * 5.3.1 Context type
 */
type Context = {

}

/**
 * 5.3.2 Evidence type
 */
type Evidence = {
    // a reference to an evidence item (5.3.2) that supports the truth of C.
}

/**
 * 5.3.3 Claim type
 */
type Claim = {

}
/**
 * 5.3.4 Inference type
 */
type Inference = {
    // TODO an inference R (5.3.4) with a list of supported claims SC1, SC2, SC3 ... SCn, 
    // where R derives C from the set of claims of SC1, SC2, SC3 ...SCn, 
}

/** 
 * 5.3.5 Argument type
 */
type Argument<Claim> = {
    // TODO classにしてコンストラクタでClaim instanceを渡す感じか？
    x: Array<Context>;
    either: Inference | Evidence;
}

/** 
 * 5.3.5 Supported claim type
 */
type SupportedClaim = {
    c: Claim;
    a: Argument<Claim>; // If a is null, this is a.k.a. "undeveloped" argument
    x: Array<Context>;
}
/**
 * 5.3.6 Narrative introduction type
 */
type NarrativeIntroduction = {

}

class AssuranceCase {
    main: SupportedClaim;
    evidence: Array<Evidence>;
    report: NarrativeIntroduction;
}
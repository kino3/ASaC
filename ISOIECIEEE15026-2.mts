// let message: string = 'Hello World';
// console.log(message);

/**
 * Trial formalisation of ISO/IEC/IEEE 15026-2:2022 Assurance Case
 */

// 5.3.2
type Evidence = {

}
// 5.3.5
type SupportedClaim = {

}
// 5.3.6
type NarrativeIntroduction = {

}

class AssuranceCase {
    main: SupportedClaim;
    evidence: Array<Evidence>;
    report: NarrativeIntroduction;
}
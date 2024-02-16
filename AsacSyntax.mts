
class TopLevelClaim{
    statement: string;
    constructor(statement: string) {
        this.statement = statement;
    }
}

class AssuranceCase{
    x: TopLevelClaim;
    constructor(tc: TopLevelClaim) {
        this.x = tc;
    }
}

// Syntax looks good like this (so-called "method chaining")
// from Holloway's example (modified)
const acSample = new AssuranceCase(new TopLevelClaim("Control system X is acceptably safe to operate."));
/*
  doc001: FormalVerificationReport
  doc002: automatedUITest <-- TODO to be implemented by Puppeteer and/or Jest

  acSample.hasContext("Operating role and context of X")
    .supportedByStrategy("Argument over product and process aspects")
        .supportedBySubClaim("All identified hazards have been eliminated or sufficiently mitigated.")
            .supportedByStrategy("Argument over each identified hazard")
                .supportedBySubClaim("Hazard H1 has been eliminated.")
                    .supportedByEvidence(doc001)
                .supportedBySubClaim("Hazard H2 has been eliminated.")
                    .supportedByEvidence(doc002)
        .supportedBySubClaim("Software in the Control System has been developed to SIL appropriate to hazards involved.")
            .markedUndeveloped();
 **/

// TODO not just a string (implement language support such as "All identified hazards = H1 & H2 & H3")
// TODO to be implemented by Puppeteer and/or Jest
// Puppeteer https://pptr.dev/
// Jest https://jestjs.io/
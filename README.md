# ASaC -- ASsurance as Code --

## Introduction

- This repository contains everything related to the new concept "Assurance as Code" (abbriviated ASaC) and its implementation project.
   - The aim of this project is to develop a programming environment in which non-specialists can easily develop assurance cases, like ["IaC" (Infrastracture as Code)](https://aws.amazon.com/what-is/iac/).

## Overview/Motivation

### Needs for easy environment on develpoing assurance cases

- Assurance case is very good tool for improving system/software quality. However, the cost for developing assurance case is still very high. 
   - The solution to this problem is to develop an environment
in which programmers can freely write assurance cases like program code.

### Usability Assurance

- For starters, we limited the assurance target properties to "usability".
   - This is because we are assuming an ordinary web application engineer as non-assurance-case-specialist. Usability is an important element in web applications.
   - In addition, any mishandling of the web console of a huge cloud service would be a major problem. Therefore, usability improvement is closely related to safety and dependability in terms of preventing human error. ([recent example in Japan. Human error at the largest AWS partner company rendered many accounts inoperable.](https://classmethod.jp/news/postmortem-20231205-incident/))

## Ideas for Architecture 

1. Use [TypeScript](https://www.typescriptlang.org/). Develop assurance case DSL inside TypeScript
    - Internal DSL allows us to enjoy the good features of existing IDEs
2. Integrate existing Testing Framework such as [Jest](https://jestjs.io/), [Puppeteer](https://pptr.dev/)
    - Test result directly provide the "evidence" part of assurance cases
3. For visualisation, use existing framework like [mermaid.js](https://mermaid.js.org/)
     - exporting [SACM](https://www.omg.org/spec/SACM/) is another idea 
4. Based on the international standards for formalising "Usability"
     - ISO/IEC 25000 SQuaRE series (System and software quality in use)
     - ISO 9241-210 (Human-centred design)

### DSL syntax idea

The statements are from the [GSN example](https://scsc.uk/gsn?page=gsn%203nutshell).

```typescript
let acSample = new AssuranceCase(new TopLevelClaim("Control system X is acceptably safe to operate."));

let doc001: FormalVerificationReport;
let doc002: automatedUITest = testModule; // TODO to be implemented by Puppeteer and/or Jest

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
```

## References

- [Shuji Kinoshita. ASsurance as Code (ASaC). SAFECOMP 2023, Position Paper, Sep 2023, Toulouse, France. ⟨hal-04191767⟩](https://sciencespo.hal.science/SAFECOMP2023/hal-04191767v1)
- [ISO/IEC JTC 1/SC 7.: ISO/IEC/IEEE 15026-2:2022 Systems and software engineering ― Systems and software assurance ― Part 2: Assurance case. ISO (2022).](https://www.iso.org/standard/80625.html)

## Acknowledgement

This project is supported by [Centre for Software Reliability (CSR)](https://researchcentres.city.ac.uk/software-reliability) at [City, University of London](https://www.city.ac.uk/). This repository's owner, [Shuji Kinoshita](mailto:kinoshita-shuji@aiit.ac.jp), promoted this project during his stay at the CSR as a visiting fellow.
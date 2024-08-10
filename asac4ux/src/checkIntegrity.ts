import path from 'node:path';
import { existsSync } from 'node:fs';
import { execSync } from 'node:child_process';

import { Argument, AssuranceCase, Evidence, ReferenceToEvidenceItem, SupportedClaim, UndevelopedArgument } from 'asac4ux-lib';

/**
 * jest test from evidence id
 * @param {string} id
 * @returns boolean
 */
function runTestOfEvidence(id: string) {
    const result = execSync(`npx jest --testNamePattern="${id}" --json`, {
        'stdio': 'ignore'
    }).toString();
    const resultObject = JSON.parse(result);
    if (resultObject.testResults) {
        return resultObject.testResults[0].status;
    }
    return false;
}

/**
 * Check Supported Claim (recursive)
 * @param {SupportedClaim} supportedClaim 
 * @param {number} indentNum
 */
function checkSupportedClaim(supportedClaim: SupportedClaim, indentNum: number) {
    const indent: string = "  ".repeat(indentNum)
    console.log(`${indent}[Claim] ${supportedClaim.claim.statement}`);
    if (supportedClaim.argument instanceof UndevelopedArgument) {
        console.log(`${indent}  -> Undeveloped. skip...`);
    } else {
        const argument: Argument = supportedClaim.argument
        const infOrRef = argument.inferenceOrReferenceToEvidenceItem;
        if (infOrRef instanceof ReferenceToEvidenceItem) {
            console.log(`${indent}[RefToEvidence] ${infOrRef.statement}`);
            const evidence: Evidence = infOrRef.evidence;
            let result: boolean = false;
            try {
                console.log(`${indent}[Evidence] ${evidence.statement}`);
                result = runTestOfEvidence(evidence.id);
            } catch (error) {
                if (error instanceof Error) {
                    console.error('Error executing command:', error.message);
                }
            } finally {
                console.log(`${indent}  [RESULT] ID=${evidence.id} : ${result}`);
            }
        } else {
            infOrRef.supportedClaims.forEach(sc => {
                checkSupportedClaim(sc, indentNum + 1);
            });
        }
    }
}

async function main() {
    // check Assurance Case file
    const asFilePath = process.argv[2];
    if (!asFilePath || !existsSync(asFilePath) ) {
        console.error('You need to specify AssuranceCase File Path.');
        process.exit(1);
    }

    // import assurance case
    const asFileFullPath = path.join(process.cwd(), asFilePath);
    const importedModule = await import(`file://${asFileFullPath}`);
    // check assurance case
    const ac: AssuranceCase = importedModule.ac;
    checkSupportedClaim(ac.main, 0);
}

main().catch(console.error);

import { atom } from 'jotai';

export const multiStepFormAtom = atom({
  step1: {
    fullName: '',
    email: '',
    institution: '',
    fieldOfStudy: '',
    academicLevel: '',
  },

  step2: {
    articleNumber: '',
    articleText: '',
    issuingAuthority: '',
    judgmentSummary: '',
    keyHighlights: '',
    lawName: '',
    practicalExamples: '',
    priorityLegalAreas: '',
  },

  step3: {
    caseNo1: '',
    caseOverview: '',
    caseType: '',
    courtRuled1: '',
    dated1: '',
    decisionResulting: '',
    futureApplication: '',
    involvedParties: '',
    issuingCourt: '',
    judgementDate: '',
    judgementImpact: '',
    judgementNumber: '',
    keyTakeaways: '',
    legalJurisprudence: '',
    legalPoints: '',
    legalRecommendations: '',
    legalSource: '',
    mainLegalIssue: '',
    relevantLaws: '',
    supportiveDocuments: '',
  },

  step4: {
    timeDedication: '',
    participateInDevelopment: '',
  },
});

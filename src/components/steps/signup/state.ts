import { atom } from 'jotai';

export const multiStepFormAtom = atom({
  step1: {
    email: '',
    institution: '',
    fieldOfStudy: '',
    academicLevel: '',
    legalTraining: '',
  },
  step2: {
    caseType: '',
    articleNumber: '',
    articleText: '',
    issuingAuthority: '',
    judgmentSummary: '',
    keyHighlights: '',
    practicalExamples: '',
    priorityLegalAreas: '',
  },
  step3: {
    CaseType: {
      type: String,
    },
    judgementNumber: {
      type: String,
    },
    issuingCourt: {
      type: String,
    },
    judgementDate: {
      type: String,
    },
    invlovedParties: {
      type: String,
    },
    supportiveDocuments: {
      type: String,
    },
    caseOverview: {
      type: String,
    },
    legalIssue: {
      type: String,
    },
    legalPaints: {
      type: String,
    },
    legaImpact: {
      type: String,
    },
    decisionsResulting: {
      type: String,
    },
    affectSimilarCases: {
      type: String,
    },
    corporativeLegalAnalysis: {
      caseNumber: String,
      Dated: String,
      courtRuled: String,
    },

    legalRecommendations: {
      type: String,
    },
    judgementApply: {
      type: String,
    },
    keyTakeaways: {
      type: String,
    },

    relevantLaws: {
      type: String,
    },
    officeSouce: {
      type: String,
    },
  },
  step4: {
    LawFirm: '',
    Mobile_Number: '',
    legalWorkType: '',
    interestArea: '',
    specificSkills: '',
    practicalExperience: '',
  },
  step5: {},
});

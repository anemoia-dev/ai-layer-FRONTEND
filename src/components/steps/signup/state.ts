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
    familiarityLevel: '',
    usefulFeatures: [''],
    trackTrainingHours: '',
    careerGoals: '',
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

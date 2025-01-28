import { atom } from 'jotai';

export const multiStepFormAtom = atom({
  step1: {
    fullName: '',
    email: '',
    mobileNumber: '',
    institution: '',
    fieldOfStudy: '',
    academicLevel: '',
    legalTraining: '',
  },
  step2: {
    organization: '',
    duration: '',
    legalWorkType: '',
    interestArea: '',
    specificSkills: '',
    practicalExperience: '',
  },
  step3: {
    familiarityLevel: '',
    usefulFeatures: '',
    trackTrainingHours: '',
    careerGoals: '',
  },
  step4: {
    lawName: '',
    articleNumber: '',
    articleText: '',
    issuingAuthority: '',
    judgmentSummary: '',
    keyHighlights: '',
    practicalExamples: '',
    priorityLegalAreas: '',
  },
  step5: {},
});

import type { Quiz } from "./types";
import { res5Exam } from './data/res5-exam-data';
import { hiExam } from './data/hi-exam-data';
import { m9aExam } from './data/m9a-exam-data';
import { m9Exam } from './data/m9-exam-data';
import { m8Exam } from './data/m8-exam-data';
import { masterChallenge } from './data/master-challenge-data';
import { numericalList } from './data/numerical-list-data';
import { auditingGuide } from './data/auditing-guide-data';
import { formulasGuide } from './data/formulas-data';
import { instrumentsGuide } from './data/instruments-guide-data';
import { m8TechnicalDrill } from './data/m8-technical-drill';

// This array now exports only the exams you want to focus on for the SCI demo.
// The other data files (BCP, PGI, etc.) are kept in the codebase for when you're ready.
export const quizzes: Quiz[] = [
  masterChallenge,
  res5Exam,
  hiExam,
  m9aExam,
  m9Exam,
  m8Exam,
  m8TechnicalDrill,
  numericalList,
  auditingGuide,
  formulasGuide,
  instrumentsGuide,
];

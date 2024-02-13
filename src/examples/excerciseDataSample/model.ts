export interface Athlete {
  id: string;
  name: string;
  surname: string;
}

export interface Excercise {
  id: string;
  name: string;
  hidden?: boolean;
}

export interface Parameter {
  id: string;
  name: string;
  excerciseId: string;
  multiplier: (v: number) => number;
}

export interface Result {
  athleteId: string;
  excerciseId: string;
  parameterId: string;
  value: number;
}

export interface CashInflow {
  title: string;
  values: number[];
}

export interface CashOutflow {
  title: string;
  values: number[];
}

export type MonthlyValues = number[];

export interface InputVariables {
  cashInflow: CashInflow[];
  cashOutflow: CashOutflow[];

  openingBalance: number;
  creditLine: number;
}
export interface OutputVariables {
  monthlyOutflowTotals: number[];
  yearlyInflowOuflowDiff: number;
  yearlyOutflowTotal: number;
  cumulativeTotals: number[];
  yearlyInflowTotal: number;
  monthlyInflowTotals: number[];
  cashboxBank: number[];
  monthlyInflowOuflowDiffs: number[];
}

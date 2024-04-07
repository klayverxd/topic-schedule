export interface Schedule {
  week: string[];
  saturday: string[];
  sunday: string[];
}

export interface SchedulesType {
  coreauToSobral: Schedule;
  sobralToCoreau: Schedule;
}

export type Props = {
  value: Date;
  onChangeValue(value: Date): void;
}


export type ModifyDate = 'addHour' | 'addMinute' | 'subHour' | 'subMinute'

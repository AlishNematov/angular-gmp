import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration',
})
export class DurationPipe implements PipeTransform {

  transform(minutesValue: number): string {
    const minutesInHour = 60;
    const hours = Math.floor(minutesValue / minutesInHour);
    const minutes = Math.floor(minutesValue % minutesInHour);
    if (!hours) {
      return `${minutes} min`;
    } else {
      return `${hours}h ${minutes} min`;
    }
  }
}

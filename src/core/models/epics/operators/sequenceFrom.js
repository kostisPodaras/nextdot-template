import { Subject, of } from 'rxjs';
import { concatMap } from 'rxjs/operators';

const sequenceFrom = (ops) =>
  concatMap((value) => {
    const value$ = new Subject();

    of(value)
      .pipe(...ops(value))
      .subscribe((val) => {
        value$.next(val);
        value$.complete();
      });

    return value$;
  });

export default sequenceFrom;

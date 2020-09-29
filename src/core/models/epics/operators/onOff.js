import { of, pipe, asyncScheduler } from 'rxjs';

import { filter, mergeMap, scan } from 'rxjs/operators';

const ON = Symbol('ON');
const OFF = Symbol('OFF');

const isCommand = (data) => [ON, OFF].includes(data);

const ifElse = (cond, thenData, elseData) => (cond ? thenData : elseData);

const onOffBase = (replay = false) =>
  pipe(
    scan(
      ({ collected, cmd }, data) => ({
        cmd: isCommand(data) ? data : cmd,
        collected:
          cmd === ON ? [data] : ifElse(replay, [...collected, data], []),
      }),
      {
        collected: [],
        cmd: OFF,
      },
    ),
    filter(({ cmd }) => cmd === ON),
    mergeMap(({ collected }) => collected),
    filter((data) => !isCommand(data)),
  );

const onOffTriggers = ({
  isOn = () => false,
  isOff = () => false,
  inclOn = true,
  inclOff = true,
} = {}) =>
  mergeMap((data) => {
    if (isOn(data)) {
      return inclOn ? [ON, data] : [ON];
    }
    if (isOff(data)) {
      return inclOff ? of(data, OFF, asyncScheduler) : [OFF];
    }
    return [data];
  });

const onOff = (options = {}) =>
  pipe(onOffTriggers(options), onOffBase(options.replay));

export default onOff;

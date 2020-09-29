import { filter, scan } from 'rxjs/operators';

import { ofType } from 'redux-observable';

import uniq from 'lodash/uniq';

const defaultUntil = (action, sequence, expectedTypes) =>
  sequence.length === expectedTypes.length;

const defaultIsValidCandidate = (action, sequence, expectedTypes) =>
  action.type === expectedTypes[sequence.length];

const shouldRestart = (until) => (action, sequence, expectedTypes) =>
  (typeof until === 'string' && until === action.type) ||
  (typeof until === 'function' && until(action, sequence, expectedTypes)) ||
  (sequence && expectedTypes && sequence.length === expectedTypes.length);

/**
 * Scans the action$ stream (observable) of redux actions, for a sequence
 * of actions specified in the array parameter <i>expectedTypes</i>.
 *
 * @example <caption> Scan for the sequence of actions of types
 * [A, B, C, D] </caption>
 *
 * const epic = action$
 *    .scanActionSequence([A, B, C, D], { consumeUntil: E })
 *    .subscribe((actions) => console.log('---Actions-- ', actions));
 *    ---Actions-- [{type: A, payload: p1}, {type: B}, {type: C}, {type: D}]
 *
 * @param {[string]} expectedTypes The array of consequtive action types
 * expected. Actions with different action types may interveal
 * if the default <i>isValidCandidate</i> parameter is not defined thus
 * the default one will be used.
 * @param {(action, sequence, expectedTypes) => boolean} options.consumeUntil
 * The function that if provided as parameter, will be called before an action
 * will be be added in the returned sequence of actions that satisfy the
 * <i>expectedTypes</i> sequence. If returns false the scanning of the
 * specific sequence will be interupted and restarted on this action as if it
 * is the first of the sequence to be tested and added.
 * If this parameter is not provided, the default implementation returns
 * interupted until the returned sequence contains all the expectedTypes.
 * @param {(action, sequence, expectedTypes) => boolean} options.isValidCandidate
 * The function that if provided as parameter, will be called before an action
 * added in the returned sequence of actions that satisfy the
 * <i>expectedTypes</i> sequence. If true is returned, the current action will
 * be added in the returned sequence.
 * If false is returned, the current action will not be added in the returned
 * sequence and the sequence will be returned unchanged for the next action.
 * @return {ActionsObservable} A new Observable of an array of actions that
 * defined in <i>expectedTypes</i> and in the order of <i>expectedTypes</i>.
 * @method scanActionSequenceOperator
 * @owner ActionsObservable
 */

const scanActionSequence = (
  expectedTypes, // [string] representing an action types sequence,
  {
    consumeUntil = defaultUntil,
    isValidCandidate = defaultIsValidCandidate,
  } = {},
) => (src) =>
  src.pipe(
    ofType(...uniq(expectedTypes)),
    scan((sequence, action) => {
      const nextSequence = shouldRestart(consumeUntil)(
        action,
        sequence,
        expectedTypes,
      )
        ? []
        : sequence;

      return isValidCandidate(action, nextSequence, expectedTypes)
        ? [...nextSequence, action]
        : nextSequence;
    }, []),
    filter((sequence) => sequence.length === expectedTypes.length),
  );

export default scanActionSequence;

//
// Test
//

// const someObservable = of(
//   { type: 'A'},
//   { type: 'D'},
//   { type: 'B'},
//   { type: 'A'},
//   { type: 'D'},
//   { type: 'A'},
//   { type: 'E'},
//   { type: 'E'},
//   { type: 'Z'},
//   { type: 'A'},
//   { type: 'A'},
// );
//
// console.log(
//   '------------- Starting Test ----------- ',
//    Math.floor(Math.random() * 10),
// );
//
// someObservable.pipe(
//   tap(action => console.log('---- Entering the tunnel --- ', action)),
//   scanActionSequence(['A', 'B', 'A']),
//   tap(sequence => console.log('---- Sequence found --- ', sequence)),
// ).subscribe(() => {});

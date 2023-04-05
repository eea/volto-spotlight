module.exports = {
  install(less, pluginManager, functions) {
    functions.add('vw', function (percentage) {
      return new less.tree.Call('calc', [
        new less.tree.Operation(
          '*',
          [
            new less.tree.Call('var', [
              new less.tree.UnicodeDescriptor('--vw'),
              new less.tree.Dimension(
                1,
                new less.tree.Unit(['vw'], null, 'vw'),
              ),
            ]),
            percentage,
          ],
          true,
        ),
      ]);
    });

    functions.add('vh', function (percentage) {
      return new less.tree.Call('calc', [
        new less.tree.Operation(
          '*',
          [
            new less.tree.Call('var', [
              new less.tree.UnicodeDescriptor('--vh'),
              new less.tree.Dimension(
                1,
                new less.tree.Unit(['vh'], null, 'vh'),
              ),
            ]),
            percentage,
          ],
          true,
        ),
      ]);
    });

    functions.add('breakpoint', function (
      minBreakpoint,
      maxBreakpoint,
      offsetBreakpoint,
      extraRules,
    ) {
      const offset = offsetBreakpoint?.value || 0;
      const min =
        minBreakpoint?.value > 0
          ? `(min-width: ${minBreakpoint.value + offset}px)`
          : null;
      const max =
        maxBreakpoint?.value > 0
          ? `(max-width: ${maxBreakpoint.value + offset}px)`
          : null;
      const _extraRules = extraRules?.value
        ? extraRules.value?.split(' and ') || ''
        : null;

      let rules = [];

      if (min) {
        rules.push(min);
      }

      if (max) {
        rules.push(max);
      }

      if (_extraRules) {
        rules = [...rules, ..._extraRules];
      }

      return new less.tree.Quoted('"', `all and ${rules.join(' and ')}`, true);
    });
  },
};
